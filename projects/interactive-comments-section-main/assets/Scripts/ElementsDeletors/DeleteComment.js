import { ShowPopUp } from "./ShowPopUp.js";

export function deleteComment(type){
    let yes=false;
    let deleteThis;
    let comment = this.parentElement;
    
    ShowPopUp();
    let answer = document.querySelector('.accept');
    answer.addEventListener('click',function (event){
        yes=!yes;
        if(type=='sub'){
            deleteThis=comment;
        }
        else if(type=='main'){
            deleteThis=comment.parentElement;
        }
        for(let child of comment.children){
            child.style.transition='0.2s';
            setTimeout(()=>{
                child.style.scale='0';
                child.style.opacity='0';
            },0)
            
        }
        
        setTimeout(()=>{
            comment.style.maxHeight='0';
            comment.style.margin='0';
            comment.style.padding='0';
        },0);
    
        setTimeout(()=>{
            deleteThis.remove();
        },300)
        
    })
    
    
}