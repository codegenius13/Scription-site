(function () {
  'use strict'
// SMOOTH SCROLLING
//SMOOTH SCROLLING SCRIPT ONCLICK 
$('nav ul li a').click(function (event) {
  event.preventDefault();
  var thisSection = $(this).attr('href');
  var thisLink = $(this);
  $('html, body').stop().animate({
     scrollTop: $(thisSection).offset().top -100
  }, 800)// function () {
   // $('nav ul li a').removeAttr('class');
   // $(thisLink).addClass('selected')
  //});
  return false;
});
// END SMOOTH SCROLLING SCRIPT ONCLICK

// SMOOTH SCROLLING SCRIPT AUTOMATIC ON SCROLL 
$(window).on('load', function () {
  var allLinks = $('nav ul li a'); 
   var posts = $('section');
   var pageTop;
   var postPos;
   var counter = 0;
   var prevCounter = 0;
   var doneResizing;

   // THIS IS TO KNOW HOW TALL EACH SECTION IS 
   var postTops = [];
   resetPagePosition();
   //console.log(postTops);
   // END THIS IS TO KNOW HOW TALL EACH SECTION IS 

  $(window).scroll(function () {
     pageTop = $(window).scrollTop() + 110;
     if (pageTop > postTops[counter + 1]) {
        counter ++;
        //console.log(`scrolling down ${counter}`)
     }
     else if (counter > 0 && pageTop < postTops[counter]) {
        counter --;
        //console.log(`scrolling up ${counter}`)
     }
     if (counter != prevCounter) {
        $(allLinks).removeAttr('class');
        $("nav ul li a").eq(counter).addClass('selected');
        prevCounter = counter;
     }
  });
  // WHEN RESIZING THE PAGE ONSCROLL
  $(window).on('resize', function () {
     // WHEN USER STOPS RESIZING
     clearTimeout(doneResizing);
     doneResizing = setTimeout(function () {
        resetPagePosition();
     }, 500);
     // END WHEN USER STOPS RESIZING
  });
  // END WHEN RESIZING THE PAGE ONSCROLL 
  function resetPagePosition() {
     postTops = [];
     posts.each(function () {
        postTops.push(Math.floor($(this).offset().top));
     });
     // WHEN A USER REFRESHES THE PAGE WHILE SCROLLING DOWN
     var pagePosition = $(window).scrollTop() + 110;
     counter = 0;
     for(var i=0; i < postTops.length; i++) {
        if (pagePosition > postTops[i]) {
           counter ++;
        }
        counter --;
     }
     $(allLinks).removeAttr('class');
     $('nav ul li a').eq(counter).addClass('selected');
     // END WHEN A USER REFRESHES THE PAGE WHILE SCROLLING DOWN
  };
});
// END SMOOTH SCROLLING SCRIPT AUTOMATIC ONSCROLL
// END SMOOTH SCROLLING

// FLEXSLIDER
$(window).on('load', function () {
    $('.flexslider').flexslider(
     {
         animation: "slide",
         slideshowSpeed: 2000,
         direction: "vertical",
         reverse: true,
         pauseOnHover: true
     }
    ); 
});
// END FLEXSLIDER

// TABBED INTERFACE
$('#tabs ul li a').click(function (event) {
  event.preventDefault();
  $('#tabs ul li a').css({background: 'var(--tea-green)', color: 'var(--rich-black)'});
  $(this).css({background: 'var(--tea-green-light)', color: 'var(--rich-black)'});
  var thisTab = $(this).attr('href');
  $('#tabs div:visible').fadeOut(200, function () {
      $(thisTab).fadeIn(200);
  });
});
// END TABBED INTERFACE

// CONTENT ROTATOR
let counter = 1;
function contentRotator() {
    $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000, function () {
        if ($(this).is("#rotator blockquote:last-child")) {
            setTimeout(function () {
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function() {
                   counter = 1;
                   contentRotator(); 
                });  
            },7000);
        }
        else {
            setTimeout(function () {
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function () {
                   counter ++
                   contentRotator();  
                });  
            }, 2000);
        }
    });
};
contentRotator();
// END CONTENT ROTATOR

// FEATURE ROTATOR
var textBox = document.querySelector(".features-container");
var textList = document.querySelectorAll(".list");
var textCounter = 0;
function TopSlider() {
   for (var i=0; i < textList.length; i++) {
      textList[i].addEventListener("click", function (event) {
         event.preventDefault();
         textCounter++;
         if (textCounter === textList[i]) {
           textList[i].classList.add("active");
           textList[i].style.marginTop = '-20'
           textCounter = 0;
         }
         else {
            textList[i].classList.remove("active");
            textList[i].style.marginTop = "20"
         }
      });
   }
};
TopSlider();
// END FEATURE ROTATOR 
})();