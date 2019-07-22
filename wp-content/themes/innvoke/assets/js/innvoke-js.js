jQuery(document).ready(function ($) {

	'use strict';

	jQuery(".post-image-gallery").slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		cssEase: 'linear',
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: true
				}
			}
		],
		focusOnSelect: false
	});


	jQuery('a[href=\'#\']').on('click', function (e) {
		e.preventDefault();
	});

	// ------------------------------------------------------------------------
	// SUBMENUS MAIN NAVIGATION
	// ------------------------------------------------------------------------
	
	(function ($) {
		var wrapper = $('#wrapper');
		mainNavSubmenus();
		function mainNavSubmenus() {
			if ($.fn.superfish) {
				if (!$('#off-aside-menu').length && !wrapper.hasClass('left-nav') && !wrapper.hasClass('right-nav') && !wrapper.hasClass('overview') && !wrapper.hasClass('split-screen')) {
					$('.main-nav #main-menu ul, .main-nav .main-menu ul,#main-navigation .nav-tools').superfish({
						delay: 100,
						speed: 250,
						animation: {
							opacity: 'show'
						},
						animationOut: {
							opacity: 'hide'
						},
						cssArrows: !1,
						autoArrows: false,
						disableHI: true,
						onShow: function () {
							// keep off screen momentarily
							$(this).css('top', '-1000px');

							// calculate position of submenu
							var winWidth = $(window).width();
							var outerWidth = $(this).outerWidth();
							var rightEdge = $(this).offset().left + outerWidth;

							// if difference is greater than zero, then add class to menu item
							if (rightEdge > winWidth) {
								// CSS:
								$(this).addClass('submenu--right');
							}

							// remove top value so menu appears
							$(this).css('top', '');
						},
						onHide: function () {

						}
					});
					$('.topbar-menu > ul').superfish({
						popUpSelector: 'ul',
						delay: 100,
						speed: 300,
						animation: {
							opacity: 'show',
							height: 'show'
						},
						animationOut: {
							opacity: 'hide',
							height: 'hide'
						},
						cssArrows: !1,
						autoArrows: false
					});
				}
			}
		}
	})(jQuery);

	// ------------------------------------------------------------------------
	// Back To Top
	// ------------------------------------------------------------------------

	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() < 200) {
			jQuery('#smoothup.scroll-to-top').removeClass('scroll-to-top-show');
		} else {
			jQuery('#smoothup').addClass('scroll-to-top-show');
		}
	});
	jQuery('#smoothup').on('click', function () {
		jQuery('html, body').animate({
			scrollTop: 0
		}, '1000');
		return false;
	});

	// ------------------------------------------------------------------------
	// Contact Form Buttons
	// ------------------------------------------------------------------------
	
	jQuery(document).on("click", "span.wpcf7-not-valid-tip", function () {
		jQuery(this).fadeOut();
	});


	// ------------------------------------------------------------------------
	// Page Loader
	// ------------------------------------------------------------------------

	jQuery(window).load(function () {
		if (jQuery('.page-loader-wrapper').length > 0) {
			var timeout = 3000;
			setTimeout(function () {
				jQuery('.page-loader-wrapper').addClass('loaded');
			}, timeout); // give it few more miliseconds for a better effect
		}
	});

	// ------------------------------------------------------------------------
	// Side Menu
	// ------------------------------------------------------------------------
	
	jQuery(".sidearea-menu-close").on('click', function (e) {
		e.stopPropagation();
		jQuery("#insignia-sidearea").removeClass("insignia-sidearea-open");
		jQuery('body').removeClass("insignia-sidebar-body");
	});
	jQuery(".sidearea-toggle").on('click', function (e) {
		e.stopPropagation();
		jQuery("#insignia-sidearea").addClass("insignia-sidearea-open");
		jQuery('body').addClass("insignia-sidebar-body");
	});
	jQuery(".insignia-sidearea").on('click', function (e) {
		e.stopPropagation();
	});
	jQuery("body,html").on('click', function (e) {
		jQuery("#insignia-sidearea").removeClass("insignia-sidearea-open");
		jQuery('body').removeClass("insignia-sidebar-body");
	});
	
	// ------------------------------------------------------------------------
	// Twitter
	// ------------------------------------------------------------------------
	
	jQuery(".twitter-carousel-slider").slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: true
				}
			}
		],
		focusOnSelect: false
	});

	// ------------------------------------------------------------------------
	// Counter Section
	// ------------------------------------------------------------------------
	
	jQuery('.ins-counter').counterUp({
		delay: 10,
		time: 3000
	});

	jQuery('.inv-popup-gallery').swipebox();

	jQuery('.insignia-video-popup').swipebox();

	jQuery('.portfolio-image-lightbox').swipebox();

	jQuery('.inv-video-lightbox-element').swipebox();

});

	// ------------------------------------------------------------------------
	// Header Search Form
	// ------------------------------------------------------------------------
	
jQuery(function () {

	jQuery(document).on('click', 'a[href="#search"]', function () {


		jQuery("#search").addClass("open-search-form");
		jQuery('#search > form > input[type="search"]').focus();
	});

	jQuery('#search, #search button.close').on('click keyup', function (event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			jQuery(this).removeClass('open-search-form');
		}
	});
});

jQuery(function ($) {
	jQuery(document).on('click', 'li.vc_tta-tab a', function (e) {
		jQuery('html, body').stop();
	});
	jQuery(document).on('click', '.vc_tta-panel-title', function (e) {
		jQuery('html, body').stop();
	});
});

(function ($) {
	if ($('.one-pager').length > 0) {
		jQuery(window).on("load", function () {

			/* Page Scroll to id fn call */
			jQuery("#menu-main-navigation a").mPageScroll2id({
				highlightSelector: "#menu-main-navigation a"
			});

			jQuery("#menu-main-mobile-navigation a").mPageScroll2id({
				highlightSelector: "#menu-main-mobile-navigation a"
			});

			jQuery(".header-menu-button .scroll-section").mPageScroll2id({
				highlightSelector: ".header-menu-button .scroll-section"
			});

		});
	}
})(jQuery);


(function ($, win) {
	$.fn.inViewport = function (cb) {
		return this.each(function (i, el) {
			function visPx() {
				var H = $(this).height(),
					r = el.getBoundingClientRect(),
					t = r.top,
					b = r.bottom;
				return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
			}
			visPx();
			$(win).on("resize scroll", visPx);
		});
	};
}(jQuery, window));

jQuery(window).load(function () {

	jQuery(".ins-animated").inViewport(function (px) {
		if (px) jQuery(this).addClass("ins-animate");
	});

});