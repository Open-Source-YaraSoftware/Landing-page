import {showOptions} from "../utils/showOptions.js";
import {buttonMobile, startTestimonialsCarrousel} from "./constants.js";
import {restoreOptions} from "../utils/restoreOptions.js";
import {changeNavbarColor} from "../utils/changeNavbarColor.js";
import {verifyTestimonialsCarrousel} from "../utils/verifyTestimonialsCarrousel.js";

export const onButtonMobileClick = () =>{
    buttonMobile.addEventListener('click', showOptions);
}

export const onWindowResize = () =>{
    window.addEventListener('resize', restoreOptions);
}

export const onWindowLoad = () =>{
    window.addEventListener('load', startTestimonialsCarrousel);
}

export const onWindowScroll = () =>{
    window.addEventListener('scroll', ()=>{
        changeNavbarColor();
        verifyTestimonialsCarrousel();
    });
}