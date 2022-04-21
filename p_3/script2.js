var btn = document.getElementById("btn");

var fnClick = (function(){
  var num = 0;
  return function(){
    return num++;
  }
})()

function textBox(){
  document.getElementById("text").innerHTML = fnClick();
}

btn.addEventListener("click", textBox)