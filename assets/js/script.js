const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// Apex.chart = {
// 	fontFamily: 'inherit',
// 	locales: [{
// 		"name": "fa",
// 		"options": {
// 			"months": ["ژانویه", "فوریه", "مارس", "آوریل", "می", "ژوئن", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
// 			"shortMonths": ["ژانویه", "فوریه", "مارس", "آوریل", "می", "ژوئن", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
// 			"days": ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
// 			"shortDays": ["ی", "د", "س", "چ", "پ", "ج", "ش"],
// 			"toolbar": {
// 				"exportToSVG": "دریافت SVG",
// 				"exportToPNG": "دریافت PNG",
// 				"exportToCSV": "دریافت CSV",
// 				"menu": "فهرست",
// 				"selection": "انتخاب",
// 				"selectionZoom": "بزرگنمایی قسمت انتخاب شده",
// 				"zoomIn": "بزرگ نمایی",
// 				"zoomOut": "کوچک نمایی",
// 				"pan": "جا به جایی",
// 				"reset": "بازنشانی بزرگ نمایی"
// 			}
// 		}
// 	}],
// 	defaultLocale: "fa"
// }
//
//
//
//
//
// // line chart
// var options = {
// 	series: [{
// 			name: "1398",
// 			type: 'line',
// 			data: [20, 34, 27, 59, 37, 26, 38, 25],
// 		},
// 		{
// 			name: "1399",
// 			data: [10, 24, 17, 49, 27, 16, 28, 15],
// 			type: 'area',
// 		}
// 	],
// 	chart: {
// 		height: 400,
// 		type: 'line',
//
// 		toolbar: {
// 			show: false
// 		},
// 		zoom: {
// 			enabled: false
// 		}
// 	},
// 	colors: ['#45cb85', '#3b5de7'],
// 	dataLabels: {
// 		enabled: false,
// 	},
// 	stroke: {
// 		curve: 'smooth',
// 		width: '3',
// 		dashArray: [10, 0],
// 	},
//
// 	markers: {
// 		size: 3
// 	},
// 	xaxis: {
// 		categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان'],
// 		title: {
// 			text: 'ماه'
// 		}
// 	},
//
// 	fill: {
// 		type: 'solid',
// 		opacity: [1, 0.1],
// 	},
//
// 	legend: {
// 		position: 'top',
// 		horizontalAlign: 'right',
// 	}
// };
//
// var chart = new ApexCharts(document.querySelector("#line-chart"), options);
// chart.render();

$(".menu-icon").click(function () {
    $(".navigation-menu").toggleClass("w-sidebar").toggleClass("w-0");
	$(".side-bar").toggleClass("d-lg-none")
    $(".content").toggleClass("content-disable-sidebar");
    $(".navigation-menu").toggleClass("active");

});

$('.my-owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout:2000,
    margin: 20,
    rtl: true,
    responsiveClass: true,
    loop: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 2,
        },
        768: {
            items: 0,
        },
        992: {
            items: 0,
        },
        1200: {
            items: 0,
        }
    }
})




$(document).ready(function() {
  $('.ripple-effect').rkmd_rippleEffect();
});

(function($) {
  $.fn.rkmd_rippleEffect = function() {
    var btn, self, ripple, size, rippleX, rippleY, eWidth, eHeight;

    btn = $(this).not('[disabled], .disabled');

    btn.on('mousedown', function(e) {
      self = $(this);

      // Disable right click
      if(e.button === 2) {
        return false;
      }

      if(self.find('.ripple').length === 0) {
        self.prepend('<span class="ripple"></span>');
      }
      ripple = self.find('.ripple');
      ripple.removeClass('animated');

      eWidth = self.outerWidth();
      eHeight = self.outerHeight();
      size = Math.max(eWidth, eHeight);
      ripple.css({'width': size, 'height': size});

      rippleX = parseInt(e.pageX - self.offset().left) - (size / 2);
      rippleY = parseInt(e.pageY - self.offset().top) - (size / 2);

      ripple.css({ 'top': rippleY +'px', 'left': rippleX +'px' }).addClass('animated');

      setTimeout(function() {
        ripple.remove();
      }, 1000);

    });
  };
}(jQuery));


$(".menu-opener").click(function (){
	$(".menu-items-parent").slideToggle()
	$(".menu-opener i").toggleClass("fa-angle-down").toggleClass("fa-angle-left")
})
$(".side-bar-icon").click(function (){
	$(".left-side-bar").toggleClass("active")
	$(".side-bar-icon i").toggleClass("fa-bars").toggleClass("fa-times")
})
$(".teammate-section-opener").click(function (){
	$(".teammates-section").slideToggle(250)
	$(".teammate-section-opener i").toggleClass("fa-angle-down").toggleClass("fa-angle-left")
})
$(".service-section-opener").click(function (){
	$(".service-section").slideToggle()
	$(".service-section-opener i").toggleClass("fa-angle-down").toggleClass("fa-angle-left")
})
$(".task-section-opener").click(function (){
	$(".main-task-section").slideToggle(250)
	$(".task-section-opener i").toggleClass("fa-angle-down").toggleClass("fa-angle-left")
})
$(".project-section-opener").click(function (){
	$(".project-section-parent").slideToggle(300)
	$(".project-section-opener i").toggleClass("fa-angle-down").toggleClass("fa-angle-left")
})
$(".file-section-opener").click(function (){
	$(".file-section").slideToggle(300)
	$(".file-section-opener i").toggleClass("fa-angle-down").toggleClass("fa-angle-left")
})
$(".desk-section-opener").click(function (){
	$(".desks-section").slideToggle(300)
	$(".desk-section-opener i").toggleClass("fa-angle-down").toggleClass("fa-angle-left")
})

