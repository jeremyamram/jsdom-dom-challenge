// const counter = document.getElementById("counter");

// for (var counter = 0; counter < 9999; i++) {
//   setTimeout(() => console.log(counter), 1000);
// }

// function domChallenge() {
//   const minusButton = document.getElementById("minus");
//   const plusButton = document.getElementById("plus");
//   const heartButton = document.getElementById("heart");
//   const pauseButton = document.getElementById("pause");
//   const submitButton = document.getElementById("submit");
//   const commentBox = document.getElementById("comment-input");

//   submitButton.addEventListener("submit", function(e) {
//     e.preventDefault();
//   });
// }

let timer = 0;
let paused = false;

const counter = document.getElementById("counter");

function counterFn() {
  if (paused === false) {
    timer = timer + 1;
    counter.innerText = timer;
  }
}

setInterval(counterFn, 1000);

const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function() {
  if (paused === false) {
    timer = timer - 1;
    counter.innerText = timer;
  }
});

const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function() {
  if (paused === false) {
    timer = timer + 1;
    counter.innerText = timer;
  }
});

const heartButton = document.getElementById("heart");
const clicked = {};
heartButton.addEventListener("click", function() {
  if (paused === false) {
    if (!(timer in clicked)) {
      clicked[timer] = 1;
      const li = document.createElement("li");
      li.id = timer;
      li.innerText = `${timer} has been clicked ${clicked[timer]} time`;
      const ul = document.querySelector(".likes");
      ul.appendChild(li);
    } else {
      clicked[timer] = clicked[timer] + 1;
      const li = document.getElementById(timer);
      li.innerText = `${timer} has been clicked ${clicked[timer]} times`;
      const ul = document.querySelector(".likes");
      ul.appendChild(li);
    }
  }
});

const commentBox = document.getElementById("comment-input");
const commentForm = document.getElementById("comment-form");
const divCommentList = document.getElementById("list");

commentForm.addEventListener("submit", function(event) {
  event.preventDefault();
  if (paused === false) {
    const li = document.createElement("li");
    li.innerText = commentBox.value;
    divCommentList.appendChild(li);
  }
});

const pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (paused === false) {
    paused = true;
    pauseButton.innerText = "resume";
    console.log(paused);
  } else {
    paused = false;
    pauseButton.innerText = "pause";
    console.log(paused);
  }
});