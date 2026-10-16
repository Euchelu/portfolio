# Portfolio — Documentación técnica

**Estado:** Rama única `main` · GitHub Actions + GitHub Pages · React 19 + TypeScript · Vite 8 · Tailwind v4

---

## Resumen ejecutivo

Este es un **portfolio personal 100% estático** sin backend ni base de datos. React 19 y TypeScript se compilan con Vite a HTML/CSS/JS puros, que GitHub Pages sirve directamente desde `/portfolio/`. 

- **Cero llamadas fetch**, **cero servidores** → rápido, barato, sin mantenimiento.
- **Un único estado compartido**: el idioma (contexto React).
- **Despliegue único**: push a `main` → Actions → Pages (workflow).

---

## Stack técnico

| Tecnología | Versión | Rol |
|---|---|---|
| **React** | 19.2 | Componentes funcionales + hooks. Monolito en `StrictMode`. |
| **TypeScript** | ~6.0 | Tipado estático. `tsc -b` valida tipos antes de compilar. |
| **Vite** | 8.1 | Bundler. Compila TSX a estáticos. Config: `base: '/portfolio/'`. |
| **Tailwind CSS** | v4 | Estilos utilitarios con config CSS-first (`@theme` en `index.css`). |
| **Framer Motion** | 12 | Animaciones: entrada navbar, scroll reveals, menú móvil. |
| **lucide-react** | 1.x | Iconos (Menu, X, Mail, ExternalLink). GitHub/LinkedIn son SVG propios. |
| **oxlint + tsgolint** | 1.71 + 0.24 | Linter en Rust con reglas *type-aware* para Promises. `npm run lint` no emite warnings. |
| **Vitest + Testing Library** | 3.2 + 16.3 | Tests unitarios sobre jsdom. 11 casos en 3 archivos, 100% verde. |

---

## Arquitectura

### Build-time

```
src/ (TSX + TS)
  ↓
tsc -b          (typecheck)
  ↓
vite build      (bundle + minify)
  ↓
dist/           (HTML / CSS / JS)
```

### Runtime

```
index.html
  <script type="module" src="/src/main.tsx">

main.tsx
  createRoot(#root).render(
    <StrictMode>
      <App />

App.tsx
  <LanguageProvider>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Interests />
      <Contact />
    </main>
    <Footer />
```

### Estado

Existe **un único contexto compartido**:

```
LanguageContext
├─ lang: 'es' | 'en' (default: 'es')
├─ toggleLang(): void
└─ tr: translations[lang]  ← cada componente lee tr.seccion.clave
```

**No hay:**
- Router global (todo son IDs y navegación con `#href`)
- Store de estado (Redux, Zustand, etc.)
- Patrón de props-drilling excesivo

---

## Estructura de carpetas

```
portfolio/
├─ .github/workflows/
│  └─ deploy.yml                  # GitHub Actions → Pages
├─ public/
│  ├─ cv.pdf                      # CV español
│  ├─ cv_en.pdf                   # CV inglés
│  ├─ favicon.svg
│  └─ icons.svg
├─ src/
│  ├─ components/
│  │  ├─ Navbar.tsx               # Nav fija + menú mobile + toggle idioma + descarga CV
│  │  ├─ Hero.tsx                 # Typing effect + links sociales + orbes
│  │  ├─ About.tsx                # Bio + traits + stats
│  │  ├─ Skills.tsx               # Grid de categorías de habilidades
│  │  ├─ Experience.tsx           # Timeline vertical
│  │  ├─ Projects.tsx             # Grid 2 col con links a GitHub y demo
│  │  ├─ Interests.tsx            # Tarjetas de intereses
│  │  ├─ Contact.tsx              # CTA mailto + links sociales
│  │  ├─ Footer.tsx               # Pie
│  │  └─ SocialIcons.tsx          # SVG inline: GitHub y LinkedIn
│  ├─ context/
│  │  └─ LanguageContext.tsx      # Provider + contexto de idioma
│  ├─ hooks/
│  │  ├─ useLanguage.ts           # Hook para acceder al contexto
│  │  ├─ useTypingEffect.ts       # Efecto typing animado
│  │  ├─ useLanguage.test.tsx     # Tests: toggle, default, error
│  │  └─ useTypingEffect.test.ts  # Tests: carácter a carácter con timers falsos
│  ├─ i18n/
│  │  ├─ translations.ts          # Diccionarios ES / EN
│  │  └─ translations.test.ts     # Tests: paridad ES/EN
│  ├─ App.tsx                     # Árbol + LanguageProvider
│  ├─ main.tsx                    # Punto de entrada: createRoot
│  ├─ index.css                   # Tailwind v4 + @theme + @layer utilities
│  └─ test-setup.ts               # Setup Vitest (Testing Library)
├─ vite.config.ts                 # Plugins + base path
├─ vitest.config.ts               # jsdom + globals
├─ .oxlintrc.json                 # Reglas + type-aware
├─ tsconfig.json                  # Estricto
├─ index.html                     # Meta + OG + Umami script
├─ package.json                   # Scripts: dev, build, lint, test
└─ README.md                       # Instrucciones de usuario
```

