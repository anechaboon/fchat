import React, { useState, useEffect } from "react";
import firebase from '../utils/firebase';
import '../css/chat.css'
import Axios from 'axios';
import ChatBox from './ChatBox'
import ChatMessage from './ChatMessage'

function Chat() {

    const userID = window.sessionStorage.getItem("userID");
    const [friendList,setFriendList] = useState();
    // get friendList
    useEffect(() => {
        Axios.get(`http://localhost:3001/friend/${userID}`).then((response) => {
            setFriendList(response.data);
        });
    }, [])

    //select friend chat
    const [bothID,setBothID] = useState('');


    const [chatList,setChatList] = useState();


    const Chat = (e) => {
        
        let id = e.target.getAttribute('data-id');
        let name = e.target.getAttribute('data-name');
        let bothID = '';
        document.getElementById("friendName").innerHTML = `<p>${name} ${id}</p>`;
        if(userID < id){
            bothID = `${userID}-${id}`;
        }else{
            bothID = `${id}-${userID}`;
        }

        setBothID(bothID);
        getChatList(bothID);
    }

    

    const getChatList = (bothID) => {
        console.log('snapshot bothID',bothID);

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



    return(
        <div className="App container">
        <h1> Chat </h1>
        <div className="row col-md-12">
            <div className="col-3">
                <div className="row center">Friends</div>
                <div className="frame col-md-12">
                    {friendList 
                        ? friendList.map((user, index) => (user.id != userID) ? 
                            <div className="card friend mb-2 hover text-center" data-id={user.id} data-name={user.name} onClick={Chat}>
                                {user.name}
                            </div>  
                            : '')
                        : ''}
                </div>
            </div>
            <div className="col-6">
                <div id="friendName" className="row center"><p>&nbsp;</p></div>
                
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
            </div>
        </div>
    </div>
    )
}

export default Chat;