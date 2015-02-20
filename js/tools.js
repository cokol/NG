(function($) {

  $(document).ready(function() {
	
		makeUp();
		
		// Ссылки на динамический контент
		
		$(".faq-menu a").click(function() {
			$(".faq-menu a").removeClass("act");
			
			$(this).addClass("act");
		})
		
		$("body").on("click",".ajax-link",function() {
			
			var container = $("#"+$(this).data("target"));
			
			var url = $(this).attr("href");
			
			container.html("<div class='ajax-loader' />");
				
			$.get( url, function(data) {
				contentHtml = data;
			}).done(function() {
				container.css({
					opacity:0
				}).html(contentHtml).animate({
					opacity: 1
				},500);
				container.css({
					height: container.height()
				});
			});
			
			return false;
			
		})
		
		// Переход по анкорам
		
		$("a").click(function() {
			if ($("a[name='"+$(this).attr("href")+"']").length) {
				$("html,body").animate({
					scrollTop: $("a[name='"+$(this).attr("href")+"']").offset().top
				},1000)
				return false;
			}
		})
		
		// if ($("#jquery_jplayer_2").length) {
		
			// $("#jquery_jplayer_2").jPlayer({
				// ready: function (event) {
					// $(this).jPlayer("setMedia", {
						// title: "",
						// mp3: ""
					// });
				// },
				// swfPath: "../../dist/jplayer",
				// supplied: "mp3",
				// wmode: "window",
				// useStateClassSkin: true,
				// autoBlur: false,
				// smoothPlayBar: true,
				// keyEnabled: true,
				// remainingDuration: true,
				// toggleDuration: true
			// });
			
		// }
		
		// Галерея fancybox
		
		$(".fancybox").fancybox({
			wrapCSS : 'ng-gallery',
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
		
		// Аудио попап
		
		if ($("#jquery_jplayer_1").length) {
		
			$("#jquery_jplayer_1").jPlayer({
				ready: function (event) {
					$(this).jPlayer("setMedia", {
						title: "",
						mp3: ""
					});
				},
				swfPath: "../../dist/jplayer",
				supplied: "mp3",
				wmode: "window",
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				remainingDuration: true,
				toggleDuration: true
			});
			
		}
			
		$(".audio-next").click(function() {
			$("#jquery_jplayer_1").jPlayer( "clearMedia" );
			
			if ($(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
				return $(this).find(".audio-link").length
			}).length) {
				var nextAudioRow = $(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			} else {
				var nextAudioRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			}
			
			$(".participants-list .participant-item.act").removeClass("act");
			nextAudioRow.addClass("act");
			
			var nextUrl = nextAudioRow.find(".audio-link").attr("href");
			$("#jp_container_1 .jp-title").html(nextAudioRow.find(".audio-link").data("title"));
			
			$(".player-popup .popup-title").html(nextAudioRow.find(".participant-name span").html())
			
			if ($(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
				return $(this).find(".audio-link").length
			}).length) {
				var nextAudioRow = $(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			} else {
				var nextAudioRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			}
			
			if ($(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
				return $(this).find(".audio-link").length
			}).length) {
				var prevAudioRow = $(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			} else {
				var prevAudioRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).last();
			}
			
			var prevButtonText = prevAudioRow.find(".participant-name span").html();
			var nextButtonText = nextAudioRow.find(".participant-name span").html();
			
			$(".player-popup .audio-prev .cont").html(prevButtonText)
			$(".player-popup .audio-next .cont").html(nextButtonText)
			
			$("#jquery_jplayer_1").jPlayer("setMedia", {mp3: nextUrl});
			$("#jquery_jplayer_1").jPlayer( "play" );
			
		})
		
		$(".audio-prev").click(function() {
			$("#jquery_jplayer_1").jPlayer( "clearMedia" );
			
			if ($(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
				return $(this).find(".audio-link").length
			}).length) {
				var prevAudioRow = $(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			} else {
				var prevAudioRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).last();
			}
			
			$(".participants-list .participant-item.act").removeClass("act");
			prevAudioRow.addClass("act");
			
			$(".player-popup .popup-title").html(prevAudioRow.find(".participant-name span").html())
			
			var prevUrl = prevAudioRow.find(".audio-link").attr("href");
			$("#jp_container_1 .jp-title").html(prevAudioRow.find(".audio-link").data("title"))
			
			if ($(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
				return $(this).find(".audio-link").length
			}).length) {
				var nextAudioRow = $(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			} else {
				var nextAudioRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			}
			
			if ($(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
				return $(this).find(".audio-link").length
			}).length) {
				var prevAudioRow = $(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			} else {
				var prevAudioRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).last();
			}
			
			var prevButtonText = prevAudioRow.find(".participant-name span").html();
			var nextButtonText = nextAudioRow.find(".participant-name span").html();
			
			$(".player-popup .audio-prev .cont").html(prevButtonText)
			$(".player-popup .audio-next .cont").html(nextButtonText)
			
			$("#jquery_jplayer_1").jPlayer("setMedia", {mp3: prevUrl});
			$("#jquery_jplayer_1").jPlayer( "play" );
			
		});
		
		$(".participants-list .audio-link").click(function() {
			openPopup("playerPopup");
			
			var curUrl = $(this).attr("href");
			var curTitle = $(this).data("title");
			var popupTitle = $(this).parents(".participant-item").find(".participant-name span").html();
			
			$(".participants-list .participant-item").removeClass("act");
			$(this).parents(".participant-item").addClass("act");
			
			if ($(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
				return $(this).find(".audio-link").length
			}).length) {
				var nextAudioRow = $(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			} else {
				var nextAudioRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			}
			
			if ($(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
				return $(this).find(".audio-link").length
			}).length) {
				var prevAudioRow = $(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).first();
			} else {
				var prevAudioRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".audio-link").length
				}).last();
			}
			
			var prevButtonText = prevAudioRow.find(".participant-name span").html();
			var nextButtonText = nextAudioRow.find(".participant-name span").html();
			
			$(".player-popup .audio-prev .cont").html(prevButtonText)
			$(".player-popup .audio-next .cont").html(nextButtonText)
			
			$(".player-popup .popup-title").html(popupTitle);
			
			$("#jp_container_1 .jp-title").html(curTitle)
			
			$("#jquery_jplayer_1").jPlayer("setMedia", {mp3: curUrl});
			$("#jquery_jplayer_1").jPlayer( "play" );
			
			return false;
		})
		
		
		// Попап с видео на детальной странице участника
		
		$(".simple-video-link").click(function() {
			$(".simple-video-popup .simple-video-content").html("<iframe width='100%' height='400' src='"+$(this).attr("href")+"' frameborder='0' allowfullscreen></iframe>")
			
			openPopup("simpleVideoPopup");
			
			return false;
			
		})
		
		// Попап с видео на странице "Участники"
		
		$(".participants-list .video-link").click(function() {
			
			
			var curUrl = $(this).attr("href");
			var popupTitle = $(this).parents(".participant-item").find(".participant-name span").html();
			
			$(".participants-list .participant-item").removeClass("act");
			$(this).parents(".participant-item").addClass("act");
			
			if ($(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
				return $(this).find(".video-link").length
			}).length) {
				var nextAudioRow = $(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			} else {
				var nextAudioRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			}
			
			if ($(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
				return $(this).find(".video-link").length
			}).length) {
				var prevAudioRow = $(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			} else {
				var prevAudioRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).last();
			}
			
			var prevButtonText = prevAudioRow.find(".participant-name span").html();
			var nextButtonText = nextAudioRow.find(".participant-name span").html();
			
			$(".simple-video-popup .video-prev .cont").html(prevButtonText)
			$(".simple-video-popup .video-next .cont").html(nextButtonText)
			
			$(".simple-video-popup .simple-video-content").html("<iframe width='100%' height='400' src='"+curUrl+"' frameborder='0' allowfullscreen></iframe>")
			
			$(".simple-video-popup .popup-title").html(popupTitle);
			
			openPopup("simpleVideoPopup");
			
			
			return false;
		});
		
		$(".simple-video-popup .video-next").click(function() {

			if ($(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
				return $(this).find(".video-link").length
			}).length) {
				var nextVideoRow = $(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			} else {
				var nextVideoRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			}
			
			$(".participants-list .participant-item.act").removeClass("act");
			nextVideoRow.addClass("act");
			
			var nextUrl = nextVideoRow.find(".video-link").attr("href");
			
			$(".simple-video-popup .popup-title").html(nextVideoRow.find(".participant-name span").html())
			
			if ($(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
				return $(this).find(".video-link").length
			}).length) {
				var nextVideoRow = $(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			} else {
				var nextVideoRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			}
			
			if ($(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
				return $(this).find(".video-link").length
			}).length) {
				var prevVideoRow = $(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			} else {
				var prevVideoRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).last();
			}
			
			var prevButtonText = prevVideoRow.find(".participant-name span").html();
			var nextButtonText = nextVideoRow.find(".participant-name span").html();
			
			$(".simple-video-popup .video-prev .cont").html(prevButtonText)
			$(".simple-video-popup .video-next .cont").html(nextButtonText)
			
			$(".simple-video-popup .simple-video-content").html("<iframe width='100%' height='400' src='"+nextUrl+"' frameborder='0' allowfullscreen></iframe>")
			
		})
		
		$(".simple-video-popup .video-prev").click(function() {
			
			if ($(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
				return $(this).find(".video-link").length
			}).length) {
				var prevVideoRow = $(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			} else {
				var prevVideoRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).last();
			}
			
			$(".participants-list .participant-item.act").removeClass("act");
			prevVideoRow.addClass("act");
			
			$(".simple-video-popup .popup-title").html(prevVideoRow.find(".participant-name span").html())
			
			var prevUrl = prevVideoRow.find(".video-link").attr("href");
			
			if ($(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
				return $(this).find(".video-link").length
			}).length) {
				var nextVideoRow = $(".participants-list .participant-item.act").nextAll(".participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			} else {
				var nextVideoRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			}
			
			if ($(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
				return $(this).find(".video-link").length
			}).length) {
				var prevVideoRow = $(".participants-list .participant-item.act").prevAll(".participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).first();
			} else {
				var prevVideoRow = $(".participants-list .participant-item").filter(function () {
					return $(this).find(".video-link").length
				}).last();
			}
			
			var prevButtonText = prevVideoRow.find(".participant-name span").html();
			var nextButtonText = nextVideoRow.find(".participant-name span").html();
			
			$(".simple-video-popup .video-prev .cont").html(prevButtonText)
			$(".simple-video-popup .video-next .cont").html(nextButtonText)
			
			$(".simple-video-popup .simple-video-content").html("<iframe width='100%' height='400' src='"+nextUrl+"' frameborder='0' allowfullscreen></iframe>")
			
		});
		
		
		
		
		// Селекты и чекбоксы
		
		$( "select").selectmenu();
		
		$( "input[type=checkbox], input[type=radio]").iCheck();
		
		// Зависимые селекты
		
		$("select").filter(function() {
			return $(this).data("childselect")
		}).each(function() {
			var parentSelect = $(this);
			var childSelect = $("select#"+$(this).data("childselect"));
			childSelect.find("option").filter(function() {
				return $(this).data("parentval") != parentSelect.val() && $(this).attr("value") != "all"
			}).attr("disabled",true)
			parentSelect.selectmenu({
				change: function( event, ui ) {
					childSelect.find("option").attr("disabled",false).filter(function() {
						return $(this).data("parentval") != parentSelect.val()
					}).attr("disabled",true);
					childSelect.val("all")
					childSelect.selectmenu("refresh");
				}
			});

			parentSelect.trigger("change");
			
			
		})
		
		if ($(".page-filter-bottom").css("display") != "block") {
			$(".filter-button-trigger").html("Показать фильтр")
		} else {
			$(".filter-button-trigger").html("Свернуть фильтр")
		}
		
		$(".filter-button-trigger").on("click",function() {
			$(".page-filter-bottom").slideToggle(250,function() {
				if ($(".page-filter-bottom").css("display") != "block") {
					$(".filter-button-trigger").html("Показать фильтр")
				} else {
					$(".filter-button-trigger").html("Свернуть фильтр")
				}
			});
			$(this).toggleClass("act")
		});
		
		
		// Forms
	
		if ($("input:text").length) {
			$("input:text").each(function() {
				if ($(this).val()) {
					$(this).prev(".placeholder").hide();
				}
			});
		}

		$("input.phone").mask("+7 (999) 999-99-99");

		validateForms();
		
		// $("form").submit(function() {
			// if ($(this).valid()) {
				
				// $(this).find("input:text").val("");
				// $(this).find("textarea").val("");
			
				// $(this).find(".placeholder").show();
			
			// }
		// });
		
		$("input:text, input:password, textarea").each(function() {
			$(this).addClass("initial");
			
			if ($(this).prop("tagName") == "INPUT" || $(this).prop("tagName") == "TEXTAREA") {
				// if (!$(this).parents(".input-wrapper").length) $(this).wrap("<div class='input-wrapper'></div>");
				if ($(this).hasClass("phone") || $(this).hasClass("form-date")) {
					$(this).focus(function() {
						$(this).removeClass("initial");
						$(this).parents(".form-item").find(".placeholder").hide();
					});
				} else {
					$(this).focus(function() {
						$(this).parents(".form-item").find(".placeholder").addClass("placeholder-initial");
					});
					$(this).keydown(function() {
						$(this).removeClass("initial");
						$(this).parents(".form-item").find(".placeholder").hide();
					});
				}
				$(this).blur(function() {
					$(this).prev().prev(".placeholder").hide();
					$(this).parents(".form-item").find(".placeholder").removeClass("placeholder-initial");
					if (!$(this).val()) {
						$(this).addClass("initial");
						$(this).parents(".form-item").find(".placeholder").show();
					}
				});
			} else {
				$(this).focus(function() {
					$(this).removeClass("initial");
					$(this).parents(".form-item").find(".placeholder").hide();
				});
				$(this).blur(function() {
					if (!$(this).val()) {
						$(this).addClass("initial");
						$(this).parents(".form-item").find(".placeholder").show();
					}
				});
			}
				
			$(this).parents(".form-item").find(".placeholder").click(function() {
				$(this).focus();
			});
			
		});
		
		// Пагинация с динамической подгрузкой
		
		$(".paged-content").each(function() {
			var container = $(this).find(".paginator-content");
			var paginator = $(this).find(".paginator");
			var paginatorItems = paginator.find("a");
			
			paginatorItems.click(function() {
				
				paginatorItems.removeClass("act");
				
				$(this).addClass("act");
			
				var url = $(this).attr("href");
				
				container.html("<div class='paged-content-loader' />");
				
				$.get( url, function(data) {
					contentHtml = data;
				}).done(function() {
					container.css({
						opacity:0
					}).html(contentHtml).animate({
						opacity: 1
					},500);
					container.css({
						height: container.height()
					});
				});
				
				paginatorMakeup(paginatorItems);
				
				return false;
			});
			
			if (paginatorItems.filter(".act").length) {
				paginatorItems.filter(".act").click();
			} else {
				paginatorItems.eq(0).click();
			}
			
			paginatorMakeup(paginatorItems);
			
		})
		
		// Экспертный совет
		
		$(".item-expandable").on("click",function() {
			if (!$(this).hasClass("item-expandable-expanded")) {
				$(this).addClass("item-expandable-expanded");
				$("body").append("<div class='tint expandable-tint' style='display:none' />");
				$(".tint").fadeIn(100)
			}
		});
		
		$(".experts-inner-item").not(".item-expandable").on("click",function() {
			if (!$(this).hasClass("item-expandable-act")) {
				$(this).addClass("item-expandable-act");
				$("body").append("<div class='tint expandable-tint' style='display:none' />");
				$(".tint").fadeIn(100)
			}
		})
		
		$("body").on("click",".expandable-tint",function() {
			$(".item-expandable-act").removeClass("item-expandable-act")
			$(".item-expandable-expanded").removeClass("item-expandable-expanded")
			$(this).remove();
		});
		
		jQuery(document).keydown(function(e){
			if (e == null) { // ie
				keycode = event.keyCode;
			} else { // mozilla
				keycode = e.which;
			}
			
			if(keycode == 27){ // escape, close box
				if ($(".item-expandable-expanded").length || $(".item-expandable-act").length) {
					$(".item-expandable-expanded").removeClass("item-expandable-expanded")
					$(".item-expandable-act").removeClass("item-expandable-act")
					$(".expandable-tint").remove();
				}
			}
			
		});
		
		// Видео на главной, клик на превью
		
		$("body").on("click",".video-item",function() {
			if ($(this).data("videoid") != "") {
				videoPopup($(this).data("videoid"))
			}
		})
	
		// Попап профиля в шапке
		
		$(".header-profile").on("mouseenter", function() {
			$(".header-profile-popup").fadeIn(100,function() {
				$(".header-profile-popup").addClass("open")
			});
		});
		$(".header-profile").on("mouseleave", function() {
			$(".header-profile-popup").fadeOut(100,function() {
				$(".header-profile-popup").removeClass("open")
			});
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
		
		// Видео в новостях, карусель
		
		if ($(".video-slider").length) {
			$(".video-slider").slick({
				dots: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				adaptiveHeight: true,
				speed: 600,
				prevArrow: '<button type="button" class="slick-prev"></button>',
				nextArrow: '<button type="button" class="slick-next"></button>'
			});
		}
		
		// Видео на главной, карусель
		
		if ($(".main-video").length) {
			$(".main-video").slick({
				dots: true,
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
		
		hashHandle();

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
		pupMakeup();
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
		if ($(this).hasClass("player-popup")) {
			$("#jquery_jplayer_1").jPlayer( "stop" );
		}
		if ($(this).hasClass("simple-video-popup")) {
			$(".simple-video-content iframe").remove();
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
		
		$("#dummySlider").slick("slickGoTo",prevIndex)
		
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
		
		$("#dummySlider").slick("slickGoTo",nextIndex)
		
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
			
			$("#videoThumbnails").before("<div id='dummySlider' />");
			
			var sliderSize = $(".video-thumbnails .slide").not(".slick-cloned").length;
			
			for (i=0;i<sliderSize;i++) {
				$("#dummySlider").append("<div class='slide'>"+parseInt(i+1)+"</div>")
			}
			
			if (!$(".video-thumbnails").hasClass("slick-initialized")) {
				
				$('.video-thumbnails').on('init', function(slick){
					$(".page-loader").remove();
					openPopup("videoPopup");
				});
				
				$("#dummySlider").slick({
					infinite: true,
					dots:false,
					slidesToShow: 1,
					slidesToScroll: 1,
					asNavFor: '.video-thumbnails'
				})
				
				$(".video-thumbnails").slick({
					infinite: true,
					dots:false,
					slidesToShow: 5,
					slidesToScroll: 5,
					prevArrow: '<button type="button" class="slick-prev"></button>',
					nextArrow: '<button type="button" class="slick-next"></button>',
					asNavFor: '#dummySlider'
				});
				
				$("#dummySlider").slick("slickGoTo",$(".video-thumbnails .act").prevAll().not(".slick-cloned").length)
				
			}
			
		});
  
	}
	
}

function makeUp() {
  // Экспертный совет
	
	if (!$(".experts-inner").hasClass("done")) {
		$(".experts-inner").addClass("done");
		
		$(".experts-inner-item").each(function() {
			var item = $(this);
			var textCont = $(this).find(".descr-bottom .cont");
			var nameCont = $(this).find(".name .cont")
			
			if (nameCont.height() < 19) {
				if (textCont.height() > 18*6) {
					item.addClass("item-expandable")
				}
			} else {
				if (textCont.height() > 18*5) {
					item.addClass("item-expandable item-expandable-2")
				}
			}
			
		})
		
	}
	
}

function paginatorMakeup(items) {
  
	var actItem = items.filter(".act")
	
	items.show();
	
	items.siblings(".sep").remove();
	
	actItem.nextAll().hide();
	actItem.nextAll().slice(0,3).show();
	items.last().show();
	
	actItem.prevAll().hide();
	actItem.prevAll().slice(0,3).show();
	items.first().show();
	
	if (actItem.prevAll().length > 4) {
		actItem.prevAll().slice(3,4).after("<span class='sep'>...</span>")
	}
	
	if (actItem.nextAll().length > 4) {
		actItem.nextAll().slice(3,4).before("<span class='sep'>...</span>")
	}
	
}

function validateForms() {
  
  $("form").each(function() {
    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        // element.parents(".input-wrapper").addClass("input-wrapper-error");
        if (element.attr("errortext")) {
          error.html(element.attr("errortext"))
        }
        error.insertAfter(element);
        element.prev(".placeholder").addClass("placeholder-error")
        if (element[0].tagName == "SELECT") {
          element.parents(".form-item").find(".param-selector").addClass("param-sel-error")
        }
        
      },
      unhighlight: function(element, errorClass, validClass) {
        // $(element).parents(".input-wrapper").removeClass("input-wrapper-error");
        $(element).removeClass(errorClass);
        $(element).next(".error").remove();
        $(element).prev(".placeholder").removeClass("placeholder-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".form-item").find(".param-selector").removeClass("selector-error")
        }
      },
      invalidHandler: function(form, validatorcalc) {
          var errors = validatorcalc.numberOfInvalids();
          if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {                    
              validatorcalc.errorList[0].element.focus();
          }
      }
    });
    
    if ($(this).find("input.email").length) {
      $(this).find("input.email").rules('add', {
        email: true,
        messages: {
          required:  "Введите правильный e-mail"
        }
      });
    }
    
    if ($(this).find(".custom-date").length) {
      $(this).find(".custom-date").rules('add', {
				russianDate: true
      });
    }
    
    if ($(this).find("input.email").length && $(this).find("input.phone").length) {
      var thisField = $(this).find("input.phone");
      var relatedField = $(this).find("input.email");
      thisField.rules('add', {
        required: function(element) {
          if (relatedField.val() == "") {
            return true;
          } else {
            return false;
          }
        }
      });
      var thisField2 = $(this).find("input.email");
      var relatedField2 = $(this).find("input.phone");
      thisField2.rules('add', {
        required: function(element) {
          if (relatedField2.val() == "") {
            return true;
          } else {
            return false;
          }
        }
      });
    }
    
    $(document).mouseup(function (e) {
      var container = $("form");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $(".error-wrapper").remove();
      }
    });
		
		$(document).mouseup(function (e) {
      var container = $(".tooltip");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $(".tooltip").fadeOut(150);
      }
    });
    
  });  
    
}

