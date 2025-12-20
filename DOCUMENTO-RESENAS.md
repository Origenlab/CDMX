# Guia para Agregar Empresas al Directorio CDMX

## Documento de Referencia para Creacion de Perfiles y Cards de Empresas

---

## INDICE

1. [Informacion Requerida de la Empresa](#1-informacion-requerida-de-la-empresa)
2. [Crear la Carpeta del Perfil](#2-crear-la-carpeta-del-perfil)
3. [Estructura del Archivo HTML del Perfil](#3-estructura-del-archivo-html-del-perfil)
4. [Crear la Card en la Categoria](#4-crear-la-card-en-la-categoria)
5. [Imagenes y Assets](#5-imagenes-y-assets)
6. [Schema.org y SEO](#6-schemaorg-y-seo)
7. [Checklist Final](#7-checklist-final)

---

## 1. INFORMACION REQUERIDA DE LA EMPRESA

Antes de comenzar, solicitar al cliente la siguiente informacion:

### Datos Basicos (OBLIGATORIOS)
- [ ] Nombre comercial de la empresa
- [ ] Razon social completa
- [ ] Categoria principal (ej: Seguridad Privada, Restaurantes, etc.)
- [ ] Subcategorias/servicios especificos
- [ ] Direccion completa (calle, numero, colonia, alcaldia, CP)
- [ ] Telefonos (minimo 1, ideal 2-3)
- [ ] WhatsApp (numero con codigo de pais: 52)
- [ ] Email de contacto
- [ ] Sitio web (si tiene)
- [ ] Horario de atencion

### Datos para el Perfil (OBLIGATORIOS)
- [ ] Descripcion corta (1-2 oraciones para la card)
- [ ] Descripcion larga (2 parrafos para el hero del perfil)
- [ ] Anos de experiencia
- [ ] Numero de clientes/proyectos atendidos
- [ ] Certificaciones y acreditaciones
- [ ] Servicios principales (minimo 6)
- [ ] Sectores que atiende (minimo 5)
- [ ] Zonas de cobertura/alcaldias

### Datos Opcionales (RECOMENDADOS)
- [ ] Slogan o tagline
- [ ] Valores de la empresa (3 valores)
- [ ] Diferenciadores vs competencia (2-3 puntos)
- [ ] Testimonios de clientes (minimo 3, ideal 9)
- [ ] Preguntas frecuentes (6 preguntas con respuestas)
- [ ] Redes sociales (Facebook, Instagram, LinkedIn)

### Para los Testimonios (por cada uno)
- [ ] Nombre completo del cliente
- [ ] Cargo/puesto
- [ ] Empresa/condominio/organizacion
- [ ] Texto del testimonio (2-4 oraciones)
- [ ] Calificacion (1-5 estrellas)

---

## 2. CREAR LA CARPETA DEL PERFIL

### Estructura de Carpetas

```
/CDMX/
├── categorias/
│   └── [nombre-categoria]/          # ej: seguridad-privada
│       ├── index.html               # Listado de la categoria
│       └── [nombre-empresa]/        # ej: origins-private-security
│           └── index.html           # Perfil de la empresa
```

### Nomenclatura de Carpetas

**Para la carpeta de la empresa usar:**
- Nombre en minusculas
- Sin acentos ni caracteres especiales
- Espacios reemplazados por guiones
- Maximo 3-4 palabras clave

**Ejemplos:**
- ORIGINS Private Security → `origins-private-security`
- Grupo Proteccion Total → `grupo-proteccion-total`
- Dr. Juan Perez Dermatologo → `dr-juan-perez-dermatologo`

---

## 3. ESTRUCTURA DEL ARCHIVO HTML DEL PERFIL

### 3.1 Seccion HEAD

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- TITULO: Nombre Empresa | Categoria | Directorio CDMX -->
  <title>[NOMBRE EMPRESA] | [CATEGORIA] en CDMX | Directorio CDMX</title>

  <!-- META DESCRIPTION: 150-160 caracteres con keywords -->
  <meta name="description" content="[NOMBRE EMPRESA] - [SERVICIOS PRINCIPALES] en [UBICACION]. [ANOS] anos de experiencia. [DIFERENCIADOR PRINCIPAL]. Cotizacion gratis.">

  <!-- KEYWORDS: 5-8 palabras clave relevantes -->
  <meta name="keywords" content="[keyword1], [keyword2], [keyword3], [keyword4], [keyword5], CDMX">

  <meta name="author" content="Directorio CDMX">
  <meta name="robots" content="index, follow">

  <!-- CANONICAL: URL completa del perfil -->
  <link rel="canonical" href="https://directorio-cdmx.com/categorias/[categoria]/[empresa]/">

  <!-- OPEN GRAPH -->
  <meta property="og:type" content="business.business">
  <meta property="og:url" content="https://directorio-cdmx.com/categorias/[categoria]/[empresa]/">
  <meta property="og:title" content="[NOMBRE EMPRESA] | [CATEGORIA] en CDMX">
  <meta property="og:description" content="[DESCRIPCION CORTA]">
  <meta property="og:image" content="https://directorio-cdmx.com/img/[categoria]/[imagen].webp">
  <meta property="og:locale" content="es_MX">
  <meta property="business:contact_data:street_address" content="[DIRECCION]">
  <meta property="business:contact_data:locality" content="Ciudad de Mexico">
  <meta property="business:contact_data:postal_code" content="[CP]">
  <meta property="business:contact_data:country_name" content="Mexico">
  <meta property="business:contact_data:phone_number" content="+52[TELEFONO]">

  <!-- TWITTER -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[NOMBRE EMPRESA] | [CATEGORIA] CDMX">
  <meta name="twitter:description" content="[DESCRIPCION CORTA]">

  <!-- FAVICON Y RECURSOS -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="../../../css/style.css">
```

### 3.2 Schema.org (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "[TIPO_SCHEMA]",           // Ver tabla de tipos abajo
  "name": "[NOMBRE EMPRESA]",
  "alternateName": "[RAZON SOCIAL]",
  "description": "[DESCRIPCION COMPLETA]",
  "url": "https://directorio-cdmx.com/categorias/[categoria]/[empresa]/",
  "logo": "[URL_LOGO]",
  "image": "[URL_IMAGEN]",
  "telephone": "+52[TELEFONO_PRINCIPAL]",
  "email": "[EMAIL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[CALLE Y NUMERO]",
    "addressLocality": "[COLONIA]",
    "addressRegion": "Ciudad de Mexico",
    "postalCode": "[CP]",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LATITUD]",
    "longitude": "[LONGITUD]"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[CALIFICACION]",
    "reviewCount": "[NUM_RESENAS]",
    "bestRating": "5",
    "worstRating": "1"
  },
  "areaServed": {
    "@type": "City",
    "name": "Ciudad de Mexico"
  },
  "sameAs": [
    "[URL_FACEBOOK]",
    "[URL_INSTAGRAM]",
    "[URL_LINKEDIN]",
    "[URL_SITIO_WEB]"
  ]
}
</script>
```

**Tabla de Tipos Schema.org por Categoria:**

| Categoria | @type |
|-----------|-------|
| Seguridad Privada | SecurityService |
| Restaurantes | Restaurant |
| Salud/Clinicas | MedicalBusiness |
| Abogados | LegalService |
| Automotriz | AutoRepair |
| Bienes Raices | RealEstateAgent |
| Tecnologia | ProfessionalService |
| Belleza/Spa | BeautySalon |
| Hoteles | Hotel |
| Escuelas | EducationalOrganization |
| Gimnasios | SportsActivityLocation |
| Veterinarias | VeterinaryCare |
| Default | LocalBusiness |

### 3.3 Breadcrumb Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://directorio-cdmx.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[CATEGORIA]",
      "item": "https://directorio-cdmx.com/categorias/[categoria]/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[NOMBRE EMPRESA]",
      "item": "https://directorio-cdmx.com/categorias/[categoria]/[empresa]/"
    }
  ]
}
</script>
```

### 3.4 Estilos CSS Internos

Los perfiles tienen estilos especificos dentro del `<style>` en el head. Copiar los estilos del archivo de referencia:
`/categorias/seguridad-privada/origins-private-security/index.html`

Secciones de estilos requeridas:
- `.business-profile-hero`
- `.business-hero-grid`
- `.business-badges-row`
- `.business-contact-card`
- `.certifications-bar`
- `.about-business-section`
- `.services-business-section`
- `.sectors-section`
- `.differentiators-section`
- `.testimonials-business-section`
- `.coverage-section`
- `.faq-section`
- `.cta-business-section`
- `.related-businesses-section`
- Responsive breakpoints (1024px, 768px, 640px)

### 3.5 Estructura del BODY

```html
<body>
  <!-- 1. SKIP LINK -->
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <!-- 2. TOP BAR (copiar del index) -->

  <!-- 3. HEADER (copiar del index) -->

  <!-- 4. MAIN CONTENT -->
  <main id="main-content">

    <!-- 4.1 BREADCRUMB SECTION -->
    <section class="breadcrumb-section">...</section>

    <!-- 4.2 HERO DEL PERFIL -->
    <section class="business-profile-hero">
      <!-- Grid de 2 columnas -->
      <div class="business-hero-grid">
        <!-- Columna izquierda: Info -->
        <div class="business-hero-content">
          - Badges (Verificado, Destacado, Premium)
          - H1 con nombre de empresa
          - Tagline
          - Rating con estrellas
          - 2 parrafos descriptivos
          - Highlights (Anos, Monitoreo, Certificacion)
        </div>
        <!-- Columna derecha: Card de contacto -->
        <div class="business-contact-card">
          - Boton WhatsApp
          - Boton Llamar
          - Boton Sitio Web
          - Info de contacto (direccion, telefonos, email, horario)
        </div>
      </div>
    </section>

    <!-- 4.3 BARRA DE CERTIFICACIONES -->
    <section class="certifications-bar">
      <!-- 6 certificaciones/acreditaciones -->
    </section>

    <!-- 4.4 SECCION ABOUT -->
    <section class="about-business-section">
      <!-- Grid 2 columnas: descripcion + 3 valores -->
    </section>

    <!-- 4.5 SECCION SERVICIOS -->
    <section class="services-business-section">
      <!-- Grid de 6 cards de servicios -->
    </section>

    <!-- 4.6 SECCION SECTORES -->
    <section class="sectors-section">
      <!-- Grid de 5 sectores que atiende -->
    </section>

    <!-- 4.7 SECCION DIFERENCIADORES -->
    <section class="differentiators-section">
      <!-- 2 cards con diferenciadores -->
    </section>

    <!-- 4.8 SECCION TESTIMONIOS -->
    <section class="testimonials-business-section">
      <!-- Grid 3x3 = 9 testimonios -->
    </section>

    <!-- 4.9 SECCION COBERTURA -->
    <section class="coverage-section">
      <!-- Tags con zonas de cobertura -->
    </section>

    <!-- 4.10 SECCION FAQ -->
    <section class="faq-section">
      <!-- 6 preguntas frecuentes en acordeon -->
    </section>

    <!-- 4.11 SECCION CTA -->
    <section class="cta-business-section">
      <!-- Call to action con formulario de contacto -->
    </section>

    <!-- 4.12 EMPRESAS RELACIONADAS -->
    <section class="related-businesses-section">
      <!-- 4 cards de empresas similares -->
    </section>

  </main>

  <!-- 5. FOOTER (copiar del index) -->

  <!-- 6. BACK TO TOP -->

  <!-- 7. COOKIE BANNER -->

  <!-- 8. SCRIPTS -->
  <script src="../../../js/app.js"></script>
  <script>
    // FAQ Accordion functionality
  </script>
</body>
```

---

## 4. CREAR LA CARD EN LA CATEGORIA

### 4.1 Ubicacion

Agregar la card en el archivo de la categoria:
`/categorias/[categoria]/index.html`

Buscar la seccion `<div class="business-grid">` y agregar la card.

### 4.2 Estructura de la Card

```html
<!-- [NOMBRE EMPRESA] - Cliente [Tipo] -->
<article class="business-card [featured-card]" data-category="[categoria]">
  <div class="business-image">
    <img src="../../img/[categoria]/[imagen].webp" alt="[NOMBRE EMPRESA]">
    <div class="business-badges">
      <!-- Badges segun tipo de cliente -->
      <span class="badge badge-verified"><i class="fas fa-check-circle"></i> Verificado SSC</span>
      <span class="badge badge-featured"><i class="fas fa-star"></i> Destacado</span>
      <span class="badge badge-premium"><i class="fas fa-crown"></i> Premium</span>
    </div>
  </div>
  <div class="business-content">
    <h3 class="business-name">[NOMBRE EMPRESA]</h3>
    <div class="business-rating">
      <div class="rating-stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <span class="rating-score">[CALIFICACION]</span>
      <span class="rating-count">([NUM] resenas)</span>
    </div>
    <p class="business-description">[DESCRIPCION CORTA - Max 150 caracteres]</p>
    <div class="business-tags">
      <span class="tag">[Tag1]</span>
      <span class="tag">[Tag2]</span>
      <span class="tag">[Tag3]</span>
      <span class="tag">[Tag4]</span>
    </div>
  </div>
  <div class="business-footer">
    <a href="https://wa.me/52[TELEFONO]" class="btn btn-sm btn-outline" target="_blank" rel="noopener">
      <i class="fab fa-whatsapp"></i> WhatsApp
    </a>
    <a href="[nombre-empresa]/" class="btn btn-sm btn-primary">
      <i class="fas fa-eye"></i> Ver perfil
    </a>
  </div>
</article>
```

### 4.3 Tipos de Badges

| Badge | Clase | Icono | Descripcion |
|-------|-------|-------|-------------|
| Verificado | `badge-verified` | `fa-check-circle` | Empresa con documentacion verificada |
| Destacado | `badge-featured` | `fa-star` | Cliente con plan destacado |
| Premium | `badge-premium` | `fa-crown` | Cliente con plan premium |
| Nuevo | `badge-new` | `fa-sparkles` | Empresa recien agregada |

### 4.4 Orden de las Cards

Las cards deben ordenarse por prioridad:
1. Premium + Destacado + Verificado (primero)
2. Premium + Verificado
3. Destacado + Verificado
4. Verificado
5. Sin badges (al final)

---

## 5. IMAGENES Y ASSETS

### 5.1 Ubicacion de Imagenes

```
/CDMX/img/
├── [categoria]/                    # ej: seguridad-privada
│   ├── [categoria]-[keyword1].webp
│   ├── [categoria]-[keyword2].webp
│   └── ...
```

### 5.2 Nomenclatura de Imagenes

**Formato:** `[categoria]-[palabra-clave-seo].webp`

**Ejemplos para Seguridad Privada:**
- `seguridad-privada-guardias-cdmx.webp`
- `seguridad-privada-condominios-residencial.webp`
- `seguridad-privada-empresas-corporativos.webp`
- `seguridad-privada-escoltas-ejecutivos.webp`
- `seguridad-privada-camaras-cctv-vigilancia.webp`

### 5.3 Especificaciones de Imagenes

| Uso | Dimensiones | Formato | Peso Max |
|-----|-------------|---------|----------|
| Card thumbnail | 400x300px | WebP | 50KB |
| Hero background | 1920x600px | WebP | 150KB |
| Testimonial avatar | 100x100px | WebP | 15KB |
| Logo empresa | 200x200px | WebP/PNG | 30KB |

### 5.4 Alt Text para SEO

Siempre incluir alt text descriptivo:
```html
<img src="..." alt="[Descripcion de la imagen] - [Nombre Empresa] en CDMX">
```

**Ejemplo:**
```html
<img src="seguridad-privada-condominios.webp" alt="Guardia de seguridad en condominio residencial - ORIGINS Private Security CDMX">
```

---

## 6. SCHEMA.ORG Y SEO

### 6.1 Checklist SEO On-Page

- [ ] Title tag unico (50-60 caracteres)
- [ ] Meta description unica (150-160 caracteres)
- [ ] URL amigable con keywords
- [ ] H1 unico con nombre de empresa
- [ ] H2-H4 jerarquicos para secciones
- [ ] Alt text en todas las imagenes
- [ ] Links internos a categoria y home
- [ ] Schema.org LocalBusiness/Service
- [ ] Breadcrumb schema
- [ ] Open Graph tags
- [ ] Canonical URL

### 6.2 Keywords por Seccion

| Seccion | Keywords a incluir |
|---------|-------------------|
| Title | Nombre + Categoria + CDMX |
| Meta description | Servicios + Ubicacion + Diferenciador |
| H1 | Nombre de empresa |
| Hero | Servicios principales + zona |
| Servicios | Lista de servicios con keywords |
| Sectores | Industrias que atiende |
| Cobertura | Alcaldias y colonias |
| FAQ | Preguntas con long-tail keywords |

### 6.3 Links Internos Requeridos

Cada perfil debe incluir links a:
- Home (`/`)
- Categoria (`/categorias/[categoria]/`)
- Alcaldias relacionadas (`/alcaldias/[alcaldia]/`)
- Empresas relacionadas (seccion al final)

---

## 7. CHECKLIST FINAL

### Antes de Publicar

**Estructura:**
- [ ] Carpeta creada con nombre correcto
- [ ] index.html del perfil creado
- [ ] Card agregada en la categoria

**SEO:**
- [ ] Title tag configurado
- [ ] Meta description configurada
- [ ] Schema.org LocalBusiness agregado
- [ ] Breadcrumb schema agregado
- [ ] Open Graph tags configurados
- [ ] Canonical URL correcta

**Contenido:**
- [ ] Nombre de empresa correcto en H1
- [ ] Descripcion en hero (2 parrafos)
- [ ] 6 servicios listados
- [ ] 5 sectores listados
- [ ] 9 testimonios agregados
- [ ] 6 FAQs configuradas
- [ ] Zonas de cobertura listadas

**Contacto:**
- [ ] WhatsApp con numero correcto (formato: 52XXXXXXXXXX)
- [ ] Telefono(s) de contacto
- [ ] Email configurado
- [ ] Sitio web (si aplica)
- [ ] Direccion completa
- [ ] Horarios de atencion

**Imagenes:**
- [ ] Imagen para card (400x300)
- [ ] Imagenes para testimonios
- [ ] Alt text en todas las imagenes

**Funcionalidad:**
- [ ] FAQ accordion funciona
- [ ] Links de WhatsApp abren correctamente
- [ ] Link "Ver perfil" en card funciona
- [ ] Breadcrumbs navegables

**Responsive:**
- [ ] Verificar en desktop (1920px)
- [ ] Verificar en tablet (1024px)
- [ ] Verificar en movil (375px)

---

## EJEMPLO COMPLETO DE REFERENCIA

Para ver un ejemplo completo implementado, revisar:

**Perfil:**
`/categorias/seguridad-privada/origins-private-security/index.html`

**Card:**
`/categorias/seguridad-privada/index.html` (primera card en el grid)

**Datos de la empresa de ejemplo:**
- Nombre: ORIGINS Private Security
- Categoria: Seguridad Privada
- Telefono: 55 3025 5580
- WhatsApp: 5530255580
- Email: josecruz@originsecurity.mx
- Web: https://seguridad-privada.com.mx/
- Direccion: Basiliso Romo Anguiano No 22 int 3, Col Industrial, CDMX, C.P. 07800

---

## NOTAS ADICIONALES

### Actualizaciones Futuras
Cuando se agregue una nueva categoria, crear:
1. Carpeta en `/categorias/[nueva-categoria]/`
2. index.html de la categoria (copiar estructura de seguridad-privada)
3. Actualizar navegacion en header de todas las paginas
4. Agregar categoria al footer
5. Agregar card de categoria en el index principal

### Mantenimiento
- Actualizar testimonios cada 6 meses
- Verificar links externos mensualmente
- Actualizar FAQs segun preguntas reales de clientes
- Revisar y actualizar certificaciones anualmente

---

*Documento creado: Diciembre 2025*
*Ultima actualizacion: Diciembre 2025*
*Version: 1.0*
