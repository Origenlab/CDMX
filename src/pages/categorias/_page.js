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
    });
;
(function() {
      var grid = document.getElementById('categories-grid');
      if (!grid) return;
      var allCards = Array.from(grid.querySelectorAll('.cat-card'));
      var initialOrder = allCards.slice();
      var search = document.getElementById('cat-hub-search');
      var clearBtn = document.getElementById('cat-hub-search-clear');
      var chips = document.querySelectorAll('.filter-chip');
      var sortSel = document.getElementById('cat-sort');
      var visibleCount = document.getElementById('visible-count');
      var emptyState = document.getElementById('cat-empty');
      var emptyReset = document.getElementById('cat-empty-reset');

      var state = { q: '', filter: 'all', sort: 'default' };

      function apply() {
        // Sort
        var arr = initialOrder.slice();
        if (state.sort === 'alpha') {
          arr.sort(function(a, b) {
            return a.querySelector('.cat-name').textContent.localeCompare(b.querySelector('.cat-name').textContent);
          });
        } else if (state.sort === 'empresas') {
          arr.sort(function(a, b) { return (+b.dataset.empresas) - (+a.dataset.empresas); });
        } else if (state.sort === 'verificadas') {
          arr.sort(function(a, b) { return (+b.dataset.verificadas) - (+a.dataset.verificadas); });
        }
        arr.forEach(function(c) { grid.appendChild(c); });

        // Filter
        var q = state.q.trim().toLowerCase();
        var shown = 0;
        allCards.forEach(function(card) {
          var matchQ = !q || (card.dataset.name || '').includes(q) || card.querySelector('.cat-name').textContent.toLowerCase().includes(q);
          var matchF = state.filter === 'all' || card.dataset.badge === state.filter;
          var match = matchQ && matchF;
          card.style.display = match ? '' : 'none';
          if (match) shown++;
        });

        if (visibleCount) visibleCount.textContent = shown;
        if (emptyState) emptyState.hidden = shown !== 0;
      }

      if (search) {
        search.addEventListener('input', function() { state.q = this.value; apply(); });
      }
      if (clearBtn) {
        clearBtn.addEventListener('click', function() {
          if (search) search.value = '';
          state.q = '';
          apply();
        });
      }
      chips.forEach(function(chip) {
        chip.addEventListener('click', function() {
          chips.forEach(function(c) { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
          this.classList.add('active');
          this.setAttribute('aria-selected', 'true');
          state.filter = this.dataset.filter;
          apply();
        });
      });
      if (sortSel) {
        sortSel.addEventListener('change', function() { state.sort = this.value; apply(); });
      }
      if (emptyReset) {
        emptyReset.addEventListener('click', function() {
          if (search) search.value = '';
          state.q = ''; state.filter = 'all'; state.sort = 'default';
          chips.forEach(function(c) {
            var on = c.dataset.filter === 'all';
            c.classList.toggle('active', on);
            c.setAttribute('aria-selected', on ? 'true' : 'false');
          });
          if (sortSel) sortSel.value = 'default';
          apply();
        });
      }
    })();