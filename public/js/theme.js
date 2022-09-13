/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme.js":
/*!*******************************!*\
  !*** ./resources/js/theme.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var theme = {
  /**
   * Theme's components/functions list
   * Comment out or delete the unnecessary component.
   * Some components have dependencies (plugins).
   * Do not forget to remove dependency from src/js/vendor/ and recompile.
   */
  init: function init() {
    theme.stickyHeader();
    theme.subMenu();
    theme.offCanvas();
    theme.isotope();
    theme.onepageHeaderOffset();
    theme.anchorSmoothScroll();
    theme.svgInject();
    theme.backgroundImage();
    theme.backgroundImageMobile();
    theme.imageHoverOverlay();
    theme.rellax();
    theme.scrollCue();
    theme.swiperSlider();
    theme.lightbox();
    theme.plyr();
    theme.progressBar();
    theme.loader();
    theme.pageProgress();
    theme.counterUp();
    theme.bsTooltips();
    theme.bsPopovers();
    theme.bsModal();
    theme.iTooltip();
    theme.forms();
    theme.passVisibility();
    theme.pricingSwitcher();
    theme.textRotator();
    theme.codeSnippet();
  },

  /**
   * Sticky Header
   * Enables sticky behavior on navbar on page scroll
   * Requires assets/js/vendor/headhesive.min.js
  */
  stickyHeader: function stickyHeader() {
    var navbar = document.querySelector(".navbar");
    if (navbar == null) return;
    var options = {
      offset: 350,
      offsetSide: 'top',
      classes: {
        clone: 'navbar-clone fixed',
        stick: 'navbar-stick',
        unstick: 'navbar-unstick'
      },
      onStick: function onStick() {
        var navbarClonedClass = this.clonedElem.classList;

        if (navbarClonedClass.contains('transparent') && navbarClonedClass.contains('navbar-dark')) {
          this.clonedElem.className = this.clonedElem.className.replace("navbar-dark", "navbar-light");
        }
      }
    };
    var banner = new Headhesive('.navbar', options);
  },

  /**
   * Sub Menus
   * Enables multilevel dropdown
   */
  subMenu: function subMenu() {
    (function ($bs) {
      var CLASS_NAME = 'has-child-dropdown-show';

      $bs.Dropdown.prototype.toggle = function (_original) {
        return function () {
          document.querySelectorAll('.' + CLASS_NAME).forEach(function (e) {
            e.classList.remove(CLASS_NAME);
          });

          var dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');

          for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
            dd.classList.add(CLASS_NAME);
          }

          return _original.call(this);
        };
      }($bs.Dropdown.prototype.toggle);

      document.querySelectorAll('.dropdown').forEach(function (dd) {
        dd.addEventListener('hide.bs.dropdown', function (e) {
          if (this.classList.contains(CLASS_NAME)) {
            this.classList.remove(CLASS_NAME);
            e.preventDefault();
          }

          e.stopPropagation();
        });
      });
    })(bootstrap);
  },

  /**
   * Offcanvas
   * Enables offcanvas-nav, closes offcanvas on anchor clicks
   */
  offCanvas: function offCanvas() {
    var navOffCanvasBtn = document.querySelectorAll(".offcanvas-nav-btn");
    var navOffCanvas = document.querySelector('.navbar:not(.navbar-clone) .offcanvas-nav');
    var bsOffCanvas = new bootstrap.Offcanvas(navOffCanvas, {
      scroll: true
    });
    var scrollLink = document.querySelectorAll('.onepage .navbar li a.scroll');
    navOffCanvasBtn.forEach(function (e) {
      e.addEventListener('click', function (event) {
        bsOffCanvas.show();
      });
    });
    scrollLink.forEach(function (e) {
      e.addEventListener('click', function (event) {
        bsOffCanvas.hide();
      });
    });
  },

  /**
   * Isotope
   * Enables isotope grid layout and filtering
   * Requires assets/js/vendor/isotope.pkgd.min.js
   * Requires assets/js/vendor/imagesloaded.pkgd.min.js
   */
  isotope: function isotope() {
    var grids = document.querySelectorAll('.grid');

    if (grids != null) {
      grids.forEach(function (g) {
        var grid = g.querySelector('.isotope');
        var filtersElem = g.querySelector('.isotope-filter');
        var buttonGroups = g.querySelectorAll('.isotope-filter');
        var iso = new Isotope(grid, {
          itemSelector: '.item',
          layoutMode: 'masonry',
          masonry: {
            columnWidth: grid.offsetWidth / 12
          },
          percentPosition: true,
          transitionDuration: '0.7s'
        });
        imagesLoaded(grid).on("progress", function () {
          iso.layout({
            masonry: {
              columnWidth: grid.offsetWidth / 12
            }
          });
        }), window.addEventListener("resize", function () {
          iso.arrange({
            masonry: {
              columnWidth: grid.offsetWidth / 12
            }
          });
        }, true);

        if (filtersElem != null) {
          filtersElem.addEventListener('click', function (event) {
            if (!matchesSelector(event.target, '.filter-item')) {
              return;
            }

            var filterValue = event.target.getAttribute('data-filter');
            iso.arrange({
              filter: filterValue
            });
          });

          for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i];
            buttonGroup.addEventListener('click', function (event) {
              if (!matchesSelector(event.target, '.filter-item')) {
                return;
              }

              buttonGroup.querySelector('.active').classList.remove('active');
              event.target.classList.add('active');
            });
          }
        }
      });
    }
  },

  /**
   * Onepage Header Offset
   * Adds an offset value to anchor point equal to sticky header height on a onepage
   */
  onepageHeaderOffset: function onepageHeaderOffset() {
    var header_height = document.querySelector(".navbar").offsetHeight;
    var shrinked_header_height = 75;
    var sections = document.querySelectorAll(".onepage section");
    sections.forEach(function (section) {
      section.style.paddingTop = shrinked_header_height + 'px';
      section.style.marginTop = '-' + shrinked_header_height + 'px';
    });
    var first_section = document.querySelector(".onepage section:first-of-type");

    if (first_section != null) {
      first_section.style.paddingTop = header_height + 'px';
      first_section.style.marginTop = '-' + header_height + 'px';
    }
  },

  /**
   * Anchor Smooth Scroll
   * Adds smooth scroll animation to links with .scroll class
   * Requires assets/js/vendor/smoothscroll.js
   */
  anchorSmoothScroll: function anchorSmoothScroll() {
    var links = document.querySelectorAll(".scroll");

    var _iterator = _createForOfIteratorHelper(links),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var link = _step.value;
        link.addEventListener("click", clickHandler);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    function clickHandler(e) {
      e.preventDefault();
      this.blur();
      var href = this.getAttribute("href");
      var offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  },

  /**
   * SVGInject
   * Replaces an img element with an inline SVG so you can apply colors to your SVGs
   * Requires assets/js/vendor/svg-inject.min.js
   */
  svgInject: function svgInject() {
    SVGInject.setOptions({
      onFail: function onFail(img, svg) {
        img.classList.remove('svg-inject');
      }
    });
    document.addEventListener('DOMContentLoaded', function () {
      SVGInject(document.querySelectorAll('img.svg-inject'), {
        useCache: true
      });
    });
  },

  /**
   * Background Image
   * Adds a background image link via data attribute "data-image-src"
   */
  backgroundImage: function backgroundImage() {
    var bg = document.querySelectorAll(".bg-image");

    for (var i = 0; i < bg.length; i++) {
      var url = bg[i].getAttribute('data-image-src');
      bg[i].style.backgroundImage = "url('" + url + "')";
    }
  },

  /**
   * Background Image Mobile
   * Adds .mobile class to background images on mobile devices for styling purposes
   */
  backgroundImageMobile: function backgroundImageMobile() {
    var isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) ? true : false;

    if (isMobile) {
      document.querySelectorAll(".image-wrapper").forEach(function (e) {
        e.classList.add("mobile");
      });
    }
  },

  /**
   * Image Hover Overlay
   * Adds span.bg inside .overlay for simpler markup and styling purposes
   */
  imageHoverOverlay: function imageHoverOverlay() {
    var overlay = document.querySelectorAll('.overlay > a, .overlay > span');

    for (var i = 0; i < overlay.length; i++) {
      var overlay_bg = document.createElement('span');
      overlay_bg.className = "bg";
      overlay[i].appendChild(overlay_bg);
    }
  },

  /**
   * Rellax.js
   * Adds parallax animation to shapes and elements
   * Requires assets/js/vendor/rellax.min.js
   */
  rellax: function rellax() {
    if (document.querySelector(".rellax") != null) {
      window.onload = function () {
        var rellax = new Rellax('.rellax', {
          speed: 2,
          center: true,
          breakpoints: [576, 992, 1201]
        });
        var projects_overflow = document.querySelectorAll('.projects-overflow');
        imagesLoaded(projects_overflow, function () {
          rellax.refresh();
        });
      };
    }
  },

  /**
   * scrollCue.js
   * Enables showing elements by scrolling
   * Requires assets/js/vendor/scrollCue.min.js
   */
  scrollCue: function (_scrollCue) {
    function scrollCue() {
      return _scrollCue.apply(this, arguments);
    }

    scrollCue.toString = function () {
      return _scrollCue.toString();
    };

    return scrollCue;
  }(function () {
    scrollCue.init({
      interval: -400,
      duration: 700,
      percentage: 0.8
    });
    scrollCue.update();
  }),

  /**
   * Swiper Slider
   * Enables carousels and sliders
   * Requires assets/js/vendor/swiper-bundle.min.js
   */
  swiperSlider: function swiperSlider() {
    var carousel = document.querySelectorAll('.swiper-container');

    for (var i = 0; i < carousel.length; i++) {
      var slider1 = carousel[i];
      slider1.classList.add('swiper-container-' + i);
      var controls = document.createElement('div');
      controls.className = "swiper-controls";
      var pagi = document.createElement('div');
      pagi.className = "swiper-pagination";
      var navi = document.createElement('div');
      navi.className = "swiper-navigation";
      var prev = document.createElement('div');
      prev.className = "swiper-button swiper-button-prev";
      var next = document.createElement('div');
      next.className = "swiper-button swiper-button-next";
      slider1.appendChild(controls);
      controls.appendChild(navi);
      navi.appendChild(prev);
      navi.appendChild(next);
      controls.appendChild(pagi);
      var sliderEffect = slider1.getAttribute('data-effect') ? slider1.getAttribute('data-effect') : 'slide';
      var sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 3; // items in all devices

      var sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : 1; // start - 575

      var sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsXs); // 576 - 767

      var sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsSm); // 768 - 991

      var sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsMd); // 992 - 1199

      var sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItemsLg); // 1200 - end

      var sliderItemsXxl = slider1.getAttribute('data-items-xxl') ? slider1.getAttribute('data-items-xxl') : Number(sliderItemsXl); // 1500 - end

      var sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
      var sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false';
      var sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 5000;
      var sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true';
      var sliderMargin = slider1.getAttribute('data-margin') ? slider1.getAttribute('data-margin') : 30;
      var sliderLoop = slider1.getAttribute('data-loop') === 'true';
      var swiper = slider1.querySelector('.swiper:not(.swiper-thumbs)');
      var swiperTh = slider1.querySelector('.swiper-thumbs');
      var sliderTh = new Swiper(swiperTh, {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: false,
        threshold: 2
      });

      if (slider1.getAttribute('data-thumbs') === 'true') {
        var thumbsInit = sliderTh;
        var swiperMain = document.createElement('div');
        swiperMain.className = "swiper-main";
        swiper.parentNode.insertBefore(swiperMain, swiper);
        swiperMain.appendChild(swiper);
        slider1.removeChild(controls);
        swiperMain.appendChild(controls);
      } else {
        var thumbsInit = null;
      }

      var slider = new Swiper(swiper, {
        on: {
          beforeInit: function beforeInit() {
            if (slider1.getAttribute('data-nav') !== 'true' && slider1.getAttribute('data-dots') !== 'true') {
              controls.remove();
            }

            if (slider1.getAttribute('data-dots') !== 'true') {
              pagi.remove();
            }

            if (slider1.getAttribute('data-nav') !== 'true') {
              navi.remove();
            }
          },
          init: function init() {
            if (slider1.getAttribute('data-autoplay') !== 'true') {
              this.autoplay.stop();
            }

            this.update();
          }
        },
        autoplay: {
          delay: sliderAutoPlayTime,
          disableOnInteraction: false
        },
        speed: sliderSpeed,
        slidesPerView: sliderItems,
        loop: sliderLoop,
        spaceBetween: Number(sliderMargin),
        effect: sliderEffect,
        autoHeight: sliderAutoHeight,
        grabCursor: true,
        resizeObserver: false,
        breakpoints: {
          0: {
            slidesPerView: Number(sliderItemsXs)
          },
          576: {
            slidesPerView: Number(sliderItemsSm)
          },
          768: {
            slidesPerView: Number(sliderItemsMd)
          },
          992: {
            slidesPerView: Number(sliderItemsLg)
          },
          1200: {
            slidesPerView: Number(sliderItemsXl)
          },
          1400: {
            slidesPerView: Number(sliderItemsXxl)
          }
        },
        pagination: {
          el: carousel[i].querySelector('.swiper-pagination'),
          clickable: true
        },
        navigation: {
          prevEl: slider1.querySelector('.swiper-button-prev'),
          nextEl: slider1.querySelector('.swiper-button-next')
        },
        thumbs: {
          swiper: thumbsInit
        }
      });
    }
  },

  /**
   * GLightbox
   * Enables lightbox functionality
   * Requires assets/js/vendor/glightbox.js
   */
  lightbox: function lightbox() {
    var lightbox = GLightbox({
      selector: '*[data-glightbox]',
      touchNavigation: true,
      loop: false,
      zoomable: false,
      autoplayVideos: true,
      moreLength: 0,
      slideExtraAttributes: {
        poster: ''
      },
      plyr: {
        css: '',
        js: '',
        config: {
          ratio: '16:9',
          fullscreen: {
            enabled: false,
            iosNative: false
          },
          youtube: {
            noCookie: true,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3
          },
          vimeo: {
            byline: false,
            portrait: false,
            title: false,
            transparent: false
          }
        }
      }
    });
  },

  /**
   * Plyr
   * Enables media player
   * Requires assets/js/vendor/plyr.js
   */
  plyr: function plyr() {
    var players = Plyr.setup('.player', {
      loadSprite: true
    });
  },

  /**
   * Progressbar
   * Enables animated progressbars
   * Requires assets/js/vendor/progressbar.min.js
   * Requires assets/js/vendor/noframework.waypoints.min.js
   */
  progressBar: function progressBar() {
    var pline = document.querySelectorAll(".progressbar.line");
    var pcircle = document.querySelectorAll(".progressbar.semi-circle");
    pline.forEach(function (e) {
      var line = new ProgressBar.Line(e, {
        strokeWidth: 6,
        trailWidth: 6,
        duration: 3000,
        easing: 'easeInOut',
        text: {
          style: {
            color: 'inherit',
            position: 'absolute',
            right: '0',
            top: '-30px',
            padding: 0,
            margin: 0,
            transform: null
          },
          autoStyleContainer: false
        },
        step: function step(state, line) {
          line.setText(Math.round(line.value() * 100) + ' %');
        }
      });
      var value = e.getAttribute('data-value') / 100;
      new Waypoint({
        element: e,
        handler: function handler() {
          line.animate(value);
        },
        offset: 'bottom-in-view'
      });
    });
    pcircle.forEach(function (e) {
      var circle = new ProgressBar.SemiCircle(e, {
        strokeWidth: 6,
        trailWidth: 6,
        duration: 2000,
        easing: 'easeInOut',
        step: function step(state, circle) {
          circle.setText(Math.round(circle.value() * 100));
        }
      });
      var value = e.getAttribute('data-value') / 100;
      new Waypoint({
        element: e,
        handler: function handler() {
          circle.animate(value);
        },
        offset: 'bottom-in-view'
      });
    });
  },

  /**
   * Loader
   * 
   */
  loader: function loader() {
    var preloader = document.querySelector('.page-loader');

    if (preloader != null) {
      document.body.onload = function () {
        setTimeout(function () {
          if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
          }
        }, 1000);
      };
    }
  },

  /**
   * Page Progress
   * Shows page progress on the bottom right corner of pages
   */
  pageProgress: function pageProgress() {
    var progressWrap = document.querySelector('.progress-wrap');
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    var offset = 50;

    if (progressWrap != null) {
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
      window.addEventListener("scroll", function (event) {
        var scroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
        var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollElementPos >= offset) {
          progressWrap.classList.add("active-progress");
        } else {
          progressWrap.classList.remove("active-progress");
        }
      });
      progressWrap.addEventListener('click', function (e) {
        e.preventDefault();
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    }
  },

  /**
   * Counter Up
   * Counts up to a targeted number when the number becomes visible
   * Requires assets/js/vendor/counterup.min.js
   * Requires assets/js/vendor/noframework.waypoints.min.js
   */
  counterUp: function counterUp() {
    var counterUp = window.counterUp["default"];
    var counters = document.querySelectorAll(".counter");
    counters.forEach(function (el) {
      new Waypoint({
        element: el,
        handler: function handler() {
          counterUp(el, {
            duration: 1000,
            delay: 50
          });
          this.destroy();
        },
        offset: 'bottom-in-view'
      });
    });
  },

  /**
   * Bootstrap Tooltips
   * Enables Bootstrap tooltips
   * Requires Poppers library
   */
  bsTooltips: function bsTooltips() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {
        trigger: 'hover'
      });
    });
    var tooltipTriggerWhite = [].slice.call(document.querySelectorAll('[data-bs-toggle="white-tooltip"]'));
    var tooltipWhite = tooltipTriggerWhite.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {
        customClass: 'white-tooltip',
        trigger: 'hover',
        placement: 'left'
      });
    });
  },

  /**
   * Bootstrap Popovers
   * Enables Bootstrap popovers
   * Requires Poppers library
   */
  bsPopovers: function bsPopovers() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  },

  /**
   * Bootstrap Modal
   * Enables Bootstrap modal popup
   */
  bsModal: function bsModal() {
    if (document.querySelector(".modal-popup") != null) {
      var myModalPopup = new bootstrap.Modal(document.querySelector('.modal-popup'));
      setTimeout(function () {
        myModalPopup.show();
      }, 200);
    } // Fixes jumping of page progress caused by modal


    var innerWidth = window.innerWidth;
    var clientWidth = document.body.clientWidth;
    var scrollSize = innerWidth - clientWidth;
    var myModalEl = document.querySelectorAll('.modal');
    var navbarFixed = document.querySelector('.navbar.fixed');
    var pageProgress = document.querySelector('.progress-wrap');

    function setPadding() {
      if (navbarFixed != null) {
        navbarFixed.style.paddingRight = scrollSize + 'px';
      }

      if (pageProgress != null) {
        pageProgress.style.marginRight = scrollSize + 'px';
      }
    }

    function removePadding() {
      if (navbarFixed != null) {
        navbarFixed.style.paddingRight = '';
      }

      if (pageProgress != null) {
        pageProgress.style.marginRight = '';
      }
    }

    myModalEl.forEach(function (myModalEl) {
      myModalEl.addEventListener('show.bs.modal', function (e) {
        setPadding();
      });
      myModalEl.addEventListener('hidden.bs.modal', function (e) {
        removePadding();
      });
    });
  },

  /**
   * iTooltip
   * Enables custom tooltip style for image hover docs/elements/hover.html
   * Requires assets/js/vendor/itooltip.min.js
   */
  iTooltip: function (_iTooltip) {
    function iTooltip() {
      return _iTooltip.apply(this, arguments);
    }

    iTooltip.toString = function () {
      return _iTooltip.toString();
    };

    return iTooltip;
  }(function () {
    var tooltip = new iTooltip('.itooltip');
    tooltip.init({
      className: 'itooltip-inner',
      indentX: 15,
      indentY: 15,
      positionX: 'right',
      positionY: 'bottom'
    });
  }),

  /**
   * Form Validation and Contact Form submit
   * Bootstrap validation - Only sends messages if form has class ".contact-form" and is validated and shows success/fail messages
   */
  forms: function forms() {
    (function () {
      "use strict";

      window.addEventListener("load", function () {
        var forms = document.querySelectorAll(".needs-validation");
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener("submit", function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");

            if (form.checkValidity() === true) {
              event.preventDefault();
              form.classList.remove("was-validated"); // Send message only if the form has class .contact-form

              var isContactForm = form.classList.contains('contact-form');
              console.log(isContactForm);

              if (isContactForm) {
                var data = new FormData(form);
                var alertClass = 'alert-danger';
                fetch("assets/php/contact.php", {
                  method: "post",
                  body: data
                }).then(function (data) {
                  if (data.ok) {
                    alertClass = 'alert-success';
                  }

                  return data.text();
                }).then(function (txt) {
                  var alertBox = '<div class="alert ' + alertClass + ' alert-dismissible fade show"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' + txt + '</div>';

                  if (alertClass && txt) {
                    form.querySelector(".messages").insertAdjacentHTML('beforeend', alertBox);
                    form.reset();
                  }
                })["catch"](function (err) {
                  console.log(err);
                });
              }
            }
          }, false);
        });
      }, false);
    })();
  },

  /**
   * Password Visibility Toggle
   * Toggles password visibility in password input
   */
  passVisibility: function passVisibility() {
    var pass = document.querySelectorAll('.password-field');

    var _loop = function _loop(i) {
      var passInput = pass[i].querySelector('.form-control');
      var passToggle = pass[i].querySelector('.password-toggle > i');
      passToggle.addEventListener('click', function (e) {
        if (passInput.type === "password") {
          passInput.type = "text";
          passToggle.classList.remove('uil-eye');
          passToggle.classList.add('uil-eye-slash');
        } else {
          passInput.type = "password";
          passToggle.classList.remove('uil-eye-slash');
          passToggle.classList.add('uil-eye');
        }
      }, false);
    };

    for (var i = 0; i < pass.length; i++) {
      _loop(i);
    }
  },

  /**
   * Pricing Switcher
   * Enables monthly/yearly switcher seen on pricing tables
   */
  pricingSwitcher: function pricingSwitcher() {
    var wrapper = document.querySelectorAll(".pricing-wrapper");
    wrapper.forEach(function (wrap) {
      var switchers = wrap.querySelector(".pricing-switchers");
      var switcher = wrap.querySelectorAll(".pricing-switcher");
      var price = wrap.querySelectorAll(".price");
      switchers.addEventListener("click", function (e) {
        switcher.forEach(function (s) {
          s.classList.toggle("pricing-switcher-active");
        });
        price.forEach(function (p) {
          p.classList.remove("price-hidden");
          p.classList.toggle("price-show");
          p.classList.toggle("price-hide");
        });
      });
    });
  },

  /**
   * ReplaceMe.js
   * Enables text rotator
   * Requires assets/js/vendor/replaceme.min.js
   */
  textRotator: function textRotator() {
    if (document.querySelector(".rotator-zoom") != null) {
      var replace = new ReplaceMe(document.querySelector('.rotator-zoom'), {
        animation: 'animate__animated animate__zoomIn',
        speed: 2500,
        separator: ',',
        clickChange: false,
        loopCount: 'infinite'
      });
    }

    if (document.querySelector(".rotator-fade") != null) {
      var replace = new ReplaceMe(document.querySelector('.rotator-fade'), {
        animation: 'animate__animated animate__fadeInDown',
        speed: 2500,
        separator: ',',
        clickChange: false,
        loopCount: 'infinite'
      });
    }
  },

  /**
   * Clipboard.js
   * Enables clipboard on docs
   * Requires assets/js/vendor/clipboard.min.js
   */
  codeSnippet: function codeSnippet() {
    var btnHtml = '<button type="button" class="btn btn-sm btn-white rounded-pill btn-clipboard">Copy</button>';
    document.querySelectorAll('.code-wrapper-inner').forEach(function (element) {
      element.insertAdjacentHTML('beforebegin', btnHtml);
    });
    var clipboard = new ClipboardJS('.btn-clipboard', {
      target: function target(trigger) {
        return trigger.nextElementSibling;
      }
    });
    clipboard.on('success', function (event) {
      event.trigger.textContent = 'Copied!';
      event.clearSelection();
      setTimeout(function () {
        event.trigger.textContent = 'Copy';
      }, 2000);
    });
    var copyIconCode = new ClipboardJS('.btn-copy-icon');
    copyIconCode.on('success', function (event) {
      event.clearSelection();
      event.trigger.textContent = 'Copied!';
      window.setTimeout(function () {
        event.trigger.textContent = 'Copy';
      }, 2300);
    });
  }
};
theme.init();

/***/ }),

/***/ 2:
/*!*************************************!*\
  !*** multi ./resources/js/theme.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Michael\CubeRouteAssesment\resources\js\theme.js */"./resources/js/theme.js");


/***/ })

/******/ });