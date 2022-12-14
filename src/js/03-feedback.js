
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('form.feedback-form');
const formData = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

restoreFormData();

function onFormSubmit(evt) {
  evt.preventDefault();

  formData['email'] = formEl.email.value;
  formData['message'] = formEl.message.value;

  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  
  console.log(formData);
  delete formData['email'];
  delete formData['message'];
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  const saveData = JSON.stringify(formData);

  if (saveData) {
    localStorage.setItem(STORAGE_KEY, saveData);
  }
}

function restoreFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    if (parsedData.email) {
      formEl.email.value = parsedData.email;
      formData['email'] = formEl.email.value;
    }
    if (parsedData.message) {
      formEl.message.value = parsedData.message;
      formData['message'] = formEl.message.value;
    }
  }
}
