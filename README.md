# Plomered Web — Fase 1 (Landing)

Landing de captación para Plomered. Next.js (App Router) + React + TypeScript + Tailwind CSS.

Construido a partir de `Plomered_Brief_Arquitectura_Web.docx`. Alcance: sitio informativo con
formulario de contacto protegido por reCAPTCHA. Sin login ni backend transaccional — eso es Fase 2.

## Arrancar en local

Requiere Node.js 18.18+ (recomendado 20 LTS).

```bash
npm install
cp .env.local.example .env.local   # completar las llaves, ver abajo
npm run dev
```

Abre http://localhost:3000

## Variables de entorno

| Variable | De dónde sale |
|---|---|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v3 admin console |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA v3 admin console |
| `RESEND_API_KEY` | [resend.com](https://resend.com) — envío del correo del formulario |
| `CONTACT_FORM_TO_EMAIL` | Correo interno de Plomered que recibe las solicitudes |

Sin estas variables el formulario se muestra pero no se puede enviar.

## Estructura

```
app/
  layout.tsx        metadata + fuente global
  page.tsx           ensambla las secciones de la landing
  api/contact/       endpoint que valida reCAPTCHA y envía el correo
components/
  Header, Hero, About, Services, Segments, ContactForm, Footer
```

## Marca

Colores y logo tomados del brandbook oficial (`brand.*` en `tailwind.config.ts`):

- Azul marino `#09216D` (`brand`), azul claro `#3FB0EC` (`brand-light`), rojo `#FF0025` (`brand-accent`), gris `#B5B5B5` (`brand-gray`)
- Tipografía: Montserrat
- Logo en `public/logo-navy.png` (sobre fondo claro), `public/logo-white.png` (sobre fondo oscuro), `public/icon-mark.png` (isotipo, usado como favicon en `app/icon.png`)
- Razón social en el logo: AFER Plomería Especializada.

## Catálogo digital

`Services.tsx` (sección "Qué ofrecemos") usa las 12 categorías reales del catálogo de producto
(`Catalogo Plomered-vf.pdf`), con las imágenes de portada de cada sección exportadas a
`public/categorias/*.jpg`: tubería, conexiones, válvulas, almacenamiento de agua, bombas y
equipo hidroneumático, pegamentos y soldaduras, soportería y fijación, residencial,
urbanización, eléctrico, temporada, otros plomería.

Contacto oficial confirmado por el catálogo (página final):
- Dominio: `www.plomered.com` (ya usado como referencia dentro del propio catálogo impreso)
- Correos: `ventas@aferplomeria.com`, `mostrador@aferplomeria.com`
- Tel: (614) 435-07-55
- Dirección: Blvd. Jose Fuentes Mares #9802, Col. Villa Juárez, Chihuahua, Chih.

Este contacto real todavía no está en el Footer/sección de contacto del sitio — falta decidir
si se usa tal cual o se actualiza.

## Pendiente / decisiones fuera de este entregable

Según el brief, antes de avanzar a Fase 2 y 3 falta:

- Confirmar con el equipo de BPR si/cuándo habrá API del ERP nuevo.
- Definir cómo se alimenta el catálogo de Fase 2 mientras no haya API (exportación manual vs. base intermedia).
- Reglas exactas de precio B2B vs. B2C.
- Correo definitivo para `CONTACT_FORM_TO_EMAIL` (por ahora usa un correo temporal, ver arriba el correo real ya disponible).
- Meter el contacto real (tel/dirección/correo) al Footer.

## Deploy

Pensado para Vercel (repo en GitHub → deploy automático). Configurar las mismas variables de
entorno en el dashboard de Vercel antes del primer deploy a producción.
