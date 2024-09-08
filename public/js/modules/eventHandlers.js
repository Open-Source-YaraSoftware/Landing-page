import {showOptions} from "../utils/showOptions.js";
import {buttonMobile} from "./constants.js";
import {restoreOptions} from "../utils/restoreOptions.js";
import {changeNavbarColor} from "../utils/changeNavbarColor.js";

export const onButtonMobileClick = () =>{
    buttonMobile.addEventListener('click', showOptions);
}

export const onWindowResize = () =>{
    window.addEventListener('resize', restoreOptions);
}

export const onWindowScroll = () =>{
    window.addEventListener('scroll', ()=>{
        changeNavbarColor();
    });
}