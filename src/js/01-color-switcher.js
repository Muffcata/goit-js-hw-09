const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const bgColor = document.querySelector('body');
buttonStart.disabled = false;
buttonStop.disabled = true;

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getColorBg = () => {
  timerId = setInterval(() => {
    let randomColor = getRandomHexColor();
    bgColor.style.background = randomColor;
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
};

buttonStart.addEventListener('click', getColorBg);

const stopColorBg = () => {
  clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
};

buttonStop.addEventListener('click', stopColorBg);
