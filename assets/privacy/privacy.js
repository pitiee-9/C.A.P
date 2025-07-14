window.addEventListener('load', () => {
  // Matrix effect variables
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  // Set full screen canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();

  // Characters - binary digits 0 and 1
  const binaryChars = ['0', '1'];

  // Font size for matrix characters
  const fontSize = 18;
  let columns = Math.floor(canvas.width / fontSize);

  // Array of y positions (in characters) for each column
  let drops = new Array(columns).fill(0);

  // Draw matrix effect function
  function draw() {
    // Translucent background to create trailing effect
    ctx.fillStyle = 'rgba(10, 14, 20, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41'; // neon green color for binary digits
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      // Pick random binary digit
      const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
      // X position = column index * font size
      const x = i * fontSize;
      // Y position in pixels = drops[i] * font size
      const y = drops[i] * fontSize;

      ctx.fillText(text, x, y);

      // Reset drop to top randomly when it goes beyond bottom
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      } else {
        drops[i]++;
      }
    }
  }

  // Run draw every 50ms for smooth animation
  const intervalId = setInterval(draw, 50);

  // Resize canvas and update drops array on window resize
  window.addEventListener('resize', () => {
    resizeCanvas();
    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(0);
  });

  // Reveal content boxes on scroll
  const boxes = document.querySelectorAll('.info-box');
  function revealBoxes() {
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (boxTop < windowHeight - 100) {
        box.classList.add('visible');
      }
    });
  }
  revealBoxes();
  window.addEventListener('scroll', revealBoxes);

  // Header hide on scroll down, show on scroll up
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }
    lastScrollY = currentScrollY;
  });
});
