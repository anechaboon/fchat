import React, { useState } from "react";
import firebase from '../utils/firebase'
import Axios from 'axios';

function Friend({user}) {

    const user_id = window.sessionStorage.getItem("userID");
    const [withUserID,setWithUserID] = useState('');
    const [withName,setWithName] = useState('');
    const Chat = (e) => {

        setWithName(e.target.getAttribute('data-name'));
        console.log('chat userID',withName)
        
        document.getElementById("friendName").innerHTML = `<p>${withName}</p>`;
        
    }

    return (
        <div className="card friend mb-2 hover text-center" data-id={user.id} data-name={user.name} onClick={Chat}>
            {user.name}
        </div>
    )   
}
export default Friend