jQuery.extend(jQuery.validator.messages, {
    required: "Пожалуйста, заполните это поле!",
    remote: "Please fix this field.",
    email: "Введите правильный e-mail",
    url: "Please enter a valid URL.",
    date: "Введите дату в формате ДД.ММ.ГГГГ.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function getHashVars() {
	var hashString = window.location.hash;
	hashString = hashString.replace("#","");
	
	var hashArray = hashString.split("&");
	
	var hashVars = new Array();
	
	for (var i in hashArray) {
		hashVar = hashArray[i].split("=");
		
		hashVars[hashVar[0]] = hashVar[1];
		
	}
	
	return hashVars;
	
}

function hashSet(name,val) {
  var hashString = window.location.hash;
	hashString = hashString.replace("#","");
	
	var hashArray = hashString.split("&");
	
	var hashStringNew = "";
	
	var newVar = true;
	
	if (hashString.length) {
		for (var i in hashArray) {
			hashVar = hashArray[i].split("=");
			
			if (hashVar[0] == name) {
				hashVar[1] = val;
			}
			
			hashStringNew += hashVar[0] +"="+ hashVar[1] + "&";
			
		}
		
		for (var i in hashArray) {
			hashVar = hashArray[i].split("=");
			
			if (hashVar[0] == name) {
				newVar = false;
				break;
			}
			
		}
		
	}
	
	if (newVar) {
		hashStringNew += name +"="+ val + "&";
	}
	
	hashStringNew = hashStringNew.substring(0, hashStringNew.length - 1);
	
	window.location.hash = hashStringNew;
	
}

function hashHandle() {
  // Разбор хэша. Функция возвращает массив hashVars, в котором ключ - имя переменной
	
	hashVars = getHashVars();
	
	// Формируем хэш из data-hash активных элементов, у которых он есть
	
	$(".act").filter(function() {
		return $(this).data("hash")
	}).each(function() {
		hashArr = $(this).data("hash").split("=");
		hashSet(hashArr[0],hashArr[1]);
	})
	
	$("option:selected").filter(function() {
		return $(this).data("hash")
	}).each(function() {
		hashArr = $(this).data("hash").split("=");
		hashSet(hashArr[0],hashArr[1]);
	})
	
	// Меняем хэш по клику на элементе
	
	$("*").not("option").filter(function() {
		return $(this).data("hash")
	}).click(function() {
		hashArr = $(this).data("hash").split("=");
		hashSet(hashArr[0],hashArr[1]);
	});
	
	// Меняем хэш при изменении значения селекта
	
	$("select").filter(function() {
		return $(this).find(":selected").data("hash")
	}).on("change",function() {
		hashArr = $(this).find(":selected").data("hash").split("=");
		hashSet(hashArr[0],hashArr[1]);
	});
	
	// Кликаем на элемент, если значение переменной в хэше равно значению переменной этого элемента
	
	$("*").not("option").filter(function() {
		return $(this).data("hash")
	}).each(function() {
		hashArr = $(this).data("hash").split("=");
		
		if (hashArr[0] in hashVars && hashVars[hashArr[0]] == hashArr[1]) {
			$(this).trigger("click");
		}
	});
	
	// Меняем значение селекта в соответствии со значением переменной в хэше
	
	$("option").filter(function() {
		return $(this).data("hash")
	}).each(function() {
		hashArr = $(this).data("hash").split("=");
		if (hashArr[0] in hashVars && hashVars[hashArr[0]] == hashArr[1]) {
			$(this).parents("select").val($(this).attr("value"))
		}
	});
	$("select").trigger("change");
}

function hashGo(obj) {
	
	var hashString = obj.attr("href");
	hashString = hashString.replace("#","");
	
	var hashArray = hashString.split("&");
	
	var hashVars = new Array();
	
	for (var i in hashArray) {
		hashVar = hashArray[i].split("=");
		
		hashVars[hashVar[0]] = hashVar[1];
		
	}
	
	// Кликаем на элемент, если значение переменной в хэше равно значению переменной этого элемента
	
	$("*").not("option").filter(function() {
		return $(this).data("hash")
	}).each(function() {
		hashArr = $(this).data("hash").split("=");
		
		if (hashArr[0] in hashVars && hashVars[hashArr[0]] == hashArr[1]) {
			$(this).trigger("click");
		}
	});
	
	// Меняем значение селекта в соответствии со значением переменной в хэше
	
	$("option").filter(function() {
		return $(this).data("hash")
	}).each(function() {
		hashArr = $(this).data("hash").split("=");
		if (hashArr[0] in hashVars && hashVars[hashArr[0]] == hashArr[1]) {
			$(this).parents("select").val($(this).attr("value"))
		}
	});
	$("select").trigger("change");
	
}