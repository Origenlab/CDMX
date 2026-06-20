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
          var email    = (fd.get('email')||'').trim();
          var tipo     = (fd.get('tipo')||'').trim();
          var fecha    = (fd.get('fecha')||'').trim();
          var equipo   = (fd.get('equipo')||'').trim();
          var aforo    = (fd.get('aforo')||'').trim();
          var venue    = (fd.get('venue')||'').trim();
          var mensaje  = (fd.get('mensaje')||'').trim();

          var lines = [
            'Hola REDEIL, vi su perfil en Directorio CDMX y quiero solicitar una cotizacion de iluminacion y audio.',
            '',
            '• Nombre: ' + nombre,
            '• Telefono: ' + telefono,
            email ? '• Correo: ' + email : null,
            '• Tipo de evento: ' + tipo,
            fecha ? '• Fecha: ' + fecha : null,
            equipo ? '• Servicio de interes: ' + equipo : null,
            aforo ? '• Aforo: ' + aforo : null,
            '• Ubicacion: ' + venue,
            '• Detalles: ' + mensaje,
            '',
            'Gracias, espero su contacto.'
          ].filter(Boolean);

          var url = 'https://wa.me/5549375172?text=' + encodeURIComponent(lines.join('\n'));
          window.open(url, '_blank', 'noopener,noreferrer');
        });
      }
    });