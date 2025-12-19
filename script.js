// Feature: Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 100;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;

        const updateCount = () => {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Feature: Plan Toggle
document.getElementById('plan-toggle')?.addEventListener('change', function () {
    const isYearly = this.checked;
    // Show/hide monthly/yearly prices
    document.querySelectorAll('.price-monthly').forEach(el => {
        el.style.display = isYearly ? 'none' : 'inline';
    });
    document.querySelectorAll('.price-yearly').forEach(el => {
        el.style.display = isYearly ? 'inline' : 'none';
    });
    // Remove '/mo' unit when yearly is selected
    document.querySelectorAll('.price-unit').forEach(u => {
        u.textContent = isYearly ? '' : '/mo';
    });
    // Show/hide yearly-only feature list items
    document.querySelectorAll('.yearly-feature').forEach(el => {
        el.style.display = isYearly ? 'list-item' : 'none';
    });
});

// Feature: Select Plan
document.querySelectorAll('.select-plan').forEach(btn => {
    btn.addEventListener('click', function () {
        const planName = this.closest('.card').querySelector('h3').innerText;
        alert(`✅ You selected the ${planName} plan! Proceed to payment.`);
    });
});

// Feature: Calorie Burn Calculator
function calculateCalories() {
    const duration = document.getElementById('duration').value;
    const activity = document.getElementById('activity').value;
    const resultDiv = document.getElementById('calorie-result');

    const calorieMap = {
        'Running': 10,
        'Cycling': 8,
        'Swimming': 9,
        'Weight Training': 6,
        'Yoga': 3
    };

    if (duration > 0 && activity !== 'Select Activity') {
        const caloriesPerMin = calorieMap[activity];
        const totalCalories = (duration * caloriesPerMin).toFixed(0);

        resultDiv.style.animation = 'none';
        setTimeout(() => {
            resultDiv.innerHTML = `<p style="color: #27ae60;">🔥 You burn approximately <strong>${totalCalories} calories</strong> in ${duration} minutes of ${activity}!</p>`;
            resultDiv.style.animation = 'scaleUp 0.6s ease-out';
        }, 10);
    } else {
        resultDiv.innerHTML = "<p style='color: #f39c12;'>⚠️ Please select activity and duration!</p>";
    }
}

// Enhanced BMI Calculator with animations
function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const heightCm = document.getElementById('height').value;
    const resultDiv = document.getElementById('bmi-result');

    if (weight > 0 && heightCm > 0) {
        const heightM = heightCm / 100;
        const bmi = (weight / (heightM * heightM)).toFixed(1);

        let category = "";
        let categoryColor = "";
        let emoji = "";
        if (bmi < 18.5) {
            category = "Underweight";
            categoryColor = "#3498db";
            emoji = "📉";
        } else if (bmi < 24.9) {
            category = "Normal weight";
            categoryColor = "#27ae60";
            emoji = "✅";
        } else if (bmi < 29.9) {
            category = "Overweight";
            categoryColor = "#f39c12";
            emoji = "⚠️";
        } else {
            category = "Obese";
            categoryColor = "#e74c3c";
            emoji = "❌";
        }

        resultDiv.style.animation = 'none';
        setTimeout(() => {
            resultDiv.innerHTML = `<p style="color: ${categoryColor}; font-size: 1.3rem;"><strong>${emoji} Your BMI is ${bmi}</strong><br>(${category})</p>`;
            resultDiv.style.animation = 'scaleUp 0.6s ease-out';
        }, 10);
    } else {
        resultDiv.innerHTML = "<p style='color: #f39c12; font-size: 1.1rem;'>⚠️ Please enter valid values!</p>";
    }
}

// Feature: FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        const toggle = this.querySelector('.faq-toggle');

        if (answer && answer.style.display === 'none') {
            answer.style.display = 'block';
            answer.style.animation = 'fadeInUp 0.4s ease-out';
            toggle.textContent = '−';
        } else if (answer) {
            answer.style.display = 'none';
            toggle.textContent = '+';
        }
    });
});

// Feature: Newsletter Subscription
function subscribeNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`✅ Thank you! We've sent a confirmation email to ${email}. Check your inbox!`);
    e.target.reset();
}

// Create floating particles in background
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(255, 62, 62, ${Math.random() * 0.5 + 0.2})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 4 + 4}s ease-in-out infinite`;
        particle.style.pointerEvents = 'none';
        hero.appendChild(particle);
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced Form Submission with animation
document.getElementById('joinForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const button = this.querySelector('button[type="submit"]');

    button.style.animation = 'pulse 0.5s ease-in-out';

    setTimeout(() => {
        alert(`🎉 Thank you ${name}! We're excited to have you join Iron Pulse! Our trainers will contact you shortly.`);
        this.reset();
        button.style.animation = 'none';
    }, 500);
});

// Scroll animation with Intersection Observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
            entry.target.style.animationDelay = (index * 0.1) + 's';

            if (entry.target.classList.contains('stats-grid')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe all cards and elements
document.querySelectorAll('.card, .service-card, .about-box, .testimonial, .stat-box, .trainer-card, .tip-card, .gallery-item, .faq-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    observer.observe(element);
});

// Active nav link highlighting with scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href.slice(1) === current) {
            link.style.color = '#ff3e3e';
            link.style.textShadow = '0 0 10px rgba(255, 62, 62, 0.8)';
        } else {
            link.style.color = 'white';
            link.style.textShadow = 'none';
        }
    });
});

// Add ripple effect on button clicks
document.querySelectorAll('.btn, .btn-alt, .btn-small').forEach(button => {
    button.addEventListener('click', function (e) {
        if (this.id !== 'bmi-calculate') {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.borderRadius = '50%';
            ripple.style.animation = 'pulse 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        }
    });
});

// Mouse follow effect on cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 10;
        const rotateY = (x - rect.width / 2) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-15px)';
    });
});

// Initialize on page load
window.addEventListener('load', () => {
    createParticles();
    animateCounters();
});
