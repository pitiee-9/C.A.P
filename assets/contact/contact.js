window.addEventListener('load', () => {
  const container = document.getElementById('binaryContainer');

  function createBinary() {
    const digit = document.createElement('div');
    digit.className = 'binary-digit';
    digit.textContent = Math.random() > 0.5 ? '1' : '0';
    digit.style.left = Math.random() * 100 + 'vw';
    digit.style.opacity = Math.random() * 0.5 + 0.1;
    digit.style.animationDuration = (Math.random() * 5 + 5) + 's';
    container.appendChild(digit);
    setTimeout(() => digit.remove(), 10000);
  }

  for (let i = 0; i < 50; i++) {
    setTimeout(createBinary, i * 200);
  }

  setInterval(createBinary, 300);
});
