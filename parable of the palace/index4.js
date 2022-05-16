$(document).ready(function () {
var count = 0;

$(".tarot-card").click(function() {
  var card = $(this);
  if(count < 4) {

   $(this).removeClass("top").addClass("bottom");
    
    count++;
  }
  if(count == 4) {
   $("div").removeClass("bottom");
    
    count = 0;
  }
  shuffle(card);
});
});

function shuffle(card) {
    TweenLite.fromTo(
        card, 
        0.6, 
        {
        x:410, 
        y:-15, 
        ease: Expo.easeOut}, 
        {
        x:0,
        y:0,
        ease: Expo.easeIn});
};

var i = 0;
var txt = 'At the foot of the next to last tower the poet, who had seemed removed from the extraordinary sights that so astounded the others, recited the short poem that we now link indissolubly to his name–the composition that, according to the most discriminating historians, brought him immortality and death. The text has been lost. Some say it consisted of a single line of verse; others, of a single word. What is certain, incredibly, is that within the poem was the entire, enormous palace, in every detail–every piece of fine porcelain and every design on every piece, all the shadows and lights of twilight, each and every moment–happy or unhappy–lived by each dynasty of mortals, gods, and dragons that had dwelt there since the farthest reaches of the past. Everyone fell silent, and the Emperor exclaimed:';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}