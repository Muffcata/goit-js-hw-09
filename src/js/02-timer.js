import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const calendar = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');
const buttonStop = document.querySelector('button[data-stop]');

const currentDate = new Date().getTime();
buttonStart.disabled = true;
let choosenTime = null;
let remainingTime = null;

// function to converting time
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= currentDate) {
      buttonStart.disabled = true;
      Notiflix.Report.failure('Please choose a date in the future');
    } else {
      choosenTime = selectedDates[0].getTime();
      buttonStart.disabled = false;
    }
  },
};

const stopCountdown = () => {
  clearInterval(remainingTime);
  buttonStop.disabled = false;
  buttonStart.disabled = false;
  days.innerHTML = '00';
  hours.innerHTML = '00';
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
};
const countdown = () => {
  let time = choosenTime - currentDate;
  remainingTime = setInterval(() => {
    time -= 1000;
    if (time <= 0) {
      stopCountdown();
      Notiflix.Report.success('End of time');
    } else {
      let remaining = convertMs(time);
      days.innerHTML = addLeadingZero(remaining.days);
      hours.innerHTML = addLeadingZero(remaining.hours);
      minutes.innerHTML = addLeadingZero(remaining.minutes);
      seconds.innerHTML = addLeadingZero(remaining.seconds);
      buttonStart.disabled = true;
    }
  }, 1000);
};
const addLeadingZero = value => {
  return value.toString().padStart(2, 0);
};
flatpickr(calendar, options); //adding flatpickr library

buttonStart.addEventListener('click', countdown);
buttonStop.addEventListener('click', stopCountdown);
