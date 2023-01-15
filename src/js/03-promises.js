import Notiflix from 'notiflix';

const feedback = document.querySelector('form');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

let delayValue = firstDelay.value;
let stepValue = delayStep.value;
let position = 0;

const fetchUserFromServer = event => {
  event.preventDefault();

  function createPromise(position, delayValue) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve(
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${position} in ${delayValue}ms`
            )
          );
        } else {
          reject(
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${delayValue}ms`
            )
          );
        }
      }, delayValue);
    });
  }

  for (let i = 1; i <= amount.value; i++) {
    position = i;
    createPromise(position, delayValue)
      .then(value => ({ position, delayValue }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position - 1} in ${delayValue}ms`
        );
      })
      .catch(error => ({ position, delayValue }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position - 1} in ${delayValue}ms`
        );
      });
  }
  delayValue = +stepValue;
  position++;
};

feedback.addEventListener('submit', fetchUserFromServer);
