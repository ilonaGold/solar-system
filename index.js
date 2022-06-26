const solarSystem = document.getElementById("solarSystem");
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
];

function loop() {
    planets.forEach(planet => {
        solarSystem.innerHTML += renderPlanet(planet);
    });
}

loop();

function renderPlanet(planet) {
    let planetSize = planet.diameter / 750;
    return `<div class='planet ${planet.name}' style='--bg-color: var(--${planet.color}); --height:${planetSize}px; --width:${planetSize}px'>
    <span class='tooltip'>${planet.name}</span>
    </div>
    `
}

// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)