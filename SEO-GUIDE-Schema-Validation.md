# Guia · Validacion de Schema.org Markup — cdmx.site

> Como validar el structured data de **cdmx.site** para Rich Results en Google.
> 40 paginas con multiples schemas. Foco en las 12 URLs prioritarias.

---

## Cobertura actual de Schema.org

Total **64 schemas** distribuidos en 40 paginas:

| Schema Type | Pages | Proposito SEO |
|---|---|---|
| **Store** | 12 | L4 eventos · cards de empresa en Search |
| **SecurityService** | 5 | L4 seguridad · cards de empresa en Search |
| **FAQPage** | 17 | Rich snippets con preguntas expandibles |
| **BlogPosting** | 15 | Article rich results, cards de blog |
| **CollectionPage** | 6 | Hubs y listados |
| **BreadcrumbList** | 5 (en blog) + breadcrumb inline en 17 (Store/SecurityService schemas) | Breadcrumb navigation en SERP |
| **ItemList** | 1 (/categorias/) | Listings carrusel |
| **Blog** | 1 (/blog/) | Blog landing |
| **WebSite** + **Organization** | 1 (root) | Sitelinks + brand entity |

> **64 schemas activos · 0 con errores de sintaxis JSON-LD** (validado programaticamente)

---

## Paso 4.1 · Validador oficial Google · Rich Results Test

**URL:** https://search.google.com/test/rich-results

### Que detecta

- Errors criticos que bloquean rich result
- Warnings recomendables
- Tipo de rich result eligible (FAQ, Article, Product, LocalBusiness, etc)
- Preview de como saldria en Search

### Como usar (paso a paso)

1. Abrir https://search.google.com/test/rich-results
2. En el campo URL, pegar la URL completa: ejemplo `https://cdmx.site/categorias/eventos/redeil/`
3. Click en **Test URL**
4. Esperar 10-30 segundos al fetch + parse
5. Ver los resultados:
   - **Page is eligible for rich results** = OK
   - **Page not eligible** = revisar errores y aplicar fixes
6. Click en cada schema detectado para ver detalles + preview

---

## Paso 4.2 · URLs prioritarias para validar (12)

### Tier 1 · Estructura base (4 URLs)

```
https://cdmx.site/
https://cdmx.site/categorias/
https://cdmx.site/categorias/eventos/
https://cdmx.site/categorias/seguridad-privada/
```

**Que esperar:**
- Root (`/`): WebSite + Organization → eligible para Sitelinks Search Box
- `/categorias/`: CollectionPage + ItemList + FAQPage → eligible para FAQ rich result
- L3 hubs: CollectionPage → eligible para breadcrumb

### Tier 2 · L4 empresas con FAQ (8 URLs)

Estas son las que tienen mayor potencial de rich results visibles:

```
https://cdmx.site/categorias/eventos/redeil/
https://cdmx.site/categorias/eventos/eventech/
https://cdmx.site/categorias/eventos/rentadecarpa/
https://cdmx.site/categorias/eventos/mesas-de-dulces/
https://cdmx.site/categorias/eventos/renta-de-inflables/
https://cdmx.site/categorias/seguridad-privada/origins-private-security/
https://cdmx.site/categorias/seguridad-privada/seprico-condominios/
https://cdmx.site/categorias/seguridad-privada/gupri-guardias-privados/
```

**Que esperar (Store/SecurityService + FAQPage):**
- ✓ Eligible para **FAQ rich result** (preguntas expandibles)
- ✓ Eligible para **LocalBusiness/Store** rich card
- ✓ Eligible para **aggregateRating** (estrellas en SERP)
- ✓ Eligible para **breadcrumb** (path en SERP en lugar del URL)

### Tier 3 · Blog (4 articulos top)

```
https://cdmx.site/blog/guia-organizar-eventos-sociales-cdmx/
https://cdmx.site/blog/seguridad-residencial-cdmx/
https://cdmx.site/blog/cctv-vs-guardia-24-7-cdmx/
https://cdmx.site/blog/elegir-empresa-seguridad-privada-cdmx/
```

**Que esperar (BlogPosting + BreadcrumbList):**
- ✓ Eligible para **Article rich result** con headline + image + date
- ✓ Eligible para **breadcrumb**

---

## Paso 4.3 · Validador alternativo · Schema Markup Validator (schema.org)

**URL:** https://validator.schema.org/

Mas estricto que el de Google. Detecta:
- Campos requeridos faltantes (mas exhaustivo)
- Datatypes incorrectos
- Anidamiento mal formado

Recomendado validar las **8 URLs Tier 2** aqui tambien, despues de Google Rich Results Test.

---

## Paso 4.4 · Schemas avanzados a considerar (futuro)

### Reviews destacadas

