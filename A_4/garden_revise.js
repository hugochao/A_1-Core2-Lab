var password;

let response = '';

const name = prompt('Greetings, what should I called you?');
const address = prompt('And What\'s your title? (Mr./Mrs, Dr., Prof., Master, etc');

response = 'Hello, ' + address + name + '.' + ' Now here\'s the question';
alert(response);

var pass1="Floral Shoppe";

password=prompt('Name the most classic vaporwave album',' ');

if (password==pass1)
  alert('Correct! Welcome to THE GARDEN');
else
   {
       alert ('wrong answer')
    window.location="https://en.wikipedia.org/wiki/Floral_Shoppe";
    }

    function myFunction() {
        document.getElementById("myCheck").click();
      }