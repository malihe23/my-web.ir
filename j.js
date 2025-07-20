// اسلایدر تصاویر
const sliderImages = document.querySelectorAll('.slider-item');
let currentImageIndex = 0;

function showNextImage() {
    sliderImages.forEach(image => image.classList.remove('active'));
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    sliderImages[currentImageIndex].classList.add('active');
}

if (sliderImages.length > 0) {
    sliderImages[currentImageIndex].classList.add('active');
    setInterval(showNextImage, 5000); // تغییر تصویر هر 5 ثانیه
}

// اعتبارسنجی فرم تماس
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!nameInput.value) {
            alert('لطفاً نام خود را وارد کنید.');
            event.preventDefault();
        }

        if (!emailInput.value) {
            alert('لطفاً ایمیل خود را وارد کنید.');
            event.preventDefault();
        } else if (!isValidEmail(emailInput.value)) {
            alert('لطفاً یک ایمیل معتبر وارد کنید.');
            event.preventDefault();
        }

        if (!messageInput.value) {
            alert('لطفاً پیام خود را وارد کنید.');
            event.preventDefault();
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// افزودن کلاس فعال به لینک‌های نوار ناوبری
const navLinks = document.querySelectorAll('.site-navigation a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
