# Guia · Core Web Vitals Monitoring — cdmx.site

> Setup profesional para monitorear Lighthouse + Core Web Vitals
> Baseline actual + URLs prioritarias + protocolo de mejora continua

---

## Que son los Core Web Vitals

Tres metricas que Google usa como **ranking factor** en mobile y desktop search:

| Metrica | Que mide | Target Good | Target Poor |
|---|---|---|---|
| **LCP** Largest Contentful Paint | Tiempo hasta que el elemento mas grande visible carga | < 2.5s | > 4.0s |
| **CLS** Cumulative Layout Shift | Suma de movimientos inesperados de layout durante carga | < 0.1 | > 0.25 |
| **INP** Interaction to Next Paint | Latencia de la interaccion mas lenta con la pagina | < 200ms | > 500ms |

> **INP reemplazo FID en marzo 2024**. Si Lighthouse muestra FID, ignoralo — el ranking factor real ahora es INP.

---

## Baseline actual del sitio

### Peso por categoria de pagina

| Tipo | Promedio peso HTML |
|---|---|
| Blog post | 50-57 KB |
| L3 hub | 70-103 KB |
| L4 eventos | 113-127 KB |
| L4 seguridad | 89-121 KB |
| Home (index.html) | 110 KB |
| **Total sitio (40 paginas)** | **3.3 MB** |

### Assets compartidos

| Asset | Peso | Notas |
|---|---|---|
| `style.css` | 129 KB | Critical CSS, no minificado |
| `mobile.css` | 23 KB | Nuevo, mobile overrides |
| `app.js` | 26 KB | Vanilla JS, no minificado |
| Font Awesome (CDN) | ~75 KB | CSS only, defer-able |
| Google Fonts (Inter+Poppins) | ~45 KB | WOFF2 sub-set |

### Predicciones Lighthouse mobile (sin optimizar mas)

| Score | Mobile | Desktop |
|---|---|---|
| Performance | 70-85 | 90-95 |
| Accessibility | 92-96 | 92-96 |
| Best Practices | 90+ | 95+ |
| SEO | 95-100 | 100 |

---

## Paso 5.1 · Lighthouse + PageSpeed Insights

### Tool oficial · PageSpeed Insights

**URL:** https://pagespeed.web.dev/

### Como usar

1. Abrir https://pagespeed.web.dev/
2. Pegar la URL en el campo (ejemplo: `https://cdmx.site/`)
3. Click **Analyze**
4. Esperar 20-40 segundos
5. Ver scores separados **Mobile** y **Desktop**
6. Scroll down para ver:
   - Core Web Vitals Assessment (real user data si hay trafico)
   - Performance opportunities (que mejorar)
   - Diagnostics (info adicional)

### URLs prioritarias para monitorear semanalmente

```
https://cdmx.site/
https://cdmx.site/categorias/
https://cdmx.site/categorias/eventos/
https://cdmx.site/categorias/seguridad-privada/
https://cdmx.site/categorias/eventos/redeil/
https://cdmx.site/categorias/eventos/eventech/
https://cdmx.site/categorias/seguridad-privada/origins-private-security/
https://cdmx.site/blog/guia-organizar-eventos-sociales-cdmx/
```

8 URLs = ~5 minutos por correr todas.

---

## Paso 5.2 · Lighthouse desde Chrome DevTools

Mas detallado, permite **simular mobile slow 4G**:

1. Abrir el sitio en Chrome
2. F12 → tab **Lighthouse**
3. Categories: marcar **Performance**, **Accessibility**, **Best practices**, **SEO**
4. Device: **Mobile**
5. Throttling: **Simulated throttling** (default) o **Applied throttling** (mas realista pero lento)
6. Click **Analyze page load**
7. Esperar 30-60 segundos
8. Revisar reporte completo con seccion **Treemap** para ver que JS/CSS pesa mas

---

## Paso 5.3 · Diagnosticos comunes en sitios estaticos

### Si LCP > 2.5s en mobile

**Causa probable:** hero image grande sin priority hint.

Fix recomendado: agregar `fetchpriority="high"` al hero image:

```html
<img src="/img/hero.webp" alt="..." fetchpriority="high" loading="eager">
```

Y agregar preload en `<head>`:

```html
<link rel="preload" as="image" href="/img/hero.webp">
```

### Si CLS > 0.1

**Causas posibles:**
1. Imgs sin `width`/`height` → ya mitigado por CSS aspect-ratio en parents (.business-image, .blog-image, .cat-image)
2. Fonts custom loading tardio causando shift → Google Fonts ya usa `font-display: swap` por default
3. Ads dynamicos → no aplica (sitio sin ads)

Si CLS sigue > 0.1, agregar `aspect-ratio` inline a imgs problematicas:

```html
<img src="..." alt="..." style="aspect-ratio:16/10">
```

### Si INP > 200ms

**Causas posibles en este sitio:**
1. `app.js` con event listeners pesados (filter logic, scroll handlers)
2. Dropdown handlers con re-renders innecesarios

Fix: en `js/app.js`, usar `requestIdleCallback` para tareas no urgentes:

```javascript
requestIdleCallback(() => {
  // tracking pixel, analytics fire, etc.
});
```

### Si Performance < 70 mobile

**Quick wins** ordenados por impacto:

