(function($) {

  $(document).ready(function() {
	
		// Видео на главной, клик на превью
		
		$("body").on("click",".video-item",function() {
			if ($(this).data("videoid") != "") {
				videoPopup($(this).data("videoid"))
			}
		})
	
		// Попап профиля в шапке
		
		$(".header-profile .userpic").click(function() {
			if (!$(".header-profile-popup").hasClass("open")) {
				$(".header-profile-popup").fadeIn(100,function() {
					$(".header-profile-popup").addClass("open")
				});
			} else {
				$(".header-profile-popup").fadeOut(100,function() {
					$(".header-profile-popup").removeClass("open")
				});
			}
		})
		
		$("body").click(function(e) {
			if (!$(e.target).hasClass(".header-profile-popup") && $(".header-profile-popup").hasClass("open")) {
				$(".header-profile-popup").fadeOut(100).removeClass("open");
			}
		})
	
		// Комиссия grayscale
		
		// Grayscale IE 10-11

		// var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

		// if (/*@cc_on!@*/false || isIE11) {
			// $('.commission-item img, .experts-item img').each(function(){
				// var el = $(this);
				// el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"5","opacity":"0"}).insertBefore(el).queue(function(){
					// var el = $(this);
					// el.parent().css({"width":this.width,"height":this.height});
					// el.dequeue();
				// });
				// this.src = grayscaleIE10(this.src);
			// });
			
			// // Quick animation on IE10+ 
			// $('.commission-item, .experts-item').hover(
				// function () {
					// $(this).find('.pic img').stop().animate({opacity:1}, 200);
				// }, 
				// function () {
					// $('.img_grayscale').stop().animate({opacity:0}, 200);
				// }
			// );	
			
			// function grayscaleIE10(src){
				// var canvas = document.createElement('canvas');
				// var ctx = canvas.getContext('2d');
				// var imgObj = new Image();
				// imgObj.src = src;
				// canvas.width = imgObj.width;
				// canvas.height = imgObj.height; 
				// ctx.drawImage(imgObj, 0, 0); 
				// var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
				// for(var y = 0; y < imgPixels.height; y++){
					// for(var x = 0; x < imgPixels.width; x++){
						// var i = (y * 4) * imgPixels.width + x * 4;
						// var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
						// imgPixels.data[i] = avg; 
						// imgPixels.data[i + 1] = avg; 
						// imgPixels.data[i + 2] = avg;
					// }
				// }
				// ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
				// return canvas.toDataURL();
			// };
		// }
	
		// О конкурсе на главной
		
		if ($(".main-about").length) {
			$(".main-about").slick({
				dots: true,
				prevArrow: '<button type="button" class="slick-prev"></button>',
				nextArrow: '<button type="button" class="slick-next"></button>'
			});
			
			// Навигация слайдера
			
			$(".main-about-nav li").eq(0).addClass("act")

			$(".main-about-nav li").click(function() {
				$(".main-about .slick-dots li").eq($(this).prevAll().length).find("button").trigger("click")
			});
			
			$('.main-about').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				$(".main-about-nav li").removeClass("act");
				$(".main-about-nav li").eq(nextSlide).addClass("act");
			});
			
		}
		
		// Видео на главной, карусель
		
		if ($(".main-video").length) {
			$(".main-video").slick({
				dots: false,
				speed: 600,
				prevArrow: '<button type="button" class="slick-prev"></button>',
				nextArrow: '<button type="button" class="slick-next"></button>'
			});
		}
		
		// Новости на главной, карусель
		
		if ($(".main-news").length) {
			$(".main-news").slick({
				dots: true,
				speed: 600,
				prevArrow: '',
				nextArrow: ''
			});
		}
		
		// Памятные даты, карусель
		
		if ($(".main-dates").length) {
			$(".main-dates").slick({
				dots: false,
				speed: 500,
				slidesToScroll: 1,
				slidesToShow: 2,
				prevArrow: '<button type="button" class="slick-prev"></button>',
				nextArrow: '<button type="button" class="slick-next"></button>'
			});
		}
	
		// Счетчик на главной
		
		if ($(".main-counter").length) {

			var curDate = new Date();
			
			curDate.setDate(curDate.getDate());
			
			var endDate = new Date("May 9, 2015 00:00:00")
			
			$(".main-counter").each(function() {
				$(this).countdown({
					until: endDate,
					format: 'd',
					layout: "<div class='cd-section clearfix'><div class='cd-num'>{d100}</div><div class='cd-num'>{d10}</div><div class='cd-num'>{d1}</div><div class='cd-units'>{dl}</div></div>"
				});
			});
		
		}
	
		// Слайдер на главной
		
		if ($(".main-slider").length) {
		
			$(".main-slider").slick({
				dots: true,
				infinite: true,
				speed: 500,
				fade: true,
				cssEase: 'linear',
				prevArrow: '<button type="button" class="slick-prev"></button>',
				nextArrow: '<button type="button" class="slick-next"></button>'
			});
		
			// Навигация слайдера
			
			$(".main-slider-nav li").eq(0).addClass("act");
			
			$(".main-slider-nav li").click(function() {
				$(".main-slider .slick-dots li").eq($(this).prevAll().length).find("button").trigger("click")
			});
			
			$('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				$(".main-slider-nav li").removeClass("act");
				$(".main-slider-nav li").eq(nextSlide).addClass("act");
			});
			
		}
		
    $('nav a').click(function(e) {
      if ($($(this).attr('href')).length > 0) {
        $.scrollTo($($(this).attr('href')), 500, {offset: {'top': -54}});
        e.preventDefault();
      }
    });

    // подсказки
    $('.form-input input, .form-input textarea').each(function() {
      if ($(this).val() == '') {
        $(this).parent().find('span').css({'display': 'block'});
      }
    });

    $('.form-input input, .form-input textarea').focus(function() {
      $(this).parent().find('span').css({'display': 'none'});
    });

    $('.form-input input, .form-input textarea').blur(function() {
      if ($(this).val() == '') {
        $(this).parent().find('span').css({'display': 'block'});
      }
    });

    $('.form-select select').chosen({disable_search: true});

    $('#fileupload-foto').fileupload({
      url: 'js/jquery.fileupload/server/php/',
      acceptFileTypes: /(\.|\/)(jpg)$/i,
      autoUpload: true,
      start: function() {
        $('#main_registration form').addClass('disabled');
      },
      stop: function() {
        $('#main_registration form').removeClass('disabled');
      }
    });

    $('#fileupload-audio').fileupload({
      url: 'js/jquery.fileupload/server/php/',
      acceptFileTypes: /(\.|\/)(mp3|wav)$/i,
      autoUpload: true,
      start: function() {
        $('#main_registration form').addClass('disabled');
      },
      stop: function() {
        $('#main_registration form').removeClass('disabled');
      }
    });

    $('#fileupload-video').fileupload({
      url: 'js/jquery.fileupload/server/php/',
      acceptFileTypes: /(\.|\/)(mp4|avi)$/i,
      autoUpload: true,
      start: function() {
        $('#main_registration form').addClass('disabled');
      },
      stop: function() {
        $('#main_registration form').removeClass('disabled');
      }
    });

    $('.form-checkbox span input:checked').parent().addClass('checked');
    $('.form-checkbox').click(function() {
      $(this).find('span').toggleClass('checked');
      $(this).find('input').prop('checked', $(this).find('span').hasClass('checked')).trigger('change');
      if ($(this).find('span').hasClass('checked')) {
        $('#main_registration form').removeClass('disabled');
      } else {
        $('#main_registration form').addClass('disabled');
      }
    });

    $('form').validate({
      submitHandler: function(form) {
        if (!$('#main_registration form').hasClass('disabled')) {
          // форму можно отправить
          alert('Форма отправлена');
        } else {
          // форму не отправляем
          alert('Форма не отправлена');
        }
      }
    });

  });

  $(window).bind('load resize scroll', function() {
    var curScroll = $(window).scrollTop();
    var curHeight = $(window).height() / 2;
    $('nav a').each(function() {
      var curBlock = $(this).attr('href');
      if ($(curBlock).length > 0 && $(curBlock).offset().top < (curScroll + curHeight)) {
        $('nav li.active').removeClass('active');
        $(this).parent().addClass('active');
      }
    });
  });

  $(window).load(function() {
    $('.map-inner').css({'margin': '-' + ($('.map-inner').height() / 2) + 'px 0 0 -' + ($('.map-inner').width() / 2) + 'px'});
  });
	
	$(window).resize(function() {
		//pupMakeup();
	})

})(jQuery);