Algunos L4 ya tienen `review` array dentro del Store schema (RESOIL, SOEVE). Para que Google muestre review snippet, conviene:
- Minimo 3 reviews (ya tenemos 3 por L4 ahora ✓)
- Cada review con: `author`, `reviewRating.ratingValue`, `reviewBody`, `datePublished`
- `aggregateRating` con `ratingValue` + `reviewCount` (ya implementado ✓)

### Geo coordinates (LocalBusiness)

En los Store schemas actuales tenemos `address` pero falta `geo`:

```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "19.4326",
  "longitude": "-99.1332"
}
```

Aplicar a las 5 L4 seguridad + 12 L4 eventos = 17 paginas. Mejora rich result para "near me" queries.

### OpeningHours

Algunos L4 ya tienen `openingHoursSpecification` (REDEIL, RESOIL, SOEVE, Mededul, INFLAFI, RENTADECARPA, Renta-de-Iluminacion). Falta en:
- PODIUMEX, BOLDIS, PALED, INFLAPY, EVENTECH

Agregar `openingHoursSpecification` array a estos para que Google muestre horarios en card de empresa.

---

## Paso 4.5 · Validacion automatizada (opcional, advanced)

Si quieres automatizar el check en cada deploy:

### Opcion A · npm package `structured-data-testing-tool`

```bash
npm install -g structured-data-testing-tool
sdtt --url https://cdmx.site/categorias/eventos/redeil/
```

Genera reporte JSON con todos los schemas + validacion.

### Opcion B · GitHub Action

Agregar a `.github/workflows/seo-check.yml`:

```yaml
name: Schema validation
on: [push]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install -g structured-data-testing-tool
      - run: sdtt --file index.html
      - run: sdtt --file categorias/eventos/redeil/index.html
```

---

## Checklist de validacion

### Validacion individual por tier (4 URLs Tier 1 minimo)

- [ ] https://cdmx.site/ — WebSite + Organization sin errores
- [ ] https://cdmx.site/categorias/ — FAQ rich result preview visible
- [ ] https://cdmx.site/categorias/eventos/ — CollectionPage breadcrumb visible
- [ ] https://cdmx.site/categorias/seguridad-privada/ — CollectionPage breadcrumb visible

### Tier 2 (al menos 4 de las 8)

- [ ] REDEIL — Store + FAQ + aggregateRating + review snippet
- [ ] EVENTECH — Store + FAQ
- [ ] Mededul — Store + FAQ
- [ ] ORIGINS — SecurityService + FAQ

### Tier 3 (al menos 2 de los 4 blog posts)

- [ ] Guia eventos — BlogPosting con article rich result
- [ ] CCTV vs Guardia — BlogPosting + Breadcrumb

---

## Que esperar en Google Search Console

Despues de la validacion + ser indexado en GSC (Paso 3):

### Reporte **Enhancements** en GSC

- **FAQ** → vas a ver 17 paginas con FAQPage detected (las L4 + categorias hub)
- **Breadcrumbs** → 22 paginas (las que tienen BreadcrumbList o breadcrumb inline)
- **Sitelinks searchbox** → 1 pagina (root con WebSite schema)
- **Logo** → 1 pagina (root con Organization)
- **Merchant listings** → 12 paginas L4 eventos con Store schema (NO aplican como products, aparecen como LocalBusiness)
- **Local business** → 5 paginas L4 seguridad con SecurityService schema

### Errores esperados (a vigilar)

Los Rich Results pueden marcar warnings como "Missing field: priceRange" — no son criticos pero conviene agregarlos. Los `priceRange` ya estan en la mayoria de Store schemas (`$$-$$$$` etc).

---

## Troubleshooting

**Error: "Unparsable structured data"**
- Causa: comillas mal escapadas, JSON-LD invalido (corregido ya en blog posts)
- Verificacion: `python3 -c "import json,re,sys; [json.loads(s) for s in re.findall(r'application/ld\+json\">(.*?)</script>', open(sys.argv[1]).read(), re.DOTALL)]" path/to/index.html` retorna sin error

**Warning: "Recommended field: image"**
- Causa: BlogPosting sin propiedad `image`
- Fix: agregar `"image": "https://cdmx.site/img/..."` al schema BlogPosting

**Warning: "Recommended field: aggregateRating"**
- Causa: Store/SecurityService sin rating
- Fix: ya implementado en 12/12 L4 eventos y 5/5 L4 seguridad

---

## URLs de referencia

- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/
- Google Search Console: https://search.google.com/search-console
- Schema.org docs (LocalBusiness): https://schema.org/LocalBusiness
- Schema.org docs (FAQPage): https://schema.org/FAQPage

---

_Documento generado: 2026-05-28 · cdmx.site Schema validation guide_
