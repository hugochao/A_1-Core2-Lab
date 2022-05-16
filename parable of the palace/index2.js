var i = 0;
var txt = 'There cannot be two identical things in the world: as soon as the poet recited the poem (they tell us), the palace disappeared as if blasted and swept away by the final syllable. Of course, legends like this are mere fiction. The poet was the Emperors slave and died accordingly. His poem fell into oblivion because that was what it deserved. His descendants are still searching for the word that is the world, but they will not find it.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("keydown", function(event) {
  const p = document.createElement("p");
  p.textContent = "404 NOT FOUND 404 NOT FOUND 404 NOT FOUND 404 NOT FOUND 404 NOT FOUND";
  document.getElementById("output").appendChild(p);
}, true);

// On mouse-over, execute myFunction
function myFunction() {
  document.getElementById("myCheck").click();
}
