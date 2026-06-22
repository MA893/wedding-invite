const modal = document.getElementById("languageModal");
const sealImage = document.getElementById("sealImage");
const titleImage = document.getElementById("titleImage");

const texts = {
    ru: {
        description:
            "Вы не просто так получили это приглашение! В особенный день мы очень хотим, чтобы вы были рядом!",
        seal: "./assets/open.png",
        title: "./assets/photo.svg",
        mainDescription:
            "Спешим сообщить радостную<br>новость - мы женимся!",
        section2Description:
            "Мы приглашаем вас разделить с нами радостный день, в который мы станем семьёй.<br><br>В этот волшебный день мы скажем друг другу «Да» и соединим сердца и судьбы в кругу близких и родных.",
        section2Image: "./assets/section-2-ru-text_(1).svg",

        days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dates: ["13", "14", "15", "16", "17", "18", "19"],
        addressTitle: "./assets/adress-ru.svg",
        address:
            "г. Бишкек, ул. 7 Апреля, 174/1<br>Ресторан «Асман»"
    },

    ky: {
        description:
            "Сиз бул чакырууну жөн жерден алган жоксуз! Өзгөчө күнүбүздө сиздин жанымызда болушуңузду каалайбыз!",
        mainDescription:
            "Биз менен бакытка толгон кечебизге келип, дасторконубуздан<br>даам сызып кетиңиз!",
        section2Description:
            "Сизди балдарыбыз Альмир менен Айперинин үйлөнүү тоюна арналган салтанаттуу кечеге келип, кадырлуу коногубуз болуп кетүүгө чакырабыз!",
        section2Image: "./assets/section-2-text.png",
        seal: "./assets/open_ky.png",
        title: "./assets/title_ky.png",

        days: ["Дш", "Ше", "Ша", "Бш", "Жм", "Иш", "Жк"],
        dates: ["13", "14", "15", "16", "17", "18", "19"],
        addressTitle: "./assets/adress.png",
        address:
            "Бишкек ш., 7-Апрель көчөсү, 4/1<br>«Асман» рестораны"
    }
};

window.addEventListener("load", () => {
    const lang = localStorage.getItem("lang");

    if (lang) {
        modal.style.display = "none";
        applyLanguage(lang);
    }
});

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    modal.style.display = "none";
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const current = texts[lang] || texts.ru;

    document.getElementById("letterDescription").textContent = current.description;

    document.getElementById("mainDescription").innerHTML = current.mainDescription;

    document.getElementById("section2Description").innerHTML = current.section2Description;
    const section2Image = document.getElementById("section2Image");
    section2Image.src = current.section2Image + "?v=" + Date.now();

    const weekDays = document.getElementById("weekDays");
    const weekNumbers = document.getElementById("weekNumbers");

    document.getElementById("addressTitle").src =
        current.addressTitle;

    document.getElementById("eventAddress").innerHTML =
        current.address;

    weekDays.innerHTML = current.days.map(day => `<span>${day}</span>`).join("");

    weekNumbers.innerHTML = current.dates.map(date => {
        if (date === "18") {
            return `
            <span class="heart-day">
                <img src="./assets/heart.svg" alt="">
                <b>${date}</b>
            </span>
        `;
        }

        return `<span>${date}</span>`;
    }).join("");

    sealImage.src = current.seal;
    titleImage.src = current.title;

    const kyTitle = document.getElementById("kyTitle");

    if (lang === "ky") {
        document.body.classList.add("lang-ky");
        document.body.classList.remove("lang-ru");

        kyTitle.style.display = "block";
        titleImage.src = "./assets/title_ky.png";

        document.getElementById("untilTitle").src = "./assets/until_ky.png";

        document.getElementById("daysLabel").textContent = "Күн";
        document.getElementById("hoursLabel").textContent = "Саат";
        document.getElementById("minutesLabel").textContent = "Мүнөт";
        document.getElementById("secondsLabel").textContent = "Секунд";

        document.getElementById("programTitle").src = "./assets/schedule.png";

        document.getElementById("program1").innerHTML = "Коноктор<br>жыйыны";
        document.getElementById("program2").textContent = "Фуршет";
        document.getElementById("program3").textContent = "Банкет";
        document.getElementById("program4").textContent = "Торт";
        document.getElementById("program5").textContent = "Тойдун аягы";

        document.getElementById("rsvpTitleImage").src = "./assets/guests_list.png";
        document.getElementById("nameLabel").textContent = "Сиздин атыңыз?";
        document.getElementById("guestName").placeholder = "атыңыз";
        document.getElementById("answerLabel").textContent = "Тойго катыша аласызбы?";
        document.getElementById("yesLabel").textContent = "Албетте, катышам";
        document.getElementById("noLabel").textContent = "Тилекке каршы, катыша албайм";
        document.getElementById("rsvpButton").textContent = "жөнөтүү";

    } else {
        document.body.classList.add("lang-ru");
        document.body.classList.remove("lang-ky");

        kyTitle.style.display = "none";
        titleImage.src = "./assets/photo.svg";

        document.getElementById("untilTitle").src = "./assets/until_ru.svg";

        document.getElementById("daysLabel").textContent = "Дней";
        document.getElementById("hoursLabel").textContent = "Часов";
        document.getElementById("minutesLabel").textContent = "Минут";
        document.getElementById("secondsLabel").textContent = "Секунд";

        document.getElementById("programTitle").src = "./assets/schedule-ru.svg";

        document.getElementById("program1").textContent = "Сбор гостей";
        document.getElementById("program2").textContent = "Фуршет";
        document.getElementById("program3").textContent = "Банкет";
        document.getElementById("program4").textContent = "Торт";
        document.getElementById("program5").textContent = "Завершение вечера";

        document.getElementById("rsvpTitleImage").src = "./assets/guests_list-ru.svg";
        document.getElementById("nameLabel").textContent = "Ваше имя?";
        document.getElementById("guestName").placeholder = "имя";
        document.getElementById("answerLabel").textContent = "Вы придёте на той?";
        document.getElementById("yesLabel").textContent = "Да, приду";
        document.getElementById("noLabel").textContent = "К сожалению, не смогу";
        document.getElementById("rsvpButton").textContent = "отправить";
    }
}
function resetLanguage() {
    localStorage.removeItem("lang");
    modal.style.display = "flex";
}

