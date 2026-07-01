# Stack y Decisiones Técnicas

## Por qué cada tecnología

| Tecnología | Alternativas consideradas | Decisión |
|---|---|---|
| **React 19** | Vue, Svelte | Ecosistema más amplio, coherente con el stack de proyectos showcaseados |
| **TypeScript 6** | JavaScript | Tipado estático evita errores en runtime, mejor DX con autocomplete |
| **Vite 8** | CRA, Webpack | Arranque instantáneo, HMR nativo, bundler rolldown en v8 |
| **Tailwind v4** | CSS Modules, styled-components | CSS-first config (sin `tailwind.config.js`), utilidades directo en JSX |
| **Framer Motion 12** | CSS animations, GSAP | API declarativa integrada con React, `useReducedMotion` built-in |
| **lucide-react 1.x** | react-icons, heroicons | Ligero, tree-shakeable. Nota: v1 eliminó iconos de marca (Github/Linkedin) → SVGs inline |
| **oxlint** | ESLint | Escrito en Rust, ~50x más rápido que ESLint para proyectos medianos |
| **Vitest** | Jest | Comparte config con Vite, sin transformación extra, API compatible con Jest |

## Decisiones de diseño

### Sin estado global complejo
Solo un contexto (`LanguageContext`). No se usa Redux, Zustand ni React Query porque el portfolio no tiene datos asíncronos ni estado compartido complejo.

### SVGs inline para iconos de marca
`lucide-react` v1.x eliminó los iconos de marcas (GitHub, LinkedIn). Se creó `SocialIcons.tsx` con SVGs inline en lugar de añadir `react-icons` (evita ~200KB extra).

### `base: '/portfolio/'` en Vite
GitHub Pages sirve el sitio desde `/portfolio/`, no desde `/`. Sin este ajuste, los assets y rutas fallarían con 404.

### `verbatimModuleSyntax` activado
TypeScript exige `import type` para importaciones de solo tipo. Mejora el tree-shaking y es la práctica recomendada en proyectos modernos.

## Tamaño del bundle (producción)

| Archivo | Tamaño | Gzip |
|---|---|---|
| `index.js` | ~360 KB | ~113 KB |
| `index.css` | ~17 KB | ~4 KB |

El JS es grande porque incluye Framer Motion (~100KB). Para optimizar en el futuro: lazy load de secciones con `React.lazy()`.
