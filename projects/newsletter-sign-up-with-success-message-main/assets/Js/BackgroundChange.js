export function BackgroundChange(){
    let srcs=['assets/images/illustration-sign-up-mobile.svg','assets/images/illustration-sign-up-desktop.svg'];
    let image=document.querySelector('.sign-up > img');
    let src=image.getAttribute('src');
    let wid=window.innerWidth;
    
    if(wid>=768){
        if(src==srcs[0]){
            image.setAttribute('src',`${srcs[1]}`);
        }
        
    }
    else{
        if(src==srcs[1]){
            image.setAttribute('src',`${srcs[0]}`);
        }
        
    }
    
    
}