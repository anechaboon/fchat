import React, { useState, useEffect } from "react";
import firebase from '../utils/firebase'
import UserList from './UserList'
import Axios from 'axios';

function Home(){
    const user_id = window.sessionStorage.getItem("userID");
    
    const [userList,setUserList] = useState();

    useEffect(() => {
        Axios.get(`http://localhost:3001/user`).then((response) => {
            setUserList(response.data);
        });
    }, [])

    return (
        <div className="form-group m-lg-5">
            <div className="col-3">
                {userList 
                    ? userList.map((user, index) => (user.id != user_id) ? <UserList user={user} key={index} />  : '')
                    : ''}
            </div>
        </div>
    )
}
export default Home;