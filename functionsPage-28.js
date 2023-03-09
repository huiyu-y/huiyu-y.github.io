function close_window() {
  if (confirm("⇽Close this Window to go back⇽")) {
    close();
  }
}

const options = {
    title: false,
    portrait: false,
    byline: false,
    controls: false,
    loop: true,
    color: '000000',
    maxwidth: 500
  };


  $("#b-0").click(function(){
    $(".swiper1").hide();
    $(".swiper2").hide();
    $(".swiper3").hide();
    $(".swiper4").hide();
    $(".swiper5").hide();

  });



  var swiper1 = new Swiper(".swiper1", {
    mousewheel: {
      invert: false,
      interval: 400
    },
    navigation: {
      prevEl: ".navigation-prevEl1",
      nextEl: ".navigation-nextEl1"
    },
    plugins: [SwiperPluginNavigation]
  });

  $(".swiper1").hide();
  $("#b-01").click(function(){
    $(".swiper1").toggle();
  });


  var swiper2 = new Swiper(".swiper2", {
    mousewheel: {
      invert: false,
      interval: 400
    },
    navigation: {
      prevEl: ".navigation-prevEl2",
      nextEl: ".navigation-nextEl2"
    },
    plugins: [SwiperPluginNavigation]
  });

  $(".swiper2").hide();
  $("#b-02").click(function(){
    $(".swiper2").toggle();
    $(".swiper1").hide();
  });


  var swiper3 = new Swiper(".swiper3", {
    mousewheel: {
      invert: false,
      interval: 400,
      speed: 0,
    },
    navigation: {
      prevEl: ".navigation-prevEl3",
      nextEl: ".navigation-nextEl3"
    },
    plugins: [SwiperPluginNavigation]
  });

  $(".swiper3").hide();
  $("#b-03").click(function(){
    $(".swiper3").toggle();
    $(".swiper2").hide();
  });

  var swiper4 = new Swiper(".swiper4", {
    mousewheel: {
      invert: false,
      interval: 400
    },
    navigation: {
      prevEl: ".navigation-prevEl4",
      nextEl: ".navigation-nextEl4"
    },
    plugins: [SwiperPluginNavigation]
  });

  $(".swiper4").hide();
  $("#b-04").click(function(){
    $(".swiper4").toggle();
    $(".swiper3").hide();
  });


  var swiper5 = new Swiper(".swiper5", {
    mousewheel: {
      invert: false,
      interval: 400
    },
    navigation: {
      prevEl: ".navigation-prevEl5",
      nextEl: ".navigation-nextEl5"
    },
    plugins: [SwiperPluginNavigation]
  });

  $(".swiper5").hide();
  $("#b-05").click(function(){
    $(".swiper5").toggle();
    $(".swiper4").hide();
  });
  //
  // var swiper10 = new Swiper(".swiper10", {
  //   mousewheel: {
  //     invert: false,
  //     interval: 400
  //   },
  //   navigation: {
  //     prevEl: ".navigation-prevEl10",
  //     nextEl: ".navigation-nextEl10"
  //   },
  //   plugins: [SwiperPluginNavigation]
  // });
  //
  // $(".swiper10").hide();
  // $("#b-10").click(function(){
  //   $(".swiper10").toggle();
  //   $(".swiper8").hide();
  // });
