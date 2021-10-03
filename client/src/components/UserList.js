import React, { useState } from "react";
import firebase from '../utils/firebase'
import axios from 'axios'

function UserList({user}) {

    // const user_id = window.sessionStorage.getItem("userID");
    const user_id ="615985ebfe3851558ab4ecdf";
    // const [withUserID,setWithUserID] = useState('');
    const [usersID,setUsersID] = useState({});

    const addFriend = async (e) => {
        if(e.target.getAttribute('data-id') != '' && e.target.getAttribute('data-id') != null){

            await setUsersID({
                user_id:user_id,
                with_user_id:e.target.getAttribute('data-id'),
            });


            
            axios.post('http://localhost:4000/relations/create-relation', usersID).then((res) =>{
                console.log('log req',res.data)
            }).catch((error) => {
                console.log('log req err',error)
            });


        }else{
            console.log('id empty')
        }
        
        // console.log('userID',withUserID)
        
    }

    return (
        <div className="card friend mb-2 hover text-center" data-id={user._id} data-name={user.name} onClick={addFriend}>
            {user.name}
        </div>
    )   
}
export default UserList