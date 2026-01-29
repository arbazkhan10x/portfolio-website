function changeText() {
    document.getElementById("hero-text").innerText =
    "I am learning JavaScript 🚀";
}

let messages = [
    "I am learning JavaScript",
    "Building my future with code",
    "Future Full Stack Developer"
];

let index = 0;

function changeText() {
    document.getElementById("hero-text").innerText = messages[index];
    index++;

    if (index === messages.length) {
        index = 0;
    }
}