function openPopup(pupId) {
  var popup = $("#"+pupId);
  $("body").append("<div class='tint' style='display:none;' />");
  popup.addClass("popup-act").fadeTo(500,1);
  
  $(".tint").fadeTo(300,1);
  pupMakeup();
  
  jQuery(document).keydown(function(e){
    if (e == null) { // ie
      keycode = event.keyCode;
    } else { // mozilla
      keycode = e.which;
    }
    
    if(keycode == 27){ // escape, close box
      closePopup()
    }
    
  });
  
  $(".tint").on("click", function () {
    closePopup()
  });
  
  $(".popup .close, .popup .cancel").on("click", function () {
    closePopup()
  });
	
}

function pupMakeup() {
  var popup = $(".popup-act");
  var pupTop = $(window).scrollTop() + (window.innerHeight - popup.outerHeight(true))/2;
  if (pupTop < $(window).scrollTop() + 20) pupTop = $(window).scrollTop() + 20;  $(".tint").css("height",window.innerHeight).css("width",$("body").width());
  if (!popup.hasClass("price-popup")) {
    popup.css("top",pupTop).css("left",(window.innerWidth-popup.outerWidth(true))/2);
  } else {
    popup.css("margin-top",$(window).scrollTop() - popup.parent().offset().top - popup.parent().outerHeight(true) + (window.innerHeight-popup.outerHeight(true))/2);
  }
	
	$(".tint").css({
		width: window.innerWidth,
		height: window.innerHeight
	})
  
}

