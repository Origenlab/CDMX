# Guia · Submit a Google Search Console — cdmx.site

> Documentacion profesional para indexar **cdmx.site** en Google Search.
> Pasos secuenciales, sin asumir contexto. Tiempo total: 30-45 minutos.

---

## Resumen ejecutivo

Vas a configurar 5 cosas en orden:

1. **Property en Google Search Console** — propiedad de dominio o URL prefix
2. **Verificacion de ownership** — DNS record o meta tag HTML
3. **Submit sitemap.xml** — para que Google descubra las 40 URLs
4. **Request indexing manual** — para las URLs prioritarias (homepage, L3 categorias)
5. **Configurar reportes** — Performance, Core Web Vitals, Coverage

Al final del proceso vas a tener Google indexando el sitio en 24-72 horas y reportes accionables en 7 dias.

---

## Paso 3.1 · Crear property en GSC

1. Ir a **https://search.google.com/search-console**
2. Login con la cuenta Google donde quieras administrar el sitio (Origenlab o tu cuenta personal). Recomendado: usar cuenta dedicada al proyecto, no personal.
3. Click en **Agregar propiedad** (izquierda arriba)
4. Elegir **Dominio** (DNS verification, indexa todos los subdominios y protocols)
   - Pegar: `cdmx.site`
   - **Recomendado** para cobertura completa
   - Alternativa: **URL prefix** con `https://cdmx.site/` (solo http+s, ese subdominio exacto)

---

## Paso 3.2 · Verificar ownership

GSC te da multiples metodos. Recomendado en orden:

### Opcion A · DNS TXT record (dominio)

1. Copiar el valor TXT que Google te da. Ejemplo:
   ```
   google-site-verification=ABC123xyzExampleStringFromGoogle
   ```
2. Ir al proveedor de DNS de cdmx.site (Cloudflare, dado el deploy en CF Pages)
3. **Cloudflare DNS dashboard** → cdmx.site → DNS → Records
4. Click en **Add record**:
   - Type: `TXT`
   - Name: `@` (o `cdmx.site` segun la interfaz)
   - Content: pegar el string `google-site-verification=...`
   - TTL: Auto
5. Save
6. Regresar a GSC → click en **Verificar**
7. Google propaga DNS en 1-15 minutos. Si falla la primera vez, esperar 10 min y reintentar.

### Opcion B · HTML meta tag (URL prefix property)

Si elegiste URL prefix en lugar de dominio:

1. GSC te da una linea como:
   ```html
   <meta name="google-site-verification" content="ABC123xyz..." />
   ```
2. Agregar esa meta tag al `<head>` de **index.html** (root). Es suficiente solo en root para verificacion.
3. Deploy a producción (commit + push, CF Pages auto-deploys)
4. Esperar 30s, regresar a GSC → **Verificar**

> **Importante**: una vez verificado, no quitar la meta tag ni el DNS record — Google revalida periodicamente.

---

## Paso 3.3 · Submit sitemap.xml

Una vez verificado:

1. En GSC, en el menu izquierdo: **Sitemaps**
2. En "Agregar un sitemap nuevo", escribir: `sitemap.xml`
   - Google completa con el dominio: `https://cdmx.site/sitemap.xml`
3. Click **Enviar**
4. GSC empieza a procesar. Status inicial: "Pendiente"
5. En 1-24 horas → status "Exito"
6. Discoveries esperados: **40 URLs** (matches sitemap actual)

Si te dice "No se pudo recuperar":
- Verificar que `https://cdmx.site/sitemap.xml` responde 200 OK en navegador
- Verificar que `robots.txt` permite acceso a Googlebot (ya esta configurado correctamente)

---

## Paso 3.4 · Request indexing manual de URLs prioritarias

Para acelerar la indexacion (Google tarda 1-4 semanas en crawlear todo organicamente), forzar el indexing de las 12 URLs mas estrategicas:

### Tier 1 · Homepage + Hub categorias (4 URLs)

```
https://cdmx.site/
https://cdmx.site/categorias/
https://cdmx.site/categorias/eventos/
https://cdmx.site/categorias/seguridad-privada/
```

### Tier 2 · L4 destacadas (8 URLs)

```
https://cdmx.site/categorias/eventos/redeil/
https://cdmx.site/categorias/eventos/eventech/
https://cdmx.site/categorias/eventos/rentadecarpa/
https://cdmx.site/categorias/eventos/mesas-de-dulces/
https://cdmx.site/categorias/seguridad-privada/origins-private-security/
https://cdmx.site/categorias/seguridad-privada/seprico-condominios/
https://cdmx.site/categorias/seguridad-privada/gupri-guardias-privados/
https://cdmx.site/blog/guia-organizar-eventos-sociales-cdmx/
```