1. **Minificar CSS** (style.css 129 KB → ~80 KB minificado)
   ```bash
   npx clean-css-cli css/style.css -o css/style.min.css
   ```
   Cambiar `<link href="/css/style.css">` por `<link href="/css/style.min.css">`

2. **Minificar JS** (app.js 26 KB → ~15 KB minificado)
   ```bash
   npx terser js/app.js -o js/app.min.js -c -m
   ```

3. **Inline critical CSS** (above-the-fold) en `<head>`, defer el resto

4. **Defer fonts** con preload:
   ```html
   <link rel="preload" href="https://fonts.gstatic.com/..." as="font" type="font/woff2" crossorigin>
   ```

5. **Convert AVIF/WebP gallery images** (algunos hero estan en `.avif`, otros en `.webp`. WebP es ~30% mayor que AVIF pero universal. Mantener AVIF para imgs grandes)

6. **Gzip / Brotli en Cloudflare** (CF Pages lo hace por default)

---

## Paso 5.4 · Continuous monitoring

### Opcion A · Google Search Console (gratis, recomendado)

Una vez configurado GSC (Paso 3), entra a:
**Search Console → Core Web Vitals → Mobile**

Te muestra real user data agregada de las ultimas 28 dias:
- URLs Good / Needs improvement / Poor
- Trend chart
- Si hay regression, te notifica por email

Esto es **field data** (real users) vs Lighthouse que es **lab data** (simulado). Field data importa mas para ranking.

### Opcion B · CrUX Dashboard (libre, mas detalle)

**URL:** https://developer.chrome.com/docs/crux/dashboard/

Genera dashboard custom con tu sitio:
1. Login con Google cuenta
2. Add new property: `https://cdmx.site/`
3. Acceso a metricas historicas de Chrome User Experience Report
4. Real LCP/CLS/INP de usuarios reales en los ultimos 28 dias

### Opcion C · web-vitals npm package (advanced)

Para tracking client-side custom:

```html
<script type="module">
import {onCLS, onINP, onLCP} from 'https://unpkg.com/web-vitals@4?module';
onCLS(console.log);
onINP(console.log);
onLCP(console.log);
</script>
```

Reportar a Google Analytics, Plausible, o tu analytics provider para tracking por pagina + por device.

---

## Paso 5.5 · Protocolo de mejora continua

### Cadencia recomendada

| Frecuencia | Que hacer |
|---|---|
| **Semanal** | PageSpeed Insights en 4 URLs Tier 1, registrar score |
| **Mensual** | Lighthouse Mobile completo en 8 URLs prioritarias |
| **Trimestral** | Audit completo con HTML size + asset weight + dependencies |

### Trigger de mejora

Si en GSC ves URLs marcadas como "**Poor**" en Core Web Vitals:
1. Validar en PageSpeed Insights individual
2. Identificar la metrica problematica (LCP / CLS / INP)
3. Aplicar fix segun la seccion 5.3
4. Re-deploy
5. GSC tarda 28 dias en actualizar (es ventana movil de 28 dias)

---

## Paso 5.6 · Optimizaciones ya implementadas (resumen)

Ya esta hecho:

- ✓ `loading="lazy"` en 153 imgs below-the-fold
- ✓ `decoding="async"` en imgs lazy
- ✓ `width`/`height` en 21 paginas partner-logos
- ✓ Preconnect a `cdnjs.cloudflare.com` en 40 paginas
- ✓ Preconnect a `fonts.googleapis.com` + `fonts.gstatic.com` en todas
- ✓ CSS aspect-ratio en parents de imgs (anti-CLS)
- ✓ Touch targets >= 44px (anti-tap-error en mobile)
- ✓ Font-size 16px en inputs mobile (anti-zoom iOS)
- ✓ Safe-area-inset env() para notch iOS
- ✓ mobile.css responsive con 5 breakpoints

### Pendiente opcional (esperar baseline scores antes de implementar)

- [ ] Minificar style.css (`-40%` peso)
- [ ] Minificar app.js (`-40%` peso)
- [ ] Inline critical CSS (reduce render-blocking ~200ms)
- [ ] AVIF hero images (`-30%` vs WebP)
- [ ] Preload hero image en cada pagina
- [ ] Service worker para cache offline (PWA)

---

## Reportes esperados primeros 30 dias

| Dia | Que veras |
|---|---|
| 1-7 | GSC Performance vacio (sin trafico organico) |
| 8-14 | Primeras impresiones / clics aparecen |
| 15-21 | CWV con field data parcial (28 dias rolling window incompleto) |
| 22-28 | CWV field data completo |
| 30+ | Trends estables, tomar decisiones de optimizacion |

### Thresholds aceptables (recomendados para sitio directorio)

- Performance Mobile: **> 75** (ideal > 90)
- Performance Desktop: **> 90**
- LCP Mobile: **< 2.5s p75**
- CLS Mobile: **< 0.1 p75**
- INP Mobile: **< 200ms p75**

> **p75** = el percentil 75 — el 75% de tus usuarios deben tener mejor experiencia que este valor

---

## URLs de referencia rapida

- PageSpeed Insights: https://pagespeed.web.dev/
- Chrome DevTools Lighthouse: built-in (F12)
- CrUX Dashboard: https://developer.chrome.com/docs/crux/dashboard/
- web-vitals library: https://github.com/GoogleChrome/web-vitals
- Search Console CWV report: Search Console → Core Web Vitals

---

_Documento generado: 2026-05-28 · cdmx.site CWV monitoring setup_
