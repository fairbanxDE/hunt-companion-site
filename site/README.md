# KD:M Hunt Companion landing page

This is the static Astro showcase for the Hunt Companion. It is deliberately
local-only: there are no analytics, cookies, forms, embeds, or external
requests.

## Development

Use Node 22 (`.nvmrc`) and run from this directory:

```sh
npm ci
npm run dev
npm run check
npm run build
npm run test:e2e
```

The production site is configured for the GitHub Pages project base path
`/hunt-companion/`. Deployment is manual only; no workflow publishes on
push or pull request.

## Tour captures

The tour data lives in `src/data/tour.ts`. The five stages are intended to be
regenerated from a deterministic Core 1.6 White Lion fixture in the Flutter
client at `393×852` and `1366×1024`, then saved as `{stage}-{device}` assets
under `public/tour/`. Keep the app UI unchanged and verify every capture
against the running client before publication.

The checked-in capture set is generated from the real Flutter client using a
deterministic Core 1.6 White Lion Hunt flow. The approved simulator profiles
are iPhone 16 on iOS 18.6 and iPad Pro 13-inch (M4) on iOS 18.6. Captures
contain no source, rights, review, or release metadata in the player-facing
visuals.

To regenerate the masters:

```sh
cd flutter_app
flutter build ios --simulator --debug
xcrun simctl install <device-udid> build/ios/iphonesimulator/Runner.app
xcrun simctl launch <device-udid> com.example.kdmCompanion
xcrun simctl io <device-udid> screenshot --type=png ../site/public/tour/<stage>-<device>.png
```

Use the same White Lion Level 1 flow for each stage. Capture the iPad in
landscape; if `simctl` writes portrait pixels with orientation metadata, rotate
the iPad masters 90 degrees before committing them. Verify the five paired
states visually before publishing.
