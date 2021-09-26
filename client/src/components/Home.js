import React, { useState, useEffect } from "react";
import firebase from '../utils/firebase'
import UserList from './UserList'
import Axios from 'axios';

function Home(){
    
    const userID = 1;
    window.sessionStorage.setItem("userID", userID);
    const [userList,setUserList] = useState();

    useEffect(() => {
        Axios.get(`http://localhost:3001/user`).then((response) => {
            setUserList(response.data);
        });
    }, [])


    var ref = firebase.database().ref("Relation");
    ref.orderByChild("userID").equalTo("-MkShbYkOvLxHJhwXgcV").on("child_added", function(snapshot) {
        console.log('snapshot home',snapshot.val());
    });


    // useEffect(() => {
    //     const userRef = firebase.database().ref('users');
    //     userRef.on('value', (snapshot) => {
    //         const users = snapshot.val();
    //         const userList = [];
    //         for(let id in users){
    //             if(id != '-MkShbYkOvLxHJhwXgcV'){
    //                 userList.push({ id, ...users[id]});
    //             }
    //         }
    //         setUserList(userList);
    //     })

    // }, [])


    return (
        <div className="form-group m-lg-5">
            <div className="col-3">
                {userList 
                    ? userList.map((user, index) => (user.id != userID) ? <UserList user={user} key={index} />  : '')
                    : ''}
            </div>
        </div>
    )
}
export default Home;