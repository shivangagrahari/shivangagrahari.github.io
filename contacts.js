

var imge = document.getElementById('shivang');
// imge.style.width = "75px";
// imge.style.height ="75px";
var deve = document.getElementById('develper');
//

var detal = document.getElementById('det')

detal.style.display = "none"

deve.onmouseenter = function() {
  deve.style.width = "150px";
  deve.style.height = "300px";
  deve.style.opacity = "1.0";

  imge.style.width = "150px";
  imge.style.height = "150px";
  imge.style.opacity = "1.0";

  detal.style.display = "block";

}

deve.onmouseleave = function() {
  deve.style.width = "80px";
  deve.style.height = "80px";
  deve.style.opacity = "0.6"
  imge.style.width = "80px";
  imge.style.height = "80px";
  imge.style.opacity = "0.6";
  detal.style.display = "none";

}

imge.onclick = function() {

var redirect = window.confirm('You want to connect on LinkedIn')


  if(redirect == true){
    window.location.assign('https://in.linkedin.com/in/shivang-agrahari')
  }
   else{
     alert('thank you for visiting the site')
   }}
