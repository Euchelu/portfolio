# Flujo de trabajo

Este repositorio usa un **flujo basado en Pull Requests** con puertas de calidad
automáticas. La rama `main` está protegida: no se commitea directamente sobre ella,
todo cambio entra a través de un PR que debe pasar los checks.

## Por qué

Las herramientas de calidad (tests, linting, Lighthouse) solo protegen si se
ejecutan **antes** de fusionar. En un push directo a `main` el código ya está
dentro y desplegado: medir ahí es un termómetro, no un freno. En un PR, en
cambio, los checks **bloquean** el merge si algo empeora.

## Paso a paso

```bash
# 1. Parte de main actualizada
git checkout main
git pull

# 2. Crea una rama para tu cambio
git checkout -b tipo/descripcion-corta      # ej: feat/dark-mode, fix/navbar-scroll

# 3. Trabaja y commitea de forma granular
git add ...
git commit -m "feat: ..."

# 4. Sube la rama y abre el PR
git push -u origin tipo/descripcion-corta
gh pr create --fill                          # o desde la web de GitHub
```

## Qué corre en cada PR

| Check | Workflow | Qué valida | Bloquea |
|---|---|---|---|
| **quality** | `ci.yml` | `npm run lint` (type-aware) · `npm test` · `npm run build` | Sí |
| **lighthouse** | `lighthouse.yml` | Accesibilidad / Best Practices / SEO ≥ 0.9 (error), Performance ≥ 0.85 (warn) | Sí (excepto performance, que solo avisa) |

Si ambos checks están en verde, puedes fusionar el PR. Al mergear, `deploy.yml`
publica automáticamente el sitio en GitHub Pages.

## Antes de abrir el PR (opcional, para ir sobre seguro)

Puedes reproducir localmente lo que hará el CI:

```bash
npm run lint
npm test
npm run build
```

## Convención de ramas

| Prefijo | Uso |
|---|---|
| `feat/` | Nueva funcionalidad |
| `fix/` | Corrección de bug |
| `chore/` | Mantenimiento, tooling, CI |
| `docs/` | Solo documentación |
| `refactor/` | Reestructuración sin cambio de comportamiento |
