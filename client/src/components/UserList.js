import React, { useState } from "react";
import firebase from '../utils/firebase'
import Axios from 'axios';

function UserList({user}) {

    const user_id = '1';
    const [withUserID,setWithUserID] = useState('');
    const addFriend = (e) => {

        setWithUserID(e.target.getAttribute('data-id'));
        console.log('userID',withUserID)
        
        if(withUserID != ''){

            Axios.post('http://localhost:3001/addFriend', {
                user_id : user_id,
                with_user_id : withUserID
            })

        }else{
            console.log('id empty')
        }
    }

    return (
        <div className="card friend mb-2 hover text-center" data-id={user.id} data-name={user.name} onClick={addFriend}>
            {user.name}
        </div>
    )   
}
export default UserList