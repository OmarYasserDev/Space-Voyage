const planets = [

    {
        button: "Mercury",
        background: "Mercury-planets-section.png",

        title: "Mercury",

        description:
        "Mercury is the smallest planet and the closest to the Sun. It has a rocky surface and experiences extreme temperature variations.",

        distance: "57.9M km",
        diameter: "4,879 km",
        moons: "0",
        year: "88 days"
    },

    {
        button: "Venus",
        background: "Venus-planets-section.png",

        title: "Venus",

        description:
        "Venus is the hottest planet in our solar system with a thick toxic atmosphere.",

        distance: "108.2M km",
        diameter: "12,104 km",
        moons: "0",
        year: "225 days"
    },

    {
        button: "Earth",
        background: "Earth-planets-section.png",

        title: "Earth",

        description:
        "Earth is the only known planet that supports life and has liquid water.",

        distance: "149.6M km",
        diameter: "12,742 km",
        moons: "1",
        year: "365 days"
    },

    {
        button: "Mars",
        background: "Mars-planets-section.png",

        title: "Mars",

        description:
        "Mars is known as the Red Planet and may have once contained water.",

        distance: "227.9M km",
        diameter: "6,779 km",
        moons: "2",
        year: "687 days"
    },

    {
        button: "Jupiter",
        background: "Jupiter-planets-section.png",

        title: "Jupiter",

        description:
        "Jupiter is the largest planet in our solar system and has a giant storm called the Great Red Spot.",

        distance: "778.5M km",
        diameter: "139,820 km",
        moons: "95",
        year: "12 years"
    },

    {
        button: "Saturn",
        background: "Saturn-planets-section.png",

        title: "Saturn",

        description:
        "Saturn is famous for its beautiful rings made of ice and rock.",

        distance: "1.4B km",
        diameter: "116,460 km",
        moons: "146",
        year: "29 years"
    },

    {
        button: "Uranus",
        background: "Uranus-planets-section.png",

        title: "Uranus",

        description:
        "Uranus rotates on its side and has a cold blue atmosphere.",

        distance: "2.9B km",
        diameter: "50,724 km",
        moons: "27",
        year: "84 years"
    },

    {
        button: "Neptune",
        background: "Neptune-planets-section.png",

        title: "Neptune",

        description:
        "Neptune is a dark cold planet with the strongest winds in the solar system.",

        distance: "4.5B km",
        diameter: "49,244 km",
        moons: "14",
        year: "165 years"
    }
];

const buttons = document.querySelectorAll(".eight-btns");

const title = document.querySelector(".info-sec h1");

const description = document.querySelector(".info-sec p");

const distance = document.querySelectorAll(".main-text p")[0];

const diameter = document.querySelectorAll(".main-text p")[1];

const moons = document.querySelectorAll(".main-text p")[2];

const year = document.querySelectorAll(".main-text p")[3];

const home = document.getElementById("Home");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        title.innerHTML = planets[index].title;

        description.innerHTML = planets[index].description;

        distance.innerHTML = planets[index].distance;

        diameter.innerHTML = planets[index].diameter;

        moons.innerHTML = planets[index].moons;

        year.innerHTML = planets[index].year;

        home.style.backgroundImage =
        `url('${planets[index].background}')`;
    });

});

