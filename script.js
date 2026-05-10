// ==================== DOM Elements ==================== //
const navbar = document.querySelector('.navbar');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

// ==================== Dark Mode ==================== //
function initTheme() {
    try {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const isDark = savedTheme === 'dark';
        document.body.classList.toggle('dark', isDark);
        if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
    } catch (e) { console.warn('localStorage not available'); }
}
initTheme();

themeToggle?.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) { }
});

// ==================== Mobile Menu ==================== //
mobileToggle?.addEventListener('click', () => {
    const expanded = mobileToggle.getAttribute('aria-expanded') === 'true' ? false : true;
    navMenu.classList.toggle('active');
    mobileToggle.setAttribute('aria-expanded', expanded);
    mobileToggle.textContent = expanded ? '✕' : '☰';
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (mobileToggle) {
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.textContent = '☰';
        }
    });
});

// ==================== Smooth Scroll & Active Link ==================== //
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').slice(1);
        if (href === current) link.classList.add('active');
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navMenu?.classList.remove('active');
            if (mobileToggle) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.textContent = '☰';
            }
        }
    });
});

// ==================== Navbar Shadow on Scroll ==================== //
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== Back to Top Button ==================== //
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn?.classList.add('show');
    } else {
        backToTopBtn?.classList.remove('show');
    }
});
backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== Ripple Effect ==================== //
function addRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
    `;
    const originalPosition = getComputedStyle(element).position;
    if (originalPosition === 'static') element.style.position = 'relative';
    element.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
}
document.querySelectorAll('.cta-button, .project-link, .contact-link, .submit-btn, .cert-link').forEach(btn => {
    btn.addEventListener('click', (e) => addRipple(e, btn));
});
if (!document.querySelector('#ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
    document.head.appendChild(style);
}

// ==================== Scroll Progress Indicator ==================== //
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f5576c);
    z-index: 1000;
    width: 0%;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    progressBar.style.width = percent + '%';
});

// ==================== Contact Form Handling ==================== //
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        if (!name || !email || !message) {
            formFeedback.textContent = 'Please fill in all fields.';
            formFeedback.style.color = '#ffcccc';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formFeedback.textContent = 'Please enter a valid email address.';
            formFeedback.style.color = '#ffcccc';
            return;
        }
        formFeedback.textContent = 'Sending...';
        formFeedback.style.color = 'white';
        try {
            setTimeout(() => {
                formFeedback.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                formFeedback.style.color = '#ccffcc';
                contactForm.reset();
            }, 1000);
        } catch (err) {
            formFeedback.textContent = 'Oops! Something went wrong. Please try again later.';
        }
    });
}

// ==================== Lazy Loading Fallback ==================== //
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
} else {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==================== Adjust Scroll Indicator ==================== //
function adjustScrollIndicator() {
    const indicator = document.querySelector('.scroll-indicator');
    const hero = document.querySelector('.hero');
    if (indicator && hero) {
        const heroHeight = hero.clientHeight;
        if (heroHeight < 400) indicator.style.display = 'none';
        else indicator.style.display = 'block';
    }
}
window.addEventListener('resize', adjustScrollIndicator);
adjustScrollIndicator();

// ==================== Welcome Console Message ==================== //
console.log('%c Welcome to My Portfolio! 👋', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c Made with ❤️ using HTML, CSS & JavaScript', 'color: #764ba2; font-size: 14px;');

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const recipient = 'your@email.com'; // replace with your email
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

// ==================== Typing Animation ==================== //
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "Ayoub Bouaik",
    "Software Engineer",
    "Cyclist",
    "Chess Player"
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});