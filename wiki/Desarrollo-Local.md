# Guía de Desarrollo Local

## Requisitos

- Node.js 18+ (recomendado 20 o 22)
- npm 9+

## Setup inicial

```bash
git clone https://github.com/Euchelu/portfolio.git
cd portfolio
npm install
npm run dev
```

Servidor disponible en `http://localhost:5173`

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Compila TypeScript + genera `dist/` |
| `npm run preview` | Sirve `dist/` localmente (preview de producción) |
| `npm run lint` | Linting con oxlint |
| `npm test` | Ejecuta tests con Vitest (modo run) |
| `npm run test:watch` | Vitest en modo watch |

## Estructura de archivos clave

```
src/
├── i18n/translations.ts     ← AQUÍ se editan todos los textos del sitio
├── context/LanguageContext  ← proveedor ES/EN
├── hooks/useTypingEffect.ts ← hook del typing animado
└── components/              ← un componente por sección
```

## Añadir o editar contenido

### Cambiar textos
Editar `src/i18n/translations.ts` — tanto la clave `es` como `en`.

### Añadir un proyecto
En `src/components/Projects.tsx` añadir en `projectMeta` el objeto con `tags`, `github` y `demo`.
En `src/i18n/translations.ts` añadir la entrada en `projects.items` para ES e EN.

## Tests

Los tests viven junto al código que prueban:

```
src/hooks/useTypingEffect.ts
src/hooks/useTypingEffect.test.ts   ← 3 tests
```

```bash
npm test
# ✓ starts with an empty string
# ✓ types the first character after one tick
# ✓ types the full word after enough ticks
```
