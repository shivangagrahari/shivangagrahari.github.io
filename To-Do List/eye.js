const eye = document.querySelector('.eye');
const iris = document.querySelector('.iris');
const pupil = document.querySelector('.pupil');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const eyeRect = eye.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;
  const dx = x - eyeCenterX;
  const dy = y - eyeCenterY;
  const distance = Math.sqrt(dx*dx + dy*dy);
  const maxDistance = Math.min(eyeRect.width / 2, eyeRect.height / 2) - pupil.clientWidth / 2;
  const angle = Math.atan2(dy, dx);
  const limitX = Math.cos(angle) * maxDistance;
  const limitY = Math.sin(angle) * maxDistance;
  const pupilX = Math.max(limitX, Math.min(limitX, dx));
  const pupilY = Math.max(limitY, Math.min(limitY, dy));
  pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  iris.style.transform = `translate(${pupilX/10}px, ${pupilY/10}px)`;
});
