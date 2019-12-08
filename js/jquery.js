$(document).ready(function () {
  // swiper
  var swiper = new Swiper('.swiper-container');
  // wow
  wow = new WOW(
    {
      animateClass: 'animated',
      offset: 100,
      callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
  // menu
  $(".menubar").click(function () { 
    $("body").addClass("menuactive");
    $(".header__title").addClass("left65");
  });
  $(".menu__close").click(function () { 
    $("body").removeClass("menuactive");
    $(".header__title").removeClass("left65");
  });
  // select
  $(".select__input").focus(function () { 
    $(this.nextElementSibling).addClass("active");
  });
  $(".select__input").blur(function () { 
    $(".select").removeClass("active");
  });
  $(".select__item").click(function () { 
    $(this).parents(".form__item").children("input").val($(this).text());
  });
  // footer
  $("#nhaplieu").click(function () { 
    $(".ketqua").hide(0,function () {
      $(".nhaplieu").fadeIn(500);
    });
    $(".header__title").html("nhập liệu <img src=\"./img/icons/pencil-512w.png\" class=\"icon\"\>");
    return;
  });
  $("#ketqua").click(function () { 
    $(".nhaplieu").hide(0,function () {
      $(".ketqua").fadeIn(500);
    });
    $(".header__title").html("kết quả");
    return;
  });
});
