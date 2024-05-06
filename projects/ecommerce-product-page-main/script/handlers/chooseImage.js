import { loadimage } from "./loadimage.js";
import { indexSelected } from "../functions/indexSelected.js";

export function choseImage(element){
    let index= Array.from(element.parentElement.children).indexOf(element);
    let chosen = indexSelected();

        if(!(index==chosen)){
            loadimage(index);
            return
        } 
    
}