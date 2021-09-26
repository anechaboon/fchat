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
    const [withUserID,setWithUserID] = useState(0);
    const [withName,setWithName] = useState('');
    // const [usersID,setUsersID] = useState();
    const [bothID,setBothID] = useState('');

    const Chat = (e) => {
        setWithUserID(e.target.getAttribute('data-id'));
        setWithName(e.target.getAttribute('data-name'));

        document.getElementById("friendName").innerHTML = `<p>${withName} ${withUserID}</p>`;

        if(userID < withUserID){
            setBothID(`${userID}-${withUserID}`);
        }else{
            setBothID(`${withUserID}-${userID}`);
        }
        console.log('bothID',bothID)

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
                < ChatBox userID={bothID} />
                
            </div>
        </div>
    </div>
    )
}

export default Chat;