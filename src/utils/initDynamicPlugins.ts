// src/utils/initDynamicPlugins.ts
import $ from 'jquery';

// Cast jQuery to any to bypass TypeScript checks for third-party plugins
const $any = $ as any;

/**
 * Réinitialise les hauteurs des éléments .js-fullheight
 */
const setFullHeight = () => {
  $('.js-fullheight').css('height', window.innerHeight);
  $(window).off('resize.fullheight').on('resize.fullheight', () => {
    $('.js-fullheight').css('height', window.innerHeight);
  });
};

/**
 * Initialise les carrousels OwlCarousel
 */
const initCarousels = () => {
  if (typeof $any.fn.owlCarousel !== 'undefined') {
    if ($('.home-slider').length && !$('.home-slider').data('owl.carousel')) {
      $any('.home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        autoplayHoverPause: false,
        items: 1,
        navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 }
        }
      });
    }
    // Author slider
    if ($('.author-slider').length && !$('.author-slider').data('owl.carousel')) {
      $any('.author-slider').owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: true,
        dots: true,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 }
        }
      });
    }
  }
};

/**
 * Initialise les waypoints pour les animations ftco-animate
 */
const initWaypoints = () => {
  if (typeof $any.fn.waypoint !== 'undefined') {
    // Détruire les waypoints existants pour éviter les doubles déclenchements
    $any('.ftco-animate').waypoint('destroy');
    $any('.ftco-animate').waypoint(function(this: any, direction: string) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        $(this.element).addClass('item-animate');
        setTimeout(() => {
          $('body .ftco-animate.item-animate').each(function(k: number) {
            const el = $(this);
            setTimeout(() => {
              const effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            }, k * 50);
          });
        }, 100);
      }
    }, { offset: '95%' });
  }
};

/**
 * Initialise le compteur dans la section #section-counter
 */
const initCounter = () => {
  if (typeof $any.fn.waypoint !== 'undefined' && $('#section-counter').length && !$('#section-counter').data('waypoint')) {
    $any('#section-counter').waypoint(function(this: any, direction: string) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        const comma_separator_number_step = ($any as any).animateNumber.numberStepFactories.separator(',');
        $('.number').each(function() {
          const $this = $(this);
          const num = $this.data('number');
          $any(this).animateNumber({ number: num, numberStep: comma_separator_number_step }, 7000);
        });
        $(this.element).addClass('ftco-animated');
      }
    }, { offset: '95%' });
  }
};

/**
 * Initialise Magnific Popup pour les images et iframes
 */
const initMagnificPopup = () => {
  if (typeof $any.fn.magnificPopup !== 'undefined') {
    // Image popup
    $any('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300
      }
    });

    // YouTube, Vimeo, Google Maps
    $any('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }
};

/**
 * Fonction principale qui réinitialise tous les plugins dynamiques.
 * À appeler après chaque changement de route dans React.
 */
export function initDynamicPlugins() {
  setFullHeight();
  initCarousels();
  initWaypoints();
  initCounter();
  initMagnificPopup();
}