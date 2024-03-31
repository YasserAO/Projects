import {DeleteElementById} from '../ElementsDeletors/ReplyDelete.js';
import {ReplyLabelCreate} from '../ElementsCreators/ReplyLabelCreator.js';
import { ReplyCommentPush } from './ReplyCommentPush.js';




export  function ReplyShow(){
        let parent=this.parentElement;
        DeleteElementById('subCommentForm');
        let type='reply';
        
            let ReplyForm = ReplyLabelCreate(`${type}`);
            let button = ReplyForm.querySelector('.user-Reply');
            if(button){
                button.addEventListener('click',ReplyCommentPush)
            }
            
            let height = ReplyForm.style.height;
            let padding = ReplyForm.style.padding;
            let margin =ReplyForm.style.margin;
            ReplyForm.style.height='0';
            ReplyForm.style.padding='0';
            ReplyForm.style.margin='0';
            this.parentElement.insertAdjacentElement('afterend',ReplyForm);
            setTimeout(()=>{
                ReplyForm.style.height=height;
                ReplyForm.style.padding=padding;
                ReplyForm.style.margin=margin;
            },0)
        
       
        
    }



