// Create falling binary digits effect
        function createBinary() {
            const container = document.getElementById('binaryContainer');
            const digit = document.createElement('div');
            digit.className = 'binary-digit';
            digit.textContent = Math.random() > 0.5 ? '1' : '0';
            digit.style.left = Math.random() * 100 + 'vw';
            digit.style.opacity = Math.random() * 0.5 + 0.1;
            digit.style.animationDuration = (Math.random() * 5 + 5) + 's';
            
            container.appendChild(digit);
            
            // Remove digit after animation completes
            setTimeout(() => {
                digit.remove();
            }, 10000);
        }
        
        // Initial creation
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createBinary();
            }, i * 200);
        }
        
        // Continuous creation
        setInterval(createBinary, 300);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Card hover effect enhancement
        const cards = document.querySelectorAll('.join-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });