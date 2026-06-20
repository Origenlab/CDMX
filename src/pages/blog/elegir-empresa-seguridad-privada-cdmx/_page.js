// Reading progress
    (function(){
      var bar = document.querySelector('.reading-progress .bar');
      var article = document.getElementById('article');
      if(!bar || !article) return;
      function update(){
        var rect = article.getBoundingClientRect();
        var total = article.offsetHeight - window.innerHeight;
        var scrolled = -rect.top;
        var pct = Math.max(0, Math.min(100, (scrolled / total) * 100));
        bar.style.width = pct + '%';
      }
      window.addEventListener('scroll', update, {passive:true});
      window.addEventListener('resize', update);
      update();
    })();

    // TOC scrollspy
    (function(){
      var links = document.querySelectorAll('.article-toc a');
      if(!links.length) return;
      var sections = Array.from(links).map(function(a){
        var id = a.getAttribute('href').slice(1);
        return document.getElementById(id);
      }).filter(Boolean);
      function onScroll(){
        var pos = window.scrollY + 140;
        var current = sections[0];
        sections.forEach(function(s){ if(s.offsetTop <= pos) current = s; });
        links.forEach(function(l){
          l.classList.toggle('is-active', l.getAttribute('href') === '#' + current.id);
        });
      }
      window.addEventListener('scroll', onScroll, {passive:true});
      onScroll();
    })();

    // Copy link
    (function(){
      var btns = document.querySelectorAll('.share-btn.copy');
      btns.forEach(function(btn){
        btn.addEventListener('click', function(){
          var url = btn.getAttribute('data-copy');
          navigator.clipboard.writeText(url).then(function(){
            var label = btn.querySelector('.label');
            var prev = label.textContent;
            btn.classList.add('copied');
            label.textContent = 'Enlace copiado';
            setTimeout(function(){
              btn.classList.remove('copied');
              label.textContent = prev;
            }, 1800);
          });
        });
      });
    })();