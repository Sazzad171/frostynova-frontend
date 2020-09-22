$('.owl-carousel').owlCarousel({
	loop:true,
	margin:0,
items:1,
navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
dots:false,
	responsive:{
			0:{
					items:1
			},
			767:{
					items:3
			},
			992:{
					items:5
			}
	}
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
type: 'image',
gallery: {
	enabled: true
}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
type: 'iframe'
});



$('.grid').imagesLoaded( function() {
// init Isotope
var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
	masonry: {
	// use outer width of grid-sizer for columnWidth
	columnWidth: '.grid-item',
	}
});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
var filterValue = $(this).attr('data-filter');
$grid.isotope({ filter: filterValue });
});	



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
$(this).siblings('.active').removeClass('active');
$(this).addClass('active');
event.preventDefault();
});

// navbar dropdown
$('li.dropdown').hover(function() {
$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
}, function() {
$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
});

// nested dropdown
function showNestedDropdown() {
document.getElementById("nested-dropdown").style.display = "block";
document.getElementById("nested-dropdown-icon").style.transform = "rotate(90deg)";
}
function hideNestedDropdown() {
	document.getElementById("nested-dropdown").style.display = "none";
	document.getElementById("nested-dropdown-icon").style.transform = "rotate(0deg)";
}

// mobile navigation
function showMobileDropdown() {
	document.getElementById("mobile-dropdown").style.display = "block";
}
function hideMobileDropdown() {
	document.getElementById("mobile-dropdown").style.display = "none";
}
function showMobileNav() {
	document.getElementById("full-mobile-nav").style.marginLeft = "0";
}
function hideMobileNav() {
	document.getElementById("full-mobile-nav").style.marginLeft = "-500px";
}

// slick slider for company logo
$('.responsive').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
	]
});