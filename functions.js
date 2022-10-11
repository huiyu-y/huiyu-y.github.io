$( "#ifr" ).hide();

$( "#ifr" ).hide();
$("#thesis").click(function(){
  $("#ifr").show();
});

$("#jidoka").click(function(){
  $("#ifr").show();
});

// $("#stone").click(function(){
//   $("#ifr").show();
// });
//
// $("#window").click(function(){
//   $("#ifr").show();
// });



$( ".about-hover" ).hide();
$(".about").hover(function(){
  $(".about-hover").show();
});
$(".about").mouseleave(function(){
  $(".about-hover").hide();
});


$("#bunny").click(function(){
  $("#ifr").show();
});

$("#cat-b").click(function(){
  $("#ifr").show();
});

$("#beatles").click(function(){
  $("#ifr").show();
});


$( "#peace-intro" ).hide();
$("#peace").click(function(){
  $("#peace-intro").toggle();
});


$( "#power-intro" ).hide();
$("#power-img-1").hide();
$("#power").click(function(){
  $("#power-intro").toggle();
  $("#power-img").toggle();
  $("#power-img-1").toggle();
});

$( "#voice-intro" ).hide();
$("#voice").click(function(){
  $("#voice-intro").toggle();
});

$( "#dei-intro" ).hide();
$("#dei").click(function(){
  $("#dei-intro").toggle();
});


$( "#25-intro" ).hide();
$("#25").click(function(){
  $("#25-intro").toggle();
});


$( "#wb-2" ).hide();
$("#wb").click(function(){
  $("#wb-1").toggle();
  $("#wb-2").toggle();
});

$( "#sheet-1" ).hide();
$("#sheet").click(function(){
  $("#sheet-1").toggle();
  $("#sheet-2").toggle();
});

$( "#bookas-1" ).hide();
$("#bookas").click(function(){
  $("#bookas-1").toggle();
  $("#bookas-2").toggle();
});

$( "#lan-2" ).hide();
$("#lan").click(function(){
  $("#lan-1").toggle();
  $("#lan-2").toggle();
});

$( "#yoyo-intro" ).hide();
$("#yoyo").click(function(){
  $("#yoyo-intro").toggle();
});

$( "#taipeiny-b" ).hide();
$("#taipeiny").click(function(){
  $("#taipeiny-b").toggle();
});

$( "#taipeiny-img-2" ).hide();
$("#taipeiny-img").click(function(){
  $("#taipeiny-img-1").toggle();
  $("#taipeiny-img-2").toggle();
});

$( "#hat-intro" ).hide();
$("#hat").click(function(){
  $("#hat-intro").toggle();
});

const options = {
    title: false,
    portrait: false,
    byline: false,
    controls: false,
    loop: true,
    color: '000000',
    maxwidth: 500
  };


// const playerwindowPlayer = new Vimeo.Player('playeruntitled', options);

const playercatPlayer = new Vimeo.Player('playercat', options);

const playerchinaPlayer = new Vimeo.Player('playerchina', options);

const playeruntitledPlayer = new Vimeo.Player('playeruntitled', options);



// const playeralicePlayer = new Vimeo.Player('playeralice', options);
//
// const playerennoPlayer = new Vimeo.Player('playerenno', options);
//
const playernnnPlayer = new Vimeo.Player('playernnn', options);

// const playerstonePlayer = new Vimeo.Player('playerstone', options);
//
// const playerchinaPlayer = new Vimeo.Player('playerchina', options);
//
// const playerduckPlayer = new Vimeo.Player('playerduck', options);
