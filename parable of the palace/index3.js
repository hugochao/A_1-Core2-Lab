var i = 0;
var txt = 'they spotted a man made of stone, but he was soon lost to their sight forever. They crossed numerous sparkling rivers in sandalwood canoes, or one river numerous times. When the Imperial household passed by, people threw themselves to the ground. One day they docked at an island where a man failed to do so because he had never beheld the Son of the Sky, and the executioner was obliged to sever his head. Indifferently, their eyes saw black hair and black dances and complex masks of gold: reality and dreams became confused, or rather reality was one configuration of dreams. It seemed the world could not possibly be anything but gardens, ponds, and splendid shapes and buildings. Every hundred paces a tower pierced the air; in their eyes, they were all the same color, and yet the first one was yellow and the last one scarlet, so fine were the gradations and so long the sequence.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}