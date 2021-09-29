import React, { useState, useEffect } from "react";
import firebase from '../utils/firebase'
import ChatMessage from './ChatMessage'
 
function ChatBox(both_ID) {
    both_ID = both_ID.userID;


    const userID = both_ID.userID; //my id
    const bothID = both_ID.bothID; //both id
    console.log('snapshot bothID2',bothID);

    const [chatList,setChatList] = useState();
    
    
    useEffect(() => {
        getChatList();
    }, [])

    const getChatList = () => {
        const chatRef = firebase.database().ref('chat');
        chatRef.orderByChild("both_id").equalTo(bothID).on('value', (snapshot) => {
            const chats = snapshot.val();
            const chatList = [];
            for (let id in chats) {
                chatList.push({ id, ...chats[id] });
            }
            setChatList(chatList);
        })
        console.log('snapshot chatList',chatList);
    }

    const [message,setMessage] = useState('');
    const SendMessage = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            const chatRef = firebase.database().ref('chat')
            const chat = {
                message,
                'both_id': bothID,
                'user_id':userID
            }
            chatRef.push(chat);
            document.getElementById("chat-input").value = '';
        }
    }


    return (
        
        <div className="frame col-md-12" >
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