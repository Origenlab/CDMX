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
document.addEventListener('DOMContentLoaded', function() {
      // Subcategory tag toggling
      document.querySelectorAll('.sidebar-tag').forEach(function(tag) {
        tag.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelectorAll('.sidebar-tag').forEach(function(t){ t.classList.remove('active'); });
          this.classList.add('active');
        });
      });

      // Grid/List view toggle
      var viewBtns = document.querySelectorAll('.view-btn');
      var businessGrid = document.getElementById('business-grid');
      viewBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          viewBtns.forEach(function(b){ b.classList.remove('active'); });
          this.classList.add('active');
          if (this.dataset.view === 'list') {
            businessGrid.classList.add('list-view');
          } else {
            businessGrid.classList.remove('list-view');
          }
        });
      });

      // Favorite toggle
      document.querySelectorAll('.btn-favorite').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          this.classList.toggle('active');
          var icon = this.querySelector('i');
          if (icon) {
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
          }
        });
      });

      // Live search filter
      var searchInput = document.getElementById('search-businesses');
      if (searchInput) {
        searchInput.addEventListener('input', function() {
          var q = this.value.toLowerCase();
          document.querySelectorAll('.business-card').forEach(function(card) {
            var name = (card.querySelector('.business-name') || {}).textContent || '';
            var desc = (card.querySelector('.business-description') || {}).textContent || '';
            var match = name.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
            card.style.display = match ? '' : 'none';
          });
        });
      }

      // Clear filters
      var clearBtn = document.querySelector('.btn-clear-filters');
      if (clearBtn) {
        clearBtn.addEventListener('click', function() {
          document.querySelectorAll('.sidebar-select').forEach(function(s){ s.selectedIndex = 0; });
          if (searchInput) searchInput.value = '';
          document.querySelectorAll('.sidebar-tag').forEach(function(t){ t.classList.remove('active'); });
          var first = document.querySelector('.sidebar-tag');
          if (first) first.classList.add('active');
          document.querySelectorAll('.business-card').forEach(function(card){ card.style.display = ''; });
        });
      }
    });