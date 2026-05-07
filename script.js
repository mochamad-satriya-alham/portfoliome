const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 120);
});

// Menu mobile
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
};

const text = ["Moch Satriya Alham", "Frontend Developer", "Web Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            setTimeout(type, 200);
        }, 1500);
    } else {
        setTimeout(type, 100);
    }
})();
