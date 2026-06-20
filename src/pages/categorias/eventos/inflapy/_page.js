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
          var nombre   = (fd.get('nombre')||'').trim();
          var telefono = (fd.get('telefono')||'').trim();
          var fecha    = (fd.get('fecha')||'').trim();
          var tipo     = (fd.get('tipo')||'').trim();
          var inflable = (fd.get('inflable')||'').trim();
          var zona     = (fd.get('zona')||'').trim();
          var mensaje  = (fd.get('mensaje')||'').trim();

          var lines = [
            'Hola INFLAPY, vi su perfil en Directorio CDMX y quiero solicitar una cotizacion.',
            '',
            '• Nombre: ' + nombre,
            '• WhatsApp: ' + telefono,
            '• Fecha del evento: ' + fecha,
            '• Tipo de evento: ' + tipo,
            inflable ? '• Inflable de interes: ' + inflable : null,
            '• Zona / alcaldia: ' + zona,
            mensaje ? '• Detalles: ' + mensaje : null,
            '',
            'Gracias, espero su contacto.'
          ].filter(Boolean);

          var url = 'https://wa.me/5255512345678?text=' + encodeURIComponent(lines.join('\n'));
          window.open(url, '_blank', 'noopener,noreferrer');
        });
      }
    });