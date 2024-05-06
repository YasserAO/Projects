import { cartStat } from "../functions/cartstat.js";
import { hideCart } from "../functions/hideCart.js";
import { showCart } from "../functions/showCart.js";

export function cartHandler(){
    if(cartStat()) return hideCart();
    showCart();
}