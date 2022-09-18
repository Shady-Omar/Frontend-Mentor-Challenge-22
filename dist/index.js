"use strict";
let num = document.querySelector(".num");
let dotOne = document.querySelector(".dot-one");
let dotTwo = document.querySelector(".dot-two");
let dotThree = document.querySelector(".dot-three");
let notiOne = document.querySelector(".noti-one");
let notiTwo = document.querySelector(".noti-two");
let notiThree = document.querySelector(".noti-three");
let read = document.querySelector(".read");
read.addEventListener("click", () => {
    num.textContent = "0";
    dotOne.classList.add("hide");
    dotTwo.classList.add("hide");
    dotThree.classList.add("hide");
    notiOne.style.backgroundColor = "hsl(0, 0%, 100%)";
    notiTwo.style.backgroundColor = "hsl(0, 0%, 100%)";
    notiThree.style.backgroundColor = "hsl(0, 0%, 100%)";
});
//# sourceMappingURL=index.js.map