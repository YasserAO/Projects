import { HidePopUp } from "../ElementsDeletors/HidePopUp.js";


let buttons = document.querySelectorAll('.DeletePopUp button');


export function PopUpListner(){
    for(let button of buttons){
        button.addEventListener('click',HidePopUp)
    }
}