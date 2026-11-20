# dsh-diet

Daily macro targets and per-gram food logging for [DeepSeek Harness](https://deepseek.com/harness/).

[English](README.md) · [简体中文](README.zh.md)

![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)
![DeepSeek Harness](https://img.shields.io/badge/DeepSeek%20Harness-%E2%89%A50.2.0--rc.2-4A5699.svg)
[![CI](https://github.com/PandaAB/dsh-diet/actions/workflows/ci.yml/badge.svg)](https://github.com/PandaAB/dsh-diet/actions/workflows/ci.yml)
[![GitHub stars](https://img.shields.io/github/stars/PandaAB/dsh-diet?style=social)](https://github.com/PandaAB/dsh-diet)

A sidebar page that turns body weight and activity into daily carbohydrate, protein and fat targets, then records what you actually ate — food by food, gram by gram.

![Daily intake page](docs/preview.png)

## Features

- **Targets from body weight** — active: carbs 2.0–2.5 g/kg, protein 2.0 g/kg, fat 50–40 g; less active: carbs 1.5–2.0 g/kg, protein 1.5 g/kg, fat 50–40 g.
- **Two calorie views** — progress against macro-derived calories or the quick body-weight formula (active × 26, less active × 24 kcal/kg). Switching only changes the calorie target, not the macro targets.
- **Food log by grams** — 24 built-in foods, searchable and grouped by category, plus custom foods with per-100 g nutrition.
- **Meals and days** — breakfast / lunch / dinner / snack, previous/next day, a seven-day calorie chart, edit, delete with undo, and guarded clear-day.
- **Custom food editing** — update per-100 g values and optionally sync past entries. Built-in presets are fixed reference values; use **Edit as custom food** to save your own version.
- **Bilingual UI** — English and Simplified Chinese, following the Harness language.
- **Local-first** — settings, custom foods and logs live in `localStorage`; nothing is sent to a model or server.

## Install

### From npm

```sh
npm install -g @deepseek-ai/dsh   # once, if dsh is not already installed
dsh plugin --profile web add dsh-diet
```

Or open **Plugins → Add plugin**, search for `dsh-diet`, and install it.

> If `dsh-diet` is not on npm yet, use the local checkout below.

After installation, refresh the Web GUI. The entry appears in the sidebar as **Daily intake** (or **饮食记录** in Chinese).

### From a local checkout

```sh
dsh plugin --profile web add /absolute/path/to/dsh-diet
```

Or use **Plugins → Add plugin** and choose the checkout directory. A linked checkout picks up `lib/client.js` changes through the client watcher.

## Use

1. Open **Daily intake** from the sidebar.
2. On first run, click **Set weight** in the banner, enter your body weight in kilograms, and confirm. Targets update immediately.
3. Choose activity level and carb level. The paired fat target is shown on each choice.
4. Click **Add food**, then choose a built-in or custom food, set grams and meal, and add it.
5. Edit an entry by clicking its row; delete with the trash button (undo is available).
6. Click a bar in **Last 7 days** to jump to that day.

### Editing food data

- Custom foods have a pencil button in the **Custom** tab and in the selected-food panel. Editing changes future entries. Past entries keep their values unless **Also update logged entries** is checked.
- Built-in foods are reference values, not a claim of exactness. A sweet potato differs by variety, cut and cooking method. Select a preset and click **Edit as custom food** to save a corrected version; the preset remains untouched.
- Deleting a custom food never rewrites existing log entries.

![Editing a custom food](docs/edit-food.png)

## Formulas

For body weight `w` kg:

| Group | Carbs | Protein | Fat | Quick calories |
| --- | --- | --- | --- | --- |
| Active | 2.0 or 2.5 g/kg | 2.0 g/kg | 50 g with 2.0 g/kg carbs; 40 g with 2.5 g/kg | `w × 26` |
| Less active | 1.5 or 2.0 g/kg | 1.5 g/kg | 50 g with 1.5 g/kg carbs; 40 g with 2.0 g/kg | `w × 24` |

Macro calories use 4 kcal/g for carbohydrate and protein, 9 kcal/g for fat. The quick calorie view is a reference and does not drive the macro targets.

These are everyday estimates for healthy adults, not medical or dietetic advice. Food values are approximate and vary by brand, cut and cooking method.

## Data and privacy

The state key is `dsh-diet:state:v1` in the browser's `localStorage`.

- No account, sync or cloud backup.
- No model requests.
- Removing plugin or clearing site data removes the log.
- The key is per browser origin; a different DSH port or browser starts fresh.

## Development

Requirements: Node 22.19+ or 24+.

```sh
npm install
npm run build      # src/client.jsx -> lib/client.js
npm test           # rebuild, validate manifest/resources/locales, syntax-check bundle
npm run pack:check # inspect the npm tarball
```

The browser entry is built with esbuild into the DSH `window.__ModuleLoader__.load` format. `src/foods.js` holds preset nutrition data, `src/locales.js` holds UI dictionaries, `src/client.jsx` owns the page, and `src/styles.js` holds the scoped stylesheet using DSH theme tokens.

The Host half is a no-op Cordis plugin (`index.js`); all behavior is in the browser entry.

## Compatibility

- `@deepseek-ai/dsh` `>=0.2.0-rc.2`
- Web client with sidebar panel slots and the locale service
- Node `^22.19.0 || >=24.0.0` for building

## Contributing

Issues and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). Maintainers can follow [RELEASING.md](RELEASING.md).

## License

[MIT](LICENSE) © 2026 dsh-diet contributors.
