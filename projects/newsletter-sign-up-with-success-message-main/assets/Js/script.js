import{BackgroundChange} from './BackgroundChange.js'
import {showBlock} from './ShowBlock.js';




window.addEventListener('resize',BackgroundChange);
BackgroundChange();



let sup = '.sign-up';
let suc = '.success';
// showBlock(sup);



let submit = document.querySelector('.btn__signUp');
let Dismiss = document.querySelector('.btn__seccess');


submit.addEventListener('click', submitEmail)
Dismiss.addEventListener('click', DismissMessage)



function submitEmail(){
    let inPut=document.getElementById('emailInp');
    let email = inPut.value;

    let emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(email)){
        let span = document.querySelector('span');
        span.innerHTML=email;
        ErrorRemove();
        showBlock(suc);
    }
    else{
        ErrorAdd();
    }
}

function DismissMessage(){
    showBlock(sup);
}

function ErrorAdd(){
    let emailErrored = document.querySelector('.error');
    let inPut = document.querySelector('input');
    emailErrored.classList.remove('hide');
    inPut.classList.add('errorEmail');
}
function ErrorRemove(){
    let emailErrored = document.querySelector('.error');
    let inPut = document.querySelector('input');
    emailErrored.classList.add('hide');
    inPut.classList.remove('errorEmail');
}