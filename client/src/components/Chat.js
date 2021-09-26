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
    const [withUserID,setWithUserID] = useState('');
    const [withName,setWithName] = useState('');
    const [usersID,setUsersID] = useState();
    const Chat = (e) => {
        setWithUserID(e.target.getAttribute('data-id'));
        setWithName(e.target.getAttribute('data-name'));
        
        console.log('_with_user_id',usersID)

        document.getElementById("friendName").innerHTML = `<p>${withName} ${withUserID}</p>`;
        setUsersID({
            'user_id':userID,
            'with_user_id':withUserID
        });

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
                < ChatBox userID={usersID} />
                
            </div>
        </div>
    </div>
    )
}

export default Chat;