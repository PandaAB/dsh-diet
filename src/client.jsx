/**
 * Browser half of dsh-diet. The page is a plain React component registered in
 * the host's keyed `main` slot, with its entry in `sidebar.panellist`. All data
 * stays in the browser's localStorage; the host half is an empty plugin.
 */
import React, { useEffect, useId, useMemo, useRef, useState } from 'react'
import { BUILT_IN_FOODS, FOOD_BY_ID, FOOD_CATEGORIES, energyFromMacros } from './foods.js'
import { NS, en, zh } from './locales.js'
import { CSS } from './styles.js'

const STORAGE_KEY = 'dsh-diet:state:v1'
const MEAL_KEYS = ['breakfast', 'lunch', 'dinner', 'snack']
const ACTIVITY = {
  active: {
    carbs: { low: 2, high: 2.5 },
    protein: 2,
    fat: { low: 50, high: 40 },
    factor: 26,
  },
  inactive: {
    carbs: { low: 1.5, high: 2 },
    protein: 1.5,
    fat: { low: 50, high: 40 },
    factor: 24,
  },
}
const DEFAULT_SETTINGS = {
  weightKg: 65,
  weightConfirmed: false,
  activity: 'active',
  carbLevel: 'high',
  calorieMode: 'macro',
}

/* ------------------------------------------------------------------ */
/* small helpers                                                       */
/* ------------------------------------------------------------------ */

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const round1 = value => Math.round(value * 10) / 10
const positive = value => {
  const number = Number(value)
  return Number.isFinite(number) && number >= 0 ? number : 0
}

function makeId(prefix) {
  try {
    return `${prefix}-${crypto.randomUUID()}`
  } catch {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
  }
}

function dateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function parseDateKey(key) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(key)
  if (match === null) return null
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
  return Number.isNaN(date.getTime()) || dateKey(date) !== key ? null : date
}

function shiftDateKey(key, delta) {
  const date = parseDateKey(key) ?? new Date()
  date.setDate(date.getDate() + delta)
  return dateKey(date)
}

function isDateKey(value) {
  return typeof value === 'string' && parseDateKey(value) !== null
}

function currentLocale() {
  if (typeof document !== 'undefined' && document.documentElement.lang) return document.documentElement.lang
  if (typeof navigator !== 'undefined' && navigator.language) return navigator.language
  return 'zh-CN'
}

const numberFormats = new Map()
function numberFormat(locale, digits) {
  const key = `${locale}|${digits}`
  let format = numberFormats.get(key)
  if (format === undefined) {
    format = new Intl.NumberFormat(locale, { maximumFractionDigits: digits, minimumFractionDigits: 0 })
    numberFormats.set(key, format)
  }
  return format
}

function formatNumber(locale, value, digits = 0) {
  if (!Number.isFinite(value)) return '0'
  return numberFormat(locale, digits).format(value)
}

function formatMacro(locale, value) {
  const number = Number.isFinite(value) ? value : 0
  return formatNumber(locale, number >= 100 ? Math.round(number) : round1(number), number >= 100 ? 0 : 1)
}

function formatDateLong(locale, key) {
  const date = parseDateKey(key) ?? new Date()
  return new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' }).format(date)
}

function formatDateFull(locale, key) {
  const date = parseDateKey(key) ?? new Date()
  return new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric', weekday: 'short' }).format(date)
}

function formatWeekday(locale, key) {
  const date = parseDateKey(key) ?? new Date()
  return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date)
}

function formatWeekdayShort(locale, key) {
  const date = parseDateKey(key) ?? new Date()
  return new Intl.DateTimeFormat(locale, { weekday: 'narrow' }).format(date)
}

function defaultMeal() {
  const hour = new Date().getHours()
  if (hour < 10) return 'breakfast'
  if (hour < 15) return 'lunch'
  if (hour < 21) return 'dinner'
  return 'snack'
}

function entryNutrition(entry) {
  const scale = positive(entry?.grams) / 100
  const per100 = entry?.per100 ?? {}
  return {
    kcal: positive(per100.kcal) * scale,
    carbs: positive(per100.carbs) * scale,
    protein: positive(per100.protein) * scale,
    fat: positive(per100.fat) * scale,
  }
}

function sumEntries(entries) {
  return entries.reduce((total, entry) => {
    const nutrition = entryNutrition(entry)
    total.kcal += nutrition.kcal
    total.carbs += nutrition.carbs
    total.protein += nutrition.protein
    total.fat += nutrition.fat
    return total
  }, { kcal: 0, carbs: 0, protein: 0, fat: 0 })
}

function targetsFor(settings) {
  const weight = clamp(Number(settings.weightKg) || 0, 0, 300)
  const activity = ACTIVITY[settings.activity] ?? ACTIVITY.active
  const carbG = activity.carbs[settings.carbLevel] ?? activity.carbs.high
  const proteinG = activity.protein
  const fatG = activity.fat[settings.carbLevel] ?? activity.fat.high
  const carbs = Math.round(weight * carbG)
  const protein = Math.round(weight * proteinG)
  const fat = Math.round(fatG)
  const macroKcal = carbs * 4 + protein * 4 + fat * 9
  const quickKcal = Math.round(weight * activity.factor)
  return {
    weight,
    activity,
    carbG,
    proteinG,
    fatG,
    carbs,
    protein,
    fat,
    macroKcal,
    quickKcal,
    activeKcal: settings.calorieMode === 'quick' ? quickKcal : macroKcal,
    factor: activity.factor,
  }
}

function entryName(entry, t) {
  const builtIn = FOOD_BY_ID.get(entry.foodId)
  return builtIn ? t(builtIn.nameKey) : entry.name
}

function foodFromBuiltIn(food, t) {
  return {
    key: `builtin:${food.id}`,
    foodId: food.id,
    name: t(food.nameKey),
    category: food.category,
    defaultGrams: food.defaultGrams,
    per100: food.per100,
    custom: false,
  }
}

function foodFromCustom(food) {
  return {
    key: `custom:${food.id}`,
    foodId: `custom:${food.id}`,
    name: food.name,
    category: 'custom',
    defaultGrams: 100,
    per100: food.per100,
    custom: true,
  }
}

function allFoodItems(customFoods, t) {
  return [
    ...BUILT_IN_FOODS.map(food => foodFromBuiltIn(food, t)),
    ...customFoods.map(food => foodFromCustom(food)),
  ]
}

function countCustomUsage(state, id) {
  const foodId = `custom:${id}`
  let count = 0
  for (const day of Object.values(state.days)) {
    count += day.entries.filter(entry => entry.foodId === foodId).length
  }
  return count
}

function recentFoodItems(state, t) {
  const seen = new Map()
  const dates = Object.keys(state.days).sort().reverse()
  for (const date of dates) {
    const entries = state.days[date]?.entries ?? []
    for (let index = entries.length - 1; index >= 0; index -= 1) {
      const entry = entries[index]
      const key = entry.foodId || `name:${entry.name}`
      if (seen.has(key)) continue
      const builtIn = FOOD_BY_ID.get(entry.foodId)
      const custom = entry.foodId?.startsWith('custom:')
        ? state.customFoods.find(food => `custom:${food.id}` === entry.foodId)
        : undefined
      seen.set(key, builtIn
        ? { ...foodFromBuiltIn(builtIn, t), defaultGrams: entry.grams }
        : {
            key,
            foodId: entry.foodId,
            name: custom?.name ?? entry.name,
            category: 'custom',
            defaultGrams: entry.grams,
            per100: custom?.per100 ?? entry.per100,
            custom: custom !== undefined,
          })
      if (seen.size >= 8) return [...seen.values()].slice(0, 5)
    }
  }
  return [...seen.values()].slice(0, 5)
}

function selectedFoodFromEntry(entry, state, t) {
  const builtIn = FOOD_BY_ID.get(entry.foodId)
  if (builtIn !== undefined) return { ...foodFromBuiltIn(builtIn, t), defaultGrams: entry.grams, per100: entry.per100 }
  const custom = entry.foodId?.startsWith('custom:')
    ? state.customFoods.find(food => `custom:${food.id}` === entry.foodId)
    : undefined
  return {
    key: entry.foodId || `entry:${entry.id}`,
    foodId: entry.foodId,
    name: custom?.name ?? entry.name,
    category: 'custom',
    defaultGrams: entry.grams,
    per100: entry.per100,
    custom: custom !== undefined,
  }
}

function normalizePer100(value) {
  if (value === null || typeof value !== 'object') return null
  const carbs = Number(value.carbs)
  const protein = Number(value.protein)
  const fat = Number(value.fat)
  const kcal = Number(value.kcal)
  if (![carbs, protein, fat, kcal].every(Number.isFinite)) return null
  if ([carbs, protein, fat, kcal].some(number => number < 0 || number > 10000)) return null
  return { kcal, carbs, protein, fat }
}

