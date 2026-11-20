/** Scoped stylesheet for the diet page. Colors come from host theme tokens. */
export const CSS = String.raw`
.dietPage {
  --diet-energy: var(--dsw-alias-state-business-primary);
  --diet-carbs: var(--dsw-alias-state-warn-primary);
  --diet-protein: var(--dsw-alias-state-success-primary);
  --diet-fat: var(--dsw-alias-state-done-primary);
  --diet-over: var(--dsw-alias-state-error-primary);
  --diet-card: var(--dsw-alias-card-fill);
  --diet-border: var(--dsw-alias-border-l2);
  --diet-border-strong: var(--dsw-alias-border-l4);
  --diet-hover: var(--dsw-alias-interactive-bg-hover);
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-base);
  font-family: var(--dsw-font-family);
  font-size: 14px;
  line-height: 1.55;
  text-align: left;
}

.dietPage *, .dietPage *::before, .dietPage *::after { box-sizing: border-box; }
.dietPage button, .dietPage input, .dietPage select { font: inherit; color: inherit; }
.dietPage button { cursor: pointer; }
.dietPage button:disabled { cursor: default; opacity: .45; }
.dietPage :focus-visible { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: 2px; }
.dietPage .srOnly {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
}

.dietPage[data-locked='true'] .dietScroll { overflow: hidden; }
.dietScroll {
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: auto;
  scrollbar-gutter: stable;
  overscroll-behavior: contain;
  --dsh-scrollbar-width: 9px;
  --dsh-scrollbar-thumb-border: 2px;
}
.dietContent {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 44px) 56px;
}

/* ---------- header ---------- */
.dietHeading {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  padding-top: 28px;
  margin-bottom: 24px;
}
html[data-platform='darwin'] .dietHeading { padding-top: calc(28px + var(--dsh-frame-top-clearance, 0px)); }
.dietHeadingText { min-width: 0; }
.dietEyebrow {
  margin: 0 0 7px;
  color: var(--dsw-alias-state-business-primary);
  font-size: 11px;
  line-height: 16px;
  font-weight: 650;
  letter-spacing: .14em;
  text-transform: uppercase;
}
.dietTitle {
  margin: 0;
  font-size: 26px;
  line-height: 34px;
  font-weight: 540;
  letter-spacing: -.02em;
}
.dietSubtitle {
  margin: 6px 0 0;
  max-width: 56ch;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 20px;
}
.dietHeadingActions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
.dietDateNav {
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 3px;
  border: .5px solid var(--diet-border);
  border-radius: 18px;
  background: var(--diet-card);
}
.dietDateButton {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
}
.dietDateButton:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietDateLabel {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  min-width: 122px;
  padding: 0 8px;
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
}
.dietDateWeekday { color: var(--dsw-alias-label-tertiary); font-size: 10px; font-weight: 400; }
.dietBadge {
  display: inline-flex;
  align-items: center;
  flex: none;
  height: 20px;
  padding: 0 7px;
  border: .5px solid var(--diet-border);
  border-radius: 10px;
  background: color-mix(in srgb, var(--diet-energy) 7%, transparent);
  color: var(--dsw-alias-label-tertiary);
  font-size: 9px;
  line-height: 12px;
  font-weight: 500;
}
.dietTodayButton {
  height: 36px;
  padding: 0 14px;
  border: .5px solid var(--diet-border);
  border-radius: 18px;
  background: var(--diet-card);
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 20px;
  white-space: nowrap;
}
.dietTodayButton:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietPrimaryButton, .dietSecondaryButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 36px;
  padding: 0 15px;
  border-radius: 18px;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  transition: background-color .16s ease, border-color .16s ease, transform .16s ease;
}
.dietPrimaryButton {
  border: 1px solid transparent;
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
}
.dietPrimaryButton:hover { background: var(--dsw-alias-button-primary-hover); }
.dietPrimaryButton:active { transform: translateY(1px); }
.dietSecondaryButton {
  border: .5px solid var(--diet-border-strong);
  background: transparent;
  color: var(--dsw-alias-label-primary);
}
.dietSecondaryButton:hover { background: var(--diet-hover); }
.dietPrimaryButton svg, .dietSecondaryButton svg { flex: none; }

.dietOnboard {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 10px;
  margin: -8px 0 18px;
  padding: 9px 12px;
  border: .5px solid color-mix(in srgb, var(--dsw-alias-state-warn-primary) 28%, var(--diet-border));
  border-radius: var(--dsw-radius-lg);
  background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 7%, var(--diet-card));
}
.dietOnboardIcon { display: inline-flex; flex: none; color: var(--dsw-alias-state-warn-label); }
.dietOnboardText { flex: 1 1 220px; margin: 0; color: var(--dsw-alias-label-secondary); font-size: 11px; line-height: 17px; }
.dietOnboardButton {
  flex: none;
  height: 26px;
  padding: 0 9px;
  border: 0;
  border-radius: 13px;
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
  font-size: 10.5px;
  line-height: 15px;
}
.dietOnboardButton:hover { background: var(--dsw-alias-interactive-bg-hover-accent); }

/* ---------- KPI band ---------- */
.dietKpis {
  display: grid;
  grid-template-columns: minmax(0, 1.38fr) repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}
.dietKpi {
  position: relative;
  min-width: 0;
  min-height: 152px;
  padding: 18px 18px 16px;
  overflow: hidden;
  border: .5px solid var(--diet-border);
  border-radius: var(--dsw-radius-xl);
  background: var(--diet-card);
}
.dietKpi::after {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  content: '';
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--dsw-alias-bg-base) 40%, transparent);
}
.dietKpiEnergy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background:
    radial-gradient(120% 150% at 100% 0%, color-mix(in srgb, var(--diet-energy) 15%, transparent), transparent 58%),
    linear-gradient(135deg, color-mix(in srgb, var(--diet-energy) 6%, var(--diet-card)), var(--diet-card));
}
.dietKpiCarbs { background: linear-gradient(150deg, color-mix(in srgb, var(--diet-carbs) 7%, var(--diet-card)), var(--diet-card) 66%); }
.dietKpiProtein { background: linear-gradient(150deg, color-mix(in srgb, var(--diet-protein) 7%, var(--diet-card)), var(--diet-card) 66%); }
.dietKpiFat { background: linear-gradient(150deg, color-mix(in srgb, var(--diet-fat) 7%, var(--diet-card)), var(--diet-card) 66%); }
.dietKpiMain { min-width: 0; }
.dietKpiLabelRow { display: flex; align-items: center; gap: 7px; min-width: 0; }
.dietDot { width: 7px; height: 7px; flex: none; border-radius: 50%; background: var(--diet-energy); }
.dietKpiCarbs .dietDot { background: var(--diet-carbs); }
.dietKpiProtein .dietDot { background: var(--diet-protein); }
.dietKpiFat .dietDot { background: var(--diet-fat); }
.dietKpiLabel {
  overflow: hidden;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dietKpiValueRow { display: flex; align-items: baseline; gap: 6px; margin-top: 10px; }
.dietKpiValue {
  color: var(--dsw-alias-label-primary);
  font-size: clamp(25px, 2.2vw, 34px);
  line-height: 1.08;
  font-weight: 520;
  font-variant-numeric: tabular-nums;
  letter-spacing: -.035em;
}
.dietKpiEnergy .dietKpiValue { font-size: clamp(30px, 2.7vw, 40px); }
.dietKpiUnit { color: var(--dsw-alias-label-tertiary); font-size: 12px; line-height: 18px; }
.dietKpiTarget {
  margin: 5px 0 0;
  color: var(--dsw-alias-label-tertiary);
  font-size: 11px;
  line-height: 17px;
  font-variant-numeric: tabular-nums;
}
.dietKpiTarget strong { color: var(--dsw-alias-label-secondary); font-weight: 550; }
.dietKpiSpacer { flex: 1; }
.dietKpiBottom { margin-top: 15px; }
.dietMacroBar {
  width: 100%;
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 8%, transparent);
}
.dietMacroBarFill {
  height: 100%;
  border-radius: inherit;
  background: var(--diet-carbs);
  transition: width .35s cubic-bezier(.2,.7,.3,1), background-color .2s ease;
}
.dietKpiEnergy .dietMacroBarFill { background: var(--diet-energy); }
.dietKpiProtein .dietMacroBarFill { background: var(--diet-protein); }
.dietKpiFat .dietMacroBarFill { background: var(--diet-fat); }
.dietMacroBarFill[data-over='true'] { background: var(--diet-over); }
.dietKpiFoot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 9px;
  color: var(--dsw-alias-label-tertiary);
  font-size: 11px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
}
.dietKpiFoot strong { color: var(--dsw-alias-label-secondary); font-weight: 550; }
.dietKpiFoot[data-over='true'] strong { color: var(--diet-over); }
.dietRingWrap { position: relative; width: 102px; height: 102px; flex: none; }
.dietRingWrap svg { display: block; width: 100%; height: 100%; transform: rotate(-90deg); }
.dietRingTrack { fill: none; stroke: color-mix(in srgb, var(--dsw-alias-label-primary) 8%, transparent); stroke-width: 8; }
.dietRingFill {
  fill: none;
  stroke: var(--diet-energy);
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset .45s cubic-bezier(.2,.7,.3,1);
}
.dietRingCenter {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  text-align: center;
}
.dietRingPercent {
  font-size: 21px;
  line-height: 25px;
  font-weight: 560;
  font-variant-numeric: tabular-nums;
  letter-spacing: -.03em;
}
.dietRingCaption { color: var(--dsw-alias-label-tertiary); font-size: 9px; line-height: 13px; letter-spacing: .02em; }

/* ---------- columns and cards ---------- */
.dietLayout {
  display: grid;
  grid-template-columns: minmax(0, 1.56fr) minmax(286px, .94fr);
  align-items: start;
  gap: 20px;
}
.dietMainColumn, .dietSideColumn { display: flex; flex-direction: column; gap: 20px; min-width: 0; }
.dietCard {
  min-width: 0;
  overflow: hidden;
  border: .5px solid var(--diet-border);
  border-radius: var(--dsw-radius-xl);
  background: var(--diet-card);
}
.dietCardHead {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  padding: 19px 20px 14px;
}
.dietCardTitleGroup { min-width: 0; }
.dietCardTitle {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-size: 15px;
  line-height: 23px;
  font-weight: 550;
  letter-spacing: -.01em;
}
.dietCardSubtitle { margin: 3px 0 0; color: var(--dsw-alias-label-tertiary); font-size: 11px; line-height: 17px; }
.dietCardActions { display: flex; align-items: center; gap: 6px; flex: none; }
.dietGhostButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  min-height: 28px;
  padding: 0 9px;
  border: 0;
  border-radius: 14px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font-size: 11px;
  line-height: 17px;
}
.dietGhostButton:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietGhostButton[data-danger='true']:hover { color: var(--diet-over); background: var(--dsw-alias-interactive-bg-hover-danger); }
.dietIconButton {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  flex: none;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
}
.dietIconButton:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietIconButton[data-danger='true']:hover { background: var(--dsw-alias-interactive-bg-hover-danger); color: var(--diet-over); }

/* ---------- meals ---------- */
.dietMeals { padding: 0 20px 10px; }
.dietMeal { border-top: .5px solid var(--diet-border); }
.dietMeal:first-child { border-top: 0; }
.dietMealHead {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  min-height: 58px;
  padding: 10px 0;
}
.dietMealBadge {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--diet-carbs) 12%, transparent);
  color: var(--dsw-alias-state-warn-label);
  font-size: 11px;
  line-height: 16px;
  font-weight: 650;
}
.dietMeal[data-meal='lunch'] .dietMealBadge { background: color-mix(in srgb, var(--diet-energy) 12%, transparent); color: var(--dsw-alias-state-business-primary); }
.dietMeal[data-meal='dinner'] .dietMealBadge { background: color-mix(in srgb, var(--diet-fat) 13%, transparent); color: var(--dsw-alias-state-done-primary); }
.dietMeal[data-meal='snack'] .dietMealBadge { background: color-mix(in srgb, var(--diet-protein) 13%, transparent); color: var(--dsw-alias-state-success-primary); }
.dietMealTitleGroup { min-width: 0; }
.dietMealTitle { display: flex; align-items: baseline; gap: 7px; margin: 0; font-size: 13px; line-height: 20px; font-weight: 550; }
.dietMealCount {
  display: inline-grid;
  place-items: center;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-tertiary);
  font-size: 9px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}
.dietMealMeta { margin: 1px 0 0; color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 15px; }
.dietMealActions { display: flex; align-items: center; gap: 4px; }
.dietMealAdd {
  display: inline-grid;
  place-items: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
}
.dietMealAdd:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietEntries { padding: 0 0 8px 42px; }
.dietEntry {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  margin: 0 -8px;
  padding: 5px 8px;
  border-radius: 9px;
}
.dietEntry:hover { background: var(--diet-hover); }
.dietEntryMain {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  gap: 1px;
  padding: 4px 0;
  border: 0;
  background: transparent;
  text-align: left;
}
.dietEntryName {
  overflow: hidden;
  color: var(--dsw-alias-label-primary);
  font-size: 12.5px;
  line-height: 19px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dietEntryMeta {
  overflow: hidden;
  color: var(--dsw-alias-label-tertiary);
  font-size: 10px;
  line-height: 15px;
  font-variant-numeric: tabular-nums;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dietEntryRight { display: flex; align-items: center; gap: 3px; flex: none; }
.dietEntryKcal { min-width: 58px; color: var(--dsw-alias-label-secondary); font-size: 11px; line-height: 17px; font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }
.dietEntryActions { display: flex; align-items: center; gap: 1px; opacity: 0; transition: opacity .12s ease; }
.dietEntry:hover .dietEntryActions, .dietEntry:focus-within .dietEntryActions { opacity: 1; }
@media (hover: none) { .dietEntryActions { opacity: 1; } }
.dietEmptyLog {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 38px 24px 44px;
  text-align: center;
}
.dietEmptyArt {
  display: grid;
  place-items: center;
  width: 66px;
  height: 66px;
  margin-bottom: 2px;
  border-radius: 22px;
  background: radial-gradient(circle at 35% 30%, color-mix(in srgb, var(--diet-carbs) 20%, transparent), color-mix(in srgb, var(--diet-energy) 7%, transparent));
  color: var(--dsw-alias-label-secondary);
}
.dietEmptyTitle { margin: 0; font-size: 14px; line-height: 21px; font-weight: 550; }
.dietEmptyText { max-width: 34ch; margin: 0; color: var(--dsw-alias-label-tertiary); font-size: 12px; line-height: 19px; }
.dietEmptyAction { margin-top: 5px; min-height: 32px; padding: 0 13px; font-size: 12px; border-radius: 16px; }

/* ---------- target card ---------- */
.dietTargetBody { display: flex; flex-direction: column; gap: 15px; padding: 0 20px 18px; }
.dietField { display: flex; flex-direction: column; gap: 7px; min-width: 0; }
.dietFieldRow { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.dietFieldLabel { color: var(--dsw-alias-label-secondary); font-size: 11px; line-height: 17px; font-weight: 500; }
.dietFieldMeta { color: var(--dsw-alias-label-tertiary); font-size: 10.5px; line-height: 15px; }
.dietWeightWrap {
  position: relative;
  display: flex;
  align-items: center;
  height: 38px;
  border: .5px solid var(--diet-border-strong);
  border-radius: 10px;
  background: var(--dsw-alias-bg-base);
  transition: border-color .16s ease;
}
.dietWeightWrap:focus-within { border-color: var(--dsw-alias-state-business-primary); }
.dietWeightWrap[data-invalid='true'] { border-color: var(--diet-over); }
.dietWeightInput {
  width: 100%;
  height: 100%;
  padding: 0 42px 0 12px;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font-size: 16px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}
.dietWeightInput::-webkit-outer-spin-button, .dietWeightInput::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.dietWeightInput[type='number'] { -moz-appearance: textfield; appearance: textfield; }
.dietWeightUnit { position: absolute; right: 12px; color: var(--dsw-alias-label-tertiary); font-size: 11px; pointer-events: none; }
.dietInvalid { color: var(--diet-over); font-size: 10px; line-height: 15px; }
.dietSegmented {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3px;
  padding: 3px;
  border-radius: 11px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent);
}
.dietSegment {
  min-width: 0;
  height: 31px;
  padding: 0 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dietSegment:hover { color: var(--dsw-alias-label-primary); }
.dietSegment[data-active='true'] {
  background: var(--dsw-alias-button-elevated-fill);
  color: var(--dsw-alias-label-primary);
  box-shadow: var(--dsw-shadow-lv1);
}
.dietCarbChoices { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.dietChoice {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  min-width: 0;
  padding: 8px 10px;
  border: .5px solid var(--diet-border);
  border-radius: 10px;
  background: transparent;
  text-align: left;
  transition: border-color .16s ease, background-color .16s ease;
}
.dietChoice:hover { background: var(--diet-hover); }
.dietChoice[data-active='true'] {
  border-color: color-mix(in srgb, var(--diet-carbs) 70%, var(--diet-border));
  background: color-mix(in srgb, var(--diet-carbs) 8%, transparent);
}
.dietChoiceTitle { font-size: 12px; line-height: 18px; font-weight: 550; font-variant-numeric: tabular-nums; }
.dietChoiceMeta { color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 14px; font-variant-numeric: tabular-nums; }
.dietCalorieChoices { display: flex; gap: 6px; flex-wrap: wrap; }
.dietCalorieChoice {
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  min-height: 42px;
  padding: 6px 9px;
  border: .5px solid var(--diet-border);
  border-radius: 9px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  text-align: left;
  transition: border-color .16s ease, background-color .16s ease;
}
.dietCalorieChoice:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietCalorieChoice[data-active='true'] {
  border-color: color-mix(in srgb, var(--diet-energy) 65%, var(--diet-border));
  background: color-mix(in srgb, var(--diet-energy) 7%, transparent);
  color: var(--dsw-alias-label-primary);
}
.dietCalorieChoiceLabel { overflow: hidden; max-width: 100%; font-size: 10px; line-height: 14px; text-overflow: ellipsis; white-space: nowrap; }
.dietCalorieChoiceValue { font-size: 12px; line-height: 17px; font-weight: 550; font-variant-numeric: tabular-nums; }
.dietCalorieChoiceValue span { color: var(--dsw-alias-label-tertiary); font-size: 9px; font-weight: 400; }
.dietTargetStats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  padding: 10px 0;
  border-top: .5px solid var(--diet-border);
  border-bottom: .5px solid var(--diet-border);
}
.dietTargetStat { min-width: 0; padding: 0 10px; border-left: .5px solid var(--diet-border); }
.dietTargetStat:first-child { padding-left: 0; border-left: 0; }
.dietTargetStatLabel { color: var(--dsw-alias-label-tertiary); font-size: 9.5px; line-height: 14px; }
.dietTargetStatValue { margin-top: 1px; font-size: 14px; line-height: 21px; font-weight: 550; font-variant-numeric: tabular-nums; }
.dietTargetStatValue span { margin-left: 1px; color: var(--dsw-alias-label-tertiary); font-size: 9px; font-weight: 400; }
.dietCalorieSummary { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.dietCalorieSummaryLabel { color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 15px; }
.dietCalorieSummaryValue { font-size: 16px; line-height: 23px; font-weight: 550; font-variant-numeric: tabular-nums; }
.dietCalorieSummaryValue span { color: var(--dsw-alias-label-tertiary); font-size: 9px; font-weight: 400; }
.dietHint { margin: 0; color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 15px; }
.dietFormula { border-top: .5px solid var(--diet-border); }
.dietFormula summary {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 0 0;
  color: var(--dsw-alias-label-tertiary);
  font-size: 11px;
  line-height: 16px;
  cursor: pointer;
  list-style: none;
}
.dietFormula summary::-webkit-details-marker { display: none; }
.dietFormula summary svg { transition: transform .16s ease; }
.dietFormula[open] summary svg { transform: rotate(180deg); }
.dietFormula summary:hover { color: var(--dsw-alias-label-primary); }
.dietFormulaList { display: flex; flex-direction: column; gap: 4px; margin: 8px 0 0; padding: 10px; border-radius: 9px; background: color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent); }
.dietFormulaRow { margin: 0; color: var(--dsw-alias-label-secondary); font-size: 10.5px; line-height: 16px; font-variant-numeric: tabular-nums; }
.dietFormulaRow strong { color: var(--dsw-alias-label-primary); font-weight: 550; }
.dietFormulaNote { margin: 7px 0 0; color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 15px; }

/* ---------- trend ---------- */
.dietTrendBody { padding: 0 20px 18px; }
.dietTrendSummary { display: flex; align-items: baseline; gap: 6px; margin-bottom: 13px; }
.dietTrendAvg { font-size: 24px; line-height: 30px; font-weight: 530; font-variant-numeric: tabular-nums; letter-spacing: -.03em; }
.dietTrendAvgUnit { color: var(--dsw-alias-label-tertiary); font-size: 10px; }
.dietTrendTargetText { margin-left: auto; color: var(--dsw-alias-label-tertiary); font-size: 10px; font-variant-numeric: tabular-nums; }
.dietTrendRows { display: flex; flex-direction: column; gap: 2px; }
.dietTrendRow {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 36px;
  align-items: center;
  gap: 8px;
  height: 26px;
  padding: 0 4px;
  margin: 0 -4px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  text-align: left;
}
.dietTrendRow:hover { background: var(--diet-hover); }
.dietTrendRow[data-selected='true'] { background: color-mix(in srgb, var(--diet-energy) 8%, transparent); }
.dietTrendDayLabel { color: var(--dsw-alias-label-tertiary); font-size: 9.5px; line-height: 13px; white-space: nowrap; }
.dietTrendRail {
  position: relative;
  height: 12px;
  min-width: 0;
  border-radius: 6px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent);
}
.dietTrendBarH {
  position: absolute;
  top: 2px;
  left: 0;
  height: 8px;
  min-width: 2px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--diet-energy) 55%, transparent);
  transition: width .3s ease;
}
.dietTrendBarH[data-empty='true'] { width: 2px !important; background: var(--diet-border-strong); }
.dietTrendTargetMark {
  position: absolute;
  top: -3px;
  bottom: -3px;
  width: 0;
  border-left: 1px dashed color-mix(in srgb, var(--dsw-alias-label-primary) 32%, transparent);
  pointer-events: none;
}
.dietTrendRowValue { color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 14px; text-align: right; font-variant-numeric: tabular-nums; }
.dietTrendRow[data-today='true'] .dietTrendDayLabel,
.dietTrendRow[data-today='true'] .dietTrendRowValue { color: var(--dsw-alias-label-primary); font-weight: 600; }
.dietTrendRow[data-today='true'] .dietTrendBarH { background: var(--diet-energy); }
.dietTrendRow[data-over='true'] .dietTrendBarH { background: var(--diet-over); }
.dietTrendEmpty { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; min-height: 112px; padding: 14px; text-align: center; }
.dietTrendEmptyTitle { color: var(--dsw-alias-label-secondary); font-size: 11px; line-height: 17px; font-weight: 500; }
.dietTrendEmptyHint { color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 15px; }
.dietTrendFooter { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 8px; color: var(--dsw-alias-label-tertiary); font-size: 9.5px; line-height: 14px; }
.dietLegendLine { display: inline-flex; align-items: center; gap: 5px; }
.dietLegendDash { width: 0; height: 9px; border-left: 1px dashed color-mix(in srgb, var(--dsw-alias-label-primary) 30%, transparent); }

/* ---------- recent foods ---------- */
.dietRecentBody { padding: 0 14px 12px; }
.dietRecentList { display: flex; flex-direction: column; gap: 1px; }
.dietRecentItem {
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  min-height: 38px;
  padding: 5px 6px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  text-align: left;
}
.dietRecentItem:hover { background: var(--diet-hover); }
.dietRecentAvatar {
  display: inline-grid;
  place-items: center;
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: 8px;
  background: color-mix(in srgb, var(--diet-protein) 12%, transparent);
  color: var(--dsw-alias-state-success-primary);
  font-size: 10px;
  line-height: 16px;
  font-weight: 650;
}
.dietRecentItem:nth-child(2n) .dietRecentAvatar { background: color-mix(in srgb, var(--diet-carbs) 13%, transparent); color: var(--dsw-alias-state-warn-label); }
.dietRecentItem:nth-child(3n) .dietRecentAvatar { background: color-mix(in srgb, var(--diet-energy) 12%, transparent); color: var(--dsw-alias-state-business-primary); }
.dietRecentInfo { display: flex; flex: 1; min-width: 0; flex-direction: column; gap: 0; }
.dietRecentName { overflow: hidden; color: var(--dsw-alias-label-primary); font-size: 11px; line-height: 17px; font-weight: 500; text-overflow: ellipsis; white-space: nowrap; }
.dietRecentMeta { color: var(--dsw-alias-label-tertiary); font-size: 9.5px; line-height: 14px; font-variant-numeric: tabular-nums; }
.dietRecentPlus { color: var(--dsw-alias-label-tertiary); opacity: 0; }
.dietRecentItem:hover .dietRecentPlus, .dietRecentItem:focus-visible .dietRecentPlus { opacity: 1; }
.dietRecentEmpty { padding: 4px 6px 12px; color: var(--dsw-alias-label-tertiary); font-size: 10.5px; line-height: 17px; }
.dietRecentMore {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: calc(100% - 12px);
  margin: 5px 6px 0;
  padding-top: 9px;
  border: 0;
  border-top: .5px solid var(--diet-border);
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font-size: 10px;
  line-height: 15px;
}
.dietRecentMore:hover { color: var(--dsw-alias-label-primary); }

/* ---------- footer ---------- */
.dietFooter { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 7px; padding: 24px 4px 0; color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 15px; text-align: center; }
.dietFooterDot { width: 2px; height: 2px; border-radius: 50%; background: currentColor; opacity: .6; }

/* ---------- modal ---------- */
.dietModalBackdrop {
  position: fixed;
  inset: 0;
  z-index: 70;
  display: grid;
  place-items: center;
  padding: 24px;
  background: var(--dsw-alias-bg-mask-1);
  animation: dietFade .14s ease both;
}
.dietModal {
  display: flex;
  flex-direction: column;
  width: min(900px, 100%);
  max-height: min(760px, calc(100dvh - 48px));
  overflow: hidden;
  border: .5px solid var(--dsw-alias-border-l3);
  border-radius: var(--dsw-radius-panel);
  background: var(--dsw-alias-bg-layer-1);
  box-shadow: var(--dsw-shadow-lv3);
  animation: dietPop .18s cubic-bezier(.2,.8,.3,1) both;
}
.dietModal[data-size='compact'] { width: min(440px, 100%); }
.dietModalHead {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  padding: 21px 22px 16px;
  border-bottom: .5px solid var(--diet-border);
}
.dietModalTitle { margin: 0; font-size: 17px; line-height: 24px; font-weight: 560; letter-spacing: -.015em; }
.dietModalSubtitle { margin: 3px 0 0; color: var(--dsw-alias-label-tertiary); font-size: 11px; line-height: 17px; }
.dietModalClose {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  flex: none;
  margin: -4px -6px 0 0;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
}
.dietModalClose:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietModalBody { min-height: 0; flex: 1; overflow: hidden; }
.dietModalBodyScroll { min-height: 0; flex: 1; overflow: auto; }
.dietModalFooter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  flex: none;
  padding: 11px 22px;
  border-top: .5px solid var(--diet-border);
  background: var(--dsw-alias-bg-layer-1);
}
.dietModalError { flex: 1 1 100%; margin: 0; color: var(--diet-over); font-size: 10px; line-height: 15px; }
.dietModalFootSummary { display: flex; align-items: baseline; gap: 5px; margin-right: auto; }
.dietModalFootSummary > span { color: var(--dsw-alias-label-tertiary); font-size: 9.5px; line-height: 14px; }
.dietModalFootSummary > strong { color: var(--dsw-alias-label-primary); font-size: 15px; line-height: 20px; font-weight: 560; font-variant-numeric: tabular-nums; }
.dietModalFootSummary > strong small { margin-left: 2px; color: var(--dsw-alias-label-tertiary); font-size: 8px; font-weight: 400; }
.dietModalFootActions { display: flex; align-items: center; gap: 8px; margin-left: auto; }
.dietModalFooter .dietPrimaryButton, .dietModalFooter .dietSecondaryButton { min-height: 34px; padding: 0 14px; border-radius: 17px; font-size: 12px; }
.dietAddTabs { display: flex; gap: 2px; margin: 0 22px; padding-top: 13px; border-bottom: .5px solid var(--diet-border); }
.dietAddTab {
  position: relative;
  height: 32px;
  padding: 0 10px;
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
}
.dietAddTab:hover { color: var(--dsw-alias-label-primary); }
.dietAddTab[data-active='true'] { color: var(--dsw-alias-label-primary); }
.dietAddTab[data-active='true']::after {
  position: absolute;
  right: 8px;
  bottom: -1px;
  left: 8px;
  height: 2px;
  border-radius: 2px 2px 0 0;
  background: var(--dsw-alias-label-primary);
  content: '';
}
.dietAddLayout { display: grid; grid-template-columns: minmax(0, .93fr) minmax(0, 1.07fr); height: min(540px, calc(100dvh - 250px)); min-height: 340px; flex: 1; }
.dietFoodColumn { display: flex; flex-direction: column; min-width: 0; min-height: 0; padding: 14px 0 0 22px; border-right: .5px solid var(--diet-border); }
.dietSearchWrap { position: relative; display: flex; align-items: center; height: 34px; margin-right: 22px; }
.dietSearchIcon { position: absolute; left: 10px; display: inline-flex; color: var(--dsw-alias-label-tertiary); pointer-events: none; }
.dietSearchInput {
  width: 100%;
  height: 100%;
  padding: 0 30px 0 32px;
  border: .5px solid var(--diet-border-strong);
  border-radius: 9px;
  outline: 0;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-size: 12px;
}
.dietSearchInput::-webkit-search-cancel-button { display: none; }
.dietSearchInput::placeholder { color: var(--dsw-alias-label-tertiary); }
.dietSearchInput:focus { border-color: var(--dsw-alias-state-business-primary); }
.dietSearchClear {
  position: absolute;
  right: 5px;
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
}
.dietSearchClear:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietCategoryChips { display: flex; flex-wrap: wrap; gap: 3px; margin: 9px 22px 7px 0; }
.dietCategoryChip {
  height: 23px;
  padding: 0 8px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font-size: 9.5px;
  line-height: 15px;
  white-space: nowrap;
}
.dietCategoryChip:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietCategoryChip[data-active='true'] { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.dietFoodList { flex: 1; min-height: 0; overflow: auto; padding: 0 12px 16px 0; scrollbar-gutter: stable; }
.dietFoodRow {
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  min-height: 48px;
  padding: 6px 8px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  text-align: left;
}
.dietFoodRow:hover { background: var(--diet-hover); }
.dietFoodRow[data-active='true'] { background: color-mix(in srgb, var(--diet-energy) 9%, transparent); }
.dietFoodAvatar {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  flex: none;
  border-radius: 9px;
  background: color-mix(in srgb, var(--diet-carbs) 12%, transparent);
  color: var(--dsw-alias-state-warn-label);
  font-size: 11px;
  font-weight: 650;
}
.dietFoodRow[data-cat='protein'] .dietFoodAvatar { background: color-mix(in srgb, var(--diet-protein) 12%, transparent); color: var(--dsw-alias-state-success-primary); }
.dietFoodRow[data-cat='produce'] .dietFoodAvatar { background: color-mix(in srgb, var(--diet-protein) 10%, transparent); color: var(--dsw-alias-state-success-primary); }
.dietFoodRow[data-cat='dairy'] .dietFoodAvatar { background: color-mix(in srgb, var(--diet-energy) 11%, transparent); color: var(--dsw-alias-state-business-primary); }
.dietFoodRow[data-cat='fat'] .dietFoodAvatar { background: color-mix(in srgb, var(--diet-fat) 12%, transparent); color: var(--dsw-alias-state-done-primary); }
.dietFoodRow[data-cat='other'] .dietFoodAvatar { background: color-mix(in srgb, var(--diet-fat) 9%, transparent); color: var(--dsw-alias-state-done-primary); }
.dietFoodInfo { display: flex; flex: 1; min-width: 0; flex-direction: column; gap: 1px; }
.dietFoodName { display: flex; align-items: center; gap: 5px; min-width: 0; color: var(--dsw-alias-label-primary); font-size: 12px; line-height: 18px; font-weight: 500; }
.dietFoodName > span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dietFoodMeta { color: var(--dsw-alias-label-tertiary); font-size: 9.5px; line-height: 14px; font-variant-numeric: tabular-nums; }
.dietFoodBadge {
  flex: none;
  padding: 0 4px;
  border-radius: 4px;
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-tertiary);
  font-size: 9px;
  line-height: 13px;
  font-weight: 500;
}
.dietFoodKcal { flex: none; color: var(--dsw-alias-label-secondary); font-size: 10px; line-height: 15px; font-variant-numeric: tabular-nums; white-space: nowrap; }
.dietFoodEmpty { display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 38px 20px; text-align: center; }
.dietFoodEmptyTitle { color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 18px; font-weight: 500; }
.dietFoodEmptyHint { color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 15px; }

.dietDetailColumn { min-width: 0; min-height: 0; overflow: auto; padding: 18px 22px 20px; background: color-mix(in srgb, var(--dsw-alias-label-primary) 2.2%, transparent); scrollbar-gutter: stable; }
.dietDetailEmpty { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; height: 100%; min-height: 260px; padding: 24px; text-align: center; }
.dietDetailEmptyArt { display: grid; place-items: center; width: 58px; height: 58px; margin-bottom: 3px; border-radius: 50%; background: color-mix(in srgb, var(--diet-energy) 8%, transparent); color: var(--dsw-alias-label-tertiary); }
.dietDetailEmptyTitle { color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 18px; font-weight: 500; }
.dietDetailEmptyHint { max-width: 30ch; color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 16px; }
.dietSelectedHead { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
.dietSelectedTitle { margin: 0; font-size: 18px; line-height: 25px; font-weight: 560; letter-spacing: -.015em; }
.dietSelectedKcal { flex: none; color: var(--dsw-alias-label-secondary); font-size: 11px; line-height: 17px; font-variant-numeric: tabular-nums; }
.dietSelectedKcal strong { display: block; font-size: 18px; line-height: 23px; font-weight: 560; text-align: right; }
.dietSelectedKcal span { display: block; color: var(--dsw-alias-label-tertiary); font-size: 9px; text-align: right; }
.dietSelectedActions { display: flex; justify-content: flex-end; margin: -3px 0 10px; }
.dietEditFoodButton {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding: 0 8px;
  border: .5px solid var(--diet-border);
  border-radius: 12px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font-size: 9.5px;
  line-height: 15px;
  white-space: nowrap;
}
.dietEditFoodButton:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietPer100Line { margin: 5px 0 14px; color: var(--dsw-alias-label-tertiary); font-size: 10.5px; line-height: 16px; font-variant-numeric: tabular-nums; }
.dietReferenceNote { margin: -4px 0 12px; color: var(--dsw-alias-label-tertiary); font-size: 9.5px; line-height: 15px; }
.dietMacroPillsCaption { margin: 0 0 5px; color: var(--dsw-alias-label-tertiary); font-size: 9px; line-height: 13px; }
.dietMacroPills { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 7px; margin-bottom: 15px; }
.dietMacroPill { padding: 8px 9px; border: .5px solid var(--diet-border); border-radius: 9px; background: var(--dsw-alias-bg-base); }
.dietMacroPillLabel { display: flex; align-items: center; gap: 4px; color: var(--dsw-alias-label-tertiary); font-size: 9px; line-height: 14px; }
.dietMacroPillDot { width: 5px; height: 5px; border-radius: 50%; background: var(--diet-carbs); }
.dietMacroPill:nth-child(2) .dietMacroPillDot { background: var(--diet-protein); }
.dietMacroPill:nth-child(3) .dietMacroPillDot { background: var(--diet-fat); }
.dietMacroPillValue { margin-top: 2px; color: var(--dsw-alias-label-primary); font-size: 13px; line-height: 19px; font-weight: 550; font-variant-numeric: tabular-nums; }
.dietMacroPillValue span { color: var(--dsw-alias-label-tertiary); font-size: 8px; font-weight: 400; }
.dietFormBlock { display: flex; flex-direction: column; gap: 7px; margin-bottom: 14px; }
.dietFormBlockLabel { color: var(--dsw-alias-label-secondary); font-size: 10px; line-height: 15px; font-weight: 500; }
.dietPortionWrap { position: relative; display: flex; align-items: center; }
.dietPortionInput {
  width: 100%;
  height: 38px;
  padding: 0 42px 0 11px;
  border: .5px solid var(--diet-border-strong);
  border-radius: 9px;
  outline: 0;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-size: 16px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}
.dietPortionInput:focus { border-color: var(--dsw-alias-state-business-primary); }
.dietPortionInput::-webkit-outer-spin-button, .dietPortionInput::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.dietPortionInput[type='number'] { -moz-appearance: textfield; appearance: textfield; }
.dietPortionUnit { position: absolute; right: 12px; color: var(--dsw-alias-label-tertiary); font-size: 10px; pointer-events: none; }
.dietQuickGrams { display: flex; flex-wrap: wrap; gap: 5px; }
.dietQuickChip {
  height: 23px;
  padding: 0 8px;
  border: .5px solid var(--diet-border);
  border-radius: 12px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font-size: 9.5px;
  font-variant-numeric: tabular-nums;
}
.dietQuickChip:hover { background: var(--diet-hover); color: var(--dsw-alias-label-primary); }
.dietMealChoices { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 3px; padding: 3px; border-radius: 10px; background: color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent); }
.dietMealChoice {
  height: 28px;
  padding: 0 5px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font-size: 10px;
  white-space: nowrap;
}
.dietMealChoice:hover { color: var(--dsw-alias-label-primary); }
.dietMealChoice[data-active='true'] { background: var(--dsw-alias-button-elevated-fill); color: var(--dsw-alias-label-primary); box-shadow: var(--dsw-shadow-lv1); }
.dietPreviewCard {
  margin-top: 2px;
  padding: 12px;
  border: .5px solid color-mix(in srgb, var(--diet-energy) 25%, var(--diet-border));
  border-radius: 11px;
  background:
    radial-gradient(100% 150% at 100% 0%, color-mix(in srgb, var(--diet-energy) 10%, transparent), transparent 65%),
    var(--dsw-alias-bg-base);
}
.dietPreviewTop { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
.dietPreviewLabel { color: var(--dsw-alias-label-tertiary); font-size: 9.5px; line-height: 14px; }
.dietPreviewKcal { font-size: 22px; line-height: 28px; font-weight: 560; font-variant-numeric: tabular-nums; letter-spacing: -.03em; }
.dietPreviewKcal span { margin-left: 2px; color: var(--dsw-alias-label-tertiary); font-size: 9px; font-weight: 400; letter-spacing: 0; }
.dietPreviewHint { color: var(--dsw-alias-label-tertiary); font-size: 9.5px; line-height: 14px; text-align: right; }
.dietPreviewMacros { display: flex; flex-wrap: wrap; gap: 4px 12px; margin-top: 7px; padding-top: 8px; border-top: .5px solid var(--diet-border); color: var(--dsw-alias-label-secondary); font-size: 10px; line-height: 15px; font-variant-numeric: tabular-nums; }
.dietPreviewMacros b { color: var(--dsw-alias-label-primary); font-weight: 550; }
.dietFormActions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 15px; }
.dietFormActions .dietPrimaryButton { min-height: 34px; padding: 0 14px; font-size: 12px; }
.dietFormActions .dietSecondaryButton { min-height: 34px; padding: 0 13px; font-size: 12px; }

/* custom form */
.dietCustomBody { min-height: 0; flex: 1; overflow: auto; padding: 18px 22px 22px; }
.dietCustomHint { margin: 0 0 14px; color: var(--dsw-alias-label-tertiary); font-size: 10.5px; line-height: 17px; }
.dietFormGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 11px; }
.dietFormGrid .dietFull { grid-column: 1 / -1; }
.dietCustomField { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
.dietCustomLabel { color: var(--dsw-alias-label-secondary); font-size: 10px; line-height: 15px; font-weight: 500; }
.dietCustomInput {
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border: .5px solid var(--diet-border-strong);
  border-radius: 8px;
  outline: 0;
  background: var(--dsw-alias-bg-base);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
}
.dietCustomInput:focus { border-color: var(--dsw-alias-state-business-primary); }
.dietCustomInput::-webkit-outer-spin-button, .dietCustomInput::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.dietCustomInput[type='number'] { -moz-appearance: textfield; appearance: textfield; }
.dietCustomInput::placeholder { color: var(--dsw-alias-label-tertiary); font-size: 11px; }
.dietCustomError { margin: 10px 0 0; color: var(--diet-over); font-size: 10px; line-height: 15px; }
.dietCustomNote { margin: 4px 0 0; color: var(--dsw-alias-label-tertiary); font-size: 9px; line-height: 14px; }
.dietCustomActions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 16px; }
.dietSyncRow {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  margin-top: 12px;
  padding: 8px 9px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent);
  color: var(--dsw-alias-label-secondary);
  font-size: 10px;
  line-height: 15px;
  cursor: pointer;
}
.dietSyncRow input { flex: none; margin: 2px 0 0; accent-color: var(--dsw-alias-state-business-primary); }
.dietSyncHint { display: block; margin-top: 1px; color: var(--dsw-alias-label-tertiary); font-size: 9px; line-height: 14px; }
.dietCustomList { margin-top: 22px; padding-top: 15px; border-top: .5px solid var(--diet-border); }
.dietCustomListTitle { margin: 0 0 8px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; line-height: 16px; font-weight: 550; }
.dietCustomFoodRow { display: flex; align-items: center; gap: 8px; min-height: 34px; padding: 4px 0; border-bottom: .5px solid var(--diet-border); }
.dietCustomFoodRow:last-child { border-bottom: 0; }
.dietCustomFoodRow[data-editing='true'] { margin: 0 -5px; padding-inline: 5px; border-radius: 6px; background: color-mix(in srgb, var(--diet-energy) 7%, transparent); }
.dietCustomFoodName { flex: 1; min-width: 0; overflow: hidden; font-size: 11px; line-height: 17px; text-overflow: ellipsis; white-space: nowrap; }
.dietCustomFoodMeta { color: var(--dsw-alias-label-tertiary); font-size: 9px; font-variant-numeric: tabular-nums; white-space: nowrap; }
.dietInlineConfirm { display: flex; align-items: center; gap: 5px; color: var(--dsw-alias-label-tertiary); font-size: 9px; white-space: nowrap; }
.dietInlineConfirm button { padding: 0; border: 0; background: transparent; font-size: 9px; color: var(--dsw-alias-label-secondary); }
.dietInlineConfirm button:hover { color: var(--dsw-alias-label-primary); }
.dietInlineConfirm button[data-danger='true'] { color: var(--diet-over); }

/* confirm dialog */
.dietConfirmBody { padding: 4px 22px 22px; }
.dietConfirmText { margin: 0; color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 19px; }
.dietConfirmActions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 20px; }
.dietDangerButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 14px;
  border: 1px solid transparent;
  border-radius: 17px;
  background: var(--diet-over);
  color: var(--dsw-alias-label-on-color);
  font-size: 12px;
  font-weight: 500;
}
.dietDangerButton:hover { background: color-mix(in srgb, var(--diet-over) 82%, var(--dsw-alias-label-primary)); }

/* toast */
.dietToast {
  position: fixed;
  bottom: 26px;
  left: 50%;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: min(440px, calc(100vw - 32px));
  min-height: 42px;
  padding: 8px 9px 8px 14px;
  transform: translateX(-50%);
  border: .5px solid var(--dsw-alias-border-l3);
  border-radius: 21px;
  background: var(--dsw-alias-toast-bg);
  color: var(--dsw-alias-toast-label);
  box-shadow: var(--dsw-shadow-lv2);
  font-size: 11px;
  line-height: 17px;
  animation: dietToast .2s cubic-bezier(.2,.8,.3,1) both;
}
.dietToastText { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dietToastAction {
  flex: none;
  height: 26px;
  padding: 0 9px;
  border: 0;
  border-radius: 13px;
  background: color-mix(in srgb, var(--dsw-alias-toast-label) 12%, transparent);
  color: var(--dsw-alias-toast-action);
  font-size: 10px;
  font-weight: 550;
}
.dietToastAction:hover { background: color-mix(in srgb, var(--dsw-alias-toast-label) 18%, transparent); }
.dietToastClose {
  display: inline-grid;
  place-items: center;
  width: 26px;
  height: 26px;
  flex: none;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: color-mix(in srgb, var(--dsw-alias-toast-label) 65%, transparent);
}
.dietToastClose:hover { background: color-mix(in srgb, var(--dsw-alias-toast-label) 10%, transparent); color: var(--dsw-alias-toast-label); }

@keyframes dietFade { from { opacity: 0; } to { opacity: 1; } }
@keyframes dietPop { from { opacity: 0; transform: translateY(7px) scale(.988); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes dietToast { from { opacity: 0; transform: translate(-50%, 6px); } to { opacity: 1; transform: translate(-50%, 0); } }

/* ---------- responsive ---------- */
@media (max-width: 1220px) {
  .dietKpis { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .dietKpiEnergy { grid-column: 1 / -1; min-height: 132px; }
  .dietLayout { grid-template-columns: minmax(0, 1fr); }
  .dietSideColumn { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: start; }
  .dietSideColumn .dietTargetCard { grid-row: span 2; }
}
@media (max-width: 760px) {
  .dietContent { padding-inline: 16px; }
  .dietHeading { align-items: flex-start; padding-top: 22px; margin-bottom: 18px; }
  .dietHeadingActions { width: 100%; justify-content: space-between; }
  .dietPrimaryButton[data-header-add='true'] { order: 3; flex: none; }
  .dietDateNav { flex: 1; min-width: 0; }
  .dietDateLabel { flex: 1; min-width: 0; }
  .dietKpis { gap: 10px; }
  .dietKpi { min-height: 136px; padding: 15px; }
  .dietKpiEnergy { min-height: 128px; }
  .dietRingWrap { width: 88px; height: 88px; }
  .dietSideColumn { display: flex; }
  .dietCardHead { padding: 16px 16px 12px; }
  .dietMeals { padding-inline: 16px; }
  .dietTargetBody { padding: 0 16px 16px; }
  .dietTrendBody { padding: 0 16px 16px; }
  .dietRecentBody { padding: 0 10px 10px; }
  .dietModalBackdrop { padding: 8px; }
  .dietModal { max-height: calc(100dvh - 16px); border-radius: var(--dsw-radius-xl); }
  .dietAddLayout { grid-template-columns: minmax(0, 1fr); height: auto; max-height: min(560px, calc(100dvh - 230px)); overflow: auto; }
  .dietFoodColumn { padding-left: 16px; border-right: 0; border-bottom: .5px solid var(--diet-border); min-height: 0; }
  .dietFoodColumn .dietSearchWrap, .dietFoodColumn .dietCategoryChips { margin-right: 16px; }
  .dietFoodList { max-height: 238px; padding-right: 10px; }
  .dietDetailColumn { overflow: visible; padding: 16px; }
  .dietDetailEmpty { min-height: 150px; }
  .dietAddTabs { margin-inline: 16px; }
  .dietModalHead { padding: 18px 16px 13px; }
  .dietCustomBody { padding: 16px; }
  .dietModalFooter { padding: 10px 16px; }
  .dietConfirmBody { padding: 4px 16px 18px; }
}
@media (max-width: 560px) {
  .dietTitle { font-size: 23px; line-height: 30px; }
  .dietSubtitle { font-size: 12px; line-height: 18px; }
  .dietKpis { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  .dietKpiEnergy { grid-column: 1 / -1; }
  .dietKpi { min-height: 128px; }
  .dietKpiValue { font-size: 25px; }
  .dietKpiEnergy .dietKpiValue { font-size: 31px; }
  .dietKpiFoot { font-size: 10px; }
  .dietEntryKcal { min-width: 50px; }
  .dietEntries { padding-left: 0; }
  .dietMealEmpty { margin-left: 42px; }
  .dietFormGrid { grid-template-columns: minmax(0, 1fr); }
  .dietFormGrid .dietFull { grid-column: auto; }
  .dietMacroPills { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .dietHeadingActions { gap: 8px; }
  .dietTodayButton { padding: 0 11px; }
  .dietDateLabel { min-width: 0; }
  .dietDateLabel .dietDateWeekday { display: none; }
  .dietLegendLine { display: none; }
}
@media (max-width: 400px) {
  .dietContent { padding-inline: 12px; }
  .dietKpi { min-height: 120px; }
  .dietPrimaryButton[data-header-add='true'] { width: 36px; padding: 0; font-size: 0; gap: 0; }
  .dietEntries { padding-left: 0; }
  .dietMealKcal { display: none; }
  .dietMealChoices { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .dietToast { left: 12px; right: 12px; max-width: none; transform: none; }
  @keyframes dietToast { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
}
@media (prefers-reduced-motion: reduce) {
  .dietPage *, .dietPage *::before, .dietPage *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
}
`
