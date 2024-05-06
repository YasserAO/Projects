export function emptyCart(stat){
    let content = document.querySelector('.content')
    let buyButton = document.querySelector('.content .buy');
    let EmptyText = document.querySelector('.content > p');
    let notification = document.querySelector('.notification');
    if(stat) {
        buyButton.classList.add('hidden');
        EmptyText.classList.remove('hidden');
        content.classList.add('empty');
        notification.classList.add('hidden');
    }
    else{
        EmptyText.classList.add('hidden');
        buyButton.classList.remove('hidden');
        content.classList.remove('empty');
        notification.classList.remove('hidden');
    }
}