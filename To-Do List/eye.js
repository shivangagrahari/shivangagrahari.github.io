document.addEventListener("mousemove", function(event) {
  var eye = document.querySelector(".eye");
  var iris = document.querySelector(".iris");
  var pupil = document.querySelector(".pupil");
  var eyeRect = eye.getBoundingClientRect();
  var centerX = eyeRect.left + eyeRect.width / 2;
  var centerY = eyeRect.top + eyeRect.height / 2;
  var angle = Math.atan2(event.pageY - centerY, event.pageX - centerX);
  var radius = eyeRect.width / 2 - iris.offsetWidth / 2;
  var posX = centerX + radius * Math.cos(angle);
  var posY = centerY + radius * Math.sin(angle);
  iris.style.left = posX + "px";
  iris.style.top = posY + "px";
  pupil.style.left = posX + "px";
  pupil.style.top = posY + "px";
});
