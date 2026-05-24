/**
 * Directorio CDMX - Main Application JavaScript
 * Professional Business Directory for Mexico City
 * No animations version
 */

(function() {
  'use strict';

  // ============================================
  // DOM ELEMENTS
  // ============================================
  const DOM = {
    header: document.getElementById('header'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    navMenu: document.getElementById('nav-menu'),
    searchForm: document.getElementById('search-form'),
    searchQuery: document.getElementById('search-query'),
    searchLocation: document.getElementById('search-location'),
    backToTop: document.getElementById('back-to-top'),
    filterTabs: document.querySelectorAll('.filter-tab'),
    businessGrid: document.getElementById('business-grid'),
    loadMoreBtn: document.getElementById('load-more'),
    newsletterForm: document.getElementById('newsletter-form'),
    testimonialsSlider: document.getElementById('testimonials-slider'),
    statNumbers: document.querySelectorAll('.stat-number'),
    dropdowns: document.querySelectorAll('.dropdown'),
    favoriteButtons: document.querySelectorAll('.btn-favorite')
  };

  // ============================================
  // SAMPLE DATA - Business Database
  // ============================================
  const businessesDB = [
    {
      id: 1,
      name: "La Casa de Tono",
      category: "restaurantes",
      categoryLabel: "Restaurante Mexicano",
      categoryIcon: "fa-utensils",
      description: "Pozole, antojitos mexicanos y comida tradicional. El mejor sabor casero de la Ciudad de Mexico.",
      rating: 4.7,
      reviews: 2345,
      alcaldia: "Cuauhtemoc",
      status: "Abierto ahora",
      tags: ["Comida Mexicana", "Pozole", "Familiar"],
      verified: true,
      featured: true,
      image: "img/businesses/restaurant-1.jpg"
    },
    {
      id: 2,
      name: "Clinica Dental Sonrisas",
      category: "salud",
      categoryLabel: "Clinica Dental",
      categoryIcon: "fa-tooth",
      description: "Odontologia general, estetica dental, implantes y ortodoncia. Tecnologia de vanguardia.",
      rating: 4.9,
      reviews: 892,
      alcaldia: "Benito Juarez",
      status: "Cierra 8pm",
      tags: ["Dentista", "Implantes", "Ortodoncia"],
      verified: true,
      featured: false,
      image: "img/businesses/clinic-1.jpg"
    },
    {
      id: 3,
      name: "Despacho Juridico Martinez & Asociados",
      category: "legal",
      categoryLabel: "Despacho de Abogados",
      categoryIcon: "fa-gavel",
      description: "Especialistas en derecho corporativo, laboral, familiar y mercantil. Mas de 20 anos de experiencia.",
      rating: 4.5,
      reviews: 156,
      alcaldia: "Miguel Hidalgo",
      status: "Abierto ahora",
      tags: ["Derecho Laboral", "Corporativo", "Familiar"],
      verified: true,
      featured: false,
      premium: true,
      image: "img/businesses/lawyer-1.jpg"
    },
    {
      id: 4,
      name: "TechSolutions MX",
      category: "tecnologia",
      categoryLabel: "Desarrollo de Software",
      categoryIcon: "fa-laptop-code",
      description: "Desarrollo web, apps moviles, sistemas empresariales y consultoria tecnologica para tu negocio.",
      rating: 5.0,
      reviews: 78,
      alcaldia: "Cuauhtemoc",
      status: "Abierto ahora",
      tags: ["Desarrollo Web", "Apps", "Software"],
      verified: true,
      featured: false,
      image: "img/businesses/tech-1.jpg"
    },
    {
      id: 5,
      name: "Taller Mecanico Express",
      category: "automotriz",
      categoryLabel: "Taller Mecanico",
      categoryIcon: "fa-car",
      description: "Servicio automotriz completo, afinaciones, frenos, suspensiones y diagnostico computarizado.",
      rating: 4.6,
      reviews: 423,
      alcaldia: "Coyoacan",
      status: "Cierra 7pm",
      tags: ["Mecanico", "Afinacion", "Frenos"],
      verified: true,
      featured: false,
      image: "img/businesses/auto-1.jpg"
    },
    {
      id: 6,
      name: "Sushi Zen",
      category: "restaurantes",
      categoryLabel: "Restaurante Japones",
      categoryIcon: "fa-fish",
      description: "Autentica cocina japonesa, sushi fresco, ramen y especialidades del chef. Ambiente elegante.",
      rating: 4.8,
      reviews: 567,
      alcaldia: "Polanco",
      status: "Abierto ahora",
      tags: ["Sushi", "Japones", "Fine Dining"],
      verified: true,
      featured: false,
      isNew: true,
      image: "img/businesses/restaurant-2.jpg"
    },
    {
      id: 7,
      name: "Consultorio Dr. Ramirez",
      category: "salud",
      categoryLabel: "Medico General",
      categoryIcon: "fa-user-md",
      description: "Medicina general, chequeos preventivos y atencion integral de salud para toda la familia.",
      rating: 4.8,
      reviews: 234,
      alcaldia: "Tlalpan",
      status: "Abierto ahora",
      tags: ["Medico General", "Preventivo", "Familiar"],
      verified: true,
      featured: false,
      image: "img/businesses/doctor-1.jpg"
    },
    {
      id: 8,
      name: "Constructora Edificar",
      category: "construccion",
      categoryLabel: "Constructora",
      categoryIcon: "fa-hard-hat",
      description: "Construccion residencial y comercial, remodelaciones, acabados y supervision de obra.",
      rating: 4.4,
      reviews: 89,
      alcaldia: "Alvaro Obregon",
      status: "Lun-Vie 9am-6pm",
      tags: ["Construccion", "Remodelacion", "Residencial"],
      verified: true,
      featured: false,
      image: "img/businesses/construction-1.jpg"
    },
    {
      id: 9,
      name: "Cafeteria El Aroma",
      category: "restaurantes",
      categoryLabel: "Cafeteria",
      categoryIcon: "fa-coffee",
      description: "Cafe de especialidad, reposteria artesanal y desayunos. El mejor cafe de la Roma.",
      rating: 4.9,
      reviews: 1234,
      alcaldia: "Cuauhtemoc",
      status: "Abierto ahora",
      tags: ["Cafe", "Reposteria", "Desayunos"],
      verified: true,
      featured: true,
      image: "img/businesses/cafe-1.jpg"
    },
    {
      id: 10,
      name: "Notaria Publica 45",
      category: "legal",
      categoryLabel: "Notaria Publica",
      categoryIcon: "fa-stamp",
      description: "Servicios notariales, escrituras, poderes, testamentos y constitucion de empresas.",
      rating: 4.3,
      reviews: 67,
      alcaldia: "Benito Juarez",
      status: "Lun-Vie 10am-5pm",
      tags: ["Notaria", "Escrituras", "Legal"],
      verified: true,
      featured: false,
      image: "img/businesses/notary-1.jpg"
    },
    {
      id: 11,
      name: "Agencia Digital Pixel",
      category: "tecnologia",
      categoryLabel: "Marketing Digital",
      categoryIcon: "fa-bullhorn",
      description: "Marketing digital, SEO, redes sociales, diseno web y estrategias de crecimiento online.",
      rating: 4.7,
      reviews: 145,
      alcaldia: "Condesa",
      status: "Abierto ahora",
      tags: ["Marketing", "SEO", "Redes Sociales"],
      verified: true,
      featured: false,
      image: "img/businesses/agency-1.jpg"
    },
    {
      id: 12,
      name: "AutoServicio Premium",
      category: "automotriz",
      categoryLabel: "Agencia Automotriz",
      categoryIcon: "fa-car-side",
      description: "Venta de autos nuevos y seminuevos, financiamiento y servicio de mantenimiento.",
      rating: 4.2,
      reviews: 312,
      alcaldia: "Miguel Hidalgo",
      status: "Abierto ahora",
      tags: ["Autos", "Seminuevos", "Financiamiento"],
      verified: true,
      featured: false,
      premium: true,
      image: "img/businesses/car-dealer-1.jpg"
    }
  ];

  // Alcaldias data
  const alcaldiasData = {
    'alvaro-obregon': { name: 'Alvaro Obregon', empresas: 28456 },
    'azcapotzalco': { name: 'Azcapotzalco', empresas: 19234 },
    'benito-juarez': { name: 'Benito Juarez', empresas: 35678 },
    'coyoacan': { name: 'Coyoacan', empresas: 31245 },
    'cuajimalpa': { name: 'Cuajimalpa', empresas: 12890 },
    'cuauhtemoc': { name: 'Cuauhtemoc', empresas: 52341 },
    'gustavo-a-madero': { name: 'Gustavo A. Madero', empresas: 41567 },
    'iztacalco': { name: 'Iztacalco', empresas: 18456 },
    'iztapalapa': { name: 'Iztapalapa', empresas: 48923 },
    'magdalena-contreras': { name: 'La Magdalena Contreras', empresas: 8234 },
    'miguel-hidalgo': { name: 'Miguel Hidalgo', empresas: 38765 },
    'milpa-alta': { name: 'Milpa Alta', empresas: 4567 },
    'tlahuac': { name: 'Tlahuac', empresas: 11234 },
    'tlalpan': { name: 'Tlalpan', empresas: 27890 },
    'venustiano-carranza': { name: 'Venustiano Carranza', empresas: 24567 },
    'xochimilco': { name: 'Xochimilco', empresas: 15678 }
  };

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  const utils = {
    // Debounce function
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // Format number with commas
    formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    // Generate star rating HTML
    generateStars(rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

      let html = '';
      for (let i = 0; i < fullStars; i++) {
        html += '<i class="fas fa-star"></i>';
      }
      if (hasHalfStar) {
        html += '<i class="fas fa-star-half-alt"></i>';
      }
      for (let i = 0; i < emptyStars; i++) {
        html += '<i class="far fa-star"></i>';
      }
      return html;
    }
  };

  // ============================================
  // HEADER & NAVIGATION
  // ============================================
  const navigation = {
    init() {
      this.handleScroll();
      this.handleMobileMenu();
      this.handleDropdowns();
    },

    handleScroll() {
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
          DOM.header.classList.add('scrolled');
        } else {
          DOM.header.classList.remove('scrolled');
        }
      });
    },

    handleMobileMenu() {
      if (!DOM.mobileMenuBtn || !DOM.navMenu) return;

      DOM.mobileMenuBtn.addEventListener('click', () => {
        DOM.mobileMenuBtn.classList.toggle('active');
        DOM.navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');

        const isExpanded = DOM.mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        DOM.mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      });

      document.addEventListener('click', (e) => {
        if (!DOM.navMenu.contains(e.target) && !DOM.mobileMenuBtn.contains(e.target)) {
          DOM.mobileMenuBtn.classList.remove('active');
          DOM.navMenu.classList.remove('active');
          document.body.classList.remove('menu-open');
        }
      });
    },

    handleDropdowns() {
      if (!DOM.dropdowns.length) return;

      DOM.dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle && window.innerWidth <= 1024) {
          toggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
          });
        }
      });
    }
  };

  // ============================================
  // SEARCH FUNCTIONALITY
  // ============================================
  const search = {
    init() {
      this.handleSearchForm();
      this.handleAutocomplete();
    },

    handleSearchForm() {
      if (!DOM.searchForm) return;

      DOM.searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = DOM.searchQuery.value.trim();
        const location = DOM.searchLocation.value;

        if (query || location) {
          this.performSearch(query, location);
        }
      });
    },

    handleAutocomplete() {
      if (!DOM.searchQuery) return;

      const suggestions = [
        'Restaurantes mexicanos',
        'Dentistas',
        'Abogados laborales',
        'Talleres mecanicos',
        'Contadores',
        'Clinicas de salud',
        'Escuelas de idiomas',
        'Gimnasios',
        'Veterinarias',
        'Inmobiliarias'
      ];

      DOM.searchQuery.addEventListener('input', utils.debounce((e) => {
        const value = e.target.value.toLowerCase();
        if (value.length < 2) return;

        const matches = suggestions.filter(s =>
          s.toLowerCase().includes(value)
        );
        console.log('Suggestions:', matches);
      }, 300));
    },

    performSearch(query, location) {
      let results = businessesDB;

      if (query) {
        const q = query.toLowerCase();
        results = results.filter(b =>
          b.name.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.categoryLabel.toLowerCase().includes(q) ||
          b.tags.some(t => t.toLowerCase().includes(q))
        );
      }

      if (location) {
        const loc = location.toLowerCase().replace(/-/g, ' ');
        results = results.filter(b =>
          b.alcaldia.toLowerCase().includes(loc)
        );
      }

      alert(`Se encontraron ${results.length} resultados para "${query}" ${location ? 'en ' + location : ''}`);
    }
  };

  // ============================================
  // BUSINESS FILTER
  // ============================================
  const businessFilter = {
    currentFilter: 'all',

    init() {
      this.handleFilterTabs();
      this.handleLoadMore();
      this.handleFavorites();
    },

    handleFilterTabs() {
      if (!DOM.filterTabs.length || !DOM.businessGrid) return;

      DOM.filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          DOM.filterTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          this.currentFilter = tab.dataset.filter;
          this.filterBusinesses();
        });
      });
    },

    filterBusinesses() {
      const cards = DOM.businessGrid.querySelectorAll('.business-card');

      cards.forEach(card => {
        const category = card.dataset.category;
        if (this.currentFilter === 'all' || category === this.currentFilter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    },

    handleLoadMore() {
      if (!DOM.loadMoreBtn) return;

      let page = 1;

      DOM.loadMoreBtn.addEventListener('click', () => {
        page++;
        DOM.loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';

        setTimeout(() => {
          const newBusinesses = businessesDB.slice(0, 3).map(b => ({
            ...b,
            id: b.id + (page * 100)
          }));

          newBusinesses.forEach(business => {
            const card = this.createBusinessCard(business);
            DOM.businessGrid.appendChild(card);
          });

          DOM.loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Cargar mas empresas';
          this.handleFavorites();
        }, 500);
      });
    },

    createBusinessCard(business) {
      const card = document.createElement('article');
      card.className = 'business-card';
      card.dataset.category = business.category;

      card.innerHTML = `
        <div class="business-image">
          <img src="${business.image}" alt="${business.name}" loading="lazy">
          <div class="business-badges">
            ${business.verified ? '<span class="badge badge-verified"><i class="fas fa-check-circle"></i> Verificado</span>' : ''}
            ${business.featured ? '<span class="badge badge-featured"><i class="fas fa-star"></i> Destacado</span>' : ''}
            ${business.premium ? '<span class="badge badge-premium"><i class="fas fa-crown"></i> Premium</span>' : ''}
            ${business.isNew ? '<span class="badge badge-new"><i class="fas fa-sparkles"></i> Nuevo</span>' : ''}
          </div>
          <button class="btn-favorite" aria-label="Agregar a favoritos">
            <i class="far fa-heart"></i>
          </button>
        </div>
        <div class="business-content">
          <div class="business-category">
            <i class="fas ${business.categoryIcon}"></i> ${business.categoryLabel}
          </div>
          <h3 class="business-name">${business.name}</h3>
          <div class="business-rating">
            <div class="stars">${utils.generateStars(business.rating)}</div>
            <span class="rating-score">${business.rating}</span>
            <span class="rating-count">(${utils.formatNumber(business.reviews)} resenas)</span>
          </div>
          <p class="business-description">${business.description}</p>
          <div class="business-meta">
            <span class="meta-item"><i class="fas fa-map-marker-alt"></i> ${business.alcaldia}</span>
            <span class="meta-item"><i class="fas fa-clock"></i> ${business.status}</span>
          </div>
          <div class="business-tags">
            ${business.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
        </div>
        <div class="business-footer">
          <a href="tel:+525512345678" class="btn btn-sm btn-outline">
            <i class="fas fa-phone"></i> Llamar
          </a>
          <a href="#" class="btn btn-sm btn-primary">
            <i class="fas fa-eye"></i> Ver perfil
          </a>
        </div>
      `;

      return card;
    },

    handleFavorites() {
      document.querySelectorAll('.btn-favorite').forEach(btn => {
        btn.addEventListener('click', function() {
          this.classList.toggle('active');
          const icon = this.querySelector('i');

          if (this.classList.contains('active')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
          } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
          }
        });
      });
    }
  };

  // ============================================
  // STATISTICS - Display numbers immediately
  // ============================================
  const statsCounter = {
    init() {
      if (!DOM.statNumbers.length) return;

      // Show final numbers immediately, no animation
      DOM.statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.count, 10);
        stat.textContent = utils.formatNumber(target);
      });
    }
  };

  // ============================================
  // TESTIMONIALS SLIDER
  // ============================================
  const testimonialsSlider = {
    currentSlide: 0,
    slides: null,
    track: null,
    dots: null,

    init() {
      if (!DOM.testimonialsSlider) return;

      this.slides = DOM.testimonialsSlider.querySelectorAll('.testimonial-card');
      this.track = DOM.testimonialsSlider.querySelector('.testimonials-track');
      this.dots = DOM.testimonialsSlider.querySelector('.slider-dots');

      if (!this.slides.length) return;

      this.createDots();
      this.handleControls();
    },

    createDots() {
      if (!this.dots) return;

      this.slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir al testimonio ${index + 1}`);
        dot.addEventListener('click', () => this.goToSlide(index));
        this.dots.appendChild(dot);
      });
    },

    handleControls() {
      const prevBtn = DOM.testimonialsSlider.querySelector('.slider-btn.prev');
      const nextBtn = DOM.testimonialsSlider.querySelector('.slider-btn.next');

      if (prevBtn) {
        prevBtn.addEventListener('click', () => this.prevSlide());
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => this.nextSlide());
      }
    },

    goToSlide(index) {
      this.currentSlide = index;

      if (this.track) {
        const slideWidth = this.slides[0].offsetWidth + 24;
        this.track.scrollLeft = slideWidth * index;
      }

      this.dots.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    },

    prevSlide() {
      const newIndex = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
      this.goToSlide(newIndex);
    },

    nextSlide() {
      const newIndex = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
      this.goToSlide(newIndex);
    }
  };

  // ============================================
  // BACK TO TOP
  // ============================================
  const backToTop = {
    init() {
      if (!DOM.backToTop) return;

      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          DOM.backToTop.classList.add('visible');
        } else {
          DOM.backToTop.classList.remove('visible');
        }
      });

      DOM.backToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'auto'
        });
      });
    }
  };

  // ============================================
  // NEWSLETTER
  // ============================================
  const newsletter = {
    init() {
      if (!DOM.newsletterForm) return;

      DOM.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = DOM.newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (this.validateEmail(email)) {
          this.subscribe(email);
          emailInput.value = '';
        } else {
          alert('Por favor ingresa un correo valido');
        }
      });
    },

    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },

    subscribe(email) {
      console.log('Subscribe:', email);
      alert('Gracias por suscribirte!');
    }
  };

  // ============================================
  // SMOOTH SCROLL - Disabled, using instant scroll
  // ============================================
  const smoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === '#') return;

          const target = document.querySelector(href);
          if (!target) return;

          e.preventDefault();

          const headerHeight = DOM.header?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'auto'
          });

          if (DOM.navMenu?.classList.contains('active')) {
            DOM.mobileMenuBtn.click();
          }
        });
      });
    }
  };

  // ============================================
  // ALCALDIA CARDS CLICK
  // ============================================
  const alcaldiaCards = {
    init() {
      document.querySelectorAll('.alcaldia-card').forEach(card => {
        card.addEventListener('click', function(e) {
          e.preventDefault();
          const alcaldia = this.dataset.alcaldia;
          const data = alcaldiasData[alcaldia];

          if (data) {
            alert(`${data.name}: ${utils.formatNumber(data.empresas)} empresas registradas`);
          }
        });
      });
    }
  };

  // Add CSS for slider dots
  const style = document.createElement('style');
  style.textContent = `
    .slider-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--gray-300);
      border: none;
      cursor: pointer;
    }
    .slider-dot.active {
      background: var(--primary);
    }
    body.menu-open {
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);

  // ============================================
  // INITIALIZE ALL MODULES
  // ============================================
  function init() {
    navigation.init();
    search.init();
    businessFilter.init();
    statsCounter.init();
    testimonialsSlider.init();
    backToTop.init();
    newsletter.init();
    smoothScroll.init();
    alcaldiaCards.init();

    console.log('Directorio CDMX initialized (no animations)');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