### Proceso por URL

1. En GSC, barra superior tiene un input **"Inspect any URL in https://cdmx.site"**
2. Pegar la URL completa
3. Click Enter
4. Espera el reporte (15-30 segundos)
5. Si dice "URL no esta en Google" → click **Solicitar indexacion**
6. Google la encola para crawl en 24-72 horas
7. Repetir para las siguientes URLs (cuidado: hay limite de ~10 solicitudes/dia)

> **Importante**: el limite es por cuenta. Si tienes prisa, hacer Tier 1 hoy + Tier 2 manana.

---

## Paso 3.5 · Configurar reportes que valen la pena

Una vez indexado, los reportes utiles en GSC:

### Performance (Rendimiento)

- **Clics totales** y **impresiones totales** semanal/mensual
- **Top queries**: que terminos de busqueda traen trafico
- **Top pages**: que URLs traen mas clics
- **Posicion promedio**: meta inicial = top 20 en queries primarios

### Coverage (Cobertura)

- Verde "Valid" = OK indexado
- Amarillo "Valid with warnings" = revisar
- Rojo "Error" = arreglar (la mas comun: redirect chains, 404s)

### Core Web Vitals

- Mobile + Desktop scores separados
- LCP (Largest Contentful Paint) target < 2.5s
- CLS (Cumulative Layout Shift) target < 0.1
- FID/INP target < 200ms

### Mobile Usability

- Verifica que el sitio se vea OK en mobile (con el `mobile.css` ya implementado deberia salir todo verde)

### Configurar notificaciones por correo

1. GSC → ⚙️ Settings → Property settings → Users and permissions
2. Add: tu correo (ya estas, pero verifica que **email notifications** este ON)
3. Notification frequency: Weekly Digest (recomendado)

---

## Bonus · Bing Webmaster Tools

Bing tiene 8-10% de market share en Mexico, vale la pena indexar tambien:

1. Ir a **https://www.bing.com/webmasters**
2. Login con cuenta Microsoft
3. **Import from Google Search Console** (si ya configuraste GSC, importa toda la config en 1 click)
4. Si no, agregar manualmente:
   - Add a site → `https://cdmx.site/`
   - Verify ownership (mismas opciones DNS/meta tag)
   - Submit sitemap: `https://cdmx.site/sitemap.xml`

---

## Verificacion final · checklist

Despues de seguir los pasos:

- [ ] Property verificada en GSC (mostrar checkmark verde)
- [ ] Sitemap submitted con status "Exito" + 40 URLs discovered
- [ ] Tier 1 URLs solicitadas manualmente
- [ ] Tier 2 URLs solicitadas manualmente (puede ser al dia siguiente)
- [ ] Bing Webmaster Tools tambien configurado (opcional)
- [ ] Email notifications ON
- [ ] Property tambien agregada en Bing (opcional)

---

## Que esperar en las siguientes semanas

| Tiempo | Que sucede |
|---|---|
| 24-48 h | Tier 1 indexed, primeras impressions en Search |
| 72 h | Tier 2 indexed |
| 1 semana | Coverage report poblado, primer reporte de queries |
| 2 semanas | Core Web Vitals con datos reales |
| 1 mes | Top queries identificadas, posicion promedio estabilizada |
| 3 meses | Trafico organico consolidado, palabras clave consolidadas |

---

## Troubleshooting comun

**Problema**: "URL is not on Google" persistente despues de 7 dias
- Causa probable: contenido duplicado o noindex meta tag
- Fix: verificar que la pagina no tenga `<meta name="robots" content="noindex">`

**Problema**: Sitemap muestra "Couldn't fetch"
- Fix: verificar que `https://cdmx.site/sitemap.xml` retorna 200 OK con `Content-Type: application/xml`
- Verificar que robots.txt no bloquee `/sitemap.xml` (ya esta OK en config actual)

**Problema**: Mobile usability errors
- Si el `mobile.css` esta bien implementado, no deberia haber issues
- Si aparece "text too small to read" → revisar font-size del componente reportado

**Problema**: Core Web Vitals "Poor" en Mobile
- LCP > 2.5s: probable issue con hero image (agregar `fetchpriority="high"` al hero img)
- CLS > 0.1: probable issue con imgs sin dimensions (revisar partner-logos y blog imgs)
- INP > 200ms: revisar JS heavy en js/app.js

---

## URLs de referencia rapida

- GSC: https://search.google.com/search-console
- Bing WMT: https://www.bing.com/webmasters
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Schema Markup Validator: https://validator.schema.org/

---

_Documento generado: 2026-05-28 · cdmx.site SEO setup_
