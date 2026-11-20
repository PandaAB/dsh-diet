# Releasing

`dsh-diet` is published to the public npm registry and distributed from GitHub. The two are linked through the `repository` field, which enables npm provenance.

## One-time setup

1. Create a free account at <https://www.npmjs.com/signup>.
2. Enable two-factor authentication on the npm account.
3. Log in locally:
   ```sh
   npm login
   npm whoami
   ```
4. In GitHub, open **Settings → Secrets and variables → Actions** and add `NPM_TOKEN`:
   - npm Access Token → **Granular Access Token**
   - package permissions: **Read and write**
   - scope: the `dsh-diet` package (or all packages)
   - bypass 2FA: enabled for CI

   A classic **Automation** token also works. Never commit the token.

## Release checklist

1. Update `CHANGELOG.md`.
2. Bump the version:
   ```sh
   npm version patch   # or minor / major
   ```
3. Build, test and inspect the tarball:
   ```sh
   npm test
   npm run pack:check
   ```
4. Commit and push:
   ```sh
   git push --follow-tags
   ```
5. Create a GitHub release for the new tag (`v0.1.1`, etc.). Publishing the release triggers `.github/workflows/publish.yml`, which runs `npm test` and publishes with provenance.
6. Verify:
   ```sh
   npm view dsh-diet version
   npm view dsh-diet dist.tarball
   ```

## Manual publish fallback

If Actions cannot publish, run locally:

```sh
npm login
npm test
npm publish --access public
```

## Versioning

- `patch` — fixes, copy changes, food-data corrections
- `minor` — new user-facing capability
- `major` — breaking data or package changes
