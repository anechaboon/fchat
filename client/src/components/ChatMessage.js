import React, { useState } from "react";
import firebase from '../utils/firebase'
 
function ChatMessage({chat}) {


    return (
        <div className="col-12 mb-2 d-contents t-right">
            <span className="c-me">{chat.message}</span>
        </div>
    )   
}
export default ChatMessage