// Category page specific functionality
    document.addEventListener('DOMContentLoaded', function() {
      // Subcategory tags
      const subcategoryTags = document.querySelectorAll('.subcategory-tag');
      subcategoryTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
          e.preventDefault();
          subcategoryTags.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
        });
      });

      // View toggle
      const viewBtns = document.querySelectorAll('.view-btn');
      const businessGrid = document.getElementById('business-grid');
      viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          viewBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          const view = this.dataset.view;
          if (view === 'list') {
            businessGrid.classList.add('list-view');
          } else {
            businessGrid.classList.remove('list-view');
          }
        });
      });

      // Search filter
      const searchInput = document.getElementById('search-businesses');
      searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const cards = document.querySelectorAll('.business-card');
        cards.forEach(card => {
          const name = card.querySelector('.business-name').textContent.toLowerCase();
          const desc = card.querySelector('.business-description').textContent.toLowerCase();
          if (name.includes(query) || desc.includes(query)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });