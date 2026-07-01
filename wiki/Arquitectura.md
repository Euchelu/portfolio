# Arquitectura

## Árbol de componentes

```
App
├── LanguageProvider          ← contexto ES/EN envuelve todo
├── Navbar                    ← fixed, toggle de idioma, botón CV
├── main
│   ├── Hero                  ← typing effect, orbes, social links
│   ├── About                 ← bio, trait cards, stat cards
│   ├── Skills                ← 6 categorías de stack
│   ├── Experience            ← timeline vertical con color por tipo
│   ├── Projects              ← grid 2 col, proyectos reales + coming
│   ├── Interests             ← 6 tarjetas de intereses
│   └── Contact               ← formulario Formspree + social links
└── Footer
```

## Flujo de datos

```
LanguageContext
    ├── lang: 'es' | 'en'
    ├── toggleLang()
    └── tr: translations[lang]   ← objeto con todos los textos

Cada componente:
    const { tr } = useLanguage()
    → usa tr.seccion.clave para renderizar texto
```

## Hooks

### `useTypingEffect(words, speed, pause)`
Localización: `src/hooks/useTypingEffect.ts`

Cicla entre un array de palabras con efecto de escritura/borrado.

| Param | Default | Descripción |
|---|---|---|
| `words` | requerido | Array de strings a ciclar |
| `speed` | `80ms` | Velocidad de escritura por carácter |
| `pause` | `2000ms` | Pausa al terminar de escribir una palabra |

Retorna el string actual a mostrar.

## Accesibilidad

- `prefers-reduced-motion`: Hero detecta la preferencia del sistema con `useReducedMotion()` de Framer Motion. Si está activa, todas las animaciones se desactivan (sin `initial/animate`, sin bouncing del scroll indicator).
- `aria-label` en todos los botones de iconos sin texto visible.
- Contraste: paleta diseñada para pasar AA en los textos principales.
