//💙 MEMBERSCRIPT #138 v0.2 💙 - ANCHOR LINK SCROLL OFFSET OPTIMIZED

// Disable Webflow's built-in smooth scrolling
var Webflow = Webflow || [];
Webflow.push(function() {
  $(function() {
     $(document).off('click.wf-scroll');
  });
});

// Optimized smooth scroll implementation
(function() {
  // Configuración más rápida y responsiva
  const SCROLL_SETTINGS = {
    duration: 1000, // Reducido de 1000ms a 600ms
    easing: 'easeOutCubic' // Más natural que easeInOutCubic
  };

  const EASING_FUNCTIONS = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  };

  // Cache del offset para evitar recálculos constantes
  let cachedOffset = null;
  let offsetCache = 0;

  function getOffset() {
    // Solo recalcular si no está en cache o si el viewport cambió
    if (cachedOffset === null) {
      const navbar = document.querySelector('[ms-code-scroll-offset]');
      if (!navbar) {
        offsetCache = 0;
      } else {
        const navbarHeight = navbar.offsetHeight;
        const customOffset = parseInt(navbar.getAttribute('ms-code-scroll-offset') || '0', 10);
        offsetCache = navbarHeight + customOffset;
      }
      cachedOffset = true;
    }
    return offsetCache;
  }

  // Limpiar cache cuando cambie el tamaño de ventana
  function clearOffsetCache() {
    cachedOffset = null;
  }

  function smoothScroll(target) {
    const startPosition = window.pageYOffset;
    const offset = getOffset();
    const targetPosition = target.getBoundingClientRect().top + startPosition - offset;
    const distance = targetPosition - startPosition;
    
    // Si la distancia es muy pequeña, no animar
    if (Math.abs(distance) < 10) {
      window.scrollTo(0, targetPosition);
      return;
    }

    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / SCROLL_SETTINGS.duration, 1);
      const easeProgress = EASING_FUNCTIONS[SCROLL_SETTINGS.easing](progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);
      
      if (timeElapsed < SCROLL_SETTINGS.duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  function handleClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        // Scroll inmediato sin setTimeout
        smoothScroll(target);
      }
    }
  }

  function handleHashChange() {
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        // Pequeño delay solo para hashchange para permitir que el DOM se actualice
        requestAnimationFrame(() => smoothScroll(target));
      }
    }
  }

  function init() {
    // Configurar event listeners
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });
    
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('resize', clearOffsetCache);
    
    // Manejar hash inicial
    handleHashChange();
  }

  // Inicialización para Astro
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Compatibilidad con Webflow si está presente
  if (typeof window.Webflow !== 'undefined') {
    window.Webflow.push(init);
  }
})();