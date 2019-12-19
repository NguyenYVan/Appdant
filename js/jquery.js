$(document).ready(function () {
  // swiper
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
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
		$("html").css("overflow","hidden");
    $(".header__title").addClass("left65");
  });
  $(".menu__close").click(function () { 
		$("body").removeClass("menuactive");
		$("html").css("overflow","auto");
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
  // cosolythuyet
  $(".cslt__bande").click(function () {
    menuClose();
    $(".cosolythuyet").slideDown(100);
    $(".cosolythuyet__item").addClass("collapse");
    $(".cosolythuyet__bande").removeClass("collapse");
  });
  $(".cslt__damde").click(function () {
    menuClose();
    $(".cosolythuyet").slideDown(100);
    $(".cosolythuyet__item").addClass("collapse");
    $(".cosolythuyet__damde").removeClass("collapse");
  });
  $(".cslt__suonngan").click(function () {
    menuClose();
    $(".cosolythuyet").slideDown(100);
    $(".cosolythuyet__item").addClass("collapse");
    $(".cosolythuyet__suonngan").removeClass("collapse");
  });
  $(".cslt__bulong").click(function () {
    menuClose();
    $(".cosolythuyet").slideDown(100);
    $(".cosolythuyet__item").addClass("collapse");
    $(".cosolythuyet__bulong").removeClass("collapse");
  });
  $(".cslt__suondo").click(function () {
    menuClose();
    $(".cosolythuyet").slideDown(100);
    $(".cosolythuyet__item").addClass("collapse");
    $(".cosolythuyet__suondo").removeClass("collapse");
  });
  $(".cosolythuyet__close").click(function () { 
    $(".cosolythuyet").slideUp(100);
  });
  // footer
  function menuClose() {
    $("body").removeClass("menuactive");
		$("html").css("overflow","auto");
		$(".header__title").removeClass("left65");
  }
  $("#trangchu").click(function () {
    menuClose();
    $(".menubar").hide();
    $(".nhaplieu").hide();
    $(".ketqua").hide();
    $(".baocao").hide();
    $(".trangchu").show();
    $(".header__title").html("trang chủ");
    return;
  });
  $("#nhaplieu").click(function () {
    menuClose();
    $(".trangchu").hide();
    $(".ketqua").hide();
    $(".baocao").hide();
    $(".menubar").show()
    $(".nhaplieu").show();
    $(".header__title").html("nhập liệu <img src=\"./img/icons/pencil-512w.png\" class=\"icon\"\>");
    return;
  });
  $("#ketqua").click(function () {
    menuClose();
    $(".trangchu").hide();
    $(".nhaplieu").hide();
    $(".baocao").hide();
    $(".menubar").show()
    $(".ketqua").show();
    $(".header__title").html("kết quả");
    return;
  });
  $(".ketquatinhtoan").click(function () { 
    menuClose();
    $(".trangchu").hide();
    $(".nhaplieu").hide();
    $(".ketqua").hide();
    $(".menubar").show()
    $(".baocao").show();
    $(".header__title").html("báo cáo");
  });
});
