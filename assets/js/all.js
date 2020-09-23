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
	slidesToShow: 4,
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
			breakpoint: 667,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	]
});