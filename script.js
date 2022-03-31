"use strict";

// const rockBtn = document.querySelector(".rock-btn");
// const paperBtn = document.querySelector(".paper-btn");
// const sissorBtn = document.querySelector(".sissor-btn");

const images = document.querySelectorAll(".images");
const btns = document.querySelectorAll("button");

let ele = document.getElementById("timer");
let timer = function (timeEle) {
  let sec = 3;
  timeEle.textContent = sec;
  let timerOn = true;
  if (timerOn) {
    setInterval(function () {
      if (sec >= 1) {
        sec--;
        timeEle.textContent = sec;
      }
    }, 1000);
  }
};

// (function (){

//     let sec = 0
//     timer = setInterval(()=>{
//      ele.innerHTML = '00:'+sec;
//      sec --;
//     },1000)
// })

images.forEach(function (el) {
  el.style.display = "none";
});

const secretNum = Math.trunc(Math.random() * 3) + 1;
let gameOn = true;

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (gameOn) {
      gameOn = false;
      timer(document.querySelector(".timerEle"));
      const secretNum = Math.trunc(Math.random() * 3) + 1;

      images.forEach(function (el) {
        el.style.display = "block";
      });

      setTimeout(function () {
        images.forEach(function (el) {
          el.style.display = "none";
        });
        gameOn = true;
      }, 3000);

      console.log(secretNum);

      let image;

      switch (secretNum) {
        case 1:
          image = "rock";
          break;

        case 2:
          image = "paper";
          break;

        case 3:
          image = "scissor";
          break;
      }

      document.querySelector(".comp-images img").src = `imgs/${image}.png`;
      document.querySelector(
        ".user-images img"
      ).src = `imgs/${this.textContent}.png`;
    }
  });
});
