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
        const cards = document.querySelectorAll('.info-box');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });

        // Run after full page load
        window.addEventListener('load', () => {
            const heroContent = document.querySelector('.hero-content');
            const header = document.querySelector('header');
            const boxes = document.querySelectorAll('.info-box');
            let lastScrollY = window.scrollY;

            // Animate hero banner content sliding in from right
            if (heroContent) {
                heroContent.classList.add('animate-in');
            }

            // Function to reveal about boxes on scroll into viewport
            function revealBoxes() {
                boxes.forEach(box => {
                    const boxTop = box.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    if (boxTop < windowHeight - 100) {
                        box.classList.add('visible');
                    }
                });
            }

            // Run reveal once in case some boxes are already in view on load
            revealBoxes();

            // Scroll event to hide header/hero on scroll down, show on scroll up, and reveal boxes
            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;

                // Header & hero fade out when scrolling down, fade in on scroll up
                if (currentScrollY > lastScrollY) {
                    if (header) header.classList.add('hide');
                } else {
                    if (header) header.classList.remove('hide');
                }
                lastScrollY = currentScrollY;

                // Reveal about boxes as user scrolls
                revealBoxes();
            });
        });

        // ===== Start Number Counter Animation for 2027 Boxes =====
        const statNumbers = document.querySelectorAll('.stat-number');

        function animateStats() {
            statNumbers.forEach(stat => {
                const target = +stat.getAttribute('data-target');
                const speed = 30;
                let count = 0;

                const updateCount = () => {
                    const increment = Math.ceil(target / speed);
                    if (count < target) {
                        count += increment;
                        stat.innerText = count;
                        setTimeout(updateCount, 30);
                    } else {
                        stat.innerText = target + (target >= 100 ? '+' : '');
                    }
                };

                // Animate only when visible
                const isVisible = stat.getBoundingClientRect().top < window.innerHeight;
                if (isVisible && !stat.classList.contains('counted')) {
                    stat.classList.add('counted');
                    updateCount();
                }
            });
        }

        window.addEventListener('scroll', animateStats);
        window.addEventListener('load', animateStats);