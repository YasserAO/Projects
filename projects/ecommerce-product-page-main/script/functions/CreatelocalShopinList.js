
export function CreateShoppingList(){
    const DataKey='shoppingLists';
    let Data = localStorage.getItem(DataKey);
    if(!Data) localStorage.setItem(DataKey,'')
    return DataKey
}