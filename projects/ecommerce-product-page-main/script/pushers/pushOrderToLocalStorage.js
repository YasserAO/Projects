import { CreateShoppingList } from "../functions/CreatelocalShopinList.js";

export function pushOrderToLocalStorage(order){
    let DataKey= CreateShoppingList();
    if(order) {
        order = JSON.stringify(order)
    };
    if(DataKey) localStorage.setItem(DataKey,order)
}