function normalizeEntry(value) {
  if (value === null || typeof value !== 'object') return null
  const grams = Number(value.grams)
  const per100 = normalizePer100(value.per100)
  if (!Number.isFinite(grams) || grams <= 0 || grams > 10000 || per100 === null) return null
  const meal = MEAL_KEYS.includes(value.meal) ? value.meal : 'snack'
  return {
    id: typeof value.id === 'string' && value.id !== '' ? value.id : makeId('entry'),
    foodId: typeof value.foodId === 'string' ? value.foodId : '',
    name: typeof value.name === 'string' && value.name !== '' ? value.name : 'Food',
    grams,
    meal,
    per100,
  }
}

function createDefaultState() {
  return {
    version: 1,
    settings: { ...DEFAULT_SETTINGS },
    days: {},
    customFoods: [],
  }
}

function normalizeState(raw) {
  if (raw === null || typeof raw !== 'object') return createDefaultState()
  const next = createDefaultState()
  const settings = raw.settings
  if (settings !== null && typeof settings === 'object') {
    const weight = Number(settings.weightKg)
    if (Number.isFinite(weight) && weight >= 30 && weight <= 300) next.settings.weightKg = round1(weight)
    if (settings.weightConfirmed === true) next.settings.weightConfirmed = true
    if (settings.activity === 'active' || settings.activity === 'inactive') next.settings.activity = settings.activity
    if (settings.carbLevel === 'low' || settings.carbLevel === 'high') next.settings.carbLevel = settings.carbLevel
    if (settings.calorieMode === 'quick' || settings.calorieMode === 'macro') next.settings.calorieMode = settings.calorieMode
  }
  if (raw.days !== null && typeof raw.days === 'object') {
    for (const [date, day] of Object.entries(raw.days)) {
      if (!isDateKey(date) || day === null || typeof day !== 'object' || !Array.isArray(day.entries)) continue
      const entries = day.entries.map(normalizeEntry).filter(Boolean)
      if (entries.length > 0) next.days[date] = { entries }
    }
  }
  if (Array.isArray(raw.customFoods)) {
    const seen = new Set()
    for (const value of raw.customFoods) {
      if (value === null || typeof value !== 'object') continue
      const per100 = normalizePer100(value.per100)
      if (per100 === null || typeof value.name !== 'string' || value.name.trim() === '') continue
      const id = typeof value.id === 'string' && value.id !== '' ? value.id : makeId('food')
      if (seen.has(id)) continue
      seen.add(id)
      next.customFoods.push({ id, name: value.name.trim().slice(0, 120), per100 })
    }
  }
  return next
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === null) return createDefaultState()
    return normalizeState(JSON.parse(raw))
  } catch {
    return createDefaultState()
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* A private window or a full quota must not break the page. */
  }
}

function withEntry(days, date, entry) {
  const previous = days[date]?.entries ?? []
  return { ...days, [date]: { entries: [...previous, entry] } }
}

/* ------------------------------------------------------------------ */
/* icons                                                               */
/* ------------------------------------------------------------------ */

function Icon({ size = 16, children, viewBox = '0 0 24 24', strokeWidth = 1.7 }) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" aria-hidden="true" focusable="false"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

function IconPlus({ size = 16 }) {
  return <Icon size={size}><path d="M12 5v14M5 12h14" /></Icon>
}

function IconChevronLeft({ size = 15 }) {
  return <Icon size={size}><path d="m14.5 6.5-5 5.5 5 5.5" /></Icon>
}

function IconChevronRight({ size = 15 }) {
  return <Icon size={size}><path d="m9.5 6.5 5 5.5-5 5.5" /></Icon>
}

function IconChevronDown({ size = 12 }) {
  return <Icon size={size}><path d="m6.5 9.5 5.5 5 5.5-5" /></Icon>
}

function IconSearch({ size = 14 }) {
  return <Icon size={size}><circle cx="10.8" cy="10.8" r="6.3" /><path d="m15.5 15.5 4 4" /></Icon>
}

function IconX({ size = 15 }) {
  return <Icon size={size}><path d="M6.5 6.5l11 11M17.5 6.5l-11 11" /></Icon>
}

function IconCheck({ size = 15 }) {
  return <Icon size={size}><path d="m5 12.5 4.2 4.2L19 6.8" /></Icon>
}

function IconTrash({ size = 14 }) {
  return <Icon size={size}><path d="M4.5 7h15M9.5 7V4.8h5V7M7.2 7l.8 12h8l.8-12M10.5 10.5v5M13.5 10.5v5" /></Icon>
}

function IconPencil({ size = 14 }) {
  return <Icon size={size}><path d="m14.8 5.2 4 4M6 18l.8-4.2 8.6-8.6a1.8 1.8 0 0 1 2.5 0l1.9 1.9a1.8 1.8 0 0 1 0 2.5l-8.6 8.6L7 18Z" /></Icon>
}

function IconBowl({ size = 26 }) {
  return (
    <Icon size={size} strokeWidth={1.5}>
      <path d="M3.5 11h17c0 5.1-3.8 8.4-8.5 8.4S3.5 16.1 3.5 11Z" />
      <path d="M7.3 8.4c-1-1.5-.4-2.9.8-3.9M11.4 8.4c-1-1.5-.4-2.9.8-3.9M15.5 8.4c-1-1.5-.4-2.9.8-3.9" opacity=".65" />
      <path d="M17.8 13.1c1.1-1.4 2.5-1.6 3.8-.8" opacity=".45" />
    </Icon>
  )
}

function IconChart({ size = 20 }) {
  return <Icon size={size} strokeWidth={1.55}><path d="M4 19V5M4 19h16M7.5 15.5V12M11.2 15.5V8.5M14.9 15.5v-5M18.6 15.5V6.5" /></Icon>
}

function IconSpark({ size = 20 }) {
  return <Icon size={size} strokeWidth={1.5}><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" opacity=".6" /></Icon>
}

function IconInfo({ size = 14 }) {
  return <Icon size={size}><circle cx="12" cy="12" r="8.5" /><path d="M12 11.1v5M12 7.9h.01" /></Icon>
}

function IconUndo({ size = 13 }) {
  return <Icon size={size}><path d="M8 7 4 11l4 4M4 11h9a5.5 5.5 0 0 1 0 11H9" /></Icon>
}

export function DietPanelIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"
      stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.7 11.2h16.6c0 5-3.7 8.3-8.3 8.3s-8.3-3.3-8.3-8.3Z" />
      <path d="M7.3 8.7c-1-1.5-.4-2.9.8-3.9M11.4 8.7c-1-1.5-.4-2.9.8-3.9M15.5 8.7c-1-1.5-.4-2.9.8-3.9" opacity=".65" />
      <path d="M8.1 14.2c.8.6 1.6.9 2.4.9M13.3 14.7c.9-.2 1.7-.6 2.4-1.2" opacity=".45" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* modal, toast, confirm                                               */
/* ------------------------------------------------------------------ */

