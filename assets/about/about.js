// Animate hero content on page load
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add("animate-in");
    }, 300);
  }

  // Binary rain effect (simple)
const matrix = document.getElementById('matrix');
const ctx = matrix.getContext('2d');

function resize() {
  matrix.width = window.innerWidth;
  matrix.height = window.innerHeight;
}

resize();

window.addEventListener('resize', resize);

const fontSize = 16;
const columns = Math.floor(matrix.width / fontSize);
const drops = new Array(columns).fill(1);
const binaryChars = ['0', '1'];

function draw() {
  ctx.fillStyle = 'rgba(10, 14, 20, 0.15)'; // translucent background for trail
  ctx.fillRect(0, 0, matrix.width, matrix.height);

  ctx.fillStyle = 'rgba(0, 255, 65, 0.8)';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > matrix.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);


  // Mobile menu toggle
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector("nav ul");

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.backgroundColor = "rgba(10,14,20,0.95)";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.padding = "15px";
        navLinks.style.borderRadius = "10px";
        navLinks.style.zIndex = "200";
        navLinks.style.gap = "15px";
      }
    });
  }
});
