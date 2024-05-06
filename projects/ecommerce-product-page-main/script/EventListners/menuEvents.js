import { showMenu } from "../functions/showMenu.js";
import { closeMenu } from "../functions/closeMenu.js";
import { cartHandler } from "../handlers/cartHandler.js";
import { loadimage } from "../handlers/loadimage.js";
import { imgIdexReset } from "../functions/imgindexreset.js";
import { indexSelected } from "../functions/indexSelected.js";
import { changeQuantity } from "../functions/changeQuantity.js";
import { productPusher } from "../pushers/pushProduct.js";





let menuButton = document.querySelector('.menuIcon');
let closeButton = document.querySelector('.closeButton');
let cart = document.querySelector('.cartimg');
let nextButton = document.querySelector('.nextButton');
let previousButton = document.querySelector('.previousButton');
let minusButton = document.querySelector('.minusButton');
let plusButton = document.querySelector('.plusButton');

let addProduct = document.getElementById('addTocart');


export function menuEvents(){
    if(menuButton) menuButton.addEventListener('click',showMenu);
    if(closeButton) closeButton.addEventListener('click', closeMenu);
    if(cart) cart.addEventListener('click', cartHandler);

    if(nextButton) nextButton.addEventListener('click', ()=>{
        let imageIndex = indexSelected();
        imageIndex++;
        imageIndex = imgIdexReset(imageIndex);
        loadimage(imageIndex);
        
    })
    if(previousButton) previousButton.addEventListener('click', ()=>{
        let imageIndex = indexSelected();
        imageIndex--;
        imageIndex = imgIdexReset(imageIndex);
        loadimage(imageIndex);
    })

    if(minusButton) minusButton.addEventListener('click', ()=>{
        changeQuantity(0)
    });
    if(plusButton) plusButton.addEventListener('click', ()=>{
        changeQuantity(1)
    });

    if(addProduct) addProduct.addEventListener('click', ()=> productPusher());

}