function Modal({ title, subtitle, onClose, size = 'wide', initialFocusRef, children, testId, closeLabel = 'Close' }) {
  const titleId = useId()
  const dialogRef = useRef(null)
  const restoreRef = useRef(null)
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    restoreRef.current = document.activeElement
    const dialog = dialogRef.current
    const focusTarget = initialFocusRef?.current ?? dialog?.querySelector('input, button, [href], select, textarea')
    focusTarget?.focus?.()
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        closeRef.current()
        return
      }
      if (event.key !== 'Tab' || dialog === null) return
      const focusable = [...dialog.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [href], [tabindex]:not([tabindex="-1"])')]
        .filter(element => element.offsetParent !== null)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown, true)
    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      const restore = restoreRef.current
      if (restore !== null && restore.isConnected) restore.focus?.()
    }
  }, [initialFocusRef])

  return (
    <div className="dietModalBackdrop" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
      <div className="dietModal" data-size={size === 'compact' ? 'compact' : undefined} role="dialog"
        aria-modal="true" aria-labelledby={titleId} ref={dialogRef} data-testid={testId}>
        <div className="dietModalHead">
          <div>
            <h2 className="dietModalTitle" id={titleId}>{title}</h2>
            {subtitle !== undefined && subtitle !== null && <p className="dietModalSubtitle">{subtitle}</p>}
          </div>
          <button type="button" className="dietModalClose" aria-label={closeLabel} onClick={onClose}>
            <IconX size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

function ConfirmDialog({ t, dateLabel, count, onClose, onConfirm }) {
  const cancelRef = useRef(null)
  return (
    <Modal title={t('clear.title')} onClose={onClose} size="compact" initialFocusRef={cancelRef} testId="diet-clear-modal" closeLabel={t('common.close')}>
      <div className="dietConfirmBody">
        <p className="dietConfirmText">{t('clear.body', { date: dateLabel, count })}</p>
        <div className="dietConfirmActions">
          <button type="button" ref={cancelRef} className="dietSecondaryButton" onClick={onClose}>{t('clear.cancel')}</button>
          <button type="button" className="dietDangerButton" onClick={onConfirm} data-testid="diet-clear-confirm">{t('clear.confirm')}</button>
        </div>
      </div>
    </Modal>
  )
}

function Toast({ t, toast, onUndo, onClose }) {
  return (
    <div className="dietToast" role="status" aria-live="polite" data-testid="diet-toast">
      <IconCheck size={14} />
      <span className="dietToastText">{toast.message}</span>
      {toast.undo !== undefined && (
        <button type="button" className="dietToastAction" onClick={onUndo} data-testid="diet-undo">{t('toast.undo')}</button>
      )}
      <button type="button" className="dietToastClose" aria-label={t('toast.close')} onClick={onClose}><IconX size={13} /></button>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* add / edit food                                                     */
/* ------------------------------------------------------------------ */

const QUICK_GRAMS = [50, 100, 150, 200]

function MealChoices({ t, value, onChange, className = '' }) {
  return (
    <div className={`dietMealChoices ${className}`} role="group" aria-label={t('add.meal')}>
      {MEAL_KEYS.map(meal => (
        <button key={meal} type="button" className="dietMealChoice" data-active={value === meal}
          aria-pressed={value === meal} onClick={() => onChange(meal)}>
          {t(`meal.${meal}`)}
        </button>
      ))}
    </div>
  )
}

function MacroPill({ label, value, unit }) {
  return (
    <div className="dietMacroPill">
      <div className="dietMacroPillLabel"><span className="dietMacroPillDot" />{label}</div>
      <div className="dietMacroPillValue">{value}<span> {unit}</span></div>
    </div>
  )
}

function AddFoodModal({
  t, initialFood, editingEntry, state, onClose, onAdd, onUpdate, onAddCustom, onUpdateCustom, onDeleteCustom, defaultMealChoice,
}) {
  const allFoods = allFoodItems(state.customFoods, t)
  const categoryOptions = FOOD_CATEGORIES.filter(value => value !== 'custom' || state.customFoods.length > 0)
  const initialSelected = editingEntry !== undefined && editingEntry !== null
    ? selectedFoodFromEntry(editingEntry, state, t)
    : initialFood ?? allFoods[0] ?? null
  const [mode, setMode] = useState('library')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState(initialSelected)
  const [grams, setGrams] = useState(() => String(editingEntry?.grams ?? initialFood?.defaultGrams ?? initialSelected?.defaultGrams ?? ''))
  const [meal, setMeal] = useState(() => editingEntry?.meal ?? defaultMealChoice ?? defaultMeal())
  const [error, setError] = useState('')
  const [customName, setCustomName] = useState('')
  const [customCarbs, setCustomCarbs] = useState('')
  const [customProtein, setCustomProtein] = useState('')
  const [customFat, setCustomFat] = useState('')
  const [customKcal, setCustomKcal] = useState('')
  const [customKcalManual, setCustomKcalManual] = useState(false)
  const [customGrams, setCustomGrams] = useState('100')
  const [customMeal, setCustomMeal] = useState(defaultMealChoice ?? defaultMeal())
  const [editingCustomId, setEditingCustomId] = useState(null)
  const [customCopy, setCustomCopy] = useState(false)
  const [syncEntries, setSyncEntries] = useState(false)
  const [pendingDelete, setPendingDelete] = useState(null)
  const explicitSelection = (initialFood !== undefined && initialFood !== null) || (editingEntry !== undefined && editingEntry !== null)
  const searchRef = useRef(null)
  const nameRef = useRef(null)
  const gramsRef = useRef(null)
  const dialogFocusRef = editingEntry !== undefined && editingEntry !== null ? gramsRef : searchRef
  const locale = currentLocale()
  const editingCustom = editingCustomId !== null
  const customUsage = editingCustom ? countCustomUsage(state, editingCustomId) : 0
  const customFoodEntry = selected?.foodId?.startsWith('custom:')
    ? state.customFoods.find(food => `custom:${food.id}` === selected.foodId)
    : undefined

  const query = search.trim().toLocaleLowerCase(locale)
  const filtered = allFoods.filter(food => {
    if (category !== 'all' && food.category !== category) return false
    if (query === '') return true
    return food.name.toLocaleLowerCase(locale).includes(query)
  })

  const chooseFood = (food) => {
    setSelected(food)
    setGrams(String(food.defaultGrams ?? 100))
    setError('')
  }

  const fillCustomForm = (food, grams = '100') => {
    setCustomName(food.name)
    setCustomCarbs(String(food.per100.carbs))
    setCustomProtein(String(food.per100.protein))
    setCustomFat(String(food.per100.fat))
    setCustomKcal(String(food.per100.kcal))
    setCustomKcalManual(false)
    setCustomGrams(String(grams))
    setCustomMeal(defaultMealChoice ?? defaultMeal())
  }

  const startNewCustom = () => {
    setMode('custom')
    setEditingCustomId(null)
    setCustomCopy(false)
    setSyncEntries(false)
    setCustomName('')
    setCustomCarbs('')
    setCustomProtein('')
    setCustomFat('')
    setCustomKcal('')
    setCustomKcalManual(false)
    setCustomGrams('100')
    setCustomMeal(defaultMealChoice ?? defaultMeal())
    setError('')
    setPendingDelete(null)
  }

  const startEditCustom = (food) => {
    setMode('custom')
    setEditingCustomId(food.id)
    setCustomCopy(false)
    setSyncEntries(false)
    fillCustomForm(food, 100)
    setError('')
    setPendingDelete(null)
    nameRef.current?.focus()
  }

  const startCopyFood = (food) => {
    setMode('custom')
    setEditingCustomId(null)
    setCustomCopy(true)
    setSyncEntries(false)
    fillCustomForm(food, food.defaultGrams ?? 100)
    setError('')
    setPendingDelete(null)
    nameRef.current?.focus()
  }

  useEffect(() => {
    if (mode === 'custom') nameRef.current?.focus()
  }, [mode])

  useEffect(() => {
    if (mode !== 'library' || explicitSelection) return
    if (selected !== null && filtered.some(food => food.key === selected.key)) return
    const first = filtered[0] ?? null
    setSelected(first)
    if (first !== null) setGrams(String(first.defaultGrams ?? 100))
  }, [mode, query, category, selected?.key, state.customFoods.length, explicitSelection])

  useEffect(() => {
    if (category === 'custom' && state.customFoods.length === 0) setCategory('all')
  }, [category, state.customFoods.length])

  const numericGrams = Number(String(grams).replace(',', '.'))
  const validGrams = Number.isFinite(numericGrams) && numericGrams > 0 && numericGrams <= 10000
  const preview = selected !== null && validGrams
    ? {
        kcal: positive(selected.per100.kcal) * numericGrams / 100,
        carbs: positive(selected.per100.carbs) * numericGrams / 100,
        protein: positive(selected.per100.protein) * numericGrams / 100,
        fat: positive(selected.per100.fat) * numericGrams / 100,
      }
    : { kcal: 0, carbs: 0, protein: 0, fat: 0 }

  const submit = () => {
    if (selected === null) return
    if (!validGrams) {
      setError(t('add.invalidGrams'))
      gramsRef.current?.focus()
      return
    }
    if (editingEntry !== undefined && editingEntry !== null) {
      onUpdate(editingEntry, selected, numericGrams, meal)
    } else {
      onAdd(selected, numericGrams, meal)
    }
  }

  const autoKcal = energyFromMacros(customCarbs, customProtein, customFat)
  const submitCustom = () => {
    const name = customName.trim()
    if (name === '') {
      setError(t('add.nameRequired'))
      return
    }
    const carbs = Number(String(customCarbs).replace(',', '.'))
    const protein = Number(String(customProtein).replace(',', '.'))
    const fat = Number(String(customFat).replace(',', '.'))
    const kcal = customKcal.trim() === '' ? autoKcal : Number(String(customKcal).replace(',', '.'))
    if (![carbs, protein, fat, kcal].every(value => Number.isFinite(value) && value >= 0 && value <= 10000)) {
      setError(t('add.invalidNumber'))
      return
    }
    const per100 = { kcal: Math.round(kcal), carbs: round1(carbs), protein: round1(protein), fat: round1(fat) }
    if (editingCustom) {
      onUpdateCustom(editingCustomId, { name, per100, syncEntries })
      return
    }
    const portion = Number(String(customGrams).replace(',', '.'))
    if (!Number.isFinite(portion) || portion <= 0 || portion > 10000) {
      setError(t('add.invalidGrams'))
      return
    }
    onAddCustom({ name, per100, grams: portion, meal: customMeal })
  }

  return (
    <Modal
      title={editingEntry !== undefined && editingEntry !== null
        ? t('add.editTitle')
        : editingCustom ? t('add.editCustomTitle') : t('add.title')}
      subtitle={editingEntry !== undefined && editingEntry !== null
        ? t('add.editSubtitle')
        : editingCustom ? t('add.editCustomSubtitle') : t('add.subtitle')}
      onClose={onClose}
      initialFocusRef={dialogFocusRef}
      testId="diet-add-modal"
      closeLabel={t('common.close')}
    >
      {!(editingEntry !== undefined && editingEntry !== null) && (
        <div className="dietAddTabs" role="tablist" aria-label={t('add.title')}>
          <button type="button" role="tab" className="dietAddTab" data-active={mode === 'library'}
            aria-selected={mode === 'library'} onClick={() => { setMode('library'); setEditingCustomId(null); setCustomCopy(false); setSyncEntries(false); setError('') }} data-testid="diet-tab-library">{t('add.preset')}</button>
          <button type="button" role="tab" className="dietAddTab" data-active={mode === 'custom'}
            aria-selected={mode === 'custom'} onClick={startNewCustom} data-testid="diet-tab-custom">{t('add.customTab')}</button>
        </div>
      )}

      {mode === 'custom' && !(editingEntry !== undefined && editingEntry !== null) ? (
        <div className="dietCustomBody">
          <p className="dietCustomHint">{editingCustom ? t('add.editCustomHint') : customCopy ? t('add.copyPresetHint') : t('add.customHint')}</p>
          <div className="dietFormGrid">
            <label className="dietCustomField dietFull">
              <span className="dietCustomLabel">{t('add.name')}</span>
              <input ref={nameRef} className="dietCustomInput" value={customName} placeholder={t('add.namePlaceholder')}
                maxLength={120} onChange={event => { setCustomName(event.target.value); setError('') }} data-testid="diet-custom-name" />
            </label>
            <label className="dietCustomField">
              <span className="dietCustomLabel">{t('add.carbs')} (g / 100 g)</span>
              <input className="dietCustomInput" type="number" inputMode="decimal" min="0" step="any" value={customCarbs}
                onChange={event => {
                  const value = event.target.value
                  setCustomCarbs(value)
                  if (!customKcalManual) setCustomKcal(String(energyFromMacros(value, customProtein, customFat)))
                }} data-testid="diet-custom-carbs" />
            </label>
            <label className="dietCustomField">
              <span className="dietCustomLabel">{t('add.protein')} (g / 100 g)</span>
              <input className="dietCustomInput" type="number" inputMode="decimal" min="0" step="any" value={customProtein}
                onChange={event => {
                  const value = event.target.value
                  setCustomProtein(value)
                  if (!customKcalManual) setCustomKcal(String(energyFromMacros(customCarbs, value, customFat)))
                }} data-testid="diet-custom-protein" />
            </label>
            <label className="dietCustomField">
              <span className="dietCustomLabel">{t('add.fat')} (g / 100 g)</span>
              <input className="dietCustomInput" type="number" inputMode="decimal" min="0" step="any" value={customFat}
                onChange={event => {
                  const value = event.target.value
                  setCustomFat(value)
                  if (!customKcalManual) setCustomKcal(String(energyFromMacros(customCarbs, customProtein, value)))
                }} data-testid="diet-custom-fat" />
            </label>
            <label className="dietCustomField">
              <span className="dietCustomLabel">{t('add.kcalOptional')}</span>
              <input className="dietCustomInput" type="number" inputMode="decimal" min="0" step="any" value={customKcal}
                placeholder={String(autoKcal)} onChange={event => { setCustomKcal(event.target.value); setCustomKcalManual(true) }} data-testid="diet-custom-kcal" />
              <span className="dietCustomNote">{t('add.autoKcal')}</span>
            </label>
            {!editingCustom && (
              <>
                <label className="dietCustomField dietFull">
                  <span className="dietCustomLabel">{t('add.portion')} (g)</span>
                  <input className="dietCustomInput" type="number" inputMode="decimal" min="1" max="10000" step="any"
                    value={customGrams} onChange={event => setCustomGrams(event.target.value)} data-testid="diet-custom-grams" />
                </label>
                <div className="dietCustomField dietFull">
                  <span className="dietCustomLabel">{t('add.meal')}</span>
                  <MealChoices t={t} value={customMeal} onChange={setCustomMeal} />
                </div>
              </>
            )}
          </div>
          {editingCustom && customUsage > 0 && (
            <label className="dietSyncRow">
              <input type="checkbox" checked={syncEntries} onChange={event => setSyncEntries(event.target.checked)} />
              <span>
                {t('add.syncEntries', { count: customUsage })}
                <span className="dietSyncHint">{t('add.syncEntriesHint')}</span>
              </span>
            </label>
          )}
          {state.customFoods.length > 0 && (
            <div className="dietCustomList">
              <h3 className="dietCustomListTitle">{t('add.customListTitle')}</h3>
              {state.customFoods.map(food => (
                <div className="dietCustomFoodRow" key={food.id} data-testid="diet-custom-food"
                  data-editing={editingCustomId === food.id ? 'true' : undefined}>
                  {pendingDelete === food.id ? (
                    <>
                      <span className="dietCustomFoodName">{t('add.deleteCustomConfirm')}</span>
                      <span className="dietInlineConfirm">
                        <button type="button" data-danger="true" onClick={() => {
                          onDeleteCustom(food.id)
                          setPendingDelete(null)
                          if (selected?.foodId === `custom:${food.id}`) setSelected(null)
                          if (editingCustomId === food.id) startNewCustom()
                        }}>{t('common.delete')}</button>
                        <button type="button" onClick={() => setPendingDelete(null)}>{t('common.cancel')}</button>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="dietCustomFoodName">{food.name}</span>
                      <span className="dietCustomFoodMeta">{food.per100.kcal} kcal / 100 g</span>
                      <button type="button" className="dietIconButton" title={t('add.editCustom')}
                        aria-label={t('add.editCustom')} onClick={() => startEditCustom(food)} data-testid="diet-custom-edit">
                        <IconPencil size={13} />
                      </button>
                      <button type="button" className="dietIconButton" data-danger="true" title={t('add.deleteCustom')}
                        aria-label={t('add.deleteCustom')} onClick={() => setPendingDelete(food.id)}>
                        <IconTrash size={13} />
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="dietAddLayout">
          <div className="dietFoodColumn">
            <div className="dietSearchWrap">
              <span className="dietSearchIcon"><IconSearch size={14} /></span>
              <input ref={searchRef} className="dietSearchInput" type="search" value={search}
                placeholder={t('add.searchPlaceholder')} aria-label={t('add.search')}
                onChange={event => setSearch(event.target.value)} data-testid="diet-food-search" />
              {search !== '' && <button type="button" className="dietSearchClear" aria-label={t('add.searchClear')} onClick={() => setSearch('')}><IconX size={12} /></button>}
            </div>
            <div className="dietCategoryChips" role="group" aria-label={t('add.preset')}>
              {categoryOptions.map(value => (
                <button key={value} type="button" className="dietCategoryChip" data-active={category === value}
                  aria-pressed={category === value} onClick={() => setCategory(value)}>{t(`cat.${value}`)}</button>
              ))}
            </div>
            <div className="dietFoodList" aria-label={t('add.preset')}>
              {filtered.length === 0 ? (
                <div className="dietFoodEmpty">
                  <IconSearch size={18} />
                  <span className="dietFoodEmptyTitle">{t('add.noResults')}</span>
                  <span className="dietFoodEmptyHint">{t('add.noResultsHint')}</span>
                </div>
              ) : filtered.map(food => (
                <button key={food.key} type="button" className="dietFoodRow" data-cat={food.category}
                  data-active={selected?.key === food.key} aria-pressed={selected?.key === food.key}
                  onClick={() => chooseFood(food)} data-testid="diet-food-row">
                  <span className="dietFoodAvatar">{food.name.slice(0, 1).toUpperCase()}</span>
                  <span className="dietFoodInfo">
                    <span className="dietFoodName">
                      <span>{food.name}</span>
                      {food.custom && <span className="dietFoodBadge">{t('add.customBadge')}</span>}
                    </span>
                    <span className="dietFoodMeta">
                      C {formatMacro(locale, food.per100.carbs)} · P {formatMacro(locale, food.per100.protein)} · F {formatMacro(locale, food.per100.fat)}
                    </span>
                  </span>
                  <span className="dietFoodKcal">{formatNumber(locale, Math.round(food.per100.kcal))} kcal</span>
                </button>
              ))}
            </div>
          </div>

          <div className="dietDetailColumn">
            {selected === null ? (
              <div className="dietDetailEmpty">
                <span className="dietDetailEmptyArt"><IconBowl size={26} /></span>
                <span className="dietDetailEmptyTitle">{t('add.choose')}</span>
                <span className="dietDetailEmptyHint">{t('add.chooseHint')}</span>
              </div>
            ) : (
              <>
                <div className="dietSelectedHead">
                  <div>
                    <h3 className="dietSelectedTitle">{selected.name}</h3>
                    <p className="dietPer100Line">{t('add.per100Line', {
                      carbs: formatMacro(locale, selected.per100.carbs),
                      protein: formatMacro(locale, selected.per100.protein),
                      fat: formatMacro(locale, selected.per100.fat),
                      kcal: formatNumber(locale, Math.round(selected.per100.kcal)),
                    })}</p>
                  </div>
                  <div className="dietSelectedKcal">
                    <strong>{formatNumber(locale, Math.round(selected.per100.kcal))}</strong>
                    <span>kcal / 100 g</span>
                  </div>
                </div>

                {!(editingEntry !== undefined && editingEntry !== null) && (
                  <div className="dietSelectedActions">
                    {selected.custom && customFoodEntry !== undefined ? (
                      <button type="button" className="dietEditFoodButton" onClick={() => startEditCustom(customFoodEntry)}
                        data-testid="diet-custom-edit-detail">
                        <IconPencil size={12} /> {t('add.editCustom')}
                      </button>
                    ) : !selected.custom ? (
                      <button type="button" className="dietEditFoodButton" onClick={() => startCopyFood(selected)}
                        data-testid="diet-customize-preset">
                        <IconPencil size={12} /> {t('add.customizePreset')}
                      </button>
                    ) : null}
                  </div>
                )}
                {!selected.custom && <p className="dietReferenceNote">{t('add.referenceNote')}</p>}

                <div className="dietMacroPillsCaption">{t('add.per100')}</div>
                <div className="dietMacroPills">
                  <MacroPill label={t('add.carbs')} value={formatMacro(locale, selected.per100.carbs)} unit="g" />
                  <MacroPill label={t('add.protein')} value={formatMacro(locale, selected.per100.protein)} unit="g" />
                  <MacroPill label={t('add.fat')} value={formatMacro(locale, selected.per100.fat)} unit="g" />
                </div>

                <div className="dietFormBlock">
                  <label className="dietFormBlockLabel" htmlFor="diet-portion">{t('add.portion')}</label>
                  <div className="dietPortionWrap">
                    <input ref={gramsRef} id="diet-portion" className="dietPortionInput" type="number" inputMode="decimal"
                      min="1" max="10000" step="any" value={grams} placeholder={t('add.gramsPlaceholder')}
                      onChange={event => { setGrams(event.target.value); setError('') }} data-testid="diet-grams" />
                    <span className="dietPortionUnit">{t('unit.g')}</span>
                  </div>
                  <div className="dietQuickGrams">
                    {QUICK_GRAMS.map(value => (
                      <button key={value} type="button" className="dietQuickChip"
                        onClick={() => { setGrams(String(value)); setError('') }}>{value} g</button>
                    ))}
                  </div>
                </div>

                <div className="dietFormBlock">
                  <span className="dietFormBlockLabel">{t('add.meal')}</span>
                  <MealChoices t={t} value={meal} onChange={setMeal} />
                </div>

                <div className="dietPreviewCard">
                  <div className="dietPreviewTop">
                    <div>
                      <div className="dietPreviewLabel">{t('add.preview')}</div>
                      <div className="dietPreviewKcal">{formatNumber(locale, Math.round(preview.kcal))}<span>{t('unit.kcal')}</span></div>
                    </div>
                    <div className="dietPreviewHint">{t('add.previewHint', { grams: formatMacro(locale, validGrams ? numericGrams : 0) })}</div>
                  </div>
                  <div className="dietPreviewMacros">
                    <span>{t('add.carbs')} <b>{formatMacro(locale, preview.carbs)} g</b></span>
                    <span>{t('add.protein')} <b>{formatMacro(locale, preview.protein)} g</b></span>
                    <span>{t('add.fat')} <b>{formatMacro(locale, preview.fat)} g</b></span>
                  </div>
                </div>

              </>
            )}
          </div>
        </div>
      )}
      <div className="dietModalFooter">
        {error !== '' && <p className="dietModalError" role="alert">{error}</p>}
        {mode !== 'custom' && selected !== null && (
          <div className="dietModalFootSummary">
            <span>{t('add.preview')}</span>
            <strong>{formatNumber(locale, Math.round(preview.kcal))}<small>{t('unit.kcal')}</small></strong>
          </div>
        )}
        <div className="dietModalFootActions">
          <button type="button" className="dietSecondaryButton" onClick={onClose}>{t('common.cancel')}</button>
          <button type="button" className="dietPrimaryButton" onClick={mode === 'custom' ? submitCustom : submit}
            disabled={mode !== 'custom' && selected === null}
            data-testid={mode === 'custom' ? 'diet-custom-save' : 'diet-confirm-add'}>
            {mode === 'custom'
              ? editingCustom ? t('add.saveCustomChanges') : t('add.saveAndAdd')
              : editingEntry !== undefined && editingEntry !== null ? t('add.save') : t('add.confirm')}
          </button>
        </div>
      </div>
    </Modal>
  )
}

/* ------------------------------------------------------------------ */
/* target card                                                         */
/* ------------------------------------------------------------------ */

function TargetCard({ t, settings, targets, onSettings, locale }) {
  const [weightDraft, setWeightDraft] = useState(String(settings.weightKg))
  const [weightError, setWeightError] = useState(false)
  useEffect(() => {
    setWeightDraft(String(settings.weightKg))
  }, [settings.weightKg])

  const commitWeight = () => {
    const value = Number(String(weightDraft).replace(',', '.'))
    if (!Number.isFinite(value) || value < 30 || value > 300) {
      setWeightError(true)
      return
    }
    setWeightError(false)
    onSettings({ weightKg: round1(value), weightConfirmed: true })
  }

  const carbOptions = [
    { level: 'low', carbs: targets.activity.carbs.low, fat: targets.activity.fat.low },
    { level: 'high', carbs: targets.activity.carbs.high, fat: targets.activity.fat.high },
  ]

  return (
    <section className="dietCard dietTargetCard" aria-labelledby="diet-target-title">
      <div className="dietCardHead">
        <div className="dietCardTitleGroup">
          <h2 className="dietCardTitle" id="diet-target-title">{t('target.title')}</h2>
          <p className="dietCardSubtitle">{t('target.weight')} · {settings.activity === 'active' ? t('target.active') : t('target.inactive')}</p>
        </div>
        <span className="dietBadge">{t('target.badge')}</span>
      </div>
      <div className="dietTargetBody">
        <div className="dietField">
          <div className="dietFieldRow">
            <label className="dietFieldLabel" htmlFor="diet-weight">{t('target.weight')}</label>
            <span className="dietFieldMeta">{t('target.quickFormula', { weight: formatMacro(locale, targets.weight), factor: targets.factor })}</span>
          </div>
          <div className="dietWeightWrap" data-invalid={weightError ? 'true' : undefined}>
            <input id="diet-weight" className="dietWeightInput" type="number" inputMode="decimal" min="30" max="300" step="0.1"
              value={weightDraft} onChange={event => { setWeightDraft(event.target.value); setWeightError(false) }}
              onBlur={commitWeight} onKeyDown={event => { if (event.key === 'Enter') event.currentTarget.blur() }}
              aria-invalid={weightError} data-testid="diet-weight" />
            <span className="dietWeightUnit">{t('unit.kg')}</span>
          </div>
          {weightError && <span className="dietInvalid" role="alert">{t('target.invalidWeight')}</span>}
        </div>

        <div className="dietField">
          <span className="dietFieldLabel">{t('target.activity')}</span>
          <div className="dietSegmented" role="group" aria-label={t('target.activity')}>
            {['active', 'inactive'].map(value => (
              <button key={value} type="button" className="dietSegment" data-active={settings.activity === value}
                aria-pressed={settings.activity === value} onClick={() => onSettings({ activity: value })}
                data-testid={`diet-activity-${value}`}>
                {value === 'active' ? t('target.active') : t('target.inactive')}
              </button>
            ))}
          </div>
        </div>

        <div className="dietField">
          <span className="dietFieldLabel">{t('target.carbLevel')}</span>
          <div className="dietCarbChoices" role="group" aria-label={t('target.carbLevel')}>
            {carbOptions.map(option => (
              <button key={option.level} type="button" className="dietChoice" data-active={settings.carbLevel === option.level}
                aria-pressed={settings.carbLevel === option.level} onClick={() => onSettings({ carbLevel: option.level })}
                data-testid={`diet-carb-${option.level}`}>
                <span className="dietChoiceTitle">{t('target.carbValue', { grams: formatMacro(locale, option.carbs) })}</span>
                <span className="dietChoiceMeta">{t('target.fatSide', { fat: formatMacro(locale, option.fat) })}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="dietField">
          <span className="dietFieldLabel">{t('target.calorieBasis')}</span>
          <div className="dietCalorieChoices" role="group" aria-label={t('target.calorieBasis')}>
            <button type="button" className="dietCalorieChoice" data-active={settings.calorieMode === 'macro'}
              aria-pressed={settings.calorieMode === 'macro'} onClick={() => onSettings({ calorieMode: 'macro' })}
              data-testid="diet-calorie-macro">
              <span className="dietCalorieChoiceLabel">{t('target.macroBasis')}</span>
              <span className="dietCalorieChoiceValue">{formatNumber(locale, targets.macroKcal)} <span>kcal</span></span>
            </button>
            <button type="button" className="dietCalorieChoice" data-active={settings.calorieMode === 'quick'}
              aria-pressed={settings.calorieMode === 'quick'} onClick={() => onSettings({ calorieMode: 'quick' })}
              data-testid="diet-calorie-quick">
              <span className="dietCalorieChoiceLabel">{t('target.quickBasis')}</span>
              <span className="dietCalorieChoiceValue">{formatNumber(locale, targets.quickKcal)} <span>kcal</span></span>
            </button>
          </div>
          <p className="dietHint">{t('target.hint')}</p>
        </div>

        <div className="dietTargetStats">
          <div className="dietTargetStat">
            <div className="dietTargetStatLabel">{t('kpi.carbs')}</div>
            <div className="dietTargetStatValue">{formatMacro(locale, targets.carbs)}<span>g</span></div>
          </div>
          <div className="dietTargetStat">
            <div className="dietTargetStatLabel">{t('kpi.protein')}</div>
            <div className="dietTargetStatValue">{formatMacro(locale, targets.protein)}<span>g</span></div>
          </div>
          <div className="dietTargetStat">
            <div className="dietTargetStatLabel">{t('kpi.fat')}</div>
            <div className="dietTargetStatValue">{formatMacro(locale, targets.fat)}<span>g</span></div>
          </div>
        </div>

        <details className="dietFormula">
          <summary>{t('target.details')} <IconChevronDown size={11} /></summary>
          <div className="dietFormulaList">
            <p className="dietFormulaRow">{t('target.formulaCarb', {
              weight: formatMacro(locale, targets.weight), grams: formatMacro(locale, targets.carbG), total: targets.carbs,
            })}</p>
            <p className="dietFormulaRow">{t('target.formulaProtein', {
              weight: formatMacro(locale, targets.weight), grams: formatMacro(locale, targets.proteinG), total: targets.protein,
            })}</p>
            <p className="dietFormulaRow">{t('target.formulaFat', { total: targets.fat })}</p>
            <p className="dietFormulaRow">{t('target.formulaKcal', {
              carbs: targets.carbs, protein: targets.protein, fat: targets.fat, total: formatNumber(locale, targets.macroKcal),
            })}</p>
            <p className="dietFormulaRow">{t('target.formulaQuick', {
              weight: formatMacro(locale, targets.weight), factor: targets.factor, total: formatNumber(locale, targets.quickKcal),
            })}</p>
            <p className="dietFormulaNote">{t('target.formulaNote')}</p>
          </div>
        </details>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* trend card                                                          */
/* ------------------------------------------------------------------ */

function TrendCard({ t, days, settings, targets, selectedDate, onSelectDate, locale }) {
  const lastSeven = useMemo(() => {
    const today = dateKey()
    return Array.from({ length: 7 }, (_, index) => {
      const key = shiftDateKey(today, index - 6)
      const entries = days[key]?.entries ?? []
      return { key, kcal: Math.round(sumEntries(entries).kcal), hasEntries: entries.length > 0 }
    })
  }, [days])

  const hasAny = lastSeven.some(day => day.hasEntries)
  const logged = lastSeven.filter(day => day.hasEntries)
  const average = logged.length === 0 ? 0 : logged.reduce((sum, day) => sum + day.kcal, 0) / logged.length
  const maxKcal = Math.max(targets.activeKcal, ...lastSeven.map(day => day.kcal), 1) * 1.12
  const targetPercent = targets.activeKcal > 0 ? (targets.activeKcal / maxKcal) * 100 : 0

  return (
    <section className="dietCard" aria-labelledby="diet-trend-title">
      <div className="dietCardHead">
        <div className="dietCardTitleGroup">
          <h2 className="dietCardTitle" id="diet-trend-title">{t('trend.title')}</h2>
          <p className="dietCardSubtitle">{t('trend.subtitle')}</p>
        </div>
        <span className="dietCardActions"><IconChart size={18} /></span>
      </div>
      <div className="dietTrendBody">
        {hasAny ? (
          <>
            <div className="dietTrendSummary">
              <span className="dietTrendAvg">{formatNumber(locale, Math.round(average))}</span>
              <span className="dietTrendAvgUnit">{t('unit.kcal')} · {t('trend.avg')}</span>
              <span className="dietTrendTargetText">{t('trend.target')} {formatNumber(locale, targets.activeKcal)} kcal</span>
            </div>
            <div className="dietTrendRows" role="group" aria-label={t('trend.title')}>
              {lastSeven.map(day => {
                const width = day.kcal > 0 ? Math.min(100, (day.kcal / maxKcal) * 100) : 0
                const over = targets.activeKcal > 0 && day.kcal > targets.activeKcal
                return (
                  <button key={day.key} type="button" className="dietTrendRow" data-today={day.key === dateKey()} data-selected={day.key === selectedDate}
                    data-over={over} onClick={() => onSelectDate(day.key)} title={`${formatDateFull(locale, day.key)} · ${t('trend.kcal', { kcal: formatNumber(locale, day.kcal) })}`}
                    aria-label={`${formatDateFull(locale, day.key)}, ${t('trend.kcal', { kcal: formatNumber(locale, day.kcal) })}`} aria-current={day.key === selectedDate ? 'date' : undefined} data-testid="diet-trend-row">
                    <span className="dietTrendDayLabel">{formatWeekday(locale, day.key)}</span>
                    <span className="dietTrendRail">
                      {width > 0
                        ? <span className="dietTrendBarH" style={{ width: `${width}%` }} />
                        : <span className="dietTrendBarH" data-empty="true" />}
                      <span className="dietTrendTargetMark" style={{ left: `${targetPercent}%` }} />
                    </span>
                    <span className="dietTrendRowValue">{formatNumber(locale, day.kcal)}</span>
                  </button>
                )
              })}
            </div>
            <div className="dietTrendFooter">
              <span>{t('trend.today')}: {formatNumber(locale, lastSeven[6]?.kcal ?? 0)} kcal</span>
              <span className="dietLegendLine"><span className="dietLegendDash" />{t('trend.target')}</span>
            </div>
          </>
        ) : (
          <div className="dietTrendEmpty">
            <IconChart size={20} />
            <span className="dietTrendEmptyTitle">{t('trend.empty')}</span>
            <span className="dietTrendEmptyHint">{t('trend.emptyHint')}</span>
          </div>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* recent food card                                                    */
/* ------------------------------------------------------------------ */

function RecentFoodsCard({ t, state, items, recent, onPick, onViewAll, locale }) {
  return (
    <section className="dietCard" aria-labelledby="diet-recent-title">
      <div className="dietCardHead">
        <div className="dietCardTitleGroup">
          <h2 className="dietCardTitle" id="diet-recent-title">{recent ? t('library.recentTitle') : t('library.startTitle')}</h2>
          <p className="dietCardSubtitle">{recent ? t('library.recentHint') : t('library.startHint')}</p>
        </div>
      </div>
      <div className="dietRecentBody">
        {items.length === 0 ? (
          <p className="dietRecentEmpty">{t('library.recentEmpty')}</p>
        ) : (
          <div className="dietRecentList">
            {items.map(food => (
              <button key={food.key} type="button" className="dietRecentItem" onClick={() => onPick(food)}
                data-testid="diet-recent-food">
                <span className="dietRecentAvatar">{food.name.slice(0, 1).toUpperCase()}</span>
                <span className="dietRecentInfo">
                  <span className="dietRecentName">{food.name}</span>
                  <span className="dietRecentMeta">
                    {formatNumber(locale, Math.round(food.per100.kcal))} kcal · {t('library.per100Short')}
                  </span>
                </span>
                <span className="dietRecentPlus"><IconPlus size={13} /></span>
              </button>
            ))}
          </div>
        )}
        <button type="button" className="dietRecentMore" onClick={onViewAll}>
          {t('library.viewAll', { count: allFoodItems(state.customFoods, t).length })} <IconChevronRight size={12} />
        </button>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* entry row                                                           */
/* ------------------------------------------------------------------ */

function EntryRow({ t, entry, locale, onEdit, onRemove }) {
  const nutrition = entryNutrition(entry)
  return (
    <div className="dietEntry" data-testid="diet-entry">
      <button type="button" className="dietEntryMain" onClick={() => onEdit(entry)}>
        <span className="dietEntryName">{entryName(entry, t)}</span>
        <span className="dietEntryMeta">
          {t('entry.grams', { grams: formatMacro(locale, entry.grams) })} · {t('entry.macros', {
            carbs: formatMacro(locale, nutrition.carbs),
            protein: formatMacro(locale, nutrition.protein),
            fat: formatMacro(locale, nutrition.fat),
          })}
        </span>
        <span className="srOnly">{t('entry.kcal', { kcal: formatNumber(locale, Math.round(nutrition.kcal)) })}</span>
      </button>
      <div className="dietEntryRight">
        <span className="dietEntryKcal">{t('entry.kcal', { kcal: formatNumber(locale, Math.round(nutrition.kcal)) })}</span>
        <div className="dietEntryActions">
          <button type="button" className="dietIconButton" aria-label={t('entry.edit', { name: entryName(entry, t) })}
            onClick={() => onEdit(entry)}><IconPencil size={13} /></button>
          <button type="button" className="dietIconButton" data-danger="true" aria-label={t('entry.remove', { name: entryName(entry, t) })}
            onClick={() => onRemove(entry)}><IconTrash size={13} /></button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* main page                                                           */
/* ------------------------------------------------------------------ */

export function DietPage(props) {
  const t = props.t
  const locale = currentLocale()
  const [state, setState] = useState(loadState)
  const [selectedDate, setSelectedDate] = useState(dateKey)
  const [addOpen, setAddOpen] = useState(false)
  const [addInitial, setAddInitial] = useState(null)
  const [addMeal, setAddMeal] = useState(null)
  const [editingEntry, setEditingEntry] = useState(null)
  const [clearOpen, setClearOpen] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    saveState(state)
  }, [state])

  useEffect(() => {
    const onStorage = event => {
      if (event.key === STORAGE_KEY) setState(loadState())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  useEffect(() => {
    if (toast === null) return undefined
    const timer = window.setTimeout(() => setToast(null), 12000)
    return () => window.clearTimeout(timer)
  }, [toast])

  const settings = state.settings
  const targets = targetsFor(settings)
  const today = dateKey()
  const entries = state.days[selectedDate]?.entries ?? []
  const totals = useMemo(() => sumEntries(entries), [entries])
  const recent = recentFoodItems(state, t)
  const suggestionIds = ['egg', 'chicken-breast', 'cooked-rice', 'broccoli', 'banana']
  const suggestionItems = suggestionIds
    .map(id => FOOD_BY_ID.get(id))
    .filter(Boolean)
    .map(food => foodFromBuiltIn(food, t))
  const recentItems = recent.length > 0 ? recent : suggestionItems
  const isToday = selectedDate === today
  const dateLabel = formatDateFull(locale, selectedDate)
  const dayTitle = isToday ? t('log.title') : t('log.titleOther', { date: dateLabel })

  const updateSettings = patch => {
    setState(previous => ({ ...previous, settings: { ...previous.settings, ...patch } }))
  }

  const openAdd = (food = null, meal = null) => {
    setEditingEntry(null)
    setAddInitial(food)
    setAddMeal(meal)
    setAddOpen(true)
  }

  const openEdit = entry => {
    setAddInitial(null)
    setEditingEntry(entry)
    setAddOpen(true)
  }

  const closeAdd = () => {
    setAddOpen(false)
    setAddInitial(null)
    setAddMeal(null)
    setEditingEntry(null)
  }

  const addEntry = (food, grams, meal) => {
    const entry = {
      id: makeId('entry'),
      foodId: food.foodId,
      name: food.name,
      grams,
      meal,
      per100: { ...food.per100 },
    }
    setState(previous => ({ ...previous, days: withEntry(previous.days, selectedDate, entry) }))
    closeAdd()
  }

  const updateEntry = (entry, food, grams, meal) => {
    setState(previous => {
      const day = previous.days[selectedDate]
      if (day === undefined) return previous
      const nextEntries = day.entries.map(item => item.id === entry.id ? {
        ...item,
        foodId: food.foodId,
        name: food.name,
        grams,
        meal,
        per100: { ...food.per100 },
      } : item)
      return { ...previous, days: { ...previous.days, [selectedDate]: { entries: nextEntries } } }
    })
    closeAdd()
  }

  const addCustom = ({ name, per100, grams, meal }) => {
    const customId = makeId('food')
    const entryId = makeId('entry')
    const entry = {
      id: entryId,
      foodId: `custom:${customId}`,
      name,
      grams,
      meal,
      per100: { ...per100 },
    }
    setState(previous => ({
      ...previous,
      customFoods: [...previous.customFoods, { id: customId, name, per100 }],
      days: withEntry(previous.days, selectedDate, entry),
    }))
    closeAdd()
  }

  const updateCustom = (id, { name, per100, syncEntries }) => {
    setState(previous => {
      const customFoods = previous.customFoods.map(food => food.id === id ? { ...food, name, per100 } : food)
      if (!syncEntries) return { ...previous, customFoods }
      const foodId = `custom:${id}`
      const days = {}
      for (const [date, day] of Object.entries(previous.days)) {
        days[date] = {
          entries: day.entries.map(entry => entry.foodId === foodId
            ? { ...entry, name, per100: { ...per100 } }
            : entry),
        }
      }
      return { ...previous, customFoods, days }
    })
    closeAdd()
    setToast({ message: t('toast.foodUpdated', { name }) })
  }

  const deleteCustom = id => {
    setState(previous => ({ ...previous, customFoods: previous.customFoods.filter(food => food.id !== id) }))
  }

  const removeEntry = entry => {
    const index = entries.findIndex(item => item.id === entry.id)
    if (index < 0) return
    const name = entryName(entry, t)
    setState(previous => {
      const day = previous.days[selectedDate]
      if (day === undefined) return previous
      const nextEntries = day.entries.filter(item => item.id !== entry.id)
      const nextDays = { ...previous.days }
      if (nextEntries.length === 0) delete nextDays[selectedDate]
      else nextDays[selectedDate] = { entries: nextEntries }
      return { ...previous, days: nextDays }
    })
    setToast({
      message: t('toast.removed', { name }),
      undo: () => {
        setState(previous => {
          const current = previous.days[selectedDate]?.entries ?? []
          if (current.some(item => item.id === entry.id)) return previous
          const nextEntries = [...current]
          nextEntries.splice(Math.min(index, nextEntries.length), 0, entry)
          return { ...previous, days: { ...previous.days, [selectedDate]: { entries: nextEntries } } }
        })
        setToast(null)
      },
    })
  }

  const clearDay = () => {
    if (entries.length === 0) return
    const snapshot = entries.map(entry => ({ ...entry, per100: { ...entry.per100 } }))
    const count = snapshot.length
    setState(previous => {
      const nextDays = { ...previous.days }
      delete nextDays[selectedDate]
      return { ...previous, days: nextDays }
    })
    setClearOpen(false)
    setToast({
      message: t('toast.cleared', { date: dateLabel }),
      undo: () => {
        setState(previous => {
          const current = previous.days[selectedDate]?.entries ?? []
          const present = new Set(current.map(entry => entry.id))
          const restored = [...snapshot.filter(entry => !present.has(entry.id)), ...current]
          return { ...previous, days: { ...previous.days, [selectedDate]: { entries: restored } } }
        })
        setToast(null)
      },
    })
  }

  const energyPercent = targets.activeKcal > 0 ? (totals.kcal / targets.activeKcal) * 100 : 0
  const energyOver = targets.activeKcal > 0 && totals.kcal > targets.activeKcal
  const circumference = 2 * Math.PI * 45
  const ringOffset = circumference * (1 - clamp(energyPercent, 0, 100) / 100)

  const macroCards = [
    { key: 'carbs', label: t('kpi.carbs'), total: totals.carbs, target: targets.carbs, className: 'dietKpiCarbs' },
    { key: 'protein', label: t('kpi.protein'), total: totals.protein, target: targets.protein, className: 'dietKpiProtein' },
    { key: 'fat', label: t('kpi.fat'), total: totals.fat, target: targets.fat, className: 'dietKpiFat' },
  ]

  return (
    <section className="dietPage" aria-label={t('page.title')} data-testid="diet-page" data-locked={addOpen || clearOpen ? 'true' : undefined}>
      <style>{CSS}</style>
      <div className="dietScroll">
        <div className="dietContent">
          <header className="dietHeading">
            <div className="dietHeadingText">
              <p className="dietEyebrow">{t('page.eyebrow')}</p>
              <h1 className="dietTitle">{t('page.title')}</h1>
              <p className="dietSubtitle">{t('page.subtitle')}</p>
            </div>
            <div className="dietHeadingActions">
              <div className="dietDateNav">
                <button type="button" className="dietDateButton" aria-label={t('page.datePrev')}
                  onClick={() => setSelectedDate(value => shiftDateKey(value, -1))} data-testid="diet-prev-day">
                  <IconChevronLeft />
                </button>
                <span className="dietDateLabel" aria-live="polite">
                  <span className="dietDateLong">{formatDateLong(locale, selectedDate)}</span>
                  <span className="dietDateWeekday">{formatWeekday(locale, selectedDate)}</span>
                </span>
                <button type="button" className="dietDateButton" aria-label={t('page.dateNext')}
                  disabled={selectedDate >= today} onClick={() => setSelectedDate(value => selectedDate < today ? shiftDateKey(value, 1) : value)}
                  data-testid="diet-next-day">
                  <IconChevronRight />
                </button>
              </div>
              {!isToday && <button type="button" className="dietTodayButton" onClick={() => setSelectedDate(today)}>{t('page.today')}</button>}
              <button type="button" className="dietPrimaryButton" data-header-add="true" onClick={() => openAdd()}>
                <IconPlus size={14} /> {t('page.addFood')}
              </button>
            </div>
          </header>

          {!settings.weightConfirmed && (
            <div className="dietOnboard" role="status">
              <span className="dietOnboardIcon"><IconInfo size={15} /></span>
              <p className="dietOnboardText">{t('onboard.weight', { weight: formatMacro(locale, settings.weightKg) })}</p>
              <button type="button" className="dietOnboardButton" onClick={() => {
                const input = document.getElementById('diet-weight')
                if (input !== null) {
                  input.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  input.focus()
                }
              }}>{t('onboard.action')}</button>
            </div>
          )}

          <div className="dietKpis">
            <article className="dietKpi dietKpiEnergy">
              <div className="dietKpiMain">
                <div className="dietKpiLabelRow"><span className="dietDot" /><span className="dietKpiLabel">{t('kpi.energy')}</span></div>
                <div className="dietKpiValueRow">
                  <span className="dietKpiValue">{formatNumber(locale, Math.round(totals.kcal))}</span>
                  <span className="dietKpiUnit">{t('unit.kcal')}</span>
                </div>
                <p className="dietKpiTarget">{t('kpi.energyHint', { target: formatNumber(locale, targets.activeKcal) })}</p>
                <div className="dietKpiBottom">
                  <div className="dietMacroBar" role="progressbar" aria-label={t('kpi.energy')} aria-valuemin={0} aria-valuemax={targets.activeKcal} aria-valuenow={Math.min(Math.round(totals.kcal), targets.activeKcal)} aria-valuetext={`${formatNumber(locale, Math.round(totals.kcal))} / ${formatNumber(locale, targets.activeKcal)} ${t('unit.kcal')}`}>
                    <div className="dietMacroBarFill" data-over={energyOver} style={{ width: `${clamp(energyPercent, 0, 100)}%` }} />
                  </div>
                  <div className="dietKpiFoot" data-over={energyOver}>
                    <span>{energyOver ? t('kpi.over') : t('kpi.remaining')}</span>
                    <strong>{formatNumber(locale, Math.round(Math.abs(targets.activeKcal - totals.kcal)))} kcal</strong>
                  </div>
                </div>
              </div>
              <div className="dietRingWrap" aria-hidden="true">
                <svg viewBox="0 0 102 102">
                  <circle className="dietRingTrack" cx="51" cy="51" r="45" />
                  <circle className="dietRingFill" cx="51" cy="51" r="45" strokeDasharray={circumference}
                    strokeDashoffset={ringOffset} style={energyOver ? { stroke: 'var(--diet-over)' } : undefined} />
                </svg>
                <div className="dietRingCenter">
                  <span className="dietRingPercent">{t('kpi.percent', { percent: formatNumber(locale, Math.round(energyPercent)) })}</span>
                  <span className="dietRingCaption">{t('kpi.target')}</span>
                </div>
              </div>
            </article>

            {macroCards.map(card => {
              const percent = card.target > 0 ? (card.total / card.target) * 100 : 0
              const over = card.target > 0 && card.total > card.target
              return (
                <article className={`dietKpi ${card.className}`} key={card.key} aria-label={card.label}>
                  <div className="dietKpiLabelRow"><span className="dietDot" /><span className="dietKpiLabel">{card.label}</span></div>
                  <div className="dietKpiValueRow">
                    <span className="dietKpiValue">{formatMacro(locale, card.total)}</span>
                    <span className="dietKpiUnit">{t('unit.g')}</span>
                  </div>
                  <p className="dietKpiTarget">{t('kpi.macroTarget', { target: formatMacro(locale, card.target) })}</p>
                  <div className="dietKpiBottom">
                    <div className="dietMacroBar" role="progressbar" aria-label={card.label} aria-valuemin={0} aria-valuemax={card.target} aria-valuenow={Math.min(round1(card.total), card.target)} aria-valuetext={`${formatMacro(locale, card.total)} / ${formatMacro(locale, card.target)} ${t('unit.g')}`}>
                      <div className="dietMacroBarFill" data-over={over} style={{ width: `${clamp(percent, 0, 100)}%` }} />
                    </div>
                    <div className="dietKpiFoot" data-over={over}>
                      <span>{over ? t('kpi.over') : t('kpi.remaining')}</span>
                      <strong>{formatMacro(locale, Math.abs(card.target - card.total))} g</strong>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="dietLayout">
            <div className="dietMainColumn">
              <section className="dietCard" aria-labelledby="diet-log-title">
                <div className="dietCardHead">
                  <div className="dietCardTitleGroup">
                    <h2 className="dietCardTitle" id="diet-log-title">{dayTitle}</h2>
                    <p className="dietCardSubtitle">{entries.length === 1 ? t('log.countOne') : t('log.count', { count: entries.length })}</p>
                  </div>
                  <div className="dietCardActions">
                    {entries.length > 0 && (
                      <button type="button" className="dietGhostButton" data-danger="true" onClick={() => setClearOpen(true)} data-testid="diet-clear-open">
                        <IconTrash size={12} /> {t('log.clear')}
                      </button>
                    )}
                    <button type="button" className="dietPrimaryButton" onClick={() => openAdd()} data-testid="diet-add-open">
                      <IconPlus size={13} /> {t('log.add')}
                    </button>
                  </div>
                </div>

                {entries.length === 0 ? (
                  <div className="dietEmptyLog">
                    <span className="dietEmptyArt"><IconBowl size={30} /></span>
                    <h3 className="dietEmptyTitle">{t('log.emptyTitle')}</h3>
                    <p className="dietEmptyText">{t('log.emptyBody')}</p>
                    <button type="button" className="dietPrimaryButton dietEmptyAction" onClick={() => openAdd()}>
                      <IconPlus size={13} /> {t('log.emptyAction')}
                    </button>
                  </div>
                ) : (
                  <div className="dietMeals">
                    {MEAL_KEYS.map(meal => {
                      const mealEntries = entries.filter(entry => entry.meal === meal)
                      const mealKcal = Math.round(sumEntries(mealEntries).kcal)
                      return (
                        <div className="dietMeal" data-meal={meal} key={meal}>
                          <div className="dietMealHead">
                            <span className="dietMealBadge">{t(`meal.${meal}.short`)}</span>
                            <div className="dietMealTitleGroup">
                              <h3 className="dietMealTitle">{t(`meal.${meal}`)} {mealEntries.length > 0 && <span className="dietMealCount">{mealEntries.length}</span>}</h3>
                              <p className="dietMealMeta">{mealEntries.length > 0 ? t('log.mealKcal', { kcal: formatNumber(locale, mealKcal) }) : t('log.mealEmpty')}</p>
                            </div>
                            <div className="dietMealActions">
                              <button type="button" className="dietMealAdd" aria-label={t('log.mealAdd', { meal: t(`meal.${meal}`) })}
                                onClick={() => openAdd(null, meal)} data-testid={`diet-meal-add-${meal}`}><IconPlus size={13} /></button>
                            </div>
                          </div>
                          {mealEntries.length > 0 && (
                            <div className="dietEntries">
                              {mealEntries.map(entry => (
                                <EntryRow key={entry.id} t={t} entry={entry} locale={locale}
                                  onEdit={openEdit} onRemove={removeEntry} />
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </section>
            </div>

            <aside className="dietSideColumn">
              <TargetCard t={t} settings={settings} targets={targets} onSettings={updateSettings} locale={locale} />
              <TrendCard t={t} days={state.days} settings={settings} targets={targets}
                selectedDate={selectedDate} onSelectDate={setSelectedDate} locale={locale} />
              <RecentFoodsCard t={t} state={state} items={recentItems} recent={recent.length > 0}
                onPick={food => openAdd(food)} onViewAll={() => openAdd()} locale={locale} />
            </aside>
          </div>

          <footer className="dietFooter">
            <span>{t('footer.local')}</span>
            <span className="dietFooterDot" />
            <span>{t('footer.disclaimer')}</span>
          </footer>
        </div>
      </div>

      {addOpen && (
        <AddFoodModal
          t={t}
          initialFood={addInitial}
          editingEntry={editingEntry}
          state={state}
          onClose={closeAdd}
          onAdd={addEntry}
          onUpdate={updateEntry}
          onAddCustom={addCustom}
          onUpdateCustom={updateCustom}
          onDeleteCustom={deleteCustom}
          defaultMealChoice={addMeal ?? defaultMeal()}
        />
      )}
      {clearOpen && (
        <ConfirmDialog t={t} dateLabel={dateLabel} count={entries.length} onClose={() => setClearOpen(false)} onConfirm={clearDay} />
      )}
      {toast !== null && (
        <Toast t={t} toast={toast} onUndo={() => toast.undo?.()} onClose={() => setToast(null)} />
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* plugin registration                                                 */
/* ------------------------------------------------------------------ */

export const name = 'dsh-diet'
export const inject = ['slots', 'locale']

export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-diet: dictionaries')
  const t = ctx.locale.bind(NS)
  ctx.effect(() => ctx.slots.inject('main', () => ctx.slots.register({
    name: 'main',
    key: 'diet',
    locale: NS,
    inject: () => ({}),
  }, DietPage)), 'dsh-diet: main page')
  ctx.effect(() => ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
    name: 'sidebar.panellist',
    id: 'diet',
    order: 30,
    locale: NS,
    label: () => t('panel'),
  }, DietPanelIcon)), 'dsh-diet: sidebar entry')
}
