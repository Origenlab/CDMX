# 🏙️ DirectorioCDMX

> **El Directorio Empresarial #1 de la Ciudad de México**

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?style=flat&logo=cloudflare&logoColor=white)](https://cdmx.site)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.txt)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fcdmx.site&label=cdmx.site)](https://cdmx.site)

---

## 🌐 Sitio en vivo

**[cdmx.site](https://cdmx.site)** — Conectamos negocios con clientes en las 16 alcaldías de la CDMX.

---

## 📋 Descripción

Directorio empresarial completo y actualizado para la Ciudad de México. Más de **+453,000 empresas verificadas** en todas las alcaldías y categorías de negocio.

### ✨ Características

- 🔍 **Búsqueda avanzada** por empresa, servicio o producto
- 🗺️ **16 Alcaldías** de la CDMX cubiertas
- 📂 **Múltiples categorías**: Eventos, Seguridad Privada, Restaurantes, Abogados, Dentistas y más
- 📱 **Diseño responsive** para móvil y escritorio
- ⚡ **Desplegado en Cloudflare Pages** para máxima velocidad

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 / CSS3 | Estructura y estilos |
| JavaScript (ES6+) | Interactividad |
| Webpack 5 | Bundling y optimización |
| Cloudflare Pages | Hosting y CDN global |
| Font Awesome 6 | Iconografía |

---

## 📁 Estructura del Proyecto

```
CDMX/
├── index.html              # Página principal
├── 404.html                # Página de error
├── css/
│   └── style.css           # Estilos globales
├── js/
│   └── app.js              # JavaScript principal
├── img/
│   ├── eventos/            # Imágenes de eventos
│   └── seguridad-privada/  # Imágenes seguridad
├── categorias/             # Páginas de categorías
├── alcaldias/              # Páginas por alcaldía
├── vendor/                 # Librerías de terceros
├── webpack.common.js       # Config Webpack compartida
├── webpack.config.dev.js   # Config Webpack desarrollo
├── webpack.config.prod.js  # Config Webpack producción
└── package.json            # Dependencias
```

---

## 🚀 Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/Origenlab/CDMX.git
cd CDMX

# Instalar dependencias
npm install

# Servidor de desarrollo
npm start

# Build producción
npm run build
```

---

## 🚢 Deploy

El sitio se despliega automáticamente en **[Cloudflare Pages](https://pages.cloudflare.com/)** cada vez que se hace push a la rama `main`.

```bash
git add .
git commit -m "Mi actualización"
git push origin main
# ✅ Deploy automático en ~30 segundos
```

---

## 📞 Contacto

- 🌐 Website: [cdmx.site](https://cdmx.site)
- 📧 Email: contacto@directorio-cdmx.com
- 📱 Teléfono: +52 55 1234 5678

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE.txt](LICENSE.txt) para más detalles.

---

<p align="center">Hecho con ❤️ en Ciudad de México 🇲🇽</p>
