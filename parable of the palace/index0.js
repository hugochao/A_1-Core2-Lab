window.addEventListener("keydown", function(event) {
    const p = document.createElement("p");
    p.textContent = "Parable of the Palace ----- JORGE LUIS BORGES";
    document.getElementById("output").appendChild(p);
  }, true);

// On mouse-over, execute myFunction
function myFunction() {
    document.getElementById("myCheck").click();
  }