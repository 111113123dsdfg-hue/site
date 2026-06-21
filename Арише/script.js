// Кнопки
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const welcome = document.querySelector(".welcome");
const lovePage = document.getElementById("lovePage");

// Музыка
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

// Галерея
const slides = document.querySelectorAll(".slide");

// Фразы
const phraseDisplay = document.getElementById("phraseDisplay");
const phraseBtn = document.getElementById("phraseBtn");

// Конверт
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");

// Просмотр фото
const photoViewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");
const closePhoto = document.getElementById("closePhoto");

// Кнопка "Навсегда"
const foreverBtn = document.getElementById("foreverBtn");

// ===== УБЕГАЮЩАЯ КНОПКА =====
function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

// ===== НАЖАЛИ "ДА" =====
yesBtn.addEventListener("click", () => {
    welcome.style.display = "none";
    lovePage.style.display = "block";
    createHearts();
    music.play().catch(() => {});
});

// ===== ФРАЗЫ =====
const phrases = [
    "Ты самое лучшее, что со мной случилось ❤️",
    "Люблю твою улыбку 💕",
    "Спасибо, что ты есть ❤️",
    "С тобой каждый день счастливый 🌹",
    "Ты моя любимая девочка 💖",
    "Я люблю тебя всем сердцем ❤️",
    "Ты мой самый родной человек 🌸",
    "Каждый день с тобой — подарок 🎁",
    "Ты делаешь меня счастливым 😊",
    "Я безумно тебя люблю 💋"
];

phraseBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * phrases.length);
    phraseDisplay.textContent = phrases[random];
});

// ===== ГАЛЕРЕЯ (только для телефона) =====
let currentSlide = 0;
let slideInterval;

function startSlideshow() {
    if (window.innerWidth <= 768) {
        // Показываем только первый слайд
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === 0);
        });
        currentSlide = 0;

        // Запускаем автопереключение
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }, 4000);
    } else {
        clearInterval(slideInterval);
        // На ПК показываем все фото
        slides.forEach(slide => slide.classList.add("active"));
    }
}

// Запускаем при загрузке и при изменении размера окна
startSlideshow();
window.addEventListener("resize", startSlideshow);

// ===== ПОЛНОЭКРАННОЕ ФОТО =====
slides.forEach(slide => {
    slide.addEventListener("click", () => {
        if (window.innerWidth > 768) {
            photoViewer.style.display = "flex";
            viewerImage.src = slide.querySelector("img").src;
        }
    });
});

closePhoto.addEventListener("click", () => {
    photoViewer.style.display = "none";
});

// ===== КОНВЕРТ =====
envelope.addEventListener("click", () => {
    letter.style.display = letter.style.display === "block" ? "none" : "block";
});

// ===== МУЗЫКА =====
musicBtn.addEventListener("click", () => {
    music.play();
});

// ===== СЧЕТЧИК ДНЕЙ =====
const startDate = new Date("2023-11-11");

function updateDays() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("daysCounter").innerHTML = days + " дней ❤️";
}
updateDays();

// ===== СЕРДЕЧКИ =====
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = `
        <svg viewBox="0 0 32 29" width="30" height="30">
            <path fill="#ff4da6" d="M23.6,0c-3,0-5.5,1.7-7.6,4.3C13.9,1.7,11.4,0,8.4,0
            C3.8,0,0,3.8,0,8.4c0,9.3,16,20.6,16,20.6s16-11.3,16-20.6
            C32,3.8,28.2,0,23.6,0z"/>
        </svg>
    `;
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-50px";
    heart.style.animationDuration = 3 + Math.random() * 4 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}

function createHearts() {
    setInterval(createHeart, 200);
}

// ===== ЛЕПЕСТКИ САКУРЫ =====
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 4 + Math.random() * 6 + "s";
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}
setInterval(createPetal, 600);

// ===== ЗВЕЗДЫ =====
for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(star);
}

// ===== КОНФЕТТИ =====
function createConfetti() {
    const colors = ['#ff4da6', '#ff6b9d', '#ff8cb5', '#ffb3c6', '#ffd6e8', '#ff6f91', '#ff9671', '#ffc75f'];

    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = 6 + Math.random() * 10 + "px";
        confetti.style.height = 6 + Math.random() * 10 + "px";
        confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        confetti.style.animationDuration = 3 + Math.random() * 4 + "s";
        confetti.style.animationDelay = Math.random() * 2 + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 6000);
    }
}

// ===== НАВСЕГДА =====
foreverBtn.addEventListener("click", () => {
    createConfetti();

    setTimeout(() => {
        const finalHeart = document.createElement("div");
        finalHeart.classList.add("finalHeart");
        finalHeart.innerHTML = `
            <h1>❤️</h1>
            <p>Я люблю тебя ❤️<br>И это только начало нашей истории...<br>∞</p>
        `;
        document.body.appendChild(finalHeart);

        setTimeout(() => {
            finalHeart.style.transition = "opacity 2s";
            finalHeart.style.opacity = "0";
            setTimeout(() => finalHeart.remove(), 2000);
        }, 4000);
    }, 1000);
});

// ===== СВАЙПЫ ДЛЯ ГАЛЕРЕИ (телефон) =====
let startX = 0;
const gallery = document.querySelector(".gallery");

gallery.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

gallery.addEventListener("touchend", (e) => {
    if (window.innerWidth <= 768) {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            slides[currentSlide].classList.remove("active");
            if (diff > 0) {
                currentSlide = (currentSlide + 1) % slides.length;
            } else {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            }
            slides[currentSlide].classList.add("active");
        }
    }
});

// ===== МЕРЦАЮЩИЕ ЧАСТИЦЫ =====
for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.borderRadius = "50%";
    particle.style.background = "white";
    particle.style.opacity = "0.6";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.animation = "blink 2s infinite";
    particle.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(particle);
}