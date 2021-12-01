import  {throttle}  from "lodash";
const formData = {};

const form = document.querySelector(`form`);
const input = document.querySelector(`input`);
const textarea = document.querySelector(`textarea`);

form.addEventListener(`submit`, onFormSubmit);
form.addEventListener(`input`, throttle(onFormInput, 500));

populateTextarea();


function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(`feedback-form-state`);
    const parsedForm = JSON.parse(savedMessage);
    if (parsedForm) {
        input.value = parsedForm.email;
        textarea.value = parsedForm.message;
    }
    
}
function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(localStorage.getItem(`feedback-form-state`));
    evt.target.reset();
    localStorage.removeItem(`feedback-form-state`);
}

