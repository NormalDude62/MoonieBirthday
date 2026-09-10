
let text = document.querySelector(".box10");
let second = document.querySelector(".box11");
let button = document.querySelector(".box15");
let page = document.querySelector(".box");
let bar = document.querySelector(".box26");
let percent = document.querySelector(".box27");

setTimeout(() => {
    text.style.display = "none";
    second.style.display = "block";
}, 2200);

let number = 0;

let loading = setInterval(() => {
    if (number < 99) {
        number++;
        bar.style.width = number + "%";
        percent.textContent = number + "%";
    }
}, 45);

setTimeout(() => {
    clearInterval(loading);
    bar.style.width = "100%";
    percent.textContent = "100%";
}, 5700);

button.addEventListener("click", () => {
    page.classList.add("active");

    setTimeout(() => {
        window.location.href = "../Second/birthday.html";
    }, 2200);
});

