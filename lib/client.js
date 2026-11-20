/* dsh-diet browser entry, built from src/client.jsx. */
window.__ModuleLoader__.load({
  id: 'dsh-diet',
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.jsx
var client_exports = {};
__export(client_exports, {
  DietPage: () => DietPage,
  DietPanelIcon: () => DietPanelIcon,
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(client_exports);
var import_react = __toESM(require("react"), 1);

// src/foods.js
var FOOD_CATEGORIES = ["all", "protein", "staple", "produce", "dairy", "fat", "other", "custom"];
var BUILT_IN_FOODS = [
  { id: "egg", nameKey: "food.egg", category: "protein", defaultGrams: 50, per100: { kcal: 144, carbs: 1.1, protein: 12.6, fat: 9.5 } },
  { id: "chicken-breast", nameKey: "food.chickenBreast", category: "protein", defaultGrams: 120, per100: { kcal: 118, carbs: 0.6, protein: 24.6, fat: 1.9 } },
  { id: "lean-beef", nameKey: "food.leanBeef", category: "protein", defaultGrams: 100, per100: { kcal: 125, carbs: 0, protein: 20.2, fat: 4.2 } },
  { id: "salmon", nameKey: "food.salmon", category: "protein", defaultGrams: 100, per100: { kcal: 139, carbs: 0, protein: 17.2, fat: 7.8 } },
  { id: "shrimp", nameKey: "food.shrimp", category: "protein", defaultGrams: 100, per100: { kcal: 93, carbs: 2.8, protein: 18.6, fat: 0.8 } },
  { id: "firm-tofu", nameKey: "food.firmTofu", category: "protein", defaultGrams: 100, per100: { kcal: 116, carbs: 3, protein: 12.2, fat: 6.7 } },
  { id: "whey", nameKey: "food.whey", category: "protein", defaultGrams: 30, per100: { kcal: 400, carbs: 8, protein: 80, fat: 6 } },
  { id: "cooked-rice", nameKey: "food.cookedRice", category: "staple", defaultGrams: 150, per100: { kcal: 116, carbs: 25.9, protein: 2.6, fat: 0.3 } },
  { id: "oats", nameKey: "food.oats", category: "staple", defaultGrams: 50, per100: { kcal: 380, carbs: 66.9, protein: 15, fat: 6.7 } },
  { id: "whole-wheat-bread", nameKey: "food.wholeWheatBread", category: "staple", defaultGrams: 60, per100: { kcal: 246, carbs: 43, protein: 9, fat: 3.4 } },
  { id: "potato", nameKey: "food.potato", category: "staple", defaultGrams: 150, per100: { kcal: 77, carbs: 17, protein: 2, fat: 0.1 } },
  { id: "sweet-potato", nameKey: "food.sweetPotato", category: "staple", defaultGrams: 150, per100: { kcal: 86, carbs: 20.1, protein: 1.6, fat: 0.1 } },
  { id: "banana", nameKey: "food.banana", category: "produce", defaultGrams: 100, per100: { kcal: 93, carbs: 22, protein: 1.4, fat: 0.2 } },
  { id: "apple", nameKey: "food.apple", category: "produce", defaultGrams: 150, per100: { kcal: 53, carbs: 13.7, protein: 0.4, fat: 0.2 } },
  { id: "blueberry", nameKey: "food.blueberry", category: "produce", defaultGrams: 80, per100: { kcal: 57, carbs: 14.5, protein: 0.7, fat: 0.3 } },
  { id: "broccoli", nameKey: "food.broccoli", category: "produce", defaultGrams: 100, per100: { kcal: 36, carbs: 4.3, protein: 4.1, fat: 0.6 } },
  { id: "spinach", nameKey: "food.spinach", category: "produce", defaultGrams: 80, per100: { kcal: 23, carbs: 1.4, protein: 2.9, fat: 0.4 } },
  { id: "avocado", nameKey: "food.avocado", category: "produce", defaultGrams: 80, per100: { kcal: 160, carbs: 8.5, protein: 2, fat: 14.7 } },
  { id: "whole-milk", nameKey: "food.wholeMilk", category: "dairy", defaultGrams: 250, per100: { kcal: 65, carbs: 5, protein: 3.3, fat: 3.6 } },
  { id: "plain-yogurt", nameKey: "food.plainYogurt", category: "dairy", defaultGrams: 150, per100: { kcal: 62, carbs: 5, protein: 3.5, fat: 3 } },
  { id: "almonds", nameKey: "food.almonds", category: "fat", defaultGrams: 20, per100: { kcal: 579, carbs: 21.6, protein: 21.2, fat: 49.9 } },
  { id: "peanut-butter", nameKey: "food.peanutButter", category: "fat", defaultGrams: 15, per100: { kcal: 588, carbs: 20, protein: 25, fat: 50 } },
  { id: "olive-oil", nameKey: "food.oliveOil", category: "fat", defaultGrams: 10, per100: { kcal: 884, carbs: 0, protein: 0, fat: 100 } },
  { id: "dark-chocolate", nameKey: "food.darkChocolate", category: "other", defaultGrams: 20, per100: { kcal: 598, carbs: 45.9, protein: 7.8, fat: 42.6 } }
];
var FOOD_BY_ID = new Map(BUILT_IN_FOODS.map((food) => [food.id, food]));
function energyFromMacros(carbs, protein, fat) {
  return Math.round((Number(carbs) || 0) * 4 + (Number(protein) || 0) * 4 + (Number(fat) || 0) * 9);
}

// src/locales.js
var NS = "diet";
var zh = {
  panel: "\u996E\u98DF\u8BB0\u5F55",
  "page.eyebrow": "\u6BCF\u65E5\u8425\u517B",
  "page.title": "\u996E\u98DF\u8BB0\u5F55",
  "page.subtitle": "\u6309\u4F53\u91CD\u7B97\u51FA\u4ECA\u5929\u7684\u76EE\u6807\uFF0C\u518D\u628A\u6BCF\u4E00\u9910\u6309\u514B\u8BB0\u4E0B\u6765\u3002",
  "page.addFood": "\u6DFB\u52A0\u98DF\u7269",
  "page.datePrev": "\u524D\u4E00\u5929",
  "page.dateNext": "\u4E0B\u4E00\u5929",
  "page.today": "\u4ECA\u5929",
  "page.backToday": "\u56DE\u5230\u4ECA\u5929",
  "page.day": "\u6BCF\u65E5\u8BB0\u5F55",
  "onboard.weight": "\u76EE\u6807\u6682\u65F6\u6309 {weight} kg \u4F30\u7B97\uFF0C\u786E\u8BA4\u6216\u4FEE\u6539\u4F53\u91CD\u540E\u518D\u5F00\u59CB\u8BB0\u5F55\u3002",
  "onboard.action": "\u8BBE\u7F6E\u4F53\u91CD",
  "unit.g": "g",
  "unit.kg": "kg",
  "unit.kcal": "kcal",
  "unit.perDay": "/ \u5929",
  "kpi.energy": "\u70ED\u91CF",
  "kpi.carbs": "\u78B3\u6C34",
  "kpi.protein": "\u86CB\u767D\u8D28",
  "kpi.fat": "\u8102\u80AA",
  "kpi.target": "\u76EE\u6807",
  "kpi.remaining": "\u8FD8\u53EF\u6444\u5165",
  "kpi.over": "\u8D85\u51FA",
  "kpi.percent": "{percent}%",
  "kpi.energyHint": "\u76EE\u6807 {target} kcal",
  "kpi.macroTarget": "\u76EE\u6807 {target} g",
  "kpi.logged": "\u5DF2\u8BB0\u5F55",
  "kpi.noTarget": "\u8BF7\u5148\u8BBE\u7F6E\u4F53\u91CD",
  "target.title": "\u6BCF\u65E5\u76EE\u6807",
  "target.badge": "\u81EA\u52A8\u8BA1\u7B97",
  "target.weight": "\u4F53\u91CD",
  "target.activity": "\u6D3B\u52A8\u6C34\u5E73",
  "target.active": "\u8FD0\u52A8\u4EBA\u7FA4",
  "target.inactive": "\u975E\u8FD0\u52A8\u4EBA\u7FA4",
  "target.carbLevel": "\u78B3\u6C34\u6863\u4F4D",
  "target.carbValue": "{grams} g/kg",
  "target.fatSide": "{fat} g \u8102\u80AA",
  "target.calorieBasis": "\u70ED\u91CF\u53E3\u5F84",
  "target.macroBasis": "\u5B8F\u91CF\u6298\u5408",
  "target.quickBasis": "\u4F53\u91CD\u901F\u7B97",
  "target.hint": "\u70ED\u91CF\u53E3\u5F84\u53EA\u6539\u53D8\u70ED\u91CF\u8FDB\u5EA6\uFF0C\u4E0D\u6539\u53D8\u4E09\u5927\u8425\u517B\u7D20\u76EE\u6807\u3002",
  "target.macroCalories": "\u5B8F\u91CF\u6298\u5408",
  "target.quickCalories": "\u4F53\u91CD\u901F\u7B97",
  "target.quickFormula": "\u901F\u7B97 \xB7 {weight} kg \xD7 {factor}",
  "target.details": "\u67E5\u770B\u8BA1\u7B97\u65B9\u5F0F",
  "target.formulaTitle": "\u8BA1\u7B97\u65B9\u5F0F",
  "target.formulaCarb": "\u78B3\u6C34\uFF1A{weight} kg \xD7 {grams} g/kg \u2248 {total} g",
  "target.formulaProtein": "\u86CB\u767D\u8D28\uFF1A{weight} kg \xD7 {grams} g/kg \u2248 {total} g",
  "target.formulaFat": "\u8102\u80AA\uFF1A{total} g",
  "target.formulaKcal": "\u5B8F\u91CF\u6298\u5408\uFF1A{carbs} \xD7 4 + {protein} \xD7 4 + {fat} \xD7 9 \u2248 {total} kcal",
  "target.formulaQuick": "\u4F53\u91CD\u901F\u7B97\uFF1A{weight} kg \xD7 {factor} \u2248 {total} kcal",
  "target.formulaNote": "\u9AD8\u78B3\u65E5\u642D\u914D 40 g \u8102\u80AA\uFF0C\u4F4E\u78B3\u65E5\u642D\u914D 50 g \u8102\u80AA\u3002\u4F53\u91CD\u901F\u7B97\u53EA\u4F5C\u4E3A\u53C2\u8003\uFF0C\u4E0D\u53C2\u4E0E\u5B8F\u91CF\u76EE\u6807\u7684\u63A8\u5BFC\u3002",
  "target.invalidWeight": "\u8BF7\u8F93\u5165 30\u2013300 kg \u4E4B\u95F4\u7684\u4F53\u91CD",
  "log.title": "\u4ECA\u5929\u5403\u4E86\u4EC0\u4E48",
  "log.titleOther": "{date} \u5403\u4E86\u4EC0\u4E48",
  "log.count": "{count} \u9879\u8BB0\u5F55",
  "log.countOne": "1 \u9879\u8BB0\u5F55",
  "log.add": "\u8BB0\u5F55\u98DF\u7269",
  "log.clear": "\u6E05\u7A7A",
  "log.emptyTitle": "\u4ECA\u5929\u8FD8\u6CA1\u6709\u8BB0\u5F55",
  "log.emptyBody": "\u6DFB\u52A0\u7B2C\u4E00\u6837\u98DF\u7269\uFF0C\u70ED\u91CF\u4E0E\u8425\u517B\u7D20\u4F1A\u81EA\u52A8\u7D2F\u8BA1\u3002",
  "log.emptyAction": "\u6DFB\u52A0\u7B2C\u4E00\u6837\u98DF\u7269",
  "log.mealEmpty": "\u6682\u65E0\u8BB0\u5F55",
  "log.mealAdd": "\u6DFB\u52A0\u5230{meal}",
  "log.mealKcal": "{kcal} kcal",
  "log.viewing": "\u6B63\u5728\u67E5\u770B",
  "meal.breakfast": "\u65E9\u9910",
  "meal.lunch": "\u5348\u9910",
  "meal.dinner": "\u665A\u9910",
  "meal.snack": "\u52A0\u9910",
  "meal.breakfast.short": "\u65E9",
  "meal.lunch.short": "\u5348",
  "meal.dinner.short": "\u665A",
  "meal.snack.short": "\u52A0",
  "entry.edit": "\u7F16\u8F91 {name}",
  "entry.remove": "\u5220\u9664 {name}",
  "entry.grams": "{grams} g",
  "entry.macros": "\u78B3 {carbs} \xB7 \u86CB {protein} \xB7 \u8102 {fat}",
  "entry.kcal": "{kcal} kcal",
  "add.title": "\u6DFB\u52A0\u98DF\u7269",
  "add.editTitle": "\u7F16\u8F91\u8BB0\u5F55",
  "add.editSubtitle": "\u8C03\u6574\u8FD9\u6761\u8BB0\u5F55\u7684\u98DF\u7269\u3001\u514B\u6570\u6216\u9910\u6B21\u3002",
  "add.subtitle": "\u4ECE\u98DF\u7269\u5E93\u9009\u62E9\uFF0C\u6216\u521B\u5EFA\u81EA\u5DF1\u7684\u98DF\u7269\u3002",
  "add.search": "\u641C\u7D22\u98DF\u7269",
  "add.searchClear": "\u6E05\u9664\u641C\u7D22",
  "add.searchPlaceholder": "\u641C\u7D22\u98DF\u7269\u540D\u79F0",
  "add.noResults": "\u6CA1\u6709\u627E\u5230\u98DF\u7269",
  "add.noResultsHint": "\u6362\u4E2A\u5173\u952E\u8BCD\uFF0C\u6216\u65B0\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u98DF\u7269\u3002",
  "add.preset": "\u98DF\u7269\u5E93",
  "add.customTab": "\u81EA\u5B9A\u4E49",
  "add.selected": "\u5DF2\u9009\u98DF\u7269",
  "add.choose": "\u4ECE\u5DE6\u4FA7\u9009\u62E9\u4E00\u79CD\u98DF\u7269",
  "add.chooseHint": "\u9009\u62E9\u540E\u8F93\u5165\u514B\u6570\uFF0C\u5C31\u80FD\u770B\u5230\u672C\u6B21\u6444\u5165\u3002",
  "add.portion": "\u98DF\u7528\u91CF",
  "add.gramsPlaceholder": "\u8F93\u5165\u514B\u6570",
  "add.quick": "\u5FEB\u6377\u4EFD\u91CF",
  "add.meal": "\u9910\u6B21",
  "add.preview": "\u672C\u6B21\u6444\u5165",
  "add.previewHint": "\u6309 {grams} g \u8BA1\u7B97",
  "add.confirm": "\u6DFB\u52A0\u8BB0\u5F55",
  "add.save": "\u4FDD\u5B58\u4FEE\u6539",
  "add.customTitle": "\u81EA\u5B9A\u4E49\u98DF\u7269",
  "add.editCustomTitle": "\u7F16\u8F91\u81EA\u5B9A\u4E49\u98DF\u7269",
  "add.editCustomSubtitle": "\u4FEE\u6539\u6BCF 100 g \u7684\u8425\u517B\u6570\u636E\uFF1B\u5DF2\u6709\u8BB0\u5F55\u9ED8\u8BA4\u4FDD\u6301\u4E0D\u53D8\u3002",
  "add.editCustomHint": "\u53EA\u4FEE\u6539\u98DF\u7269\u5E93\u4E2D\u7684\u6570\u503C\u3002\u5DF2\u6709\u8BB0\u5F55\u9ED8\u8BA4\u4FDD\u6301\u539F\u503C\uFF0C\u53EF\u5728\u4E0B\u65B9\u52FE\u9009\u540C\u6B65\u66F4\u65B0\u3002",
  "add.editCustom": "\u7F16\u8F91\u98DF\u7269\u6570\u636E",
  "add.customizePreset": "\u4FEE\u6539\u5E76\u4FDD\u5B58\u4E3A\u81EA\u5B9A\u4E49",
  "add.referenceNote": "\u5185\u7F6E\u98DF\u7269\u662F\u901A\u7528\u53C2\u8003\u503C\uFF0C\u54C1\u79CD\u3001\u90E8\u4F4D\u3001\u751F\u719F\u65B9\u5F0F\u548C\u54C1\u724C\u4E0D\u540C\u90FD\u4F1A\u8BA9\u6570\u503C\u53D8\u5316\uFF1B\u8981\u6309\u4F60\u624B\u4E0A\u7684\u98DF\u7269\u8BA1\u7B97\uFF0C\u8BF7\u53E6\u5B58\u4E3A\u81EA\u5B9A\u4E49\u3002",
  "add.copyPresetHint": "\u9884\u8BBE\u98DF\u7269\u4E0D\u4F1A\u88AB\u6539\u52A8\uFF1B\u4FDD\u5B58\u540E\u4F1A\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u98DF\u7269\u52A0\u5165\u98DF\u7269\u5E93\uFF0C\u5E76\u6DFB\u52A0\u8FD9\u6B21\u8BB0\u5F55\u3002",
  "add.customListTitle": "\u5DF2\u4FDD\u5B58\u7684\u81EA\u5B9A\u4E49\u98DF\u7269",
  "add.syncEntries": "\u540C\u65F6\u66F4\u65B0\u5DF2\u8BB0\u5F55\u7684 {count} \u6761\u6570\u636E",
  "add.syncEntriesHint": "\u52FE\u9009\u540E\uFF0C\u8FC7\u53BB\u7528\u8FD9\u4E2A\u98DF\u7269\u8BB0\u5F55\u7684\u6761\u76EE\u4E5F\u4F1A\u6539\u6210\u65B0\u6570\u503C\u3002",
  "add.saveCustomChanges": "\u4FDD\u5B58\u4FEE\u6539",
  "add.customHint": "\u586B\u5199\u6BCF 100 g \u7684\u6570\u503C\uFF0C\u4FDD\u5B58\u540E\u4F1A\u52A0\u5165\u98DF\u7269\u5E93\u3002",
  "add.name": "\u98DF\u7269\u540D\u79F0",
  "add.namePlaceholder": "\u4F8B\u5982\uFF1A\u81EA\u5236\u9E21\u8089\u6C99\u62C9",
  "add.per100": "\u6BCF 100 g",
  "add.carbs": "\u78B3\u6C34",
  "add.protein": "\u86CB\u767D\u8D28",
  "add.fat": "\u8102\u80AA",
  "add.kcalOptional": "\u70ED\u91CF\uFF08\u53EF\u9009\uFF09",
  "add.autoKcal": "\u7559\u7A7A\u6216\u4FEE\u6539\u8425\u517B\u7D20\u65F6\uFF0C\u6309 4 / 4 / 9 \u81EA\u52A8\u8BA1\u7B97",
  "add.saveAndAdd": "\u4FDD\u5B58\u5E76\u6DFB\u52A0",
  "add.nameRequired": "\u8BF7\u8F93\u5165\u98DF\u7269\u540D\u79F0",
  "add.invalidNumber": "\u8425\u517B\u6570\u503C\u9700\u4E3A 0 \u6216\u6B63\u6570",
  "add.invalidGrams": "\u8BF7\u8F93\u5165\u5927\u4E8E 0 \u7684\u514B\u6570",
  "add.gramsMax": "\u5355\u6B21\u6700\u591A\u8BB0\u5F55 10000 g",
  "add.deleteCustom": "\u5220\u9664\u8FD9\u4E2A\u81EA\u5B9A\u4E49\u98DF\u7269",
  "add.deleteCustomConfirm": "\u5220\u9664\u540E\u4E0D\u5F71\u54CD\u5DF2\u8BB0\u5F55\u7684\u996E\u98DF\u3002",
  "add.customBadge": "\u81EA\u5B9A\u4E49",
  "add.presetBadge": "\u9884\u8BBE",
  "add.per100Line": "\u6BCF 100 g\uFF1A\u78B3 {carbs} \xB7 \u86CB {protein} \xB7 \u8102 {fat} \xB7 {kcal} kcal",
  "library.title": "\u98DF\u7269\u5E93",
  "library.subtitle": "\u6BCF 100 g \u53EF\u98DF\u90E8\uFF0C\u6570\u503C\u4E3A\u5E38\u89C1\u53C2\u8003\u3002",
  "library.search": "\u641C\u7D22\u98DF\u7269",
  "library.empty": "\u6CA1\u6709\u5339\u914D\u7684\u98DF\u7269",
  "library.recentTitle": "\u6700\u8FD1\u5403\u8FC7",
  "library.recentHint": "\u70B9\u4E00\u4E0B\u5C31\u80FD\u5FEB\u901F\u6DFB\u52A0\u3002",
  "library.startTitle": "\u4ECE\u8FD9\u91CC\u5F00\u59CB",
  "library.startHint": "\u9009\u4E00\u79CD\u5E38\u89C1\u98DF\u7269\uFF0C\u5F00\u59CB\u4ECA\u5929\u7684\u7B2C\u4E00\u7B14\u8BB0\u5F55\u3002",
  "library.recentEmpty": "\u8BB0\u5F55\u51E0\u9910\u540E\uFF0C\u5E38\u5403\u7684\u98DF\u7269\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002",
  "library.viewAll": "\u5168\u90E8 {count} \u79CD",
  "library.per100Short": "\u6BCF 100 g",
  "library.custom": "\u81EA\u5B9A\u4E49",
  "trend.title": "\u8FD1 7 \u5929",
  "trend.subtitle": "\u70ED\u91CF\u6444\u5165\u4E0E\u76EE\u6807\u5BF9\u6BD4",
  "trend.avg": "\u65E5\u5747",
  "trend.target": "\u76EE\u6807",
  "trend.empty": "\u8FD8\u6CA1\u6709\u8DB3\u591F\u7684\u8BB0\u5F55",
  "trend.emptyHint": "\u8FDE\u7EED\u8BB0\u5F55\u51E0\u5929\uFF0C\u5C31\u80FD\u770B\u5230\u8D8B\u52BF\u3002",
  "trend.today": "\u4ECA\u5929",
  "trend.kcal": "{kcal} kcal",
  "toast.removed": "\u5DF2\u5220\u9664 {name}",
  "toast.cleared": "\u5DF2\u6E05\u7A7A {date} \u7684\u8BB0\u5F55",
  "toast.foodUpdated": "\u5DF2\u66F4\u65B0 {name} \u7684\u8425\u517B\u6570\u636E",
  "toast.undo": "\u64A4\u9500",
  "toast.close": "\u5173\u95ED\u63D0\u793A",
  "clear.title": "\u6E05\u7A7A\u8FD9\u4E00\u5929\u7684\u8BB0\u5F55\uFF1F",
  "clear.body": "\u5C06\u5220\u9664 {date} \u7684\u5168\u90E8 {count} \u6761\u98DF\u7269\u8BB0\u5F55\u3002\u6E05\u7A7A\u540E\u4ECD\u53EF\u7ACB\u5373\u64A4\u9500\u3002",
  "clear.cancel": "\u53D6\u6D88",
  "clear.confirm": "\u6E05\u7A7A\u8BB0\u5F55",
  "footer.local": "\u8BB0\u5F55\u4FDD\u5B58\u5728\u6B64\u6D4F\u89C8\u5668\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002",
  "footer.disclaimer": "\u516C\u5F0F\u4E0E\u98DF\u7269\u6570\u636E\u4EC5\u4F9B\u65E5\u5E38\u4F30\u7B97\uFF0C\u4E0D\u6784\u6210\u533B\u7597\u6216\u8425\u517B\u5EFA\u8BAE\u3002",
  "footer.formulaCredit": "\u516C\u5F0F\u53C2\u8003\uFF1A\u6296\u97F3\u300C\u96F6\u91CD\u529BR\u54E5\u300D\u7684\u201C\u50BB\u74DC\u516C\u5F0F\u201D",
  "common.close": "\u5173\u95ED",
  "common.delete": "\u5220\u9664",
  "common.cancel": "\u53D6\u6D88",
  "cat.all": "\u5168\u90E8",
  "cat.protein": "\u86CB\u767D\u8D28",
  "cat.staple": "\u4E3B\u98DF",
  "cat.produce": "\u679C\u852C",
  "cat.dairy": "\u4E73\u54C1",
  "cat.fat": "\u575A\u679C\u6CB9\u8102",
  "cat.other": "\u5176\u4ED6",
  "cat.custom": "\u81EA\u5B9A\u4E49",
  "food.egg": "\u9E21\u86CB",
  "food.chickenBreast": "\u9E21\u80F8\u8089",
  "food.leanBeef": "\u7626\u725B\u8089",
  "food.salmon": "\u4E09\u6587\u9C7C",
  "food.shrimp": "\u867E\u4EC1",
  "food.firmTofu": "\u5317\u8C46\u8150",
  "food.whey": "\u4E73\u6E05\u86CB\u767D\u7C89",
  "food.cookedRice": "\u7C73\u996D\uFF08\u719F\uFF09",
  "food.oats": "\u71D5\u9EA6\u7247\uFF08\u5E72\uFF09",
  "food.wholeWheatBread": "\u5168\u9EA6\u9762\u5305",
  "food.potato": "\u571F\u8C46\uFF08\u716E\uFF09",
  "food.sweetPotato": "\u7EA2\u85AF\uFF08\u84B8\uFF09",
  "food.banana": "\u9999\u8549",
  "food.apple": "\u82F9\u679C",
  "food.blueberry": "\u84DD\u8393",
  "food.broccoli": "\u897F\u5170\u82B1",
  "food.spinach": "\u83E0\u83DC",
  "food.avocado": "\u725B\u6CB9\u679C",
  "food.wholeMilk": "\u5168\u8102\u725B\u5976",
  "food.plainYogurt": "\u65E0\u7CD6\u9178\u5976",
  "food.almonds": "\u674F\u4EC1",
  "food.peanutButter": "\u82B1\u751F\u9171",
  "food.oliveOil": "\u6A44\u6984\u6CB9",
  "food.darkChocolate": "\u9ED1\u5DE7\u514B\u529B\uFF0870%\uFF09"
};
var en = {
  panel: "Daily intake",
  "page.eyebrow": "DAILY NUTRITION",
  "page.title": "Daily intake",
  "page.subtitle": "Set targets from your body weight, then log each meal by grams.",
  "page.addFood": "Add food",
  "page.datePrev": "Previous day",
  "page.dateNext": "Next day",
  "page.today": "Today",
  "page.backToday": "Back to today",
  "page.day": "Daily log",
  "onboard.weight": "Targets start from a {weight} kg default. Confirm or change your weight to personalize them.",
  "onboard.action": "Set weight",
  "unit.g": "g",
  "unit.kg": "kg",
  "unit.kcal": "kcal",
  "unit.perDay": "/ day",
  "kpi.energy": "Energy",
  "kpi.carbs": "Carbs",
  "kpi.protein": "Protein",
  "kpi.fat": "Fat",
  "kpi.target": "Target",
  "kpi.remaining": "Left",
  "kpi.over": "Over",
  "kpi.percent": "{percent}%",
  "kpi.energyHint": "Target {target} kcal",
  "kpi.macroTarget": "Target {target} g",
  "kpi.logged": "logged",
  "kpi.noTarget": "Set your weight first",
  "target.title": "Daily targets",
  "target.badge": "Auto",
  "target.weight": "Body weight",
  "target.activity": "Activity",
  "target.active": "Active",
  "target.inactive": "Less active",
  "target.carbLevel": "Carb level",
  "target.carbValue": "{grams} g/kg",
  "target.fatSide": "{fat} g fat",
  "target.calorieBasis": "Calorie basis",
  "target.macroBasis": "From macros",
  "target.quickBasis": "Weight formula",
  "target.hint": "The calorie basis only changes the calorie progress, not the macro targets.",
  "target.macroCalories": "Macro-derived",
  "target.quickCalories": "Weight formula",
  "target.quickFormula": "Quick \xB7 {weight} kg \xD7 {factor}",
  "target.details": "See the calculation",
  "target.formulaTitle": "Calculation",
  "target.formulaCarb": "Carbs: {weight} kg \xD7 {grams} g/kg \u2248 {total} g",
  "target.formulaProtein": "Protein: {weight} kg \xD7 {grams} g/kg \u2248 {total} g",
  "target.formulaFat": "Fat: {total} g",
  "target.formulaKcal": "Macro-derived: {carbs} \xD7 4 + {protein} \xD7 4 + {fat} \xD7 9 \u2248 {total} kcal",
  "target.formulaQuick": "Weight formula: {weight} kg \xD7 {factor} \u2248 {total} kcal",
  "target.formulaNote": "Higher-carb days pair with 40 g fat; lower-carb days pair with 50 g. The weight formula is a reference only and does not drive the macro targets.",
  "target.invalidWeight": "Enter a body weight between 30 and 300 kg",
  "log.title": "What I ate today",
  "log.titleOther": "What I ate on {date}",
  "log.count": "{count} entries",
  "log.countOne": "1 entry",
  "log.add": "Log food",
  "log.clear": "Clear",
  "log.emptyTitle": "Nothing logged today",
  "log.emptyBody": "Add your first food and the totals update automatically.",
  "log.emptyAction": "Add the first food",
  "log.mealEmpty": "Nothing yet",
  "log.mealAdd": "Add to {meal}",
  "log.mealKcal": "{kcal} kcal",
  "log.viewing": "Viewing",
  "meal.breakfast": "Breakfast",
  "meal.lunch": "Lunch",
  "meal.dinner": "Dinner",
  "meal.snack": "Snack",
  "meal.breakfast.short": "B",
  "meal.lunch.short": "L",
  "meal.dinner.short": "D",
  "meal.snack.short": "S",
  "entry.edit": "Edit {name}",
  "entry.remove": "Remove {name}",
  "entry.grams": "{grams} g",
  "entry.macros": "C {carbs} \xB7 P {protein} \xB7 F {fat}",
  "entry.kcal": "{kcal} kcal",
  "add.title": "Add food",
  "add.editTitle": "Edit entry",
  "add.editSubtitle": "Adjust the food, portion or meal for this entry.",
  "add.subtitle": "Pick from the food library or create your own.",
  "add.search": "Search foods",
  "add.searchClear": "Clear search",
  "add.searchPlaceholder": "Search by food name",
  "add.noResults": "No foods found",
  "add.noResultsHint": "Try another keyword, or create a custom food.",
  "add.preset": "Food library",
  "add.customTab": "Custom",
  "add.selected": "Selected food",
  "add.choose": "Choose a food on the left",
  "add.chooseHint": "Then enter grams to see this serving.",
  "add.portion": "Portion",
  "add.gramsPlaceholder": "Enter grams",
  "add.quick": "Quick amounts",
  "add.meal": "Meal",
  "add.preview": "This serving",
  "add.previewHint": "Calculated for {grams} g",
  "add.confirm": "Add entry",
  "add.save": "Save changes",
  "add.customTitle": "Custom food",
  "add.editCustomTitle": "Edit custom food",
  "add.editCustomSubtitle": "Change the per-100 g values. Existing log entries keep their values by default.",
  "add.editCustomHint": "Only the food library entry changes. Existing log entries keep their values unless you sync them below.",
  "add.editCustom": "Edit food values",
  "add.customizePreset": "Edit as custom food",
  "add.referenceNote": "Built-in foods are general references; variety, cut, cooking method and brand change the values. Save a custom food to match what you actually eat.",
  "add.copyPresetHint": "The preset stays unchanged. Saving adds a custom food with these values and logs this serving.",
  "add.customListTitle": "Saved custom foods",
  "add.syncEntries": "Also update {count} logged entries",
  "add.syncEntriesHint": "Checked entries logged with this food will use the new values.",
  "add.saveCustomChanges": "Save changes",
  "add.customHint": "Enter values per 100 g. Saving adds it to your food library.",
  "add.name": "Food name",
  "add.namePlaceholder": "e.g. Homemade chicken salad",
  "add.per100": "Per 100 g",
  "add.carbs": "Carbs",
  "add.protein": "Protein",
  "add.fat": "Fat",
  "add.kcalOptional": "Calories (optional)",
  "add.autoKcal": "Leave blank or change a macro to use 4 / 4 / 9",
  "add.saveAndAdd": "Save and add",
  "add.nameRequired": "Enter a food name",
  "add.invalidNumber": "Nutrition values must be zero or positive",
  "add.invalidGrams": "Enter grams greater than zero",
  "add.gramsMax": "At most 10000 g per entry",
  "add.deleteCustom": "Delete this custom food",
  "add.deleteCustomConfirm": "Existing log entries keep their values.",
  "add.customBadge": "Custom",
  "add.presetBadge": "Preset",
  "add.per100Line": "Per 100 g: C {carbs} \xB7 P {protein} \xB7 F {fat} \xB7 {kcal} kcal",
  "library.title": "Food library",
  "library.subtitle": "Per 100 g edible portion, approximate everyday values.",
  "library.search": "Search foods",
  "library.empty": "No matching foods",
  "library.recentTitle": "Recently eaten",
  "library.recentHint": "One click to add it again.",
  "library.startTitle": "Start here",
  "library.startHint": "Pick a common food to make the first entry.",
  "library.recentEmpty": "After a few meals, your frequent foods show up here.",
  "library.viewAll": "All {count} foods",
  "library.per100Short": "per 100 g",
  "library.custom": "Custom",
  "trend.title": "Last 7 days",
  "trend.subtitle": "Calorie intake against target",
  "trend.avg": "Daily avg",
  "trend.target": "Target",
  "trend.empty": "Not enough data yet",
  "trend.emptyHint": "Keep logging for a few days to see a trend.",
  "trend.today": "Today",
  "trend.kcal": "{kcal} kcal",
  "toast.removed": "Removed {name}",
  "toast.cleared": "Cleared the log for {date}",
  "toast.foodUpdated": "Updated the nutrition data for {name}",
  "toast.undo": "Undo",
  "toast.close": "Dismiss notice",
  "clear.title": "Clear this day?",
  "clear.body": "This removes all {count} food entries for {date}. You can undo right after clearing.",
  "clear.cancel": "Cancel",
  "clear.confirm": "Clear log",
  "footer.local": "Saved in this browser only. Nothing is uploaded.",
  "footer.disclaimer": "Formulas and food values are everyday estimates, not medical or dietary advice.",
  "footer.formulaCredit": "Formula reference: the \u201Cfoolproof formula\u201D shared by Douyin creator \u96F6\u91CD\u529BR\u54E5",
  "common.close": "Close",
  "common.delete": "Delete",
  "common.cancel": "Cancel",
  "cat.all": "All",
  "cat.protein": "Protein",
  "cat.staple": "Staples",
  "cat.produce": "Produce",
  "cat.dairy": "Dairy",
  "cat.fat": "Fats",
  "cat.other": "Other",
  "cat.custom": "Custom",
  "food.egg": "Egg",
  "food.chickenBreast": "Chicken breast",
  "food.leanBeef": "Lean beef",
  "food.salmon": "Salmon",
  "food.shrimp": "Shrimp",
  "food.firmTofu": "Firm tofu",
  "food.whey": "Whey protein",
  "food.cookedRice": "White rice, cooked",
  "food.oats": "Rolled oats, dry",
  "food.wholeWheatBread": "Whole-wheat bread",
  "food.potato": "Potato, boiled",
  "food.sweetPotato": "Sweet potato, steamed",
  "food.banana": "Banana",
  "food.apple": "Apple",
  "food.blueberry": "Blueberries",
  "food.broccoli": "Broccoli",
  "food.spinach": "Spinach",
  "food.avocado": "Avocado",
  "food.wholeMilk": "Whole milk",
  "food.plainYogurt": "Plain yogurt",
  "food.almonds": "Almonds",
  "food.peanutButter": "Peanut butter",
  "food.oliveOil": "Olive oil",
  "food.darkChocolate": "Dark chocolate (70%)"
};

// src/styles.js
var CSS = String.raw`
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
`;

// src/client.jsx
var STORAGE_KEY = "dsh-diet:state:v1";
var MEAL_KEYS = ["breakfast", "lunch", "dinner", "snack"];
var ACTIVITY = {
  active: {
    carbs: { low: 2, high: 2.5 },
    protein: 2,
    fat: { low: 50, high: 40 },
    factor: 26
  },
  inactive: {
    carbs: { low: 1.5, high: 2 },
    protein: 1.5,
    fat: { low: 50, high: 40 },
    factor: 24
  }
};
var DEFAULT_SETTINGS = {
  weightKg: 65,
  weightConfirmed: false,
  activity: "active",
  carbLevel: "high",
  calorieMode: "macro"
};
var clamp = (value, min, max) => Math.min(max, Math.max(min, value));
var round1 = (value) => Math.round(value * 10) / 10;
var positive = (value) => {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : 0;
};
function makeId(prefix) {
  try {
    return `${prefix}-${crypto.randomUUID()}`;
  } catch {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }
}
function dateKey(date = /* @__PURE__ */ new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function parseDateKey(key) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(key);
  if (match === null) return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return Number.isNaN(date.getTime()) || dateKey(date) !== key ? null : date;
}
function shiftDateKey(key, delta) {
  const date = parseDateKey(key) ?? /* @__PURE__ */ new Date();
  date.setDate(date.getDate() + delta);
  return dateKey(date);
}
function isDateKey(value) {
  return typeof value === "string" && parseDateKey(value) !== null;
}
function currentLocale() {
  if (typeof document !== "undefined" && document.documentElement.lang) return document.documentElement.lang;
  if (typeof navigator !== "undefined" && navigator.language) return navigator.language;
  return "zh-CN";
}
var numberFormats = /* @__PURE__ */ new Map();
function numberFormat(locale, digits) {
  const key = `${locale}|${digits}`;
  let format = numberFormats.get(key);
  if (format === void 0) {
    format = new Intl.NumberFormat(locale, { maximumFractionDigits: digits, minimumFractionDigits: 0 });
    numberFormats.set(key, format);
  }
  return format;
}
function formatNumber(locale, value, digits = 0) {
  if (!Number.isFinite(value)) return "0";
  return numberFormat(locale, digits).format(value);
}
function formatMacro(locale, value) {
  const number = Number.isFinite(value) ? value : 0;
  return formatNumber(locale, number >= 100 ? Math.round(number) : round1(number), number >= 100 ? 0 : 1);
}
function formatDateLong(locale, key) {
  const date = parseDateKey(key) ?? /* @__PURE__ */ new Date();
  return new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" }).format(date);
}
function formatDateFull(locale, key) {
  const date = parseDateKey(key) ?? /* @__PURE__ */ new Date();
  return new Intl.DateTimeFormat(locale, { month: "short", day: "numeric", weekday: "short" }).format(date);
}
function formatWeekday(locale, key) {
  const date = parseDateKey(key) ?? /* @__PURE__ */ new Date();
  return new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date);
}
function defaultMeal() {
  const hour = (/* @__PURE__ */ new Date()).getHours();
  if (hour < 10) return "breakfast";
  if (hour < 15) return "lunch";
  if (hour < 21) return "dinner";
  return "snack";
}
function entryNutrition(entry) {
  const scale = positive(entry?.grams) / 100;
  const per100 = entry?.per100 ?? {};
  return {
    kcal: positive(per100.kcal) * scale,
    carbs: positive(per100.carbs) * scale,
    protein: positive(per100.protein) * scale,
    fat: positive(per100.fat) * scale
  };
}
function sumEntries(entries) {
  return entries.reduce((total, entry) => {
    const nutrition = entryNutrition(entry);
    total.kcal += nutrition.kcal;
    total.carbs += nutrition.carbs;
    total.protein += nutrition.protein;
    total.fat += nutrition.fat;
    return total;
  }, { kcal: 0, carbs: 0, protein: 0, fat: 0 });
}
function targetsFor(settings) {
  const weight = clamp(Number(settings.weightKg) || 0, 0, 300);
  const activity = ACTIVITY[settings.activity] ?? ACTIVITY.active;
  const carbG = activity.carbs[settings.carbLevel] ?? activity.carbs.high;
  const proteinG = activity.protein;
  const fatG = activity.fat[settings.carbLevel] ?? activity.fat.high;
  const carbs = Math.round(weight * carbG);
  const protein = Math.round(weight * proteinG);
  const fat = Math.round(fatG);
  const macroKcal = carbs * 4 + protein * 4 + fat * 9;
  const quickKcal = Math.round(weight * activity.factor);
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
    activeKcal: settings.calorieMode === "quick" ? quickKcal : macroKcal,
    factor: activity.factor
  };
}
function entryName(entry, t) {
  const builtIn = FOOD_BY_ID.get(entry.foodId);
  return builtIn ? t(builtIn.nameKey) : entry.name;
}
function foodFromBuiltIn(food, t) {
  return {
    key: `builtin:${food.id}`,
    foodId: food.id,
    name: t(food.nameKey),
    category: food.category,
    defaultGrams: food.defaultGrams,
    per100: food.per100,
    custom: false
  };
}
function foodFromCustom(food) {
  return {
    key: `custom:${food.id}`,
    foodId: `custom:${food.id}`,
    name: food.name,
    category: "custom",
    defaultGrams: 100,
    per100: food.per100,
    custom: true
  };
}
function allFoodItems(customFoods, t) {
  return [
    ...BUILT_IN_FOODS.map((food) => foodFromBuiltIn(food, t)),
    ...customFoods.map((food) => foodFromCustom(food))
  ];
}
function countCustomUsage(state, id) {
  const foodId = `custom:${id}`;
  let count = 0;
  for (const day of Object.values(state.days)) {
    count += day.entries.filter((entry) => entry.foodId === foodId).length;
  }
  return count;
}
function recentFoodItems(state, t) {
  const seen = /* @__PURE__ */ new Map();
  const dates = Object.keys(state.days).sort().reverse();
  for (const date of dates) {
    const entries = state.days[date]?.entries ?? [];
    for (let index = entries.length - 1; index >= 0; index -= 1) {
      const entry = entries[index];
      const key = entry.foodId || `name:${entry.name}`;
      if (seen.has(key)) continue;
      const builtIn = FOOD_BY_ID.get(entry.foodId);
      const custom = entry.foodId?.startsWith("custom:") ? state.customFoods.find((food) => `custom:${food.id}` === entry.foodId) : void 0;
      seen.set(key, builtIn ? { ...foodFromBuiltIn(builtIn, t), defaultGrams: entry.grams } : {
        key,
        foodId: entry.foodId,
        name: custom?.name ?? entry.name,
        category: "custom",
        defaultGrams: entry.grams,
        per100: custom?.per100 ?? entry.per100,
        custom: custom !== void 0
      });
      if (seen.size >= 8) return [...seen.values()].slice(0, 5);
    }
  }
  return [...seen.values()].slice(0, 5);
}
function selectedFoodFromEntry(entry, state, t) {
  const builtIn = FOOD_BY_ID.get(entry.foodId);
  if (builtIn !== void 0) return { ...foodFromBuiltIn(builtIn, t), defaultGrams: entry.grams, per100: entry.per100 };
  const custom = entry.foodId?.startsWith("custom:") ? state.customFoods.find((food) => `custom:${food.id}` === entry.foodId) : void 0;
  return {
    key: entry.foodId || `entry:${entry.id}`,
    foodId: entry.foodId,
    name: custom?.name ?? entry.name,
    category: "custom",
    defaultGrams: entry.grams,
    per100: entry.per100,
    custom: custom !== void 0
  };
}
function normalizePer100(value) {
  if (value === null || typeof value !== "object") return null;
  const carbs = Number(value.carbs);
  const protein = Number(value.protein);
  const fat = Number(value.fat);
  const kcal = Number(value.kcal);
  if (![carbs, protein, fat, kcal].every(Number.isFinite)) return null;
  if ([carbs, protein, fat, kcal].some((number) => number < 0 || number > 1e4)) return null;
  return { kcal, carbs, protein, fat };
}
function normalizeEntry(value) {
  if (value === null || typeof value !== "object") return null;
  const grams = Number(value.grams);
  const per100 = normalizePer100(value.per100);
  if (!Number.isFinite(grams) || grams <= 0 || grams > 1e4 || per100 === null) return null;
  const meal = MEAL_KEYS.includes(value.meal) ? value.meal : "snack";
  return {
    id: typeof value.id === "string" && value.id !== "" ? value.id : makeId("entry"),
    foodId: typeof value.foodId === "string" ? value.foodId : "",
    name: typeof value.name === "string" && value.name !== "" ? value.name : "Food",
    grams,
    meal,
    per100
  };
}
function createDefaultState() {
  return {
    version: 1,
    settings: { ...DEFAULT_SETTINGS },
    days: {},
    customFoods: []
  };
}
function normalizeState(raw) {
  if (raw === null || typeof raw !== "object") return createDefaultState();
  const next = createDefaultState();
  const settings = raw.settings;
  if (settings !== null && typeof settings === "object") {
    const weight = Number(settings.weightKg);
    if (Number.isFinite(weight) && weight >= 30 && weight <= 300) next.settings.weightKg = round1(weight);
    if (settings.weightConfirmed === true) next.settings.weightConfirmed = true;
    if (settings.activity === "active" || settings.activity === "inactive") next.settings.activity = settings.activity;
    if (settings.carbLevel === "low" || settings.carbLevel === "high") next.settings.carbLevel = settings.carbLevel;
    if (settings.calorieMode === "quick" || settings.calorieMode === "macro") next.settings.calorieMode = settings.calorieMode;
  }
  if (raw.days !== null && typeof raw.days === "object") {
    for (const [date, day] of Object.entries(raw.days)) {
      if (!isDateKey(date) || day === null || typeof day !== "object" || !Array.isArray(day.entries)) continue;
      const entries = day.entries.map(normalizeEntry).filter(Boolean);
      if (entries.length > 0) next.days[date] = { entries };
    }
  }
  if (Array.isArray(raw.customFoods)) {
    const seen = /* @__PURE__ */ new Set();
    for (const value of raw.customFoods) {
      if (value === null || typeof value !== "object") continue;
      const per100 = normalizePer100(value.per100);
      if (per100 === null || typeof value.name !== "string" || value.name.trim() === "") continue;
      const id = typeof value.id === "string" && value.id !== "" ? value.id : makeId("food");
      if (seen.has(id)) continue;
      seen.add(id);
      next.customFoods.push({ id, name: value.name.trim().slice(0, 120), per100 });
    }
  }
  return next;
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return createDefaultState();
    return normalizeState(JSON.parse(raw));
  } catch {
    return createDefaultState();
  }
}
function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
  }
}
function withEntry(days, date, entry) {
  const previous = days[date]?.entries ?? [];
  return { ...days, [date]: { entries: [...previous, entry] } };
}
function Icon({ size = 16, children, viewBox = "0 0 24 24", strokeWidth = 1.7 }) {
  return /* @__PURE__ */ import_react.default.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox,
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      stroke: "currentColor",
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    children
  );
}
function IconPlus({ size = 16 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M12 5v14M5 12h14" }));
}
function IconChevronLeft({ size = 15 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size }, /* @__PURE__ */ import_react.default.createElement("path", { d: "m14.5 6.5-5 5.5 5 5.5" }));
}
function IconChevronRight({ size = 15 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size }, /* @__PURE__ */ import_react.default.createElement("path", { d: "m9.5 6.5 5 5.5-5 5.5" }));
}
function IconChevronDown({ size = 12 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size }, /* @__PURE__ */ import_react.default.createElement("path", { d: "m6.5 9.5 5.5 5 5.5-5" }));
}
function IconSearch({ size = 14 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size }, /* @__PURE__ */ import_react.default.createElement("circle", { cx: "10.8", cy: "10.8", r: "6.3" }), /* @__PURE__ */ import_react.default.createElement("path", { d: "m15.5 15.5 4 4" }));
}
function IconX({ size = 15 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M6.5 6.5l11 11M17.5 6.5l-11 11" }));
}
function IconCheck({ size = 15 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size }, /* @__PURE__ */ import_react.default.createElement("path", { d: "m5 12.5 4.2 4.2L19 6.8" }));
}
function IconTrash({ size = 14 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M4.5 7h15M9.5 7V4.8h5V7M7.2 7l.8 12h8l.8-12M10.5 10.5v5M13.5 10.5v5" }));
}
function IconPencil({ size = 14 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size }, /* @__PURE__ */ import_react.default.createElement("path", { d: "m14.8 5.2 4 4M6 18l.8-4.2 8.6-8.6a1.8 1.8 0 0 1 2.5 0l1.9 1.9a1.8 1.8 0 0 1 0 2.5l-8.6 8.6L7 18Z" }));
}
function IconBowl({ size = 26 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size, strokeWidth: 1.5 }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M3.5 11h17c0 5.1-3.8 8.4-8.5 8.4S3.5 16.1 3.5 11Z" }), /* @__PURE__ */ import_react.default.createElement("path", { d: "M7.3 8.4c-1-1.5-.4-2.9.8-3.9M11.4 8.4c-1-1.5-.4-2.9.8-3.9M15.5 8.4c-1-1.5-.4-2.9.8-3.9", opacity: ".65" }), /* @__PURE__ */ import_react.default.createElement("path", { d: "M17.8 13.1c1.1-1.4 2.5-1.6 3.8-.8", opacity: ".45" }));
}
function IconChart({ size = 20 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size, strokeWidth: 1.55 }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M4 19V5M4 19h16M7.5 15.5V12M11.2 15.5V8.5M14.9 15.5v-5M18.6 15.5V6.5" }));
}
function IconInfo({ size = 14 }) {
  return /* @__PURE__ */ import_react.default.createElement(Icon, { size }, /* @__PURE__ */ import_react.default.createElement("circle", { cx: "12", cy: "12", r: "8.5" }), /* @__PURE__ */ import_react.default.createElement("path", { d: "M12 11.1v5M12 7.9h.01" }));
}
function DietPanelIcon({ size = 18 }) {
  return /* @__PURE__ */ import_react.default.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      stroke: "currentColor",
      strokeWidth: "1.55",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ import_react.default.createElement("path", { d: "M3.7 11.2h16.6c0 5-3.7 8.3-8.3 8.3s-8.3-3.3-8.3-8.3Z" }),
    /* @__PURE__ */ import_react.default.createElement("path", { d: "M7.3 8.7c-1-1.5-.4-2.9.8-3.9M11.4 8.7c-1-1.5-.4-2.9.8-3.9M15.5 8.7c-1-1.5-.4-2.9.8-3.9", opacity: ".65" }),
    /* @__PURE__ */ import_react.default.createElement("path", { d: "M8.1 14.2c.8.6 1.6.9 2.4.9M13.3 14.7c.9-.2 1.7-.6 2.4-1.2", opacity: ".45" })
  );
}
function Modal({ title, subtitle, onClose, size = "wide", initialFocusRef, children, testId, closeLabel = "Close" }) {
  const titleId = (0, import_react.useId)();
  const dialogRef = (0, import_react.useRef)(null);
  const restoreRef = (0, import_react.useRef)(null);
  const closeRef = (0, import_react.useRef)(onClose);
  closeRef.current = onClose;
  (0, import_react.useEffect)(() => {
    restoreRef.current = document.activeElement;
    const dialog = dialogRef.current;
    const focusTarget = initialFocusRef?.current ?? dialog?.querySelector("input, button, [href], select, textarea");
    focusTarget?.focus?.();
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeRef.current();
        return;
      }
      if (event.key !== "Tab" || dialog === null) return;
      const focusable = [...dialog.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [href], [tabindex]:not([tabindex="-1"])')].filter((element) => element.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      const restore = restoreRef.current;
      if (restore !== null && restore.isConnected) restore.focus?.();
    };
  }, [initialFocusRef]);
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "dietModalBackdrop", onMouseDown: (event) => {
    if (event.target === event.currentTarget) onClose();
  } }, /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: "dietModal",
      "data-size": size === "compact" ? "compact" : void 0,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": titleId,
      ref: dialogRef,
      "data-testid": testId
    },
    /* @__PURE__ */ import_react.default.createElement("div", { className: "dietModalHead" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h2", { className: "dietModalTitle", id: titleId }, title), subtitle !== void 0 && subtitle !== null && /* @__PURE__ */ import_react.default.createElement("p", { className: "dietModalSubtitle" }, subtitle)), /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietModalClose", "aria-label": closeLabel, onClick: onClose }, /* @__PURE__ */ import_react.default.createElement(IconX, { size: 16 }))),
    children
  ));
}
function ConfirmDialog({ t, dateLabel, count, onClose, onConfirm }) {
  const cancelRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ import_react.default.createElement(Modal, { title: t("clear.title"), onClose, size: "compact", initialFocusRef: cancelRef, testId: "diet-clear-modal", closeLabel: t("common.close") }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietConfirmBody" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "dietConfirmText" }, t("clear.body", { date: dateLabel, count })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietConfirmActions" }, /* @__PURE__ */ import_react.default.createElement("button", { type: "button", ref: cancelRef, className: "dietSecondaryButton", onClick: onClose }, t("clear.cancel")), /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietDangerButton", onClick: onConfirm, "data-testid": "diet-clear-confirm" }, t("clear.confirm")))));
}
function Toast({ t, toast, onUndo, onClose }) {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "dietToast", role: "status", "aria-live": "polite", "data-testid": "diet-toast" }, /* @__PURE__ */ import_react.default.createElement(IconCheck, { size: 14 }), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietToastText" }, toast.message), toast.undo !== void 0 && /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietToastAction", onClick: onUndo, "data-testid": "diet-undo" }, t("toast.undo")), /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietToastClose", "aria-label": t("toast.close"), onClick: onClose }, /* @__PURE__ */ import_react.default.createElement(IconX, { size: 13 })));
}
var QUICK_GRAMS = [50, 100, 150, 200];
function MealChoices({ t, value, onChange, className = "" }) {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: `dietMealChoices ${className}`, role: "group", "aria-label": t("add.meal") }, MEAL_KEYS.map((meal) => /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      key: meal,
      type: "button",
      className: "dietMealChoice",
      "data-active": value === meal,
      "aria-pressed": value === meal,
      onClick: () => onChange(meal)
    },
    t(`meal.${meal}`)
  )));
}
function MacroPill({ label, value, unit }) {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMacroPill" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMacroPillLabel" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietMacroPillDot" }), label), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMacroPillValue" }, value, /* @__PURE__ */ import_react.default.createElement("span", null, " ", unit)));
}
function AddFoodModal({
  t,
  initialFood,
  editingEntry,
  state,
  onClose,
  onAdd,
  onUpdate,
  onAddCustom,
  onUpdateCustom,
  onDeleteCustom,
  defaultMealChoice
}) {
  const allFoods = allFoodItems(state.customFoods, t);
  const categoryOptions = FOOD_CATEGORIES.filter((value) => value !== "custom" || state.customFoods.length > 0);
  const initialSelected = editingEntry !== void 0 && editingEntry !== null ? selectedFoodFromEntry(editingEntry, state, t) : initialFood ?? allFoods[0] ?? null;
  const [mode, setMode] = (0, import_react.useState)("library");
  const [search, setSearch] = (0, import_react.useState)("");
  const [category, setCategory] = (0, import_react.useState)("all");
  const [selected, setSelected] = (0, import_react.useState)(initialSelected);
  const [grams, setGrams] = (0, import_react.useState)(() => String(editingEntry?.grams ?? initialFood?.defaultGrams ?? initialSelected?.defaultGrams ?? ""));
  const [meal, setMeal] = (0, import_react.useState)(() => editingEntry?.meal ?? defaultMealChoice ?? defaultMeal());
  const [error, setError] = (0, import_react.useState)("");
  const [customName, setCustomName] = (0, import_react.useState)("");
  const [customCarbs, setCustomCarbs] = (0, import_react.useState)("");
  const [customProtein, setCustomProtein] = (0, import_react.useState)("");
  const [customFat, setCustomFat] = (0, import_react.useState)("");
  const [customKcal, setCustomKcal] = (0, import_react.useState)("");
  const [customKcalManual, setCustomKcalManual] = (0, import_react.useState)(false);
  const [customGrams, setCustomGrams] = (0, import_react.useState)("100");
  const [customMeal, setCustomMeal] = (0, import_react.useState)(defaultMealChoice ?? defaultMeal());
  const [editingCustomId, setEditingCustomId] = (0, import_react.useState)(null);
  const [customCopy, setCustomCopy] = (0, import_react.useState)(false);
  const [syncEntries, setSyncEntries] = (0, import_react.useState)(false);
  const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
  const explicitSelection = initialFood !== void 0 && initialFood !== null || editingEntry !== void 0 && editingEntry !== null;
  const searchRef = (0, import_react.useRef)(null);
  const nameRef = (0, import_react.useRef)(null);
  const gramsRef = (0, import_react.useRef)(null);
  const dialogFocusRef = editingEntry !== void 0 && editingEntry !== null ? gramsRef : searchRef;
  const locale = currentLocale();
  const editingCustom = editingCustomId !== null;
  const customUsage = editingCustom ? countCustomUsage(state, editingCustomId) : 0;
  const customFoodEntry = selected?.foodId?.startsWith("custom:") ? state.customFoods.find((food) => `custom:${food.id}` === selected.foodId) : void 0;
  const query = search.trim().toLocaleLowerCase(locale);
  const filtered = allFoods.filter((food) => {
    if (category !== "all" && food.category !== category) return false;
    if (query === "") return true;
    return food.name.toLocaleLowerCase(locale).includes(query);
  });
  const chooseFood = (food) => {
    setSelected(food);
    setGrams(String(food.defaultGrams ?? 100));
    setError("");
  };
  const fillCustomForm = (food, grams2 = "100") => {
    setCustomName(food.name);
    setCustomCarbs(String(food.per100.carbs));
    setCustomProtein(String(food.per100.protein));
    setCustomFat(String(food.per100.fat));
    setCustomKcal(String(food.per100.kcal));
    setCustomKcalManual(false);
    setCustomGrams(String(grams2));
    setCustomMeal(defaultMealChoice ?? defaultMeal());
  };
  const startNewCustom = () => {
    setMode("custom");
    setEditingCustomId(null);
    setCustomCopy(false);
    setSyncEntries(false);
    setCustomName("");
    setCustomCarbs("");
    setCustomProtein("");
    setCustomFat("");
    setCustomKcal("");
    setCustomKcalManual(false);
    setCustomGrams("100");
    setCustomMeal(defaultMealChoice ?? defaultMeal());
    setError("");
    setPendingDelete(null);
  };
  const startEditCustom = (food) => {
    setMode("custom");
    setEditingCustomId(food.id);
    setCustomCopy(false);
    setSyncEntries(false);
    fillCustomForm(food, 100);
    setError("");
    setPendingDelete(null);
    nameRef.current?.focus();
  };
  const startCopyFood = (food) => {
    setMode("custom");
    setEditingCustomId(null);
    setCustomCopy(true);
    setSyncEntries(false);
    fillCustomForm(food, food.defaultGrams ?? 100);
    setError("");
    setPendingDelete(null);
    nameRef.current?.focus();
  };
  (0, import_react.useEffect)(() => {
    if (mode === "custom") nameRef.current?.focus();
  }, [mode]);
  (0, import_react.useEffect)(() => {
    if (mode !== "library" || explicitSelection) return;
    if (selected !== null && filtered.some((food) => food.key === selected.key)) return;
    const first = filtered[0] ?? null;
    setSelected(first);
    if (first !== null) setGrams(String(first.defaultGrams ?? 100));
  }, [mode, query, category, selected?.key, state.customFoods.length, explicitSelection]);
  (0, import_react.useEffect)(() => {
    if (category === "custom" && state.customFoods.length === 0) setCategory("all");
  }, [category, state.customFoods.length]);
  const numericGrams = Number(String(grams).replace(",", "."));
  const validGrams = Number.isFinite(numericGrams) && numericGrams > 0 && numericGrams <= 1e4;
  const preview = selected !== null && validGrams ? {
    kcal: positive(selected.per100.kcal) * numericGrams / 100,
    carbs: positive(selected.per100.carbs) * numericGrams / 100,
    protein: positive(selected.per100.protein) * numericGrams / 100,
    fat: positive(selected.per100.fat) * numericGrams / 100
  } : { kcal: 0, carbs: 0, protein: 0, fat: 0 };
  const submit = () => {
    if (selected === null) return;
    if (!validGrams) {
      setError(t("add.invalidGrams"));
      gramsRef.current?.focus();
      return;
    }
    if (editingEntry !== void 0 && editingEntry !== null) {
      onUpdate(editingEntry, selected, numericGrams, meal);
    } else {
      onAdd(selected, numericGrams, meal);
    }
  };
  const autoKcal = energyFromMacros(customCarbs, customProtein, customFat);
  const submitCustom = () => {
    const name2 = customName.trim();
    if (name2 === "") {
      setError(t("add.nameRequired"));
      return;
    }
    const carbs = Number(String(customCarbs).replace(",", "."));
    const protein = Number(String(customProtein).replace(",", "."));
    const fat = Number(String(customFat).replace(",", "."));
    const kcal = customKcal.trim() === "" ? autoKcal : Number(String(customKcal).replace(",", "."));
    if (![carbs, protein, fat, kcal].every((value) => Number.isFinite(value) && value >= 0 && value <= 1e4)) {
      setError(t("add.invalidNumber"));
      return;
    }
    const per100 = { kcal: Math.round(kcal), carbs: round1(carbs), protein: round1(protein), fat: round1(fat) };
    if (editingCustom) {
      onUpdateCustom(editingCustomId, { name: name2, per100, syncEntries });
      return;
    }
    const portion = Number(String(customGrams).replace(",", "."));
    if (!Number.isFinite(portion) || portion <= 0 || portion > 1e4) {
      setError(t("add.invalidGrams"));
      return;
    }
    onAddCustom({ name: name2, per100, grams: portion, meal: customMeal });
  };
  return /* @__PURE__ */ import_react.default.createElement(
    Modal,
    {
      title: editingEntry !== void 0 && editingEntry !== null ? t("add.editTitle") : editingCustom ? t("add.editCustomTitle") : t("add.title"),
      subtitle: editingEntry !== void 0 && editingEntry !== null ? t("add.editSubtitle") : editingCustom ? t("add.editCustomSubtitle") : t("add.subtitle"),
      onClose,
      initialFocusRef: dialogFocusRef,
      testId: "diet-add-modal",
      closeLabel: t("common.close")
    },
    !(editingEntry !== void 0 && editingEntry !== null) && /* @__PURE__ */ import_react.default.createElement("div", { className: "dietAddTabs", role: "tablist", "aria-label": t("add.title") }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type: "button",
        role: "tab",
        className: "dietAddTab",
        "data-active": mode === "library",
        "aria-selected": mode === "library",
        onClick: () => {
          setMode("library");
          setEditingCustomId(null);
          setCustomCopy(false);
          setSyncEntries(false);
          setError("");
        },
        "data-testid": "diet-tab-library"
      },
      t("add.preset")
    ), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type: "button",
        role: "tab",
        className: "dietAddTab",
        "data-active": mode === "custom",
        "aria-selected": mode === "custom",
        onClick: startNewCustom,
        "data-testid": "diet-tab-custom"
      },
      t("add.customTab")
    )),
    mode === "custom" && !(editingEntry !== void 0 && editingEntry !== null) ? /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCustomBody" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "dietCustomHint" }, editingCustom ? t("add.editCustomHint") : customCopy ? t("add.copyPresetHint") : t("add.customHint")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietFormGrid" }, /* @__PURE__ */ import_react.default.createElement("label", { className: "dietCustomField dietFull" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomLabel" }, t("add.name")), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        ref: nameRef,
        className: "dietCustomInput",
        value: customName,
        placeholder: t("add.namePlaceholder"),
        maxLength: 120,
        onChange: (event) => {
          setCustomName(event.target.value);
          setError("");
        },
        "data-testid": "diet-custom-name"
      }
    )), /* @__PURE__ */ import_react.default.createElement("label", { className: "dietCustomField" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomLabel" }, t("add.carbs"), " (g / 100 g)"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        className: "dietCustomInput",
        type: "number",
        inputMode: "decimal",
        min: "0",
        step: "any",
        value: customCarbs,
        onChange: (event) => {
          const value = event.target.value;
          setCustomCarbs(value);
          if (!customKcalManual) setCustomKcal(String(energyFromMacros(value, customProtein, customFat)));
        },
        "data-testid": "diet-custom-carbs"
      }
    )), /* @__PURE__ */ import_react.default.createElement("label", { className: "dietCustomField" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomLabel" }, t("add.protein"), " (g / 100 g)"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        className: "dietCustomInput",
        type: "number",
        inputMode: "decimal",
        min: "0",
        step: "any",
        value: customProtein,
        onChange: (event) => {
          const value = event.target.value;
          setCustomProtein(value);
          if (!customKcalManual) setCustomKcal(String(energyFromMacros(customCarbs, value, customFat)));
        },
        "data-testid": "diet-custom-protein"
      }
    )), /* @__PURE__ */ import_react.default.createElement("label", { className: "dietCustomField" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomLabel" }, t("add.fat"), " (g / 100 g)"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        className: "dietCustomInput",
        type: "number",
        inputMode: "decimal",
        min: "0",
        step: "any",
        value: customFat,
        onChange: (event) => {
          const value = event.target.value;
          setCustomFat(value);
          if (!customKcalManual) setCustomKcal(String(energyFromMacros(customCarbs, customProtein, value)));
        },
        "data-testid": "diet-custom-fat"
      }
    )), /* @__PURE__ */ import_react.default.createElement("label", { className: "dietCustomField" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomLabel" }, t("add.kcalOptional")), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        className: "dietCustomInput",
        type: "number",
        inputMode: "decimal",
        min: "0",
        step: "any",
        value: customKcal,
        placeholder: String(autoKcal),
        onChange: (event) => {
          setCustomKcal(event.target.value);
          setCustomKcalManual(true);
        },
        "data-testid": "diet-custom-kcal"
      }
    ), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomNote" }, t("add.autoKcal"))), !editingCustom && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("label", { className: "dietCustomField dietFull" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomLabel" }, t("add.portion"), " (g)"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        className: "dietCustomInput",
        type: "number",
        inputMode: "decimal",
        min: "1",
        max: "10000",
        step: "any",
        value: customGrams,
        onChange: (event) => setCustomGrams(event.target.value),
        "data-testid": "diet-custom-grams"
      }
    )), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCustomField dietFull" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomLabel" }, t("add.meal")), /* @__PURE__ */ import_react.default.createElement(MealChoices, { t, value: customMeal, onChange: setCustomMeal })))), editingCustom && customUsage > 0 && /* @__PURE__ */ import_react.default.createElement("label", { className: "dietSyncRow" }, /* @__PURE__ */ import_react.default.createElement("input", { type: "checkbox", checked: syncEntries, onChange: (event) => setSyncEntries(event.target.checked) }), /* @__PURE__ */ import_react.default.createElement("span", null, t("add.syncEntries", { count: customUsage }), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietSyncHint" }, t("add.syncEntriesHint")))), state.customFoods.length > 0 && /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCustomList" }, /* @__PURE__ */ import_react.default.createElement("h3", { className: "dietCustomListTitle" }, t("add.customListTitle")), state.customFoods.map((food) => /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "dietCustomFoodRow",
        key: food.id,
        "data-testid": "diet-custom-food",
        "data-editing": editingCustomId === food.id ? "true" : void 0
      },
      pendingDelete === food.id ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomFoodName" }, t("add.deleteCustomConfirm")), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietInlineConfirm" }, /* @__PURE__ */ import_react.default.createElement("button", { type: "button", "data-danger": "true", onClick: () => {
        onDeleteCustom(food.id);
        setPendingDelete(null);
        if (selected?.foodId === `custom:${food.id}`) setSelected(null);
        if (editingCustomId === food.id) startNewCustom();
      } }, t("common.delete")), /* @__PURE__ */ import_react.default.createElement("button", { type: "button", onClick: () => setPendingDelete(null) }, t("common.cancel")))) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomFoodName" }, food.name), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCustomFoodMeta" }, food.per100.kcal, " kcal / 100 g"), /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          type: "button",
          className: "dietIconButton",
          title: t("add.editCustom"),
          "aria-label": t("add.editCustom"),
          onClick: () => startEditCustom(food),
          "data-testid": "diet-custom-edit"
        },
        /* @__PURE__ */ import_react.default.createElement(IconPencil, { size: 13 })
      ), /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          type: "button",
          className: "dietIconButton",
          "data-danger": "true",
          title: t("add.deleteCustom"),
          "aria-label": t("add.deleteCustom"),
          onClick: () => setPendingDelete(food.id)
        },
        /* @__PURE__ */ import_react.default.createElement(IconTrash, { size: 13 })
      ))
    )))) : /* @__PURE__ */ import_react.default.createElement("div", { className: "dietAddLayout" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietFoodColumn" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietSearchWrap" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietSearchIcon" }, /* @__PURE__ */ import_react.default.createElement(IconSearch, { size: 14 })), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        ref: searchRef,
        className: "dietSearchInput",
        type: "search",
        value: search,
        placeholder: t("add.searchPlaceholder"),
        "aria-label": t("add.search"),
        onChange: (event) => setSearch(event.target.value),
        "data-testid": "diet-food-search"
      }
    ), search !== "" && /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietSearchClear", "aria-label": t("add.searchClear"), onClick: () => setSearch("") }, /* @__PURE__ */ import_react.default.createElement(IconX, { size: 12 }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCategoryChips", role: "group", "aria-label": t("add.preset") }, categoryOptions.map((value) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: value,
        type: "button",
        className: "dietCategoryChip",
        "data-active": category === value,
        "aria-pressed": category === value,
        onClick: () => setCategory(value)
      },
      t(`cat.${value}`)
    ))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietFoodList", "aria-label": t("add.preset") }, filtered.length === 0 ? /* @__PURE__ */ import_react.default.createElement("div", { className: "dietFoodEmpty" }, /* @__PURE__ */ import_react.default.createElement(IconSearch, { size: 18 }), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFoodEmptyTitle" }, t("add.noResults")), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFoodEmptyHint" }, t("add.noResultsHint"))) : filtered.map((food) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: food.key,
        type: "button",
        className: "dietFoodRow",
        "data-cat": food.category,
        "data-active": selected?.key === food.key,
        "aria-pressed": selected?.key === food.key,
        onClick: () => chooseFood(food),
        "data-testid": "diet-food-row"
      },
      /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFoodAvatar" }, food.name.slice(0, 1).toUpperCase()),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFoodInfo" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFoodName" }, /* @__PURE__ */ import_react.default.createElement("span", null, food.name), food.custom && /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFoodBadge" }, t("add.customBadge"))), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFoodMeta" }, "C ", formatMacro(locale, food.per100.carbs), " \xB7 P ", formatMacro(locale, food.per100.protein), " \xB7 F ", formatMacro(locale, food.per100.fat))),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFoodKcal" }, formatNumber(locale, Math.round(food.per100.kcal)), " kcal")
    )))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietDetailColumn" }, selected === null ? /* @__PURE__ */ import_react.default.createElement("div", { className: "dietDetailEmpty" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietDetailEmptyArt" }, /* @__PURE__ */ import_react.default.createElement(IconBowl, { size: 26 })), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietDetailEmptyTitle" }, t("add.choose")), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietDetailEmptyHint" }, t("add.chooseHint"))) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietSelectedHead" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h3", { className: "dietSelectedTitle" }, selected.name), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietPer100Line" }, t("add.per100Line", {
      carbs: formatMacro(locale, selected.per100.carbs),
      protein: formatMacro(locale, selected.per100.protein),
      fat: formatMacro(locale, selected.per100.fat),
      kcal: formatNumber(locale, Math.round(selected.per100.kcal))
    }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietSelectedKcal" }, /* @__PURE__ */ import_react.default.createElement("strong", null, formatNumber(locale, Math.round(selected.per100.kcal))), /* @__PURE__ */ import_react.default.createElement("span", null, "kcal / 100 g"))), !(editingEntry !== void 0 && editingEntry !== null) && /* @__PURE__ */ import_react.default.createElement("div", { className: "dietSelectedActions" }, selected.custom && customFoodEntry !== void 0 ? /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type: "button",
        className: "dietEditFoodButton",
        onClick: () => startEditCustom(customFoodEntry),
        "data-testid": "diet-custom-edit-detail"
      },
      /* @__PURE__ */ import_react.default.createElement(IconPencil, { size: 12 }),
      " ",
      t("add.editCustom")
    ) : !selected.custom ? /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type: "button",
        className: "dietEditFoodButton",
        onClick: () => startCopyFood(selected),
        "data-testid": "diet-customize-preset"
      },
      /* @__PURE__ */ import_react.default.createElement(IconPencil, { size: 12 }),
      " ",
      t("add.customizePreset")
    ) : null), !selected.custom && /* @__PURE__ */ import_react.default.createElement("p", { className: "dietReferenceNote" }, t("add.referenceNote")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMacroPillsCaption" }, t("add.per100")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMacroPills" }, /* @__PURE__ */ import_react.default.createElement(MacroPill, { label: t("add.carbs"), value: formatMacro(locale, selected.per100.carbs), unit: "g" }), /* @__PURE__ */ import_react.default.createElement(MacroPill, { label: t("add.protein"), value: formatMacro(locale, selected.per100.protein), unit: "g" }), /* @__PURE__ */ import_react.default.createElement(MacroPill, { label: t("add.fat"), value: formatMacro(locale, selected.per100.fat), unit: "g" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietFormBlock" }, /* @__PURE__ */ import_react.default.createElement("label", { className: "dietFormBlockLabel", htmlFor: "diet-portion" }, t("add.portion")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietPortionWrap" }, /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        ref: gramsRef,
        id: "diet-portion",
        className: "dietPortionInput",
        type: "number",
        inputMode: "decimal",
        min: "1",
        max: "10000",
        step: "any",
        value: grams,
        placeholder: t("add.gramsPlaceholder"),
        onChange: (event) => {
          setGrams(event.target.value);
          setError("");
        },
        "data-testid": "diet-grams"
      }
    ), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietPortionUnit" }, t("unit.g"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietQuickGrams" }, QUICK_GRAMS.map((value) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: value,
        type: "button",
        className: "dietQuickChip",
        onClick: () => {
          setGrams(String(value));
          setError("");
        }
      },
      value,
      " g"
    )))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietFormBlock" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFormBlockLabel" }, t("add.meal")), /* @__PURE__ */ import_react.default.createElement(MealChoices, { t, value: meal, onChange: setMeal })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietPreviewCard" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietPreviewTop" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietPreviewLabel" }, t("add.preview")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietPreviewKcal" }, formatNumber(locale, Math.round(preview.kcal)), /* @__PURE__ */ import_react.default.createElement("span", null, t("unit.kcal")))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietPreviewHint" }, t("add.previewHint", { grams: formatMacro(locale, validGrams ? numericGrams : 0) }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietPreviewMacros" }, /* @__PURE__ */ import_react.default.createElement("span", null, t("add.carbs"), " ", /* @__PURE__ */ import_react.default.createElement("b", null, formatMacro(locale, preview.carbs), " g")), /* @__PURE__ */ import_react.default.createElement("span", null, t("add.protein"), " ", /* @__PURE__ */ import_react.default.createElement("b", null, formatMacro(locale, preview.protein), " g")), /* @__PURE__ */ import_react.default.createElement("span", null, t("add.fat"), " ", /* @__PURE__ */ import_react.default.createElement("b", null, formatMacro(locale, preview.fat), " g"))))))),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "dietModalFooter" }, error !== "" && /* @__PURE__ */ import_react.default.createElement("p", { className: "dietModalError", role: "alert" }, error), mode !== "custom" && selected !== null && /* @__PURE__ */ import_react.default.createElement("div", { className: "dietModalFootSummary" }, /* @__PURE__ */ import_react.default.createElement("span", null, t("add.preview")), /* @__PURE__ */ import_react.default.createElement("strong", null, formatNumber(locale, Math.round(preview.kcal)), /* @__PURE__ */ import_react.default.createElement("small", null, t("unit.kcal")))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietModalFootActions" }, /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietSecondaryButton", onClick: onClose }, t("common.cancel")), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type: "button",
        className: "dietPrimaryButton",
        onClick: mode === "custom" ? submitCustom : submit,
        disabled: mode !== "custom" && selected === null,
        "data-testid": mode === "custom" ? "diet-custom-save" : "diet-confirm-add"
      },
      mode === "custom" ? editingCustom ? t("add.saveCustomChanges") : t("add.saveAndAdd") : editingEntry !== void 0 && editingEntry !== null ? t("add.save") : t("add.confirm")
    )))
  );
}
function TargetCard({ t, settings, targets, onSettings, locale }) {
  const [weightDraft, setWeightDraft] = (0, import_react.useState)(String(settings.weightKg));
  const [weightError, setWeightError] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setWeightDraft(String(settings.weightKg));
  }, [settings.weightKg]);
  const commitWeight = () => {
    const value = Number(String(weightDraft).replace(",", "."));
    if (!Number.isFinite(value) || value < 30 || value > 300) {
      setWeightError(true);
      return;
    }
    setWeightError(false);
    onSettings({ weightKg: round1(value), weightConfirmed: true });
  };
  const carbOptions = [
    { level: "low", carbs: targets.activity.carbs.low, fat: targets.activity.fat.low },
    { level: "high", carbs: targets.activity.carbs.high, fat: targets.activity.fat.high }
  ];
  return /* @__PURE__ */ import_react.default.createElement("section", { className: "dietCard dietTargetCard", "aria-labelledby": "diet-target-title" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCardHead" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCardTitleGroup" }, /* @__PURE__ */ import_react.default.createElement("h2", { className: "dietCardTitle", id: "diet-target-title" }, t("target.title")), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietCardSubtitle" }, t("target.weight"), " \xB7 ", settings.activity === "active" ? t("target.active") : t("target.inactive"))), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietBadge" }, t("target.badge"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetBody" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietField" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietFieldRow" }, /* @__PURE__ */ import_react.default.createElement("label", { className: "dietFieldLabel", htmlFor: "diet-weight" }, t("target.weight")), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFieldMeta" }, t("target.quickFormula", { weight: formatMacro(locale, targets.weight), factor: targets.factor }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietWeightWrap", "data-invalid": weightError ? "true" : void 0 }, /* @__PURE__ */ import_react.default.createElement(
    "input",
    {
      id: "diet-weight",
      className: "dietWeightInput",
      type: "number",
      inputMode: "decimal",
      min: "30",
      max: "300",
      step: "0.1",
      value: weightDraft,
      onChange: (event) => {
        setWeightDraft(event.target.value);
        setWeightError(false);
      },
      onBlur: commitWeight,
      onKeyDown: (event) => {
        if (event.key === "Enter") event.currentTarget.blur();
      },
      "aria-invalid": weightError,
      "data-testid": "diet-weight"
    }
  ), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietWeightUnit" }, t("unit.kg"))), weightError && /* @__PURE__ */ import_react.default.createElement("span", { className: "dietInvalid", role: "alert" }, t("target.invalidWeight"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietField" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFieldLabel" }, t("target.activity")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietSegmented", role: "group", "aria-label": t("target.activity") }, ["active", "inactive"].map((value) => /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      key: value,
      type: "button",
      className: "dietSegment",
      "data-active": settings.activity === value,
      "aria-pressed": settings.activity === value,
      onClick: () => onSettings({ activity: value }),
      "data-testid": `diet-activity-${value}`
    },
    value === "active" ? t("target.active") : t("target.inactive")
  )))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietField" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFieldLabel" }, t("target.carbLevel")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCarbChoices", role: "group", "aria-label": t("target.carbLevel") }, carbOptions.map((option) => /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      key: option.level,
      type: "button",
      className: "dietChoice",
      "data-active": settings.carbLevel === option.level,
      "aria-pressed": settings.carbLevel === option.level,
      onClick: () => onSettings({ carbLevel: option.level }),
      "data-testid": `diet-carb-${option.level}`
    },
    /* @__PURE__ */ import_react.default.createElement("span", { className: "dietChoiceTitle" }, t("target.carbValue", { grams: formatMacro(locale, option.carbs) })),
    /* @__PURE__ */ import_react.default.createElement("span", { className: "dietChoiceMeta" }, t("target.fatSide", { fat: formatMacro(locale, option.fat) }))
  )))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietField" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFieldLabel" }, t("target.calorieBasis")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCalorieChoices", role: "group", "aria-label": t("target.calorieBasis") }, /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      className: "dietCalorieChoice",
      "data-active": settings.calorieMode === "macro",
      "aria-pressed": settings.calorieMode === "macro",
      onClick: () => onSettings({ calorieMode: "macro" }),
      "data-testid": "diet-calorie-macro"
    },
    /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCalorieChoiceLabel" }, t("target.macroBasis")),
    /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCalorieChoiceValue" }, formatNumber(locale, targets.macroKcal), " ", /* @__PURE__ */ import_react.default.createElement("span", null, "kcal"))
  ), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      className: "dietCalorieChoice",
      "data-active": settings.calorieMode === "quick",
      "aria-pressed": settings.calorieMode === "quick",
      onClick: () => onSettings({ calorieMode: "quick" }),
      "data-testid": "diet-calorie-quick"
    },
    /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCalorieChoiceLabel" }, t("target.quickBasis")),
    /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCalorieChoiceValue" }, formatNumber(locale, targets.quickKcal), " ", /* @__PURE__ */ import_react.default.createElement("span", null, "kcal"))
  )), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietHint" }, t("target.hint"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetStats" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetStat" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetStatLabel" }, t("kpi.carbs")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetStatValue" }, formatMacro(locale, targets.carbs), /* @__PURE__ */ import_react.default.createElement("span", null, "g"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetStat" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetStatLabel" }, t("kpi.protein")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetStatValue" }, formatMacro(locale, targets.protein), /* @__PURE__ */ import_react.default.createElement("span", null, "g"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetStat" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetStatLabel" }, t("kpi.fat")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTargetStatValue" }, formatMacro(locale, targets.fat), /* @__PURE__ */ import_react.default.createElement("span", null, "g")))), /* @__PURE__ */ import_react.default.createElement("details", { className: "dietFormula" }, /* @__PURE__ */ import_react.default.createElement("summary", null, t("target.details"), " ", /* @__PURE__ */ import_react.default.createElement(IconChevronDown, { size: 11 })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietFormulaList" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "dietFormulaRow" }, t("target.formulaCarb", {
    weight: formatMacro(locale, targets.weight),
    grams: formatMacro(locale, targets.carbG),
    total: targets.carbs
  })), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietFormulaRow" }, t("target.formulaProtein", {
    weight: formatMacro(locale, targets.weight),
    grams: formatMacro(locale, targets.proteinG),
    total: targets.protein
  })), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietFormulaRow" }, t("target.formulaFat", { total: targets.fat })), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietFormulaRow" }, t("target.formulaKcal", {
    carbs: targets.carbs,
    protein: targets.protein,
    fat: targets.fat,
    total: formatNumber(locale, targets.macroKcal)
  })), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietFormulaRow" }, t("target.formulaQuick", {
    weight: formatMacro(locale, targets.weight),
    factor: targets.factor,
    total: formatNumber(locale, targets.quickKcal)
  })), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietFormulaNote" }, t("target.formulaNote"))))));
}
function TrendCard({ t, days, settings, targets, selectedDate, onSelectDate, locale }) {
  const lastSeven = (0, import_react.useMemo)(() => {
    const today = dateKey();
    return Array.from({ length: 7 }, (_, index) => {
      const key = shiftDateKey(today, index - 6);
      const entries = days[key]?.entries ?? [];
      return { key, kcal: Math.round(sumEntries(entries).kcal), hasEntries: entries.length > 0 };
    });
  }, [days]);
  const hasAny = lastSeven.some((day) => day.hasEntries);
  const logged = lastSeven.filter((day) => day.hasEntries);
  const average = logged.length === 0 ? 0 : logged.reduce((sum, day) => sum + day.kcal, 0) / logged.length;
  const maxKcal = Math.max(targets.activeKcal, ...lastSeven.map((day) => day.kcal), 1) * 1.12;
  const targetPercent = targets.activeKcal > 0 ? targets.activeKcal / maxKcal * 100 : 0;
  return /* @__PURE__ */ import_react.default.createElement("section", { className: "dietCard", "aria-labelledby": "diet-trend-title" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCardHead" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCardTitleGroup" }, /* @__PURE__ */ import_react.default.createElement("h2", { className: "dietCardTitle", id: "diet-trend-title" }, t("trend.title")), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietCardSubtitle" }, t("trend.subtitle"))), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietCardActions" }, /* @__PURE__ */ import_react.default.createElement(IconChart, { size: 18 }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTrendBody" }, hasAny ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTrendSummary" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendAvg" }, formatNumber(locale, Math.round(average))), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendAvgUnit" }, t("unit.kcal"), " \xB7 ", t("trend.avg")), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendTargetText" }, t("trend.target"), " ", formatNumber(locale, targets.activeKcal), " kcal")), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTrendRows", role: "group", "aria-label": t("trend.title") }, lastSeven.map((day) => {
    const width = day.kcal > 0 ? Math.min(100, day.kcal / maxKcal * 100) : 0;
    const over = targets.activeKcal > 0 && day.kcal > targets.activeKcal;
    return /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: day.key,
        type: "button",
        className: "dietTrendRow",
        "data-today": day.key === dateKey(),
        "data-selected": day.key === selectedDate,
        "data-over": over,
        onClick: () => onSelectDate(day.key),
        title: `${formatDateFull(locale, day.key)} \xB7 ${t("trend.kcal", { kcal: formatNumber(locale, day.kcal) })}`,
        "aria-label": `${formatDateFull(locale, day.key)}, ${t("trend.kcal", { kcal: formatNumber(locale, day.kcal) })}`,
        "aria-current": day.key === selectedDate ? "date" : void 0,
        "data-testid": "diet-trend-row"
      },
      /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendDayLabel" }, formatWeekday(locale, day.key)),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendRail" }, width > 0 ? /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendBarH", style: { width: `${width}%` } }) : /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendBarH", "data-empty": "true" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendTargetMark", style: { left: `${targetPercent}%` } })),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendRowValue" }, formatNumber(locale, day.kcal))
    );
  })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTrendFooter" }, /* @__PURE__ */ import_react.default.createElement("span", null, t("trend.today"), ": ", formatNumber(locale, lastSeven[6]?.kcal ?? 0), " kcal"), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietLegendLine" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietLegendDash" }), t("trend.target")))) : /* @__PURE__ */ import_react.default.createElement("div", { className: "dietTrendEmpty" }, /* @__PURE__ */ import_react.default.createElement(IconChart, { size: 20 }), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendEmptyTitle" }, t("trend.empty")), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietTrendEmptyHint" }, t("trend.emptyHint")))));
}
function RecentFoodsCard({ t, state, items, recent, onPick, onViewAll, locale }) {
  return /* @__PURE__ */ import_react.default.createElement("section", { className: "dietCard", "aria-labelledby": "diet-recent-title" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCardHead" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCardTitleGroup" }, /* @__PURE__ */ import_react.default.createElement("h2", { className: "dietCardTitle", id: "diet-recent-title" }, recent ? t("library.recentTitle") : t("library.startTitle")), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietCardSubtitle" }, recent ? t("library.recentHint") : t("library.startHint")))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietRecentBody" }, items.length === 0 ? /* @__PURE__ */ import_react.default.createElement("p", { className: "dietRecentEmpty" }, t("library.recentEmpty")) : /* @__PURE__ */ import_react.default.createElement("div", { className: "dietRecentList" }, items.map((food) => /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      key: food.key,
      type: "button",
      className: "dietRecentItem",
      onClick: () => onPick(food),
      "data-testid": "diet-recent-food"
    },
    /* @__PURE__ */ import_react.default.createElement("span", { className: "dietRecentAvatar" }, food.name.slice(0, 1).toUpperCase()),
    /* @__PURE__ */ import_react.default.createElement("span", { className: "dietRecentInfo" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietRecentName" }, food.name), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietRecentMeta" }, formatNumber(locale, Math.round(food.per100.kcal)), " kcal \xB7 ", t("library.per100Short"))),
    /* @__PURE__ */ import_react.default.createElement("span", { className: "dietRecentPlus" }, /* @__PURE__ */ import_react.default.createElement(IconPlus, { size: 13 }))
  ))), /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietRecentMore", onClick: onViewAll }, t("library.viewAll", { count: allFoodItems(state.customFoods, t).length }), " ", /* @__PURE__ */ import_react.default.createElement(IconChevronRight, { size: 12 }))));
}
function EntryRow({ t, entry, locale, onEdit, onRemove }) {
  const nutrition = entryNutrition(entry);
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "dietEntry", "data-testid": "diet-entry" }, /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietEntryMain", onClick: () => onEdit(entry) }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietEntryName" }, entryName(entry, t)), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietEntryMeta" }, t("entry.grams", { grams: formatMacro(locale, entry.grams) }), " \xB7 ", t("entry.macros", {
    carbs: formatMacro(locale, nutrition.carbs),
    protein: formatMacro(locale, nutrition.protein),
    fat: formatMacro(locale, nutrition.fat)
  })), /* @__PURE__ */ import_react.default.createElement("span", { className: "srOnly" }, t("entry.kcal", { kcal: formatNumber(locale, Math.round(nutrition.kcal)) }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietEntryRight" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietEntryKcal" }, t("entry.kcal", { kcal: formatNumber(locale, Math.round(nutrition.kcal)) })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietEntryActions" }, /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      className: "dietIconButton",
      "aria-label": t("entry.edit", { name: entryName(entry, t) }),
      onClick: () => onEdit(entry)
    },
    /* @__PURE__ */ import_react.default.createElement(IconPencil, { size: 13 })
  ), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      className: "dietIconButton",
      "data-danger": "true",
      "aria-label": t("entry.remove", { name: entryName(entry, t) }),
      onClick: () => onRemove(entry)
    },
    /* @__PURE__ */ import_react.default.createElement(IconTrash, { size: 13 })
  ))));
}
function DietPage(props) {
  const t = props.t;
  const locale = currentLocale();
  const [state, setState] = (0, import_react.useState)(loadState);
  const [selectedDate, setSelectedDate] = (0, import_react.useState)(dateKey);
  const [addOpen, setAddOpen] = (0, import_react.useState)(false);
  const [addInitial, setAddInitial] = (0, import_react.useState)(null);
  const [addMeal, setAddMeal] = (0, import_react.useState)(null);
  const [editingEntry, setEditingEntry] = (0, import_react.useState)(null);
  const [clearOpen, setClearOpen] = (0, import_react.useState)(false);
  const [toast, setToast] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    saveState(state);
  }, [state]);
  (0, import_react.useEffect)(() => {
    const onStorage = (event) => {
      if (event.key === STORAGE_KEY) setState(loadState());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  (0, import_react.useEffect)(() => {
    if (toast === null) return void 0;
    const timer = window.setTimeout(() => setToast(null), 12e3);
    return () => window.clearTimeout(timer);
  }, [toast]);
  const settings = state.settings;
  const targets = targetsFor(settings);
  const today = dateKey();
  const entries = state.days[selectedDate]?.entries ?? [];
  const totals = (0, import_react.useMemo)(() => sumEntries(entries), [entries]);
  const recent = recentFoodItems(state, t);
  const suggestionIds = ["egg", "chicken-breast", "cooked-rice", "broccoli", "banana"];
  const suggestionItems = suggestionIds.map((id) => FOOD_BY_ID.get(id)).filter(Boolean).map((food) => foodFromBuiltIn(food, t));
  const recentItems = recent.length > 0 ? recent : suggestionItems;
  const isToday = selectedDate === today;
  const dateLabel = formatDateFull(locale, selectedDate);
  const dayTitle = isToday ? t("log.title") : t("log.titleOther", { date: dateLabel });
  const updateSettings = (patch) => {
    setState((previous) => ({ ...previous, settings: { ...previous.settings, ...patch } }));
  };
  const openAdd = (food = null, meal = null) => {
    setEditingEntry(null);
    setAddInitial(food);
    setAddMeal(meal);
    setAddOpen(true);
  };
  const openEdit = (entry) => {
    setAddInitial(null);
    setEditingEntry(entry);
    setAddOpen(true);
  };
  const closeAdd = () => {
    setAddOpen(false);
    setAddInitial(null);
    setAddMeal(null);
    setEditingEntry(null);
  };
  const addEntry = (food, grams, meal) => {
    const entry = {
      id: makeId("entry"),
      foodId: food.foodId,
      name: food.name,
      grams,
      meal,
      per100: { ...food.per100 }
    };
    setState((previous) => ({ ...previous, days: withEntry(previous.days, selectedDate, entry) }));
    closeAdd();
  };
  const updateEntry = (entry, food, grams, meal) => {
    setState((previous) => {
      const day = previous.days[selectedDate];
      if (day === void 0) return previous;
      const nextEntries = day.entries.map((item) => item.id === entry.id ? {
        ...item,
        foodId: food.foodId,
        name: food.name,
        grams,
        meal,
        per100: { ...food.per100 }
      } : item);
      return { ...previous, days: { ...previous.days, [selectedDate]: { entries: nextEntries } } };
    });
    closeAdd();
  };
  const addCustom = ({ name: name2, per100, grams, meal }) => {
    const customId = makeId("food");
    const entryId = makeId("entry");
    const entry = {
      id: entryId,
      foodId: `custom:${customId}`,
      name: name2,
      grams,
      meal,
      per100: { ...per100 }
    };
    setState((previous) => ({
      ...previous,
      customFoods: [...previous.customFoods, { id: customId, name: name2, per100 }],
      days: withEntry(previous.days, selectedDate, entry)
    }));
    closeAdd();
  };
  const updateCustom = (id, { name: name2, per100, syncEntries }) => {
    setState((previous) => {
      const customFoods = previous.customFoods.map((food) => food.id === id ? { ...food, name: name2, per100 } : food);
      if (!syncEntries) return { ...previous, customFoods };
      const foodId = `custom:${id}`;
      const days = {};
      for (const [date, day] of Object.entries(previous.days)) {
        days[date] = {
          entries: day.entries.map((entry) => entry.foodId === foodId ? { ...entry, name: name2, per100: { ...per100 } } : entry)
        };
      }
      return { ...previous, customFoods, days };
    });
    closeAdd();
    setToast({ message: t("toast.foodUpdated", { name: name2 }) });
  };
  const deleteCustom = (id) => {
    setState((previous) => ({ ...previous, customFoods: previous.customFoods.filter((food) => food.id !== id) }));
  };
  const removeEntry = (entry) => {
    const index = entries.findIndex((item) => item.id === entry.id);
    if (index < 0) return;
    const name2 = entryName(entry, t);
    setState((previous) => {
      const day = previous.days[selectedDate];
      if (day === void 0) return previous;
      const nextEntries = day.entries.filter((item) => item.id !== entry.id);
      const nextDays = { ...previous.days };
      if (nextEntries.length === 0) delete nextDays[selectedDate];
      else nextDays[selectedDate] = { entries: nextEntries };
      return { ...previous, days: nextDays };
    });
    setToast({
      message: t("toast.removed", { name: name2 }),
      undo: () => {
        setState((previous) => {
          const current = previous.days[selectedDate]?.entries ?? [];
          if (current.some((item) => item.id === entry.id)) return previous;
          const nextEntries = [...current];
          nextEntries.splice(Math.min(index, nextEntries.length), 0, entry);
          return { ...previous, days: { ...previous.days, [selectedDate]: { entries: nextEntries } } };
        });
        setToast(null);
      }
    });
  };
  const clearDay = () => {
    if (entries.length === 0) return;
    const snapshot = entries.map((entry) => ({ ...entry, per100: { ...entry.per100 } }));
    const count = snapshot.length;
    setState((previous) => {
      const nextDays = { ...previous.days };
      delete nextDays[selectedDate];
      return { ...previous, days: nextDays };
    });
    setClearOpen(false);
    setToast({
      message: t("toast.cleared", { date: dateLabel }),
      undo: () => {
        setState((previous) => {
          const current = previous.days[selectedDate]?.entries ?? [];
          const present = new Set(current.map((entry) => entry.id));
          const restored = [...snapshot.filter((entry) => !present.has(entry.id)), ...current];
          return { ...previous, days: { ...previous.days, [selectedDate]: { entries: restored } } };
        });
        setToast(null);
      }
    });
  };
  const energyPercent = targets.activeKcal > 0 ? totals.kcal / targets.activeKcal * 100 : 0;
  const energyOver = targets.activeKcal > 0 && totals.kcal > targets.activeKcal;
  const circumference = 2 * Math.PI * 45;
  const ringOffset = circumference * (1 - clamp(energyPercent, 0, 100) / 100);
  const macroCards = [
    { key: "carbs", label: t("kpi.carbs"), total: totals.carbs, target: targets.carbs, className: "dietKpiCarbs" },
    { key: "protein", label: t("kpi.protein"), total: totals.protein, target: targets.protein, className: "dietKpiProtein" },
    { key: "fat", label: t("kpi.fat"), total: totals.fat, target: targets.fat, className: "dietKpiFat" }
  ];
  return /* @__PURE__ */ import_react.default.createElement("section", { className: "dietPage", "aria-label": t("page.title"), "data-testid": "diet-page", "data-locked": addOpen || clearOpen ? "true" : void 0 }, /* @__PURE__ */ import_react.default.createElement("style", null, CSS), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietScroll" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietContent" }, /* @__PURE__ */ import_react.default.createElement("header", { className: "dietHeading" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietHeadingText" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "dietEyebrow" }, t("page.eyebrow")), /* @__PURE__ */ import_react.default.createElement("h1", { className: "dietTitle" }, t("page.title")), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietSubtitle" }, t("page.subtitle"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietHeadingActions" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietDateNav" }, /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      className: "dietDateButton",
      "aria-label": t("page.datePrev"),
      onClick: () => setSelectedDate((value) => shiftDateKey(value, -1)),
      "data-testid": "diet-prev-day"
    },
    /* @__PURE__ */ import_react.default.createElement(IconChevronLeft, null)
  ), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietDateLabel", "aria-live": "polite" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietDateLong" }, formatDateLong(locale, selectedDate)), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietDateWeekday" }, formatWeekday(locale, selectedDate))), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      className: "dietDateButton",
      "aria-label": t("page.dateNext"),
      disabled: selectedDate >= today,
      onClick: () => setSelectedDate((value) => selectedDate < today ? shiftDateKey(value, 1) : value),
      "data-testid": "diet-next-day"
    },
    /* @__PURE__ */ import_react.default.createElement(IconChevronRight, null)
  )), !isToday && /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietTodayButton", onClick: () => setSelectedDate(today) }, t("page.today")), /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietPrimaryButton", "data-header-add": "true", onClick: () => openAdd() }, /* @__PURE__ */ import_react.default.createElement(IconPlus, { size: 14 }), " ", t("page.addFood")))), !settings.weightConfirmed && /* @__PURE__ */ import_react.default.createElement("div", { className: "dietOnboard", role: "status" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietOnboardIcon" }, /* @__PURE__ */ import_react.default.createElement(IconInfo, { size: 15 })), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietOnboardText" }, t("onboard.weight", { weight: formatMacro(locale, settings.weightKg) })), /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietOnboardButton", onClick: () => {
    const input = document.getElementById("diet-weight");
    if (input !== null) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      input.focus();
    }
  } }, t("onboard.action"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietKpis" }, /* @__PURE__ */ import_react.default.createElement("article", { className: "dietKpi dietKpiEnergy" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietKpiMain" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietKpiLabelRow" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietDot" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietKpiLabel" }, t("kpi.energy"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietKpiValueRow" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietKpiValue" }, formatNumber(locale, Math.round(totals.kcal))), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietKpiUnit" }, t("unit.kcal"))), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietKpiTarget" }, t("kpi.energyHint", { target: formatNumber(locale, targets.activeKcal) })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietKpiBottom" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMacroBar", role: "progressbar", "aria-label": t("kpi.energy"), "aria-valuemin": 0, "aria-valuemax": targets.activeKcal, "aria-valuenow": Math.min(Math.round(totals.kcal), targets.activeKcal), "aria-valuetext": `${formatNumber(locale, Math.round(totals.kcal))} / ${formatNumber(locale, targets.activeKcal)} ${t("unit.kcal")}` }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMacroBarFill", "data-over": energyOver, style: { width: `${clamp(energyPercent, 0, 100)}%` } })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietKpiFoot", "data-over": energyOver }, /* @__PURE__ */ import_react.default.createElement("span", null, energyOver ? t("kpi.over") : t("kpi.remaining")), /* @__PURE__ */ import_react.default.createElement("strong", null, formatNumber(locale, Math.round(Math.abs(targets.activeKcal - totals.kcal))), " kcal")))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietRingWrap", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 102 102" }, /* @__PURE__ */ import_react.default.createElement("circle", { className: "dietRingTrack", cx: "51", cy: "51", r: "45" }), /* @__PURE__ */ import_react.default.createElement(
    "circle",
    {
      className: "dietRingFill",
      cx: "51",
      cy: "51",
      r: "45",
      strokeDasharray: circumference,
      strokeDashoffset: ringOffset,
      style: energyOver ? { stroke: "var(--diet-over)" } : void 0
    }
  )), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietRingCenter" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietRingPercent" }, t("kpi.percent", { percent: formatNumber(locale, Math.round(energyPercent)) })), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietRingCaption" }, t("kpi.target"))))), macroCards.map((card) => {
    const percent = card.target > 0 ? card.total / card.target * 100 : 0;
    const over = card.target > 0 && card.total > card.target;
    return /* @__PURE__ */ import_react.default.createElement("article", { className: `dietKpi ${card.className}`, key: card.key, "aria-label": card.label }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietKpiLabelRow" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietDot" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietKpiLabel" }, card.label)), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietKpiValueRow" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietKpiValue" }, formatMacro(locale, card.total)), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietKpiUnit" }, t("unit.g"))), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietKpiTarget" }, t("kpi.macroTarget", { target: formatMacro(locale, card.target) })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietKpiBottom" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMacroBar", role: "progressbar", "aria-label": card.label, "aria-valuemin": 0, "aria-valuemax": card.target, "aria-valuenow": Math.min(round1(card.total), card.target), "aria-valuetext": `${formatMacro(locale, card.total)} / ${formatMacro(locale, card.target)} ${t("unit.g")}` }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMacroBarFill", "data-over": over, style: { width: `${clamp(percent, 0, 100)}%` } })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietKpiFoot", "data-over": over }, /* @__PURE__ */ import_react.default.createElement("span", null, over ? t("kpi.over") : t("kpi.remaining")), /* @__PURE__ */ import_react.default.createElement("strong", null, formatMacro(locale, Math.abs(card.target - card.total)), " g"))));
  })), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietLayout" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMainColumn" }, /* @__PURE__ */ import_react.default.createElement("section", { className: "dietCard", "aria-labelledby": "diet-log-title" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCardHead" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCardTitleGroup" }, /* @__PURE__ */ import_react.default.createElement("h2", { className: "dietCardTitle", id: "diet-log-title" }, dayTitle), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietCardSubtitle" }, entries.length === 1 ? t("log.countOne") : t("log.count", { count: entries.length }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietCardActions" }, entries.length > 0 && /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietGhostButton", "data-danger": "true", onClick: () => setClearOpen(true), "data-testid": "diet-clear-open" }, /* @__PURE__ */ import_react.default.createElement(IconTrash, { size: 12 }), " ", t("log.clear")), /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietPrimaryButton", onClick: () => openAdd(), "data-testid": "diet-add-open" }, /* @__PURE__ */ import_react.default.createElement(IconPlus, { size: 13 }), " ", t("log.add")))), entries.length === 0 ? /* @__PURE__ */ import_react.default.createElement("div", { className: "dietEmptyLog" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietEmptyArt" }, /* @__PURE__ */ import_react.default.createElement(IconBowl, { size: 30 })), /* @__PURE__ */ import_react.default.createElement("h3", { className: "dietEmptyTitle" }, t("log.emptyTitle")), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietEmptyText" }, t("log.emptyBody")), /* @__PURE__ */ import_react.default.createElement("button", { type: "button", className: "dietPrimaryButton dietEmptyAction", onClick: () => openAdd() }, /* @__PURE__ */ import_react.default.createElement(IconPlus, { size: 13 }), " ", t("log.emptyAction"))) : /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMeals" }, MEAL_KEYS.map((meal) => {
    const mealEntries = entries.filter((entry) => entry.meal === meal);
    const mealKcal = Math.round(sumEntries(mealEntries).kcal);
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMeal", "data-meal": meal, key: meal }, /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMealHead" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "dietMealBadge" }, t(`meal.${meal}.short`)), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMealTitleGroup" }, /* @__PURE__ */ import_react.default.createElement("h3", { className: "dietMealTitle" }, t(`meal.${meal}`), " ", mealEntries.length > 0 && /* @__PURE__ */ import_react.default.createElement("span", { className: "dietMealCount" }, mealEntries.length)), /* @__PURE__ */ import_react.default.createElement("p", { className: "dietMealMeta" }, mealEntries.length > 0 ? t("log.mealKcal", { kcal: formatNumber(locale, mealKcal) }) : t("log.mealEmpty"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "dietMealActions" }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type: "button",
        className: "dietMealAdd",
        "aria-label": t("log.mealAdd", { meal: t(`meal.${meal}`) }),
        onClick: () => openAdd(null, meal),
        "data-testid": `diet-meal-add-${meal}`
      },
      /* @__PURE__ */ import_react.default.createElement(IconPlus, { size: 13 })
    ))), mealEntries.length > 0 && /* @__PURE__ */ import_react.default.createElement("div", { className: "dietEntries" }, mealEntries.map((entry) => /* @__PURE__ */ import_react.default.createElement(
      EntryRow,
      {
        key: entry.id,
        t,
        entry,
        locale,
        onEdit: openEdit,
        onRemove: removeEntry
      }
    ))));
  })))), /* @__PURE__ */ import_react.default.createElement("aside", { className: "dietSideColumn" }, /* @__PURE__ */ import_react.default.createElement(TargetCard, { t, settings, targets, onSettings: updateSettings, locale }), /* @__PURE__ */ import_react.default.createElement(
    TrendCard,
    {
      t,
      days: state.days,
      settings,
      targets,
      selectedDate,
      onSelectDate: setSelectedDate,
      locale
    }
  ), /* @__PURE__ */ import_react.default.createElement(
    RecentFoodsCard,
    {
      t,
      state,
      items: recentItems,
      recent: recent.length > 0,
      onPick: (food) => openAdd(food),
      onViewAll: () => openAdd(),
      locale
    }
  ))), /* @__PURE__ */ import_react.default.createElement("footer", { className: "dietFooter" }, /* @__PURE__ */ import_react.default.createElement("span", null, t("footer.local")), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFooterDot" }), /* @__PURE__ */ import_react.default.createElement("span", null, t("footer.disclaimer")), /* @__PURE__ */ import_react.default.createElement("span", { className: "dietFooterDot" }), /* @__PURE__ */ import_react.default.createElement("span", null, t("footer.formulaCredit"))))), addOpen && /* @__PURE__ */ import_react.default.createElement(
    AddFoodModal,
    {
      t,
      initialFood: addInitial,
      editingEntry,
      state,
      onClose: closeAdd,
      onAdd: addEntry,
      onUpdate: updateEntry,
      onAddCustom: addCustom,
      onUpdateCustom: updateCustom,
      onDeleteCustom: deleteCustom,
      defaultMealChoice: addMeal ?? defaultMeal()
    }
  ), clearOpen && /* @__PURE__ */ import_react.default.createElement(ConfirmDialog, { t, dateLabel, count: entries.length, onClose: () => setClearOpen(false), onConfirm: clearDay }), toast !== null && /* @__PURE__ */ import_react.default.createElement(Toast, { t, toast, onUndo: () => toast.undo?.(), onClose: () => setToast(null) }));
}
var name = "dsh-diet";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "dsh-diet: dictionaries");
  const t = ctx.locale.bind(NS);
  ctx.effect(() => ctx.slots.inject("main", () => ctx.slots.register({
    name: "main",
    key: "diet",
    locale: NS,
    inject: () => ({})
  }, DietPage)), "dsh-diet: main page");
  ctx.effect(() => ctx.slots.inject("sidebar.panellist", () => ctx.slots.register({
    name: "sidebar.panellist",
    id: "diet",
    order: 30,
    locale: NS,
    label: () => t("panel")
  }, DietPanelIcon)), "dsh-diet: sidebar entry");
}

    return module.exports;
  },
});
