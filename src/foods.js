/**
 * Preset foods with approximate edible-portion nutrition per 100 g.
 * Values are everyday references for cooked/ready-to-eat foods where noted;
 * brands, cuts and cooking methods vary. `defaultGrams` is a sane first portion.
 */
export const FOOD_CATEGORIES = ['all', 'protein', 'staple', 'produce', 'dairy', 'fat', 'other', 'custom']

export const BUILT_IN_FOODS = [
  { id: 'egg', nameKey: 'food.egg', category: 'protein', defaultGrams: 50, per100: { kcal: 144, carbs: 1.1, protein: 12.6, fat: 9.5 } },
  { id: 'chicken-breast', nameKey: 'food.chickenBreast', category: 'protein', defaultGrams: 120, per100: { kcal: 118, carbs: 0.6, protein: 24.6, fat: 1.9 } },
  { id: 'lean-beef', nameKey: 'food.leanBeef', category: 'protein', defaultGrams: 100, per100: { kcal: 125, carbs: 0, protein: 20.2, fat: 4.2 } },
  { id: 'salmon', nameKey: 'food.salmon', category: 'protein', defaultGrams: 100, per100: { kcal: 139, carbs: 0, protein: 17.2, fat: 7.8 } },
  { id: 'shrimp', nameKey: 'food.shrimp', category: 'protein', defaultGrams: 100, per100: { kcal: 93, carbs: 2.8, protein: 18.6, fat: 0.8 } },
  { id: 'firm-tofu', nameKey: 'food.firmTofu', category: 'protein', defaultGrams: 100, per100: { kcal: 116, carbs: 3.0, protein: 12.2, fat: 6.7 } },
  { id: 'whey', nameKey: 'food.whey', category: 'protein', defaultGrams: 30, per100: { kcal: 400, carbs: 8.0, protein: 80.0, fat: 6.0 } },
  { id: 'cooked-rice', nameKey: 'food.cookedRice', category: 'staple', defaultGrams: 150, per100: { kcal: 116, carbs: 25.9, protein: 2.6, fat: 0.3 } },
  { id: 'oats', nameKey: 'food.oats', category: 'staple', defaultGrams: 50, per100: { kcal: 380, carbs: 66.9, protein: 15.0, fat: 6.7 } },
  { id: 'whole-wheat-bread', nameKey: 'food.wholeWheatBread', category: 'staple', defaultGrams: 60, per100: { kcal: 246, carbs: 43.0, protein: 9.0, fat: 3.4 } },
  { id: 'potato', nameKey: 'food.potato', category: 'staple', defaultGrams: 150, per100: { kcal: 77, carbs: 17.0, protein: 2.0, fat: 0.1 } },
  { id: 'sweet-potato', nameKey: 'food.sweetPotato', category: 'staple', defaultGrams: 150, per100: { kcal: 86, carbs: 20.1, protein: 1.6, fat: 0.1 } },
  { id: 'banana', nameKey: 'food.banana', category: 'produce', defaultGrams: 100, per100: { kcal: 93, carbs: 22.0, protein: 1.4, fat: 0.2 } },
  { id: 'apple', nameKey: 'food.apple', category: 'produce', defaultGrams: 150, per100: { kcal: 53, carbs: 13.7, protein: 0.4, fat: 0.2 } },
  { id: 'blueberry', nameKey: 'food.blueberry', category: 'produce', defaultGrams: 80, per100: { kcal: 57, carbs: 14.5, protein: 0.7, fat: 0.3 } },
  { id: 'broccoli', nameKey: 'food.broccoli', category: 'produce', defaultGrams: 100, per100: { kcal: 36, carbs: 4.3, protein: 4.1, fat: 0.6 } },
  { id: 'tomato', nameKey: 'food.tomato', category: 'produce', defaultGrams: 150, per100: { kcal: 18, carbs: 3.9, protein: 0.9, fat: 0.2 } },
  { id: 'spinach', nameKey: 'food.spinach', category: 'produce', defaultGrams: 80, per100: { kcal: 23, carbs: 1.4, protein: 2.9, fat: 0.4 } },
  { id: 'avocado', nameKey: 'food.avocado', category: 'produce', defaultGrams: 80, per100: { kcal: 160, carbs: 8.5, protein: 2.0, fat: 14.7 } },
  { id: 'whole-milk', nameKey: 'food.wholeMilk', category: 'dairy', defaultGrams: 250, per100: { kcal: 65, carbs: 5.0, protein: 3.3, fat: 3.6 } },
  { id: 'plain-yogurt', nameKey: 'food.plainYogurt', category: 'dairy', defaultGrams: 150, per100: { kcal: 62, carbs: 5.0, protein: 3.5, fat: 3.0 } },
  { id: 'almonds', nameKey: 'food.almonds', category: 'fat', defaultGrams: 20, per100: { kcal: 579, carbs: 21.6, protein: 21.2, fat: 49.9 } },
  { id: 'peanut-butter', nameKey: 'food.peanutButter', category: 'fat', defaultGrams: 15, per100: { kcal: 588, carbs: 20.0, protein: 25.0, fat: 50.0 } },
  { id: 'olive-oil', nameKey: 'food.oliveOil', category: 'fat', defaultGrams: 10, per100: { kcal: 884, carbs: 0, protein: 0, fat: 100.0 } },
  { id: 'dark-chocolate', nameKey: 'food.darkChocolate', category: 'other', defaultGrams: 20, per100: { kcal: 598, carbs: 45.9, protein: 7.8, fat: 42.6 } },
]

export const FOOD_BY_ID = new Map(BUILT_IN_FOODS.map(food => [food.id, food]))

/** Energy from the macros, rounded, for custom foods without a stated kcal. */
export function energyFromMacros(carbs, protein, fat) {
  return Math.round((Number(carbs) || 0) * 4 + (Number(protein) || 0) * 4 + (Number(fat) || 0) * 9)
}
