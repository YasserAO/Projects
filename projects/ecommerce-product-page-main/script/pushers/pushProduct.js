import { CreateCartItem } from "../functions/CartItemCreator.js";
import { emptyCart } from "../functions/emptyCart.js";
import { resetQuantity } from "../functions/resetQuantity.js";



export function productPusher(source){
    let item;
    if(source) item = CreateCartItem(source);
    else item = CreateCartItem();
    if(!(item==null)){
        
        let cart = document.querySelector('.content');
        let old = cart.querySelector('.item');
        if(old) old.remove();
        cart.prepend(item)
        emptyCart(false)
        resetQuantity();
        
    }
    return

    

}
