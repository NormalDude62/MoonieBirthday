let continueButton = document.querySelector(".box8");
let fileButton = document.querySelector(".box12");
let birthdayButton = document.querySelector(".box25");
let questionButton = document.querySelector(".box28");
let yesButton = document.querySelector(".box32");
let noButton = document.querySelector(".box33");
let finishButton = document.querySelector(".box36");
let errorButton = document.querySelector(".box40");
let moonImage = document.querySelector(".box46");

let cards = document.querySelectorAll(".box16");

let observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach((card) => {
    observer.observe(card);
});

if (continueButton) {
    continueButton.addEventListener("click", () => {
        document.querySelector(".box9").scrollIntoView({
            behavior: "smooth"
        });
    });
}

if (fileButton) {
    fileButton.addEventListener("click", () => {

        fileButton.textContent = "SCANNING...";

        document.body.classList.add("file-opened");

        setTimeout(() => {
            fileButton.textContent = "FILE OPENED ✓";
        }, 1500);
    });
}

if (moonImage) {

    let moonClicks = 0;

    moonImage.addEventListener("click", () => {

        moonClicks++;

        moonImage.style.transform = "scale(1.05)";

        setTimeout(() => {
            moonImage.style.transform = "";
        }, 300);

        if (moonClicks === 5) {

            document.body.classList.add("secret");

            setTimeout(() => {
                document.body.classList.remove("secret");
            }, 2500);

            moonClicks = 0;
        }
    });
}

if (birthdayButton) {
    birthdayButton.addEventListener("click", () => {

        document.querySelector(".box21").style.display = "none";

        document.querySelector(".box26").scrollIntoView({
            behavior: "smooth"
        });
    });
}

if (questionButton) {
    questionButton.addEventListener("click", () => {

        document.querySelector(".box29").scrollIntoView({
            behavior: "smooth"
        });
    });
}

if (yesButton) {
    yesButton.addEventListener("click", () => {

        document.body.classList.add("yes");

        document.querySelector(".box34").scrollIntoView({
            behavior: "smooth"
        });
    });
}

if (noButton) {
    noButton.addEventListener("click", () => {

        document.body.classList.add("no");

        document.querySelector(".box37").scrollIntoView({
            behavior: "smooth"
        });
    });
}

if (finishButton) {
    finishButton.addEventListener("click", () => {

        document.body.classList.remove("yes");

        document.body.classList.add("finished");

        document.querySelector(".box41").scrollIntoView({
            behavior: "smooth"
        });
    });
}

if (errorButton) {
    errorButton.addEventListener("click", () => {

        errorButton.textContent = "JUST KIDDING 😭";

        setTimeout(() => {

            document.body.classList.remove("no");
            document.body.classList.add("finished");

            document.querySelector(".box41").scrollIntoView({
                behavior: "smooth"
            });

        }, 1200);
    });
}

window.addEventListener("scroll", () => {

    let scroll = window.scrollY;
    let hero = document.querySelector(".box6");

    if (hero && scroll < window.innerHeight) {
        hero.style.transform =
            "translateY(" + scroll * 0.08 + "px)";
    }
});