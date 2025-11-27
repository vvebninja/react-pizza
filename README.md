React Pizza

An educational React + Vite application for browsing pizzas, filtering/sorting, and managing a simple cart. Built with
TypeScript, React Router, SCSS modules, and ESLint. Uses Vite (rolldown-vite) for dev/build and pnpm as the package
manager.

Overview

- Stack: React 19, TypeScript, Vite 7 (rolldown-vite), React Router 7, SCSS (Sass), SVGR, ESLint
- Entry points:
    - index.html (mount point with <div id="root" />)
    - src/main.tsx (bootstraps React and RouterProvider)
    - src/router/router.ts (routes: HomePage, CartPage; wrapped by Root layout)
- Styling: SCSS modules (with a global styles/index.scss). Vite is configured with an @ alias to src and a global mixins
  import for SCSS.
- Assets: SVGs handled via vite-plugin-svgr and images under src/assets.

Requirements

- Node.js: 18.17+ (recommended 20+)
- pnpm: 8+ (pnpm-lock.yaml is present)
- Modern browser

Getting started

1) Install dependencies
    - pnpm install

2) Start the dev server
    - pnpm dev
      Vite will print a local URL (typically http://localhost:5173).

3) Build for production
    - pnpm build
      Output will be placed in dist/.

4) Preview the production build
    - pnpm preview

Available scripts

- dev: Start Vite in development mode
    - pnpm dev
- build: Type-check with TypeScript project references then build with Vite
    - pnpm build
- preview: Preview the built app locally
    - pnpm preview
- lint: Run ESLint across the project
    - pnpm lint
- format: Format the repository with Prettier
    - pnpm format

Environment variables

- Vite exposes only variables prefixed with VITE_. Place them in a .env (or .env.local) file at the project root.
- Examples:
    - VITE_API_BASE_URL=https://example.com/api
    - VITE_FEATURE_FLAG=true
- Access in code via import.meta.env.VITE_*

Project structure (high level)
.
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ vite.config.ts
├─ tsconfig.json / tsconfig.app.json / tsconfig.node.json
├─ eslint.config.js
├─ public/
└─ src/
├─ main.tsx # App bootstrap
├─ root.tsx # Root layout (Outlet container)
├─ router/
│ └─ router.ts # Route definitions (HomePage, CartPage)
├─ pages/
│ ├─ home-page.tsx
│ └─ cart-page.tsx
├─ sections/ # Page-level sections (filter, pizza list, order)
├─ components/ # Reusable UI (cart button, categories, pizza, search, etc.)
├─ contexts/ # React context (order context provider)
├─ constants/ # routePaths and other constants
├─ styles/ # Global styles and SCSS mixins
├─ assets/ # Images and SVG icons
└─ types.ts # Shared TypeScript types

Routing

- Uses react-router v7 with createBrowserRouter.
- Route constants under src/constants/constants.ts (routePaths).
- Root layout at src/root.tsx provides Outlet for nested routes.

Tooling details

- Vite config (vite.config.ts):
    - @ alias to ./src
    - react plugin with experimental babel-plugin-react-compiler
    - vite-plugin-svgr for importing SVGs as React components
    - SCSS preprocessor additionalData imports mixins from /src/styles/mixins.scss
- ESLint config (eslint.config.js): modern flat config using @eslint/js, typescript-eslint, react-hooks, and
  react-refresh rules.

Testing

- Current status: No tests are defined in this repository.
- TODO:
    - Decide on a test framework (Vitest + React Testing Library is a common choice with Vite)
    - Add basic unit/component tests and a script (e.g., pnpm test, pnpm test:watch)

Development notes

- Styling follows SCSS modules. Import module.scss files next to components/sections.
- Images can be referenced from src/assets; SVGs may be imported as components via SVGR.
- Use the @ path alias for cleaner imports, e.g., import { routePaths } from '@/constants/constants'.

CI/CD and deployment

- Not configured in this repo.
- TODO:
    - Add a CI workflow (e.g., GitHub Actions) to run lint/build/tests
    - Configure deployment (e.g., Vercel/Netlify/Static hosting of dist/)

License

- No license file detected.
- TODO: Add a LICENSE file (e.g., MIT) and update this section accordingly.

Contributing

- Ensure code passes linting: pnpm lint
- Prefer TypeScript types and keep components small and cohesive.
- Format with: pnpm format

Troubleshooting

- Node version errors: ensure Node >= 18.17
- Port conflicts: set Vite port via a .env value (e.g., VITE_PORT) and configure server.port in vite.config.ts if
  needed.
- Missing styles/mixins: confirm styles/index.scss and styles/mixins.scss exist and are referenced correctly.
