# BIXCY — Frontend (Home Screen)

React Native (TypeScript) + Expo build of the home screen from the mockup:
search bar, live map with pickup/drop-off pins and route, quick-ride
options (Bike / Bike+ / Parcel Delivery), and bottom tab bar.

## 1. Scaffold the project

These source files are meant to drop into a fresh Expo project (this keeps
your `package.json` versions correctly matched to your Expo SDK instead of
hand-typed and possibly stale):

```bash
npx create-expo-app@latest BIXCY -t blank-typescript
cd BIXCY
npx expo install react-native-maps @expo/vector-icons expo-status-bar
```

Then copy `App.tsx`, `app.json`, and the `src/` folder from this delivery
into that new project, overwriting the generated placeholders.

## 2. Run it

```bash
npx expo start
```

Scan the QR code with the **Expo Go** app (iOS/Android) or press `i` / `a`
for a simulator/emulator. On iOS the map uses Apple Maps by default (no API
key needed) — that's what the mockup's map style matches. On Android, add a
Google Maps API key in `app.json` under `android.config.googleMaps.apiKey`.

## 3. Project structure

```
BIXCY/
├── App.tsx
├── app.json
└── src/
    ├── theme/colors.ts          # single source of truth for the palette
    ├── components/
    │   ├── QuickRideOption.tsx  # Bike / Bike+ / Parcel Delivery card
    │   └── BottomNavBar.tsx     # Home / Rides / Wallet / Profile
    └── screens/
        └── HomeScreen.tsx       # the screen from the mockup
```

## VS Code extensions to install

- **ESLint** (`dbaeumer.vscode-eslint`) — catches errors as you type
- **Prettier** (`esbenp.prettier-vscode`) — consistent formatting on save
- **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`) — fast component boilerplate
- **React Native Tools** (`msjsdiag.vscode-react-native`) — debugging, running RN/Expo commands from the Command Palette
- **Expo Tools** (`expo.vscode-expo-tools`) — `app.json`/`app.config` IntelliSense, EAS integration
- **GitLens** (`eamodio.gitlens`) — git blame/history inline, useful once you're collaborating with the client
- **Error Lens** (`usernamehw.errorlens`) — surfaces TS/ESLint errors inline instead of only in the Problems tab
- **Color Highlight** (`naumovs.color-highlight`) — previews hex colors like the ones in `theme/colors.ts` directly in the editor

## Next steps

- Wire the "Where to?" bar to a places-autocomplete search (Google Places or Apple's own) so pickup/drop-off pins are set from real input instead of the hardcoded coordinates in `HomeScreen.tsx`.
- Replace the hand-placed `ROUTE_POINTS` zigzag with a real routed polyline from a directions API once you're pulling live pickup/drop-off points.
- Add `react-navigation` when a second screen (e.g. the "Rides" tab) is ready, so `BottomNavBar` actually navigates instead of just tracking `activeTab` locally.
