import { DeleteListner } from "../QueryUpdates/DeleteListner.js";
import { EditListner } from "../QueryUpdates/EditListner.js";
import { ReplyListner } from "../QueryUpdates/ReplyListner.js";
import { PopUpListner } from "../QueryUpdates/PopUpListner.js";
import { VoteListners } from "../QueryUpdates/Votes.js";



export function runListners(){
    PopUpListner();
    ReplyListner();
    EditListner();
    DeleteListner();
    VoteListners();
    
    
    
}