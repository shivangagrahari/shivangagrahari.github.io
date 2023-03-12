

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

      // Set initial eye position
      let eyeX = canvas.width / 2;
      let eyeY = canvas.height / 2;

      // Set up mouse move event listener
      canvas.addEventListener("mousemove", function(event) {
        // Update eye position based on mouse position
        eyeX = event.clientX;
        eyeY = event.clientY;
      });

      // Draw the eye and update its position
      function drawEye() {
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw eye background
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
        context.fillStyle = "#fff";
        context.fill();
        context.stroke();

        // Draw iris
        const dx = eyeX - canvas.width / 2;
        const dy = eyeY - canvas.height / 2;
        const angle = Math.atan2(dy, dx);
        const irisX = canvas.width / 2 + Math.cos(angle) * 25;
        const irisY = canvas.height / 2 + Math.sin(angle) * 25;
        context.beginPath();
        context.arc(irisX, irisY, 10, 0, Math.PI * 2);
        context.fillStyle = "#000";
        context.fill();

        // Draw pupil
        context.beginPath();
        context.arc(irisX, irisY, 5, 0, Math.PI * 2);
        context.fillStyle = "#fff";
        context.fill();

        // Update eye position
        requestAnimationFrame(drawEye);
      }

      // Start animation
      drawEye();