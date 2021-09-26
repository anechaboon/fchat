import React, { useState } from "react";
import firebase from '../utils/firebase'
 
function ChatMessage({chat}) {
    let userID = window.sessionStorage.getItem("userID");
    console.log('chats userID', userID);
    let class1 = '';
    let class2 = '';
    if(userID == chat.user_id){
        class1 = 'col-12 mb-2 d-contents t-right';
        class2 = 'c-me';
    }else{
        class1 = 'col-12 mb-2 d-contents t-left';
        class2 = 'c-you';
    }
    return (
        <div className={class1}>
            <span className={class2}>{chat.message}</span>
        </div>
    )   
}
export default ChatMessage