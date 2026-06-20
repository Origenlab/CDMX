const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// Copia TODO el contenido estatico del sitio a dist/ para que el deploy
// (wrangler pages deploy dist) sirva un sitio COMPLETO: paginas de
// categorias, blog, alcaldias, paginas legales, SEO y assets.
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false, // el template ya incluye <script src="/js/app.js">
      minify: false,
    }),
    new CopyPlugin({
      patterns: [
        // Carpetas de contenido y assets
        { from: 'img', to: 'img', noErrorOnMissing: true },
        { from: 'css', to: 'css', noErrorOnMissing: true },
        { from: 'js/vendor', to: 'js/vendor', noErrorOnMissing: true },
        { from: 'vendor', to: 'vendor', noErrorOnMissing: true },
        { from: 'categorias', to: 'categorias', noErrorOnMissing: true },
        { from: 'alcaldias', to: 'alcaldias', noErrorOnMissing: true },
        { from: 'blog', to: 'blog', noErrorOnMissing: true },
        { from: 'terminos', to: 'terminos', noErrorOnMissing: true },
        { from: 'privacidad', to: 'privacidad', noErrorOnMissing: true },
        // SEO / config / hosting
        { from: 'sitemap.xml', to: 'sitemap.xml', noErrorOnMissing: true },
        { from: 'robots.txt', to: 'robots.txt', noErrorOnMissing: true },
        { from: '_redirects', to: '_redirects', noErrorOnMissing: true },
        { from: '_headers', to: '_headers', noErrorOnMissing: true },
        { from: 'CNAME', to: 'CNAME', noErrorOnMissing: true },
        { from: '404.html', to: '404.html', noErrorOnMissing: true },
        { from: 'site.webmanifest', to: 'site.webmanifest', noErrorOnMissing: true },
        // Favicons / iconos
        { from: 'favicon.ico', to: 'favicon.ico', noErrorOnMissing: true },
        { from: 'favicon.svg', to: 'favicon.svg', noErrorOnMissing: true },
        { from: 'favicon.png', to: 'favicon.png', noErrorOnMissing: true },
        { from: 'favicon-16x16.png', to: 'favicon-16x16.png', noErrorOnMissing: true },
        { from: 'favicon-32x32.png', to: 'favicon-32x32.png', noErrorOnMissing: true },
        { from: 'apple-touch-icon.png', to: 'apple-touch-icon.png', noErrorOnMissing: true },
        { from: 'icon-192.png', to: 'icon-192.png', noErrorOnMissing: true },
        { from: 'icon-512.png', to: 'icon-512.png', noErrorOnMissing: true },
        { from: 'icon.avif', to: 'icon.avif', noErrorOnMissing: true },
        { from: 'icon.png', to: 'icon.png', noErrorOnMissing: true },
        { from: 'icon.svg', to: 'icon.svg', noErrorOnMissing: true },
        { from: 'logo.svg', to: 'logo.svg', noErrorOnMissing: true },
      ],
    }),
  ],
});
