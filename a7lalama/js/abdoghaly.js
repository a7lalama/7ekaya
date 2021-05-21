$(document).ready(function() {


  $('[data-toggle="tooltip"]').tooltip();
  $('a#hidpo').click(function(){
        $('ul.menuag').fadeToggle(500)
    });

    $('.p-body-pageContent .block--category').each(function () {
        var block = $(this).attr('id');
        if ($.cookie(block) == 'hide') {
            $(this).find('.block-body').slideUp('normal');
            $(this).find('.collapsingbtnag').attr('aria-expanded', 'false');
        }
        else {
            $(this).find('.block-body').show();
        }
    });
    $('.collapsingbtnag').click(function () {
        if ($(this).parent().next().css('display') == 'block') {
        	 $(this).attr('aria-expanded', 'false');
            $(this).parent().next().slideUp('normal');
            $.cookie($(this).closest('.block--category').attr('id'), 'hide');
        } else {
         $(this).attr('aria-expanded', 'true');
            $(this).parent().next().slideDown('slow');
            var tab_cookie = $.cookie($(this).closest('.block--category').attr('id'));
            if (tab_cookie == 'hide') {
                $.cookie($(this).closest('.block--category').attr('id'), 'show');
            }
        }
    });

$( ".message-user" ).on( "mouseenter", function() {
   	$(this).find('.message-userExtras').slideDown('show');
  }).on( "mouseleave", function() {
	$(this).find('.message-userExtras').slideUp('normal');

  });


	// Color

	var colorLi = $('.option .colors ul li'),
		colorLiactv = $('.option .colors ul li.active'),
	fontLi = $('.font ul li'),
	link_color = $('.link_color p'),
	hide_sidebar = $('.hidesidebar p'),
	mide = $('.mide p'),
	separate = $('.separate_cate  p');

    // Show Color Option Div When Click On The Gear

    $('.gear-check').click(function () {

        $('.tool-box ').toggleClass('active');

    });


  		if($.cookie("colorLi") == 1 ){

	        $('html').addClass('colorized');
	        $("html").attr('data-color', "");
	 		$("html").attr('data-color', $.cookie("attrono"));
		    $('.mod p.btn-swtcher').removeClass('active');
	        var myactive = $('.option .colors ul li[data-value = '+ $.cookie("attrono") +']');
	        $(myactive).addClass('activecolor');

        }else if($.cookie("colorLi") == 2 ){

	  		$('.mod p.btn-swtcher').removeClass('active');
	        $("html").attr('data-color',  $.cookie("attrono"));

        }else if($.cookie("colorLi") == 0 ){

	        var myactive = $('.option .colors ul li[data-value = '+ $.cookie("attrono") +']');
	        $(myactive).addClass('activecolor');
	        $('html').removeClass('colorized');
	        $("html").attr('data-color', "");
	 		$('.mod p.btn-swtcher').addClass('active');
	        $("html").attr('data-color',  'dark');

        }

	// Change Color


    colorLi.click(function () {    	colorLi.removeClass('activecolor');
        $(this).addClass('activecolor');
        $("html").addClass('colorized');
        $('.mod p.btn-swtcher').removeClass('active');
		$("html").attr('data-color', $(this).attr("data-value"));
        $.cookie('attrono', $(this).attr("data-value") , { expires: 30 , path: '/' });
        $.cookie("colorLi", "1" , { expires: 30 , path: '/' });
     });



// Dark Mode

$('.mod p.btn-swtcher').on('click', function () {

	   if($("html").attr("data-color") == "dark")
           {

          	$('.mod p.btn-swtcher').removeClass('active');
		           if($.cookie("attrono")){
		           $("html").attr('data-color',  $.cookie("attrono"));
		           }else{		           $("html").attr('data-color', '');		           }
             $.cookie("colorLi", "2" , { expires: 30 , path: '/' });
            }
           else
           {     $('.mod p.btn-swtcher').addClass('active');
               $("html").attr('data-color','dark');
                $.cookie("colorLi", "0" , { expires: 30 , path: '/' });
            }

	});

	// Change Font
     if($.cookie("fontLi") == 1)
        {
        var myEm = $('.font ul li[data-value = '+ $.cookie("fonttype") +']');
          $(myEm).addClass('activefont');
            $("body").addClass($.cookie("fonttype"));
        }

fontLi.on( "click" , function(){

          fontLi2 = $(this).attr("data-value");
            if($('body').hasClass(fontLi2) == true)
           {    fontLi.removeClass('activefont');
                 $("body").attr('class' , '');
                 $("body").addClass(fontLi2);
                 $.cookie("fonttype", fontLi2  , { expires: 30 , path: '/' });
                 $.cookie("fontLi", "0" , { expires: 30 , path: '/' });
           }
           else
           {
           fontLi.removeClass('activefont');
           $(this).addClass('activefont');
                $("body").attr('class' , '');
             $("body").addClass(fontLi2);
              $.cookie("fonttype", fontLi2 , { expires: 30 , path: '/' });
                $.cookie("fontLi", "1" , { expires: 30 , path: '/' });

           }
      })


	// HideSideBar

     if($.cookie("sidebar") == 1)
        {
         $(".p-body-sidebar").hide();
         $('html').addClass(hide_sidebar.attr("data-value"));
         hide_sidebar.addClass('active');
        }

	hide_sidebar.click(function () {


      if($('html').hasClass(hide_sidebar.attr("data-value")) == true)
           {
                hide_sidebar.removeClass('active');
                 $(".p-body-sidebar").show();
                 $('html').removeClass(hide_sidebar.attr("data-value"));
                 $.cookie("sidebar", "0" , { expires: 30 , path: '/' });
           }
           else
           {    hide_sidebar.addClass('active');
                $(".p-body-sidebar").hide();
                $('html').addClass(hide_sidebar.attr("data-value"));
                $.cookie("sidebar", "1" , { expires: 30 , path: '/' });

           }


    });





	// Content Im Middle
   if($.cookie("mide") == 1)
        {
          $('html').addClass(mide.attr("data-value"));
         mide.addClass('active');
        }
	mide.on('click', function () {

 	if($('html').hasClass(mide.attr("data-value")) == true)
           {
                mide.removeClass('active');
                  $('html').removeClass(mide.attr("data-value"));
                 $.cookie("mide", "0" , { expires: 30 , path: '/' });
           }
           else
           {    mide.addClass('active');
                 $('html').addClass(mide.attr("data-value"));
                $.cookie("mide", "1" , { expires: 30 , path: '/' });

           }

	});

	// Separate Categories
   if($.cookie("separate") == 1)
        {
          $('html').addClass(separate.attr("data-value"));
         separate.addClass('active');
        }
	separate.on('click', function () {
        	if($('html').hasClass(separate.attr("data-value")) == true)
           {
                separate.removeClass('active');
                  $('html').removeClass(separate.attr("data-value"));
                 $.cookie("separate", "0" , { expires: 30 , path: '/' });
           }
           else
           {    separate.addClass('active');
                 $('html').addClass(separate.attr("data-value"));
                $.cookie("separate", "1" , { expires: 30 , path: '/' });

           }
	});

	// InCrease Font Size
    if($.cookie("fontsizea") == 1)
        {
         $('body').attr('data-size', $.cookie("fontsize"));
        }else if($.cookie("fontsizea") == 0){        $('body').attr('data-size', $.cookie("fontsize"));
        }
	$('.font_increase').on('click', function () {
		var size1 = parseInt($('body').attr('data-size'));
		if(size1 < 200) {
			$('body').attr('data-size', (size1 + 20));
		}
		 $.cookie("fontsize", size1 + 20 , { expires: 30 , path: '/' });
		  $.cookie("fontsizea", "0" , { expires: 30 , path: '/' });
	});

	$('.font_decrease').on('click', function () {
		var size2 = parseInt($('body').attr('data-size'));
		if(size2 > 60) {
			$('body').attr('data-size', (size2 - 20));
		}
          $.cookie("fontsize", size2 , { expires: 30 , path: '/' });
           $.cookie("fontsizea", "1" , { expires: 30 , path: '/' });
	});

$('.resetsettings').on('click', function () {$.removeCookie('colorLi' , { path: '/' });
$.removeCookie('sidebar' , { path: '/' });
$.removeCookie('separate' , { path: '/' });
$.removeCookie('mide' , { path: '/' });
$.removeCookie('fontLi' , { path: '/' });
$.removeCookie('attrono' , { path: '/' });
$.removeCookie('fontsizea' , { path: '/' });
$.removeCookie('fontsize' , { path: '/' });
$('body').attr('data-size', '100');

$.removeCookie($('.collapsingbtnag').closest('.block--category').attr('id'));
 $('.p-body-pageContent .block--category').find('.block-body').slideDown();
 separate.removeClass('active');
$('html').removeClass(separate.attr("data-value"));
mide.removeClass('active');
$('html').removeClass(mide.attr("data-value"));
hide_sidebar.removeClass('active');
                 $(".p-body-sidebar").show();
                 $('html').removeClass(hide_sidebar.attr("data-value"));
                 $("body").attr('class' , '');
 $('html').removeClass('colorized');
        $("html").attr('data-color', "");
$('.mod p.btn-swtcher').removeClass('active');
fontLi.removeClass('activefont');
colorLi.removeClass('activecolor');
  });

 });
