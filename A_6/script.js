// background transparency
$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 20 || n < 6)
 		document.body.className = "neonnight";
	else if (n > 16 && n < 20)
 		document.body.className = "neonsunset";
	else
 		document.body.className = "neonday";
});




// digital clock
Number.prototype.pad = function(n) {
	for (var r = this.toString(); r.length < n; r = 0 + r);
	return r;
  };
  
  function updateClock() {
	var now = new Date();
	var milli = now.getMilliseconds(),
	  sec = now.getSeconds(),
	  min = now.getMinutes(),
	  hou = now.getHours(),
	  mo = now.getMonth(),
	  dy = now.getDate(),
	  yr = now.getFullYear();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
	  corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
	for (var i = 0; i < tags.length; i++)
	  document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  }
  
  function initClock() {
	updateClock();
	window.setInterval("updateClock()", 1);
  }