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
          var zona      = (fd.get('zona')||'').trim();
          var servicio  = (fd.get('servicio')||'').trim();
          var tipo      = (fd.get('tipo')||'').trim();
          var mensaje   = (fd.get('mensaje')||'').trim();

          var lines = [
            'Hola BOMBERO.MX, vi su perfil en Directorio CDMX y quiero solicitar una cotizacion de EPP industrial.',
            '',
            '* Nombre: ' + nombre,
            '* Telefono: ' + telefono,
            email ? '* Correo: ' + email : null,
            '* Empresa: ' + empresa,
            '* Zona de envio: ' + zona,
            '* Linea de interes: ' + servicio,
            tipo ? '* Sector: ' + tipo : null,
            mensaje ? '* Detalles: ' + mensaje : null,
            '',
            'Gracias, espero su contacto.'
          ].filter(Boolean);

          var msg = lines.join('\n');
          var url = 'https://wa.me/525520780102?text=' + encodeURIComponent(msg);
          window.open(url, '_blank', 'noopener,noreferrer');
        });
      }
    });