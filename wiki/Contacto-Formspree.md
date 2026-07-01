# Formulario de Contacto (Formspree)

## Cómo funciona

El formulario de contacto en `src/components/Contact.tsx` envía un POST a la API de Formspree. No necesita backend propio.

```
Usuario rellena el form
       ↓
handleSubmit() → fetch POST a https://formspree.io/f/xpwraqkz
       ↓
Formspree procesa y reenvía el mensaje al email registrado
       ↓
UI muestra mensaje de éxito o error
```

## Configurar tu propio Formspree

1. Crear cuenta en https://formspree.io (plan gratuito: 50 envíos/mes)
2. Crear un nuevo form → copiar el ID (p.ej. `xpwraqkz`)
3. En `src/components/Contact.tsx`, línea 5:
```ts
const FORMSPREE_ID = 'tu-id-aqui'
```

## Estados del formulario

| Estado | Qué muestra |
|---|---|
| `idle` | Botón "Enviar mensaje" activo |
| `sending` | Spinner + "Enviando..." (botón deshabilitado) |
| `success` | Mensaje verde de confirmación, form reseteado |
| `error` | Mensaje rojo, usuario puede reintentar |

## Campos enviados a Formspree

```json
{
  "name": "Nombre del usuario",
  "email": "email@ejemplo.com",
  "message": "Texto del mensaje"
}
```

Formspree reenvía estos campos al email configurado en la cuenta.

## Verificar que funciona

1. En local (`npm run dev`), rellenar el form y enviar
2. Revisar el email registrado en Formspree
3. En el dashboard de Formspree → Submissions, verificar que aparece el envío

## Límites del plan gratuito

- 50 envíos/mes
- Sin spam filtering avanzado
- Sin archivos adjuntos

Para más volumen o funciones avanzadas: planes de pago en formspree.io/pricing
