// DOM Ready
window.addEventListener('DOMContentLoaded', () => {
    // 初始化AOS動畫
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            // 只处理页内锚点链接
            if (href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Scroll Back to Top Button
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dynamic Year in Footer
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});