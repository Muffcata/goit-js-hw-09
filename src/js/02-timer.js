import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const flatpickr = require('flatpickr');
const fp = document.querySelector('#datetime-picker')._flatpickr;
const currentDate = new Date().getTime();
const buttonStart = document.querySelector('button[data-start]');

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
    if (selectedDates[0] <= currentDate) {
      buttonStart.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      buttonStart.disabled = false;
    }
  },
};
console.log(selectedDates);
flatpickr('#datetime-picker', options);

buttonStart.addEventListener('click', convertMs);
