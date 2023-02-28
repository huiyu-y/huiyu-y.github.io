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
    $("#a-03").hide();
    $("#a-04").hide();
    $("#a-05").hide();
    $(".swiper3").hide();
    $(".swiper7").hide();
    $(".swiper8").hide();
    $("#a-09").hide();
    $(".swiper10").hide();
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


  // $("#a-02").hide();
  // $("#b-02").click(function(){
  //   $("#a-02").toggle();
  //   $(".swiper1").hide();
  // });
  //
  // $("#a-03").hide();
  // $("#b-03").click(function(){
  //   $("#a-03").toggle();
  //   $("#a-02").hide();
  // });

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
  $("#b-04").click(function(){
    $(".swiper2").toggle();
    $(".swiper1").hide();
  });

  $("#a-05").hide();
  $("#b-05").click(function(){
    $("#a-05").toggle();
    $(".swiper2").hide();
  });

  var swiper3 = new Swiper(".swiper3", {
    mousewheel: {
      invert: false,
      interval: 400
    },
    navigation: {
      prevEl: ".navigation-prevEl3",
      nextEl: ".navigation-nextEl3"
    },
    plugins: [SwiperPluginNavigation]
  });

  $(".swiper3").hide();
  $("#b-06").click(function(){
    $(".swiper3").toggle();
    $("#a-05").hide();
  });

  var swiper7 = new Swiper(".swiper7", {
    mousewheel: {
      invert: false,
      interval: 400
    },
    navigation: {
      prevEl: ".navigation-prevEl7",
      nextEl: ".navigation-nextEl7"
    },
    plugins: [SwiperPluginNavigation]
  });

  $(".swiper7").hide();
  $("#b-07").click(function(){
    $(".swiper7").toggle();
    $(".swiper3").hide();
  });

  $("#a-09").hide();
  $("#b-09").click(function(){
    $("#a-09").toggle();
    $(".swiper7").hide();
  });

  var swiper8 = new Swiper(".swiper8", {
    mousewheel: {
      invert: false,
      interval: 400
    },
    navigation: {
      prevEl: ".navigation-prevEl8",
      nextEl: ".navigation-nextEl8"
    },
    plugins: [SwiperPluginNavigation]
  });

  $(".swiper8").hide();
  $("#b-08").click(function(){
    $(".swiper8").toggle();
    $("#a-09").hide();
  });

  var swiper10 = new Swiper(".swiper10", {
    mousewheel: {
      invert: false,
      interval: 400
    },
    navigation: {
      prevEl: ".navigation-prevEl10",
      nextEl: ".navigation-nextEl10"
    },
    plugins: [SwiperPluginNavigation]
  });

  $(".swiper10").hide();
  $("#b-10").click(function(){
    $(".swiper10").toggle();
    $(".swiper8").hide();
  });