function openLetter() {
    const wrapper = document.querySelector(".letter-wrapper");
    const letterScreen = document.getElementById("letterScreen");
    const mainContent = document.getElementById("mainContent");
    const music = document.getElementById("weddingMusic");

    if (music) {
        music.volume = 0.5;
        music.play().catch(() => {
            console.log("Музыка не запустилась");
        });
    }

    wrapper.classList.add("open");
    letterScreen.classList.add("open");

    setTimeout(() => {
        letterScreen.style.display = "none";
        mainContent.classList.add("show");

        const secondSection = document.getElementById("secondSection");
        secondSection.classList.add("active");

        initScrollAnimations();
    }, 00);
}

const weddingDate = new Date("2026-07-18T16:00:00").getTime();

function initScrollAnimations() {
    const items = document.querySelectorAll(".reveal-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -20px 0px"
    });

    items.forEach((item) => observer.observe(item));
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const heartRunner = document.querySelector(".heart-runner");
const programTimeline = document.querySelector(".program-timeline");

const heartPath = [
    { top: 80, left: 0 },

    { top: 95, left: 12 },
    { top: 110, left: 28 },
    { top: 130, left: 45 },
    { top: 150, left: 58 },
    { top: 170, left: 65 },

    { top: 195, left: 62 },
    { top: 220, left: 55 },
    { top: 245, left: 48 },
    { top: 275, left: 43 },
    { top: 310, left: 40 },

    { top: 330, left: 46 },
    { top: 350, left: 55 },
    { top: 365, left: 62 },
    { top: 380, left: 65 },

    { top: 410, left: 61 },
    { top: 440, left: 55 },
    { top: 470, left: 48 },
    { top: 490, left: 42 },
    { top: 510, left: 38 },

    { top: 535, left: 46 },
    { top: 560, left: 60 },
    { top: 585, left: 76 },
    { top: 605, left: 90 },
    { top: 640, left: 100 },
];
function getPointByProgress(progress) {
    const maxIndex = heartPath.length - 1;
    const exactIndex = progress * maxIndex;
    const index = Math.floor(exactIndex);
    const nextIndex = Math.min(index + 1, maxIndex);
    const localProgress = exactIndex - index;

    const current = heartPath[index];
    const next = heartPath[nextIndex];

    return {
        top: current.top + (next.top - current.top) * localProgress,
        left: current.left + (next.left - current.left) * localProgress,
    };
}

function updateHeartByScroll() {
    if (!heartRunner || !programTimeline) return;

    const rect = programTimeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // чем больше slowZone — тем медленнее движется сердце
    const slowZone = 0.2;

    const start = windowHeight * 0.9;
    const end = -rect.height * slowZone;

    let progress = (start - rect.top) / (start - end);
    progress = Math.max(0, Math.min(1, progress));

    const point = getPointByProgress(progress);

    heartRunner.style.top = `${point.top}px`;
    heartRunner.style.left = `${point.left}%`;

    revealProgramItems(progress);
}

const programItems = document.querySelectorAll(".program-item");

function revealProgramItems(progress) {
    const points = [0.08, 0.25, 0.45, 0.65, 0.85];

    programItems.forEach((item, index) => {
        if (progress >= points[index]) {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", updateHeartByScroll);
window.addEventListener("resize", updateHeartByScroll);
updateHeartByScroll();

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw-7BM4J2r8t4hUDTmblu9WFK7BdvtdK5nf8T-s9EXYZmHm7y2iAO0RGJeUPur0VUz0KA/exec";

document
    .getElementById("rsvpForm")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const name =
            document.getElementById("guestName").value.trim();

        const answer =
            document.querySelector(
                'input[name="guestAnswer"]:checked'
            )?.value;

        const message =
            document.getElementById("rsvpMessage");

        const lang =
            localStorage.getItem("lang") || "ru";

        if (!name || !answer) {
            message.textContent =
                lang === "ky"
                    ? "Бардык талааларды толтуруңуз"
                    : "Заполните все поля";
            return;
        }

        try {
            message.textContent =
                lang === "ky"
                    ? "Жөнөтүлүүдө..."
                    : "Отправка...";

            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify({
                    name,
                    answer,
                    language: lang,
                    date: new Date().toISOString()
                })
            });

            message.textContent =
                lang === "ky"
                    ? "Жообуңуз кабыл алынды ❤️"
                    : "Спасибо! Ваш ответ получен ❤️";

            document.getElementById("rsvpForm").reset();

        } catch (error) {
            message.textContent =
                lang === "ky"
                    ? "Ката кетти"
                    : "Ошибка отправки";
        }
    });
