function showBalloons() {
  const balloons = document.getElementById("balloons");
  const music = document.getElementById("bg-music");
  const canvas = document.getElementById("confetti-canvas");

  balloons.classList.remove("hidden");
  canvas.classList.remove("hidden");

  // Mainkan musik
  music.play();

  // Jalankan confetti
  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true
  });

  const duration = 5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    myConfetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    myConfetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}