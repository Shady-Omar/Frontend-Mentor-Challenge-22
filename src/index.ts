// notifications number:
let num:any = document.querySelector(".num");

// dots:
let dotOne:any = document.querySelector(".dot-one");
let dotTwo:any = document.querySelector(".dot-two");
let dotThree:any = document.querySelector(".dot-three");


// notification color:
let notiOne:any = document.querySelector(".noti-one");
let notiTwo:any = document.querySelector(".noti-two");
let notiThree:any = document.querySelector(".noti-three");

let read:any = document.querySelector(".read");


read.addEventListener("click", () => {
  num.textContent = "0"

  dotOne.classList.add("hide")
  dotTwo.classList.add("hide")
  dotThree.classList.add("hide")

  notiOne.style.backgroundColor = "hsl(0, 0%, 100%)"
  notiTwo.style.backgroundColor = "hsl(0, 0%, 100%)"
  notiThree.style.backgroundColor = "hsl(0, 0%, 100%)"
})