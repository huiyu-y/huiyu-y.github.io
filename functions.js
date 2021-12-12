$(function() {
  $("#draggable1").draggable();
});

$(function() {
  $("#draggable2").draggable();
});

$(function() {
  $("#draggable3").draggable();
});

$(function() {
  $("#draggable4").draggable();
});

$(function() {
  $("#draggable5").draggable();
});



AnalogClock("clock", {

  width: 90,
  // text color
  foreColor: "#000000",
  // bg color
  bgColor: "rgba(#ffffff, 0)"
});

AnalogClock("clock-tw", {

  width: 90,
  // text color
  foreColor: "rgb(0, 3, 255)",
  bgColor: "rgba(#ffffff, 0)"
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

// var swiper2 = new Swiper(".swiper2", {
//   mousewheel: {
//     invert: false,
//     interval: 400
//   },
//   navigation: {
//     prevEl: ".navigation-prevEl2",
//     nextEl: ".navigation-nextEl2"
//   },
//   plugins: [SwiperPluginNavigation]
// });
//
// var swiper3 = new Swiper(".swiper3", {
//   mousewheel: {
//     invert: false,
//     interval: 400
//   },
//   navigation: {
//     prevEl: ".navigation-prevEl3",
//     nextEl: ".navigation-nextEl3"
//   },
//   plugins: [SwiperPluginNavigation]
// });

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

var swiper5 = new Swiper(".swiper5", {
  mousewheel: {
    invert: false,
    interval: 400
  },
  // navigation: {
  //   prevEl: ".navigation-prevEl5",
  //   nextEl: ".navigation-nextEl5"
  // },
  // plugins: [SwiperPluginNavigation]
});

var swiper6 = new Swiper(".swiper6", {
  mousewheel: {
    invert: false,
    interval: 400
  },
  navigation: {
    prevEl: ".navigation-prevEl6",
    nextEl: ".navigation-nextEl6"
  },
  plugins: [SwiperPluginNavigation]
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

var swiper8 = new Swiper(".swiper8", {
  mousewheel: {
    invert: false,
    interval: 400
  },
  // navigation: {
  //   prevEl: ".navigation-prevEl8",
  //   nextEl: ".navigation-nextEl8"
  // },
  // plugins: [SwiperPluginNavigation]
});

var swiper9 = new Swiper(".swiper9", {
  mousewheel: {
    invert: false,
    interval: 400
  },
  navigation: {
    prevEl: ".navigation-prevEl9",
    nextEl: ".navigation-nextEl9"
  },
  plugins: [SwiperPluginNavigation]
});





const playerTwoPlayer = new Vimeo.Player('playerchina');
playerTwoPlayer.on('play', function() {
    console.log('played the player 2.0 video!');
});
const options = {
        // responsive: true,
        title: false,
        portrait: false,
        color: '001aff',
        byline: false
    };



    // Will create inside the made-in-ny div:
    // <iframe src="https://player.vimeo.com/video/59777392?h=ab882a04fd&loop=1" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>
    // const playerchina = new Vimeo.Player('playerchina', options);


    $("#airplane2").hide();
    $("#draggable4").hide();
    $("#draggable5").hide();
    $("#draggable6").hide();

    $("#airplane1").click(function() {
    $(".info").animate({ color:'#ffffff' }, 2000);
    $("body").animate({ backgroundColor:'#000000' }, 3000);
   // $(".menu").toggleClass("menu-rotate");
   $(".menu").animate({ backgroundColor:'#000000' }, 1000);
   $("#airplane1").hide();
   $("#draggable1").fadeToggle(2000, "linear");
   $("#draggable2").fadeToggle(2000, "linear");
   $("#draggable3").fadeToggle(2000, "linear");
   $("#airplane2").show();
   $("#draggable4").fadeToggle(3000, "linear");
   $("#draggable5").fadeToggle(3000, "linear");
   $("#draggable6").fadeToggle(3000, "linear");
    });

    $("#airplane2").click(function() {
    $(".info").animate({ color:'#000000' }, 2000);
    $("body").animate({ backgroundColor:'#ffffff' }, 3000);
    $(".menu").animate({ backgroundColor:'rgb(0, 26, 255)' }, 1000);
   $(".menu").toggleClass("menu-rotate-2");
   $("#airplane2").hide();
   $("#draggable4").fadeToggle(2000, "linear");
   $("#draggable5").fadeToggle(2000, "linear");
   $("#draggable6").fadeToggle(2000, "linear");
   $("#airplane1").show();
   $("#draggable1").fadeToggle(1000, "linear");
   $("#draggable2").fadeToggle(1000, "linear");
   $("#draggable3").fadeToggle(1000, "linear");
    });



    // Set the date we're counting down to
    var countDownDate = new Date("Apr 18, 2084 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + "  days,  " + hours + "  hours,  "
      + minutes + "  minutes  ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
