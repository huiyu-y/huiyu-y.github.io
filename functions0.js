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

var swiper11 = new Swiper(".swiper11", {
  mousewheel: {
    invert: false,
    interval: 400
  },
  navigation: {
    prevEl: ".navigation-prevEl11",
    nextEl: ".navigation-nextEl11"
  },
  plugins: [SwiperPluginNavigation]
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


    const options = {
      title: false,
      portrait: false,
      byline: false,
      controls: false,
      loop: true,
      color: '0000ff'
    };


const playerwindowPlayer = new Vimeo.Player('playeruntitled', options);

const playercatPlayer = new Vimeo.Player('playercat', options);

const playeralicePlayer = new Vimeo.Player('playeralice', options);

const playerennoPlayer = new Vimeo.Player('playerenno', options);

const playernnnPlayer = new Vimeo.Player('playernnn', options);

const playerchinaPlayer = new Vimeo.Player('playerchina', options);

const playerduckPlayer = new Vimeo.Player('playerduck', options);



function _removeEmojis(str) {
  return str.replace(/([#0-9]\u20E3)|[\xA9\xAE\u203C\u2047-\u2049\u2122\u2139\u3030\u303D\u3297\u3299][\uFE00-\uFEFF]?|[\u2190-\u21FF][\uFE00-\uFEFF]?|[\u2300-\u23FF][\uFE00-\uFEFF]?|[\u2460-\u24FF][\uFE00-\uFEFF]?|[\u25A0-\u25FF][\uFE00-\uFEFF]?|[\u2600-\u27BF][\uFE00-\uFEFF]?|[\u2900-\u297F][\uFE00-\uFEFF]?|[\u2B00-\u2BF0][\uFE00-\uFEFF]?|(?:\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDEFF])[\uFE00-\uFEFF]?/g, '');
}
