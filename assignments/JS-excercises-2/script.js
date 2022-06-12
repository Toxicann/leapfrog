const ballHeight = 110;
const boxContainerHeight = 680;
const boxContainerWidth = 1000;

const boxcontainer = document.getElementById("animationContainer");
const ball = document.getElementById("ball");
ball.style.top = `${0}px`;
ball.style.left = `${(boxContainerWidth - ballHeight) / 2}px`;

changeInterval = 2;
let topDown = true;
let leftRight = true;

const colorChange = () => {
  red = (Math.random() * 255) % 255;
  green = (Math.random() * 255) % 255;
  blue = (Math.random() * 255) % 255;
};

setInterval(() => {
  let top = parseInt(ball.style.top);
  let left = parseInt(ball.style.left);

  //top down animation
  if (top >= boxContainerHeight - ballHeight) {
    topDown = false;
    colorChange();
  } else if (top <= 0) {
    topDown = true;
    colorChange();
  }

  //left right animation
  if (left >= boxContainerWidth - ballHeight) {
    leftRight = false;
    colorChange();
  } else if (left <= 0) {
    leftRight = true;
    colorChange();
  }

  topDown ? (top += changeInterval) : (top -= changeInterval);
  leftRight ? (left += changeInterval) : (left -= changeInterval);

  ball.style.top = `${top}px`;
  ball.style.left = `${left}px`;

  ball.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}, 1000 / 60);
