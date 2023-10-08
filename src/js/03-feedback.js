import throttle from 'lodash/throttle';
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[name='email']");
const messageTextarea = form.querySelector("textarea[name='message']");
function saveFormState() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

emailInput.addEventListener("input", saveFormState);
messageTextarea.addEventListener("input", saveFormState);

const savedFormData = localStorage.getItem("feedback-form-state");
if (savedFormData) {
  const parsedFormData = JSON.parse(savedFormData);
  emailInput.value = parsedFormData.email;
  messageTextarea.value = parsedFormData.message;
}

form.addEventListener('submit',  throttle(handlerSubmit, 500));
function handlerSubmit(event) {
    event.preventDefault();
    const formData = {
        email: emailInput.value,
        message: messageTextarea.value,
    }
    console.log(formData);
    emailInput.value = '';
    messageTextarea.value = '';
    localStorage.removeItem("feedback-form-state");
}





 

 
