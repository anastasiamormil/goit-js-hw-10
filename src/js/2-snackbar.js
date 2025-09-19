import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="delay"]');
form.addEventListener('submit', handelSubmit);
function handelSubmit(event) {
  event.preventDefault();
  const formE = event.currentTarget;
  const inputState = formE.elements.state.value;
  const inputDelay = Number(formE.elements.delay.value);
  const promise = new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
      if (inputState === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${inputDelay}ms`);
      } else {
        reject(`❌ Rejected promise in ${inputDelay}ms`);
      }
    }, inputDelay);
  });
  promise
    .then(value => {
      iziToast.success({
        title: '',
        message: value,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
      });
    });
}
