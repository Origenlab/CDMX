document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('img').forEach(function(img) {
        img.addEventListener('error', function() {
          img.style.opacity = '0';
          img.style.visibility = 'hidden';
        });
        if (img.complete && img.naturalWidth === 0) {
          img.style.opacity = '0';
          img.style.visibility = 'hidden';
        }
      });

      // FAQ accordion — single-open
      var faqs = document.querySelectorAll('.faq-item');
      faqs.forEach(function(item){
        item.addEventListener('toggle', function(){
          if (item.open) {
            faqs.forEach(function(o){ if (o !== item) o.open = false; });
          }
        });
      });

      // Cotizar form → WhatsApp
      var form = document.getElementById('cotizar-form');
      if (form) {
        form.addEventListener('submit', function(e){
          e.preventDefault();
          if (!form.checkValidity()) { form.reportValidity(); return; }
          var fd = new FormData(form);
          var nombre    = (fd.get('nombre')||'').trim();
          var telefono  = (fd.get('telefono')||'').trim();
          var email     = (fd.get('email')||'').trim();
          var empresa   = (fd.get('empresa')||'').trim();
          var tipo      = (fd.get('tipo')||'').trim();
          var modalidad = (fd.get('modalidad')||'').trim();
          var paso      = (fd.get('paso')||'').trim();
          var ciudad    = (fd.get('ciudad')||'').trim();
          var mensaje   = (fd.get('mensaje')||'').trim();

          var lines = [
            'Hola PALED, vi su perfil en Directorio CDMX y quiero solicitar una cotizacion.',
            '',
            '• Nombre: ' + nombre,
            '• Telefono: ' + telefono,
            email ? '• Correo: ' + email : null,
            '• Empresa: ' + empresa,
            '• Tipo de aplicacion: ' + tipo,
            '• Modalidad: ' + modalidad,
            paso ? '• Paso de pixel preferido: ' + paso : null,
            '• Ciudad: ' + ciudad,
            mensaje ? '• Detalles: ' + mensaje : null,
            '',
            'Gracias, espero su contacto.'
          ].filter(Boolean);

          var url = 'https://wa.me/5215512345678?text=' + encodeURIComponent(lines.join('\n'));
          window.open(url, '_blank', 'noopener,noreferrer');
        });
      }
    });