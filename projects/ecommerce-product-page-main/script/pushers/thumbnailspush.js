import { createThumbnail } from "../functions/thumbCreator.js";
import { thumbnails } from "../Data/data.js";
import { choseImage } from "../handlers/chooseImage.js";


let slider = document.querySelector('.productSlider');

export function pushThumbnails(){

    for(let i=0;i<thumbnails.length;i++){
        let image = createThumbnail(thumbnails[i],i)
        
        image.addEventListener('click',()=>{
            choseImage(image);
        })
        
        if(slider) slider.appendChild(image)
        
    }

}