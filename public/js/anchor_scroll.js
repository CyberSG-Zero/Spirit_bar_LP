//💙 ANCHOR LINK SCROLL OFFSET OPTIMIZED PARA LENIS v1.0 💙

// Disable Webflow's built-in smooth scrolling (si usas Webflow)
var Webflow = Webflow || [];
Webflow.push(function() {
  $(function() {
     $(document).off('click.wf-scroll');
  });
});

// Implementación optimizada con Lenis
(function() {
  // Configuración
  const SCROLL_SETTINGS = {
    duration: 1.2, // Duración en segundos para Lenis
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Easing suave
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

  // Función para esperar a que Lenis esté disponible
  function waitForLenis() {
    return new Promise((resolve) => {
      if (window.lenis) {
        resolve(window.lenis);
      } else {
        setTimeout(() => waitForLenis().then(resolve), 50);
      }
    });
  }

  async function smoothScrollWithLenis(target) {
    const lenis = await waitForLenis();
    const offset = getOffset();
    
    // Usar Lenis para el scroll suave
    lenis.scrollTo(target, {
      duration: SCROLL_SETTINGS.duration,
      easing: SCROLL_SETTINGS.easing,
      offset: -offset, // Aplicar el offset del navbar
      onComplete: () => {
        // Asegurar que Lenis se mantenga sincronizado
        lenis.resize();
      }
    });
  }

  function handleClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        // Scroll con Lenis
        smoothScrollWithLenis(target);
        
        // Actualizar URL después del scroll
        setTimeout(() => {
          history.pushState(null, null, `#${targetId}`);
        }, 100);
      }
    }
  }

  async function handleHashChange() {
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        // Pequeño delay para permitir que el DOM se actualice
        await new Promise(resolve => requestAnimationFrame(resolve));
        smoothScrollWithLenis(target);
      }
    }
  }

  function init() {
    // Configurar event listeners
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      // Remover listeners anteriores para evitar duplicados
      anchor.removeEventListener('click', handleClick);
      anchor.addEventListener('click', handleClick);
    });
    
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('resize', clearOffsetCache);
    
    // Manejar hash inicial
    handleHashChange();
    
    // Re-inicializar cuando se añadan nuevos elementos (útil para contenido dinámico)
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (!anchor.hasAttribute('data-lenis-handled')) {
          anchor.setAttribute('data-lenis-handled', 'true');
          anchor.addEventListener('click', handleClick);
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
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

  // Función global para uso manual si es necesario
  window.scrollToSection = function(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
      smoothScrollWithLenis(target);
    }
  };
})();