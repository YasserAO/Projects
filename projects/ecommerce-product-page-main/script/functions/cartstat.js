export function cartStat(){
    const cart = document.querySelector('.basket');
    let stat;
    if(cart.style.display=='block') stat=true;
    else stat= false;
    
    return stat;
}