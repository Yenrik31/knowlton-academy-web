/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Sidebar Js
04. Cart Toggle Js
05. Search Js
06. Sticky Header Js
07. Data Background Js
08. Testimonial Slider Js
09. Slider Js (Home 3)
10. Brand Js
11. Tesimonial Js
12. Course Slider Js
13. Masonary Js
14. Wow Js
15. Data width Js
16. Cart Quantity Js
17. Show Login Toggle Js
18. Show Coupon Toggle Js
19. Create An Account Toggle Js
20. Shipping Box Toggle Js
21. Counter Js
22. Parallax Js
23. InHover Active Js
24.dialog
25.checkbox
26.accordian

****************************************************/

(function ($) {
"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
    // 01. PreLoader Js
	windowOn.on('load',function() {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
    // 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	////////////////////////////////////////////////////
    // 03. Sidebar Js
	$("#sidebar-toggle").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
    // 04. Cart Toggle Js
	$(".cart-toggle-btn").on("click", function () {
		$(".cartmini__wrapper").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".cartmini__close-btn").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".header__search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
    // 05. Search Js
	$(".search-toggle").on("click", function () {
		$(".header__search-3").addClass("search-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".header__search-3-btn-close").on("click", function () {
		$(".header__search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
    // 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});

	////////////////////////////////////////////////////
    // 07. Data Background Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

  
	////////////////////////////////////////////////////
    // 08. Testimonial Slider Js
	var swiper = new Swiper('.testimonial__slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	


	////////////////////////////////////////////////////
    // 09. Slider Js (Home 3)
	var galleryThumbs = new Swiper('.slider__nav', {
		spaceBetween: 0,
		slidesPerView: 6,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		
	});
	var galleryTop = new Swiper('.slider__wrapper', {
		spaceBetween: 0,
		effect: 'fade',
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});


	////////////////////////////////////////////////////
    // 10. Brand Js
	var swiper = new Swiper('.brand__slider', {
		slidesPerView: 6,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


	////////////////////////////////////////////////////
    // 11. Tesimonial Js
	var tesimonialThumb = new Swiper('.testimonial-nav', {
		spaceBetween: 20,
		slidesPerView: 3,
		loop: true,
		freeMode: true,
		loopedSlides: 3, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
	  });
	var testimonialText = new Swiper('.testimonial-text', {
	spaceBetween: 0,
	loop: true,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: tesimonialThumb,
	},
	});

	////////////////////////////////////////////////////
   	// 12. Course Slider Js
	var swiper = new Swiper('.course__slider', {
	spaceBetween: 30,
	slidesPerView: 2,
	breakpoints: {  
		'768': {
			slidesPerView: 2,
		},
		'576': {
			slidesPerView: 1,
		},
		'0': {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	});
	
	////////////////////////////////////////////////////
    // 13. Masonary Js
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


	// filter items on button click
	$('.masonary-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.masonary-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	});


	////////////////////////////////////////////////////
    // 14. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
    // 15. Data width Js
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	  });
	

	////////////////////////////////////////////////////
    // 16. Cart Quantity Js
	$('.cart-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.cart-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});




	////////////////////////////////////////////////////
	// 17. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 18. Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 19. Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 20. Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

	////////////////////////////////////////////////////
	// 21. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});
	
	////////////////////////////////////////////////////
	// 22. Parallax Js
	if ($('.scene').length > 0 ) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		}); 
	};

	////////////////////////////////////////////////////
    // 23. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

})(jQuery);

//////////////////////////////////////////////////////////

// accordian
const accordian = document.getElementsByClassName('contentbox')
for(i=0; i<accordian.length; i++){
   accordian[i].addEventListener('click', function(){
	this.classList.toggle('active')
   })
}

//show more
document.addEventListener("DOMContentLoaded", function() {
	const readMoreBtn = document.querySelector('.read-more-btn');
	const moreText = document.querySelector('.moreText');
  
	readMoreBtn.addEventListener('click', function() {
	  if (moreText.style.display === 'none' || moreText.style.display === '') {
		moreText.style.display = 'block';
		readMoreBtn.textContent = 'Show less';
	  } else {
		moreText.style.display = 'none';
		readMoreBtn.textContent = 'Show more';
	  }
	});
  });

  //faq
  const faq = document.querySelectorAll(".faq");

  faq.forEach(faq =>{
	faq.addEventListener('click',()=>{
		faq.classList.toggle("active")
	})
  })
//24.checkbox
function handleCheckboxChange(checkbox) {
	const dialogOne = document.querySelectorAll('.dialog-one');
	const dialogTwo = document.querySelector('.dialog-two');
	const graduationYear = document.getElementById('graduation');
	const experience = document.getElementById('experience');

	let qstnOneChecked = false;
	let qstnTwoChecked = false;
	let workingProfessionalChecked = false;
	let collegeStudentChecked = false;

	document.querySelectorAll('.qstn-one .checkbox-input').forEach(cb => {
	  if (cb.checked) qstnOneChecked = true;
	});

	document.querySelectorAll('.qstn-two .checkbox-input').forEach(cb => {
	  if (cb.checked) {
		qstnTwoChecked = true;
		if (cb.name === 'workingproffessional') workingProfessionalChecked = true;
		if (cb.name === 'collegestudent') collegeStudentChecked = true;
	  }
	});

	if (qstnOneChecked && qstnTwoChecked) {
	  dialogOne.forEach(dialog => dialog.style.display = 'none');
	  dialogTwo.style.display = 'block';
	  document.getElementById('count_-one').style.backgroundColor = "#2b70ff"
	  document.getElementById('count_-one').style.color = "#fff"
	  document.getElementById('between_-count').style.backgroundColor = "#2b70ff"
	} else {
	  dialogOne.forEach(dialog => dialog.style.display = 'block');
	  dialogTwo.style.display = 'none';
	}
	if (workingProfessionalChecked) {
	  document.getElementById("graduation").style.display='none';
      document.getElementById("experience").style.display='block';
	} else if (collegeStudentChecked) {
	   document.getElementById("experience").style.display='none';
	   document.getElementById("graduation").style.display='block';
	} 
  }


  // 25.dialog

  const dialog = document.getElementById('apply-dialog')
  const wrapper = document.querySelector(".wrapper")
 

  const showApplyDialog = (show)=>{
	if (show) {
		dialog.showModal()
	} else {
		dialog.close()
		resetForm()
	}
  }

  const resetForm = () => {
    const form = document.getElementById('contact-dialog-form');
    form.reset();
    document.querySelectorAll('.checkbox-input').forEach(checkbox => {
      checkbox.checked = false;
    });
    document.querySelectorAll('.dialog-one').forEach(dialog => dialog.style.display = 'block');
    document.querySelector('.dialog-two').style.display = 'none';
    document.getElementById('graduation').parentElement.classList.remove('hidden');
    document.getElementById('experience').parentElement.classList.remove('hidden');
  };
  // Add an event listener to the dialog element
dialog.addEventListener('click', (e) => {
	// Check if the click is outside the wrapper element
	if (!wrapper.contains(e.target)) {
	  dialog.close();
	  resetForm()
	}
  });