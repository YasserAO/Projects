import { product } from "../Data/data.js";

export function loadimage(imageIndex){
    
    
    const productImage = document.querySelector('.productImg img');
    const productSlider = document.querySelector('.productSlider');
    const arr = Array.from(productSlider.children) ;
    arr.forEach(product => {
        product.classList.remove('selectedThumb')
    });
    
    
    productImage.setAttribute('src',`${product[imageIndex]}`);
    arr[imageIndex].classList.add('selectedThumb');
}