import { ReplyShow } from "../ElementPushers/ReplyShow.js";
import { deleteComment } from "../ElementsDeletors/DeleteComment.js";

export function DeleteListner(){
    let deleteUser = document.querySelectorAll('.user-delete');
    let deleteUser2 = document.querySelectorAll('.user-deleteMain');

    for(let deletes of deleteUser){
        deletes.removeEventListener('click',ReplyShow);
        deletes.addEventListener('click', function(){
            deleteComment.call(this,'sub');
        });
    }
    for(let deletes of deleteUser2){
        deletes.removeEventListener('click',ReplyShow);
        deletes.addEventListener('click', function(){
            deleteComment.call(this,'main');
        });
    }

}