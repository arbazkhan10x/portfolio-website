// console.log("JS Running...")
function changeText() {
    document.getElementById("hero-text").innerText =
    "I am learning JavaScript 🚀";
}

// let messages = [
//     "I am learning JavaScript",
//     "Building my future with code",
//     "Future Full Stack Developer"
// ];

// let index = 0;

// function changeText() {
//     document.getElementById("hero-text").innerText = messages[index];
//     index++;

//     if (index === messages.length) {
//         index = 0;
//     }
// }


// setInterval(changeText, 2000);


// window.addEventListener("scroll", function() {
//     let nav = document.querySelector("nav");

//     if(window.scrollY > 50) {
//         nav.classList.add("scrolled");
//     } else {
//         nav.classList.remove("scrolled");
//     }
// });

//     document.querySelector(".contact-form").addEventListener("subbmit", function(e) {
//         e.preventDefault();

//         alert("Message sent successfully");

//         this.reset();
//     })




// ===== HERO TEXT AUTO CHANGE =====
let messages = [
  "I am learning JavaScript 🚀",
  "Building my future with code 💻",
  "Future Full Stack Developer 🔥"
];

let index = 0;

function changeText() {
  let text = document.getElementById("hero-text");

  if (text) {
    text.innerText = messages[index];
    index++;

    if (index === messages.length) {
      index = 0;
    }
  }
}

// Auto change every 2 sec
setInterval(changeText, 2000);


// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// ===== CONTACT FORM HANDLING =====
window.addEventListener("DOMContentLoaded", function () {

  let form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("Message sent successfully ✅");

      form.reset();
    });
  }

});