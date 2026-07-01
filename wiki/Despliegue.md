# Despliegue

## Flujo automático

```
git push origin main
       ↓
GitHub Actions (.github/workflows/deploy.yml)
       ↓
  1. actions/checkout@v4
  2. actions/setup-node@v4 (Node 20)
  3. npm ci
  4. npm run build  →  genera dist/
  5. actions/configure-pages@v4
  6. actions/upload-pages-artifact@v3  →  sube dist/
  7. actions/deploy-pages@v4  →  publica en GitHub Pages
       ↓
https://euchelu.github.io/portfolio/
```

Tiempo total: ~2-3 minutos por push.

## Configuración requerida en GitHub

En el repo → **Settings → Pages**:
- Source: **GitHub Actions** (no "Deploy from a branch")

En **Settings → Actions → General**:
- Workflow permissions: **Read and write permissions**

## Por qué `base: '/portfolio/'`

GitHub Pages sirve el sitio desde `https://euchelu.github.io/portfolio/`, no desde la raíz `/`. Sin el `base` en `vite.config.ts`, todos los assets (JS, CSS) tendrían rutas `/assets/...` que devuelven 404. Con el `base`, las rutas se generan como `/portfolio/assets/...`.

```ts
// vite.config.ts
export default defineConfig({
  base: '/portfolio/',
  ...
})
```

## Hacer un deploy manual

No es necesario habitualmente, pero si quieres forzar un redeploy sin cambios de código:

```bash
# Crea un commit vacío para disparar el workflow
git commit --allow-empty -m "chore: trigger redeploy"
git push
```

## Variables de entorno en producción

Actualmente el portfolio no usa variables de entorno en build. Si en el futuro se añaden (ej. analytics ID), usar secrets de GitHub Actions:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_ANALYTICS_ID: ${{ secrets.ANALYTICS_ID }}
```

Y en el código: `import.meta.env.VITE_ANALYTICS_ID`
