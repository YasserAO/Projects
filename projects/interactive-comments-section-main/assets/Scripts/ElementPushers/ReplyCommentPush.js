import { CreateSubComment } from "../ElementsCreators/SubCommentCreator.js";
import {DeleteElementById} from "../ElementsDeletors/ReplyDelete.js"
import { runListners } from "../Run/RunListners.js";

export function ReplyCommentPush(){
    let text = this.parentElement.querySelector('textarea');
    let Repliedcomment = this.parentElement.previousElementSibling;
    console.log(Repliedcomment);
    let replyTo = Repliedcomment.children[0].children[1].textContent;
    
    if(text.value!==''){
        let content=text.value;
        let name='juliusomo';

        let ifB=document.getElementById('subCommentForm');
        let b=0;
        if(ifB){
            b=1;
        }
        let id2=0;
        let id= document.querySelectorAll('.comment').length-1-b;
        let time='1 min Ago';
        let score=0;

        let ccoment=CreateSubComment(id2,id,name,time,content,score,replyTo);

        let classname=Repliedcomment.parentElement.className
        if(classname=='comment-label'){
            Repliedcomment.parentElement.querySelector('.sub-comment').append(ccoment);
            DeleteElementById('subCommentForm');
        }
        else if(classname=='sub-comment'){
            Repliedcomment.parentElement.append(ccoment);
            DeleteElementById('subCommentForm');
        }

        
    }
    runListners();
    
    
}