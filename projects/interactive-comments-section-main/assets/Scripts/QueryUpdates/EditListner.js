import { ReplyShow } from "../ElementPushers/ReplyShow.js";
import { editShow } from "../ElementPushers/EditShow.js";


export function EditListner(){
    let editUser = document.querySelectorAll('.user-edit');

    for(let editIt of editUser){
        editIt.removeEventListener('click',ReplyShow);
        editIt.addEventListener('click',editShow);
    }

}