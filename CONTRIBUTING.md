# Contributing

Thanks for taking a look at `dsh-diet`.

## Development setup

Requirements: Node 22.19+ or 24+.

```sh
npm install
npm run build
npm test
```

`lib/client.js` is a committed build artifact. Edit `src/` and run `npm run build`; do not hand-edit `lib/client.js`.

## Pull requests

- Keep the page usable in light and dark themes, at desktop and phone widths.
- Use DSH theme tokens (`--dsw-alias-*`, `--dsw-radius-*`, `--dsw-shadow-*`) instead of literal colors.
- Put user-facing strings in `src/locales.js` for both `zh` and `en`; the locale key sets must stay equal.
- Do not add model calls or network requests without a clear product reason.
- Run `npm test` and `npm run pack:check` before opening a PR.
- Describe the user-visible change and include a screenshot for UI changes.

## Reporting bugs

Use GitHub Issues and include:

- DSH version and browser
- steps to reproduce
- expected and actual behavior
- console errors, if any

For security-sensitive reports, use GitHub's private vulnerability reporting instead of a public issue.
