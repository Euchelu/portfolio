# Wiki — Portfolio José Ángel Ceballos

Documentación técnica completa del portfolio personal. Aquí encontrarás arquitectura, decisiones de diseño, guías de contribución y referencias de todos los proyectos showcaseados.

---

## Índice

| Página | Descripción |
|---|---|
| [Arquitectura](Arquitectura) | Estructura de componentes, contextos y hooks |
| [Stack y Decisiones Técnicas](Stack-y-Decisiones-Tecnicas) | Por qué cada tecnología, trade-offs |
| [Guía de Desarrollo Local](Desarrollo-Local) | Setup, scripts y flujo de trabajo |
| [Sistema de Internacionalización](I18n) | Toggle ES/EN, añadir nuevos idiomas |
| [Despliegue](Despliegue) | GitHub Actions, Pages, proceso de release |
| [Proyectos del Portfolio](Proyectos) | Descripción técnica de cada proyecto showcaseado |
| [Formulario de Contacto](Contacto-Formspree) | Configuración de Formspree |
| [Analytics](Analytics) | Configuración de Umami |

---

## Vista rápida

```
portfolio/
├── src/
│   ├── components/     # UI — un archivo por sección
│   ├── context/        # LanguageContext (ES/EN)
│   ├── hooks/          # useTypingEffect
│   ├── i18n/           # Traducciones ES + EN
│   └── App.tsx
├── public/
│   ├── cv.pdf
│   └── cv_en.pdf
├── wiki/               # Esta documentación
├── .github/workflows/  # Deploy automático
├── vite.config.ts
└── vitest.config.ts
```

**URL en producción:** https://euchelu.github.io/portfolio/
