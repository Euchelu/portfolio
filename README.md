# Portfolio — José Ángel Ceballos

Portfolio personal desarrollado con React 19, TypeScript y Tailwind CSS v4. Presenta mi perfil profesional, stack técnico, experiencia, proyectos e intereses, con un diseño en tema oscuro, animaciones fluidas y despliegue automatizado en GitHub Pages.

🔗 **Demo en vivo:** [euchelu.github.io/portfolio](https://euchelu.github.io/portfolio/)

<!--
📸 Añade aquí una captura de pantalla o GIF del portfolio.
Ejemplo:
![Vista previa del portfolio](./public/preview.png)
-->

---

## ✨ Características

- **Diseño en tema oscuro** con paleta navy/azul/cyan y efecto glassmorphism
- **Efecto typing animado** que cicla entre roles profesionales (Backend Developer, DevOps, Data Engineer, QA)
- **Animaciones al hacer scroll** con Framer Motion (`whileInView`, `AnimatePresence`)
- **Respeta `prefers-reduced-motion`** para usuarios con sensibilidad al movimiento
- **Totalmente responsive**, con menú mobile animado
- **Timeline de experiencia** vertical con eventos codificados por color
- **Grid de proyectos** con enlaces directos a GitHub
- **Descarga de CV en PDF** desde un botón dedicado
- **Despliegue automatizado** vía GitHub Actions a GitHub Pages

---

## 🛠️ Stack técnico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | Framework de UI, componentes |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0 | Tipado estático |
| [Vite](https://vite.dev/) | 8 | Bundler y servidor de desarrollo |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Estilos utilitarios (CSS-first config) |
| [Framer Motion](https://motion.dev/) | 12 | Animaciones y transiciones |
| [lucide-react](https://lucide.dev/) | 1.x | Iconografía |
| [oxlint](https://oxc.rs/) | 1.x | Linting (Rust, alto rendimiento) |

SVGs inline se usan para los iconos de GitHub y LinkedIn, ya que fueron eliminados de `lucide-react` v1.

---

## 📁 Estructura del proyecto

```
portfolio/
├── .github/workflows/     # Workflow de GitHub Actions (deploy-pages)
├── public/
│   └── cv.pdf             # CV descargable
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Navegación fija, transparente al hacer scroll
│   │   ├── Hero.tsx           # Typing effect, orbes de luz, links sociales
│   │   ├── About.tsx          # Bio, tarjetas de rasgos y estadísticas
│   │   ├── Skills.tsx         # Categorías de habilidades técnicas
│   │   ├── Experience.tsx     # Timeline vertical de experiencia
│   │   ├── Projects.tsx       # Grid de proyectos con links a GitHub
│   │   ├── Interests.tsx      # Tarjetas de intereses
│   │   ├── Contact.tsx        # CTA de email + redes sociales
│   │   ├── Footer.tsx         # Pie de página
│   │   └── SocialIcons.tsx    # SVGs de GitHub y LinkedIn
│   ├── hooks/
│   │   └── useTypingEffect.ts # Hook del efecto typing animado
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts          # base: '/portfolio/' para GitHub Pages
├── package.json
└── tsconfig.json
```

---

## 🚀 Cómo correrlo en local

**Requisitos:** Node.js 18+ y npm

```bash
# Clonar el repositorio
git clone https://github.com/Euchelu/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npm run dev
```

El proyecto quedará disponible en `http://localhost:5173`.

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Compila TypeScript y genera el build de producción |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Analiza el código con oxlint |

---

## 📦 Despliegue

El sitio se despliega automáticamente en **GitHub Pages** mediante GitHub Actions (`actions/deploy-pages@v4`) en cada push a `main`. La configuración de base path para rutas correctas está en `vite.config.ts`:

```ts
export default defineConfig({
  base: '/portfolio/',
  // ...
})
```

---

## 📄 Licencia

Este proyecto es de uso personal. Si quieres usar partes del código como referencia para tu propio portfolio, ¡adelante! Se agradece una mención.

---

## 📬 Contacto

- **GitHub:** [@Euchelu](https://github.com/Euchelu)
- **LinkedIn:** [José Ángel Ceballos](https://www.linkedin.com/in/josé-ángel-ceballos-rodríguez-a44996346/)
- **Email:** euchelu@gmail.com
