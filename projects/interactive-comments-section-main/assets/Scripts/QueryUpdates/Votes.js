import { DownVote } from "../Likes/DownVote.js";
import { UpVote } from "../Likes/UpVote.js";







export function VoteListners (){
    let ups = document.querySelectorAll('.plus');
    let downs = document.querySelectorAll('.minus');
    for(let up of ups){
        up.addEventListener('click',UpVote)
    }
    for(let down of downs){
        down.addEventListener('click',DownVote)
    }
}