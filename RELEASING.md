# Releasing

`dsh-diet` is published to the public npm registry and distributed from GitHub. Releases use **npm Trusted Publishing (OIDC)** — no long-lived `NPM_TOKEN` is required.

## One-time setup

1. Create a free account at <https://www.npmjs.com/signup> and enable two-factor authentication.
2. Publish the first version once (npm Trusted Publishing cannot publish a package's first version):
   ```sh
   npm login
   npm publish --access public
   ```
   A short-lived granular token with bypass 2FA also works for this bootstrap step; delete it immediately afterwards.
3. Open the package settings on npm:
   **Packages → dsh-diet → Settings → Trusted Publisher → GitHub Actions**
   - Organization or user: `PandaAB`
   - Repository: `dsh-diet`
   - Workflow filename: `publish.yml`
   - Environment name: leave blank
   - Allowed actions: check **Allow npm publish**
   - Click **Set up connection**
4. Do **not** create an `NPM_TOKEN` GitHub secret. The workflow uses the OIDC token from:
   ```yaml
   permissions:
     id-token: write
   ```
5. After a successful OIDC release, optionally switch the package's Publishing access to:
   **Require two-factor authentication and disallow bypass 2fa tokens**.

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
4. Push the commit and tag:
   ```sh
   git push --follow-tags
   ```
5. Create a GitHub release for the new tag (`v0.1.1`, etc.). Publishing the release triggers `.github/workflows/publish.yml`, which runs `npm test` and publishes with provenance through OIDC.
6. Verify:
   ```sh
   npm view dsh-diet version
   npm view dsh-diet dist.tarball
   ```

## Manual publish fallback

If Actions cannot publish, run locally with your npm account and OTP:

```sh
npm login
npm test
npm publish --access public
```

## Versioning

- `patch` — fixes, copy changes, food-data corrections
- `minor` — new user-facing capability
- `major` — breaking data or package changes
