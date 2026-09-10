
let cards = document.querySelectorAll(".box18");

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


let moon = document.querySelector(".box6 span");
let secret = document.querySelector(".box21");
let closeSecret = document.querySelector(".box25");

let clicks = 0;


if (moon && secret && closeSecret) {

    moon.addEventListener("click", () => {

        clicks++;

        moon.classList.add("box23");

        setTimeout(() => {
            moon.classList.remove("box23");
        }, 600);

        if (clicks >= 3) {

            secret.classList.add("show");
            clicks = 0;

        }

    });


    closeSecret.addEventListener("click", () => {
        secret.classList.remove("show");
    });

}


let page = document.querySelector("#page");
let chaosButton = document.querySelector(".box27");


let normalTexts = {

    title: "HAPPY BIRTHDAY",

    name: "MOONIECHAN_QUEEN",

    intro: "THE WAIT IS OVER...",

    world: "A little world made just for you.",

    worldText: "You create worlds, characters, stories and chaos, so we thought you deserved a world of your own.",

    characters: "THE CHARACTERS"

};


if (page && chaosButton) {

    chaosButton.addEventListener("click", () => {

        let images = document.querySelectorAll(".box19 img");

        page.classList.toggle("chaos");


        let title = document.querySelector(".box6 h1");
        let name = document.querySelector(".box6 h2");
        let intro = document.querySelector(".box6 p");

        let world = document.querySelector(".box11 h2");
        let worldText = document.querySelector(".box11 p:last-child");

        let characters = document.querySelector(".box16 h2");

        let favouriteText = document.querySelector(".box31");
        let favouriteName = document.querySelector(".box32");


        if (page.classList.contains("chaos")) {

            images.forEach((image) => {
                image.src = image.dataset.chaos;
            });


            title.textContent = "ANYTHING FOR YOU";

            name.textContent = "MOONIECHAN_QUEEN";

            intro.textContent = "YOU ARE MY FAVOURITE 🔪🩸";

            world.textContent = "Something went wrong.";

            worldText.textContent =
                "The world is no longer as peaceful as it was.";

            characters.textContent = "THE FORSAKEN";


            favouriteText.textContent =
                "Your...Favourite...One.";

            favouriteName.textContent =
                "Umi..🔪🩸";


            chaosButton.textContent =
                "✦ RESTORE WORLD";

        } else {


            images.forEach((image) => {
                image.src = image.dataset.normal;
            });


            title.textContent =
                normalTexts.title;

            name.textContent =
                normalTexts.name;

            intro.textContent =
                normalTexts.intro;

            world.textContent =
                normalTexts.world;

            worldText.textContent =
                normalTexts.worldText;

            characters.textContent =
                normalTexts.characters;


            favouriteText.textContent =
                "THE FAVOURITE ONE";

            favouriteName.textContent =
                "007N7";


            chaosButton.textContent =
                "⚠ ENTER CHAOS MODE";

        }

    });

}


let door = document.querySelector(".box30");


if (door) {

    door.addEventListener("click", () => {

        document.body.classList.add("leave");

        setTimeout(() => {

            window.location.href =
                "../Final/next.html";

        }, 1500);

    });

}

