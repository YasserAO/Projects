
import { menuEvents } from "./EventListners/menuEvents.js";
import { pushThumbnails } from "./pushers/thumbnailspush.js";
import { CreateShoppingList } from "./functions/CreatelocalShopinList.js";
import { emptyCart } from "./functions/emptyCart.js";
import { productPusher } from "./pushers/pushProduct.js";






pushThumbnails();
menuEvents();

emptyCart(true)
loadProductFromLocalStorage()


function loadProductFromLocalStorage(){
    let DataKey = CreateShoppingList();
    let Data = localStorage.getItem(DataKey);
    if(Data) {
        Data = JSON.parse(Data);
        productPusher(Data);
    } 
}






// console.log(ProductObject())











