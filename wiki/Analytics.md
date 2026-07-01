# Analytics (Umami)

## Estado actual

El portfolio tiene un placeholder comentado en `index.html` para añadir Umami Analytics cuando estés listo.

```html
<!-- ANALYTICS: Umami (privacy-friendly, no cookies)
     1. Crea cuenta en https://umami.is (plan Cloud gratuito)
     2. Añade tu sitio: https://euchelu.github.io/portfolio/
     3. Reemplaza WEBSITE-ID con el ID que te dan
<script defer src="https://cloud.umami.is/script.js"
        data-website-id="WEBSITE-ID"></script>
-->
```

## Por qué Umami

| Criterio | Umami | Google Analytics |
|---|---|---|
| Cookies | No | Sí |
| GDPR | Compliant sin banner | Requiere banner de cookies |
| Privacidad de visitantes | Anonimización completa | Perfiles de usuario |
| Precio | Gratuito (Cloud) | Gratuito |
| Datos en tiempo real | Sí | Sí |

## Activar Analytics

1. Crear cuenta en https://umami.is
2. En el dashboard → "Add website" → introducir `https://euchelu.github.io/portfolio/`
3. Copiar el `data-website-id` que proporciona Umami
4. Editar `index.html`: descomentar el bloque y reemplazar `WEBSITE-ID`

```html
<script defer src="https://cloud.umami.is/script.js"
        data-website-id="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"></script>
```

5. Hacer commit y push → el workflow despliega el cambio automáticamente

## Métricas disponibles

- Páginas vistas y visitantes únicos
- Tiempo en página
- Países de los visitantes
- Dispositivos (móvil / escritorio)
- Páginas más visitadas
- Fuentes de tráfico (referrers)

## Alternativas

- **Plausible**: similar a Umami, también privacy-friendly, plan de pago
- **Fathom**: privacy-first, plan de pago
- **Vercel Analytics**: solo si se migra el hosting a Vercel
