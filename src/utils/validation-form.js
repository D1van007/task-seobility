import { submitForm } from "./api";
import { callModal } from "./../components/modal";
import { validationMessage } from "../constants/common";

const form = document.querySelector("#form");
const inputName = form.querySelector("#inputName");
const inputEmail = form.querySelector("#inputEmail");
const inputTel = form.querySelector("#inputTel");
const textareaMessage = form.querySelector("#message");

const isValidForm = () => {
  const addValidationMessage = (isValid, currentInput, message) => {
    if (!isValid) {
      currentInput.classList.add("error");
      currentInput.nextElementSibling.textContent = message;
    } else {
      currentInput.classList.remove("error");
      if (currentInput.nextElementSibling) {
        currentInput.nextElementSibling.textContent = "";
      }
    }
  };

  const validName = () => {
    const isValidName = !!inputName.value;
    addValidationMessage(isValidName, inputName, validationMessage.REQUEST_NAME);
    return isValidName;
  };

  const validEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValidEmail = emailRegex.test(inputEmail.value);
    addValidationMessage(isValidEmail, inputEmail, validationMessage.REQUEST_EMAIL);
    return isValidEmail;
  };

  const validTel = () => {
    const telRegex = /^\+375 \((17|29|25|33|44)\) \d{3}-\d{2}-\d{2}$/;
    const isValidTel = telRegex.test(inputTel.value);
    addValidationMessage(isValidTel, inputTel, validationMessage.REQUEST_PHONE);
    return isValidTel;
  };

  const validMessage = () => {
    const isValidMessage = !!textareaMessage.value;
    addValidationMessage(isValidMessage, textareaMessage, validationMessage.REQUEST_MESSAGE);
    return isValidMessage;
  };

  return validName() && validEmail() && validTel() && validMessage();
};

export const validationForm = () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    isValidForm() &&
      submitForm(formData)
        .then((res) => {
          callModal(res);
          setTimeout(() => form.reset(), 200);
        })
        .catch((error) => callModal(error));
  });
};
