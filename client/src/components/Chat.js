import React, { useState, useEffect } from "react";
import firebase from '../utils/firebase';
import '../css/chat.css'
import Axios from 'axios';
import ChatBox from './ChatBox'

function Chat() {

    const userID = 1;
    const [friendList,setFriendList] = useState();
    // get friendList
    useEffect(() => {
        Axios.get(`http://localhost:3001/friend/${userID}`).then((response) => {
            setFriendList(response.data);
        });
    }, [])

    //select friend chat
    const [bothID,setBothID] = useState('');
    const Chat = (e) => {
        
        let id = e.target.getAttribute('data-id');
        let name = e.target.getAttribute('data-name');
        document.getElementById("friendName").innerHTML = `<p>${name} ${id}</p>`;
        if(userID < id){
            setBothID(
                {
                    bothID:`${userID}-${id}`,
                    userID:userID
                }
            );
        }else{
            setBothID(
                {
                    bothID:`${id}-${userID}}`,
                    userID:userID
                }
            );
        }

        console.log('snapshot bothID',bothID);

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
                
                {bothID 
                    ? < ChatBox userID={bothID} />  
                    : ''}
            </div>
        </div>
    </div>
    )
}

export default Chat;