**Nota:** `src/App.css` existe pero **no se importa en ningún sitio** (verificado). Es código muerto heredado de la plantilla Vite; candidato a eliminación.

---

## Internacionalización (i18n)

Sin librería externa. Arquitectura **imperativa y explícita**:

### 1. Diccionario (`src/i18n/translations.ts`)

```typescript
export type Lang = 'es' | 'en'

export const t = {
  es: {
    nav: { about: 'Sobre mí', skills: 'Skills', ... },
    hero: { badge: 'Disponible...', greeting: 'Hola, soy', roles: [...], ... },
    // ... 8 secciones
  },
  en: {
    nav: { about: 'About', skills: 'Skills', ... },
    hero: { badge: 'Available...', greeting: 'Hi, I am', roles: [...], ... },
    // ... idéntica estructura
  }
}
```

Un test unitario verifica que ambas ramas tengan **las mismas secciones y claves** — paridad garantizada.

### 2. Contexto (`src/context/LanguageContext.tsx`)

```typescript
interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  tr: typeof t['es']
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const toggleLang = () => setLang(l => l === 'es' ? 'en' : 'es')
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}
```

Envuelve toda la app en `App.tsx` (por debajo de `<StrictMode>`).

### 3. Hook (`src/hooks/useLanguage.ts`)

En **módulo independiente** (no en el context) para mejorar Fast Refresh:

```typescript
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
```

Cada componente hace:

```typescript
const { tr, lang, toggleLang } = useLanguage()
// Luego: tr.seccion.clave
```

### 4. Efecto secundario: CV bilingüe

En `Navbar.tsx`, el enlace de descarga reacciona al idioma:

```typescript
href={lang === 'es' ? '/portfolio/cv.pdf' : '/portfolio/cv_en.pdf'}
download={lang === 'es' ? 'CV_Jose_Angel_Ceballos_ES.pdf' : 'CV_Jose_Angel_Ceballos_EN.pdf'}
```

---

## Estilos y tema

### Tailwind v4 CSS-first

`src/index.css` es la fuente única de tokens:

```css
@import "tailwindcss";

@theme {
  --color-navy-950: #020b18;
  --color-navy-900: #050f1f;
  --color-blue-accent: #3b82f6;
  --color-cyan-accent: #06b6d4;
  --color-text-primary: #e2e8f0;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}

@layer base {
  /* resets y estilos base */
}

@layer utilities {
  .glass { background: rgba(10,22,40,0.6); backdrop-filter: blur(12px); }
  .glow-blue { box-shadow: 0 0 20px rgba(59,130,246,0.15); }
  .text-gradient { background: linear-gradient(...); -webkit-background-clip: text; }
  .dot-grid { background-image: radial-gradient(...); }
}
```

Tema **oscuro navy** con acentos azul/cian. Animaciones sutiles con Framer Motion.

### Responsividad

Breakpoints estándar Tailwind (md, lg). Navbar tiene hamburguesa en móvil. Grid de proyectos colapsa a 1 columna en móvil.

---

## Conexiones externas

### Conexiones **salientes** (solo enlaces):

1. **mailto:** — `mailto:euchelu@gmail.com` en Hero y Contact
2. **GitHub** — Perfil + 6 repos de proyectos enlazados
3. **LinkedIn** — Perfil personal
4. **Demos** — System Monitor enlaza a su propia GitHub Pages

### Entrada externa:

1. **Umami Analytics** — Script `defer` en `index.html`:
   ```html
   <script defer src="https://cloud.umami.is/script.js"
           data-website-id="9fed3e3d-3193-4d54-b516-8ed65fa10ec1"></script>
   ```
   Proporciona métricas de visitas sin cookies.

### **No existe:**

- API propia
- Llamadas `fetch` o HTTP
- Base de datos
- Sesiones de usuario
- Formularios (antes Formspree, ahora solo mailto)
- Backend de cualquier tipo

**Implicación:** El sitio funciona completamente sin internet (solo descarga estática), no requiere un servidor para ejecutarse, y no hay credenciales de API que proteger.

---

## Calidad: Linting y tests

### oxlint --type-aware

El script `npm run lint` ejecuta:

```bash
oxlint --type-aware
```

Requiere `oxlint-tsgolint` instalado (binario externo) y permite reglas que leen información de tipos de TypeScript:

- `no-floating-promises` — Promises sin `.catch()` o `await`
- `no-misused-promises` — Promises donde se espera un booleano
- `await-thenable` — `await` en no-Promises

Salida actual: **0 warnings, 0 errors** ✓

### Vitest (11 tests)

Tres archivos:

1. **`useTypingEffect.test.ts`** (3 tests)
   - Comienza vacío
   - Tipea un carácter por tick
   - Tipea la palabra completa con suficientes ticks

