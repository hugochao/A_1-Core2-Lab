var i = 0;
var txt = ' Gradually they left behind the long procession of Western terraces: like the tiers of an almost boundless amphitheater they dropped down toward a paradise or garden whose metal mirrors and elaborate juniper borders hinted at the labyrinth. At first they let themselves get lost gleefully, as if in a game. Later they felt some concern, since the labyrinths straight avenues were gently but inexorably curved: secretly, they formed circles. Around midnight, observation of the planets and the well-timed sacrifice of a tortoise enabled them to disengage themselves from this seemingly bewitched area though not from the feeling that they were lost, which clung to them till the end. Presently they passed through antechambers, patios, and libraries';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$('.card').on("click", function() {
  $('.container').toggleClass('container-origin')
})





