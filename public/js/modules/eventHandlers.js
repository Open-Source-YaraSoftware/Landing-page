import {showOptions} from "../utils/showOptions.js";
import {buttonMobile} from "./constants.js";
import {restoreOptions} from "../utils/restoreOptions.js";

export const onButtonMobileClick = () =>{
    buttonMobile.addEventListener('click', showOptions);
}

export const onWindowResize = () =>{
    window.addEventListener('resize', restoreOptions);
}