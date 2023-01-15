import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const calendar = document.querySelector('#datetime-picker');
const currentDate = new Date().getTime();
const buttonStart = document.querySelector('button[data-start]');
buttonStart.disabled = true;

const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');

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

const countdown = () => {
  let time = choosenTime - currentDate;
  remainingTime = setInterval(() => {
    time -= 1000;
    if (time <= 0) {
      clearInterval(remainingTime);
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
  return (currentValue = value.toString().padStart(2, 0));
};

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

const fp = flatpickr(calendar, options);

buttonStart.addEventListener('click', countdown);
