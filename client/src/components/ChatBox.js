import React, { useState, useEffect } from "react";
import firebase from '../utils/firebase'
import ChatMessage from './ChatMessage'
 
function ChatBox(usersID) {
    
    console.log('usersID',usersID);

    const user_id = 1;
    const with_user_id = 2;
    const users_id = `${user_id}-${with_user_id}`;

    const [bothID,setBothID] = useState('');
    const [chatList,setChatList] = useState();
    
    
    useEffect(() => {

        const chatRef = firebase.database().ref('chat');
        chatRef.orderByChild("both_id").equalTo(users_id).on('value', (snapshot) => {
            const chats = snapshot.val();
            console.log('snapshot chatbox',chats);
            const chatList = [];
            for (let id in chats) {
                chatList.push({ id, ...chats[id] });
            }
            setChatList(chatList);
        })

    }, [])

    const [message,setMessage] = useState('');
    const SendMessage = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            const chatRef = firebase.database().ref('chat')
            const chat = {
                message,
                'both_id': users_id,
                'user_id':user_id
            }
            chatRef.push(chat);
            document.getElementById("chat-input").value = '';
        }
    }


    return (
        
        <div className="frame col-md-12">
            <div id="chat-box">
                {chatList 
                    ? chatList.map((chat, index) => <ChatMessage chat={chat} key={index} /> )
                    : ''}
                
            </div>
            <div className="bottom-div">
                <input type="text" id="chat-input" className="chat form-control" onKeyUp={SendMessage} onChange={(event)=>{setMessage(event.target.value)}}/>
            </div>
        </div>
    )   
}
export default ChatBox