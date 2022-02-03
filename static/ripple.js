document.querySelectorAll(".MenuButton").forEach((element) => {
    element.addEventListener('pointerdown', (event) => ripplet(event, { spreadingDuration: ".2s" }));
});

document.querySelectorAll("button").forEach((element) => {
    element.addEventListener('pointerdown', (event) => ripplet(event, { spreadingDuration: ".2s" }));
});