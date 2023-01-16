import Notiflix from 'notiflix';

const feedback = document.querySelector('form');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

let position = 0;

const fetchUserFromServer = event => {
  event.preventDefault();

  let delayValue = firstDelay.valueAsNumber;
  let stepValue = delayStep.valueAsNumber;

  function createPromise(position, delayValue) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delayValue });
        } else {
          reject({ position, delayValue });
        }
      }, delayValue);
    });
  }

  for (let i = 1; i <= amount.value; i++) {
    position = i;
    createPromise(position, delayValue)
      .then(value => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${value.position} in ${value.delayValue}ms`
        );
        console.log(
          `✅ Fulfilled promise ${value.position} in ${value.delayValue}ms`
        );
      })
      .catch(error => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${error.position} in ${error.delayValue}ms`
        );
        console.log(
          `❌ Rejected promise ${error.position} in ${error.delayValue}ms`
        );
      });

    delayValue += stepValue;
    position++;
  }
};
feedback.addEventListener('submit', fetchUserFromServer);
