export function showBlock(selector){
    let main=document.querySelector('main');
    let hide ='hide'
    let sign='.sign-up';
    let suc='.success';
    let sm='smallMain';
    let dw=window.innerWidth;
    if(selector==sign){
        document.querySelector(selector).classList.remove(hide);
        main.classList.remove(sm);
        document.querySelector(suc).classList.add(hide)
        
    }
    else if(selector==suc){
        document.querySelector(selector).classList.remove(hide);
         document.querySelector(sign).classList.add(hide);
         if(dw>768){
            main.classList.add(sm);
         }
       
    }
}