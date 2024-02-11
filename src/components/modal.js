import { colorsModal, textModal } from "../constants/common";

const openModalBtn = document.querySelector("#openModalBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");
const modal = document.querySelector("#modal");
const modalBackground = document.querySelector("#modalBackground");
const modalTitle = document.querySelector("#modalTitle");
const modalText = modal.querySelector("#modalText");

const body = document.querySelector("body");

export const callModal = (response) => {
  const modalTitleColor = {
    error: colorsModal.CARDINAL,
    success: colorsModal.FRUIT_SALAD,
    default: colorsModal.EERIE_BLACK,
  };

  let message;
  let title;
  let currentColorTitle;

  const closeModal = () => {
    modal.classList.remove("show");
    modalBackground.classList.remove("show");
    body.classList.remove("show-modal");
  };
  const openModal = () => {
    modal.classList.add("show");
    modalBackground.classList.add("show");
    body.classList.add("show-modal");
    modalText.textContent = message;
    modalTitle.textContent = title;
    modalTitle.style.color = currentColorTitle;
  };

  if (response) {
    const responseObject = JSON.parse(response.response);
    if (!responseObject) return;
    if (response.status === 200) {
      title = textModal.NOTIFICATION;
      message = responseObject.msg || textModal.SUCCESSFULLY;
      currentColorTitle = modalTitleColor.success;
    } else {
      title = textModal.ERROR;
      if (!responseObject.fields) {
        message = textModal.SERVER_ERROR;
      } else {
        message = responseObject.fields.inputName || textModal.SERVER_ERROR;
      }
      currentColorTitle = modalTitleColor.error;
    }
    openModal();
  }

  openModalBtn.addEventListener("click", () => {
    currentColorTitle = modalTitleColor.default;
    message = textModal.ABOUT_ME_TEXT;
    title = textModal.ABOUT_ME_TITLE;
    openModal();
  });
  closeModalBtn.addEventListener("click", closeModal);
  modalBackground.addEventListener("click", closeModal);
};
