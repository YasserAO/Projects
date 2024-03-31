import { ReplyShow } from "../ElementPushers/ReplyShow.js";



export function ReplyListner(){
    let replies = document.querySelectorAll('.reply');
    for(let reply of replies){
        reply.addEventListener('click',ReplyShow);
    }
}