function closePopup() {
  $(".tint").fadeTo(500,0,function() {
    $(this).remove();
  });
  $(".popup-act").removeClass("popup-act").fadeTo(300,0,function() {
    $(this).hide();
		if ($(this).hasClass("video-popup")) {
			$(this).remove()
		}
  });
}

// Попап с видео

function videoPopup(videoId) {

	var popupVideoHeight = window.innerHeight - 400;

	$("body").on("click",".video-thumbnails .slide",function() {
		$(".video-thumbnails .slide").removeClass("act");
		$(this).addClass("act");
		$(".popup-video-container").html("<iframe width='100%' height='"+popupVideoHeight+"' src='"+$(this).attr("videourl")+"' frameborder='0' allowfullscreen></iframe><div class='ttl'>"+$(this).find(".ttl").html()+"</div><div class='descr'>"+$(this).find(".descr").html()+"</div>")
	})
	
	$("body").on("click",".popup-video-prev",function() {
			
		var sliderSize = $(".video-thumbnails .slide").not(".slick-cloned").length;
		
		if ($(".video-thumbnails .act").data("slick-index") > 0) {
			prevIndex = $(".video-thumbnails .act").prev().data("slick-index")
		} else {
			prevIndex = sliderSize - 1
		}
		
		$(".video-thumbnails .slide").filter(function() {
			return $(this).data("slick-index") == prevIndex
		}).click();
		
		if (!$(".video-thumbnails .act").hasClass("slick-active")) {
			$(".video-thumbnails .slick-prev").trigger("click");
		}
		
		
	})
	
	$("body").on("click",".popup-video-next",function() {
	
		var sliderSize = $(".video-thumbnails .slide").not(".slick-cloned").length;
	
		if ($(".video-thumbnails .act").data("slick-index") < sliderSize - 1) {
			nextIndex = $(".video-thumbnails .act").next().data("slick-index")
		} else {
			nextIndex = 0
		}
		
		$(".video-thumbnails .slide").filter(function() {
			return $(this).data("slick-index") == nextIndex
		}).click();
		
		if (!$(".video-thumbnails .act").hasClass("slick-active")) {
			
		}
		
	})
	
	$(window).resize(function() {
		$(".popup-video-container iframe").css({
			height: window.innerHeight - 400
		})
	});

	if (!$(".video-popup").length) {
	
		$("body").append("<div class='page-loader' />");
		
		$.get( "html/video-popup.html", function(data) {
			popupHtml = data;
		}).done(function() {
			$("body").append(popupHtml);
			
			$(".video-thumbnails .slide[rel='"+videoId+"']").click();
			
			if (!$(".video-thumbnails").hasClass("slick-initialized")) {
				
				$('.video-thumbnails').on('init', function(slick){
					$(".page-loader").remove();
					openPopup("videoPopup");
				});
				
				$(".video-thumbnails").slick({
					slidesToShow: 5,
					slidesToScroll: 5,
					initialSlide: $(".video-thumbnails .slide[rel='"+videoId+"']").prevAll().length,
					prevArrow: '<button type="button" class="slick-prev"></button>',
					nextArrow: '<button type="button" class="slick-next"></button>'
				});
				
				
			}
			
			
		});
  
	}
	
}

function ajaxPopup(url) {
  
}