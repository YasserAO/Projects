import {DeleteElementById} from '../ElementsDeletors/ReplyDelete.js';
import {ReplyLabelCreate} from '../ElementsCreators/ReplyLabelCreator.js';
import {UpdateComment} from '../QueryUpdates/UpdateComment.js';

export function editShow(){
    DeleteElementById('subCommentForm');
    let type='update';

    
    let content = this.parentElement.querySelectorAll('.content');
    let span = content[0].children[0].children[0];
    let tag='';
    if(span){
        tag = span.textContent;
        span.remove();
    }
    
    
    let paragraph= tag+' '+content[0].children[0].innerHTML;
    

    let ReplyForm = ReplyLabelCreate(`${type}`,paragraph);
    
    
    

    content[0].innerHTML=`${ReplyForm}`
    let button = content[0].querySelector('.user-update');
    button.addEventListener('click',UpdateComment);
    
    
        



}