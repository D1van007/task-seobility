import Inputmask from 'inputmask';

export const addMaskTelInput = () => {
    const telInput = document.querySelector("#inputTel")

    Inputmask({ mask: '+375 (99) 999-99-99' }).mask(telInput);

}