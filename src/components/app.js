import { addMaskTelInput } from "./../utils/mask-phone";
import { validationForm } from "./../utils/validation-form";
import { callModal } from "./modal";

export const App = () => {
    addMaskTelInput();
    validationForm();
    callModal();    
}