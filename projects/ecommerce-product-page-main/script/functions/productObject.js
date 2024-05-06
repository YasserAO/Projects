export function ProductObject(){
    const info = document.querySelector('.productInformation');
    const title = info.querySelector('h1').innerHTML;
    const quantity= parseInt(document.getElementById('buyQuant').textContent);
    const img = document.querySelectorAll('.thumbContainer')[0].children[0].src;
    let price = info.querySelector('.now').textContent;
    price = price.split(' ')[0].replace('$','');
    price = parseInt(price)
    
    let data = null;

    if(!(quantity==0)) data = {
        name:title,
        quantity:quantity,
        price:price,
        img:img
    }
    return data

}