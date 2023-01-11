const buttonStart = document.querySelector('button[data-start="start"]');
const buttonStop = document.querySelector('button[data-stop="stop"]');
const bgColor = document.querySelector('body');

let timerId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const getColorBg = () => {
  timerId = setInterval(() => {
    let randomColor = getRandomHexColor();
    bgColor.style.background = randomColor;
  }, 1000);
};
buttonStart.addEventListener('click', getColorBg);

const stopColorBg = () => {
  clearInterval(timerId);
};

buttonStop.addEventListener('click', stopColorBg);