2. **`translations.test.ts`** (5 tests)
   - Ambas ramas existen
   - Estructuras top-level son idénticas
   - Keys de navegación coinciden
   - Hero roles es array no-vacío en ambas
   - Valores concretos cambian por idioma

3. **`useLanguage.test.tsx`** (3 tests)
   - Lanza error fuera del provider
   - Default a ES
   - Toggle entre ES ↔ EN

Ambiente: `jsdom`, globals habilitados, `@testing-library/react` para renderizado de hooks.

**Ejecución:** `npm test` → Vitest run → **11 passed** ✓

---

## Despliegue

### Único método: GitHub Actions + GitHub Pages

**Repositorio:** `euchelu/portfolio`  
**URL:** `euchelu.github.io/portfolio/`  
**Rama remota única:** `main` (gh-pages eliminada)  
**Pages source:** `build_type: workflow` (oficial, no rama)

### Pipeline (`.github/workflows/deploy.yml`)

**6 pasos ejecutados en cada push a `main`:**

```yaml
01. Checkout (actions/checkout@v4)
    ↓ Clona el repo en el runner Ubuntu

02. Setup Node 20 + caché npm (actions/setup-node@v4)
    ↓ Acelera instalaciones de dependencias

03. Instalar (npm ci)
    ↓ Instala exactamente el package-lock.json (incluye tsgolint)

04. Build (npm run build)
    ↓ tsc -b && vite build
    ↓ Falla si hay errores de tipos

05. Configurar Pages (actions/configure-pages@v4)
    ↓ Prepara el almacenamiento de artefactos

06. Subir artefacto (actions/upload-pages-artifact@v3)
    ↓ Empaqueta ./dist/

07. Desplegar (actions/deploy-pages@v4)
    ↓ Publica en GitHub Pages
    ↓ Sitio vivo en /portfolio/
```

### Base path

**Imprescindible:** `vite.config.ts` contiene `base: '/portfolio/'`.

Por qué: El sitio se sirve en un subdirectorio, no en la raíz. Vite reescribe las rutas de todos los assets (CSS, JS, imágenes) con este prefijo. Los enlaces internos y externos se deben construir respetando esto:

```typescript
// En Navbar.tsx:
href={lang === 'es' ? '/portfolio/cv.pdf' : '/portfolio/cv_en.pdf'}
```

Sin este `base`, los assets fallarían a cargar desde `/src/main.tsx` en el cliente.

---

## Desarrollo local

### Requisitos

- **Node.js 18+** (LTS recomendado)
- **npm** (incluido con Node)

### Secuencia de arranque

```bash
git clone https://github.com/Euchelu/portfolio.git
cd portfolio
npm install
npm run dev
```

Dev-server corre en **http://localhost:5173**.

### Scripts disponibles

| Comando | Hace |
|---|---|
| `npm run dev` | Dev-server con hot reload |
| `npm run build` | `tsc -b && vite build` → `dist/` |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run lint` | `oxlint --type-aware` |
| `npm test` | `vitest run` (11 tests) |
| `npm run test:watch` | Vitest en modo watch |

---

## Estado actual

| Aspecto | Estado | Nota |
|---|---|---|
| **Build** | ✓ Verde | `npm run build` compila sin errores |
| **Lint** | ✓ Limpio | 0 warnings con type-aware |
| **Tests** | ✓ 11/11 | Todos pasan |
| **Deploy** | ✓ Automático | GitHub Actions → Pages |
| **Ramas remotas** | ✓ Solo `main` | `gh-pages` residual eliminada |
| **About del repo** | ✓ Completo | Descripción, website, 6 topics |
| **Analítica** | ✓ Activa | Umami en index.html |
| **Código muerto** | ⚠ `App.css` | No se importa en ningún lado; candidato a borrar |

---

## Notas de mantenimiento

### No habrá cambios en estos puntos

- **Framework:** React + TypeScript se elige por su equilibrio de productividad y tipo-seguridad.
- **Despliegue:** GitHub Actions + Pages es el estándar oficial y requiere cero configuración de servidor.
- **i18n:** Sin librería externa; el sistema actual es explícito y fácil de mantener.

### Punto único de evolución

Si alguna vez se necesita un backend (comentarios, contacto formado, análisis avanzado), la opción más simple sería un servicio serverless (Vercel, Netlify Functions) o una API pequeña en otra plataforma. **Este portfolio jamás requerirá un servidor persistente.**

---

## Referencias

- Rama: [github.com/Euchelu/portfolio](https://github.com/Euchelu/portfolio)
- Sitio: [euchelu.github.io/portfolio/](https://euchelu.github.io/portfolio/)
- React 19: [react.dev](https://react.dev)
- Vite: [vite.dev](https://vite.dev)
- Tailwind v4: [tailwindcss.com](https://tailwindcss.com)
- Framer Motion: [motion.dev](https://motion.dev)
