import React, { useState, useEffect } from "react";
import firebase from '../utils/firebase'
import Friend from './Friend'

function Home(){

    const [userList,setUserList] = useState();

    useEffect(() => {
        const userRef = firebase.database().ref('User');
        userRef.on('value', (snapshot) => {
            const users = snapshot.val();
            const userList = [];
            for(let id in users){
                userList.push({ id, ...users[id]});
            }
            setUserList(userList);
        })

    }, [])


    return (
        <div className="form-group m-lg-5">
            <div className="col-3">
                {userList 
                    ? userList.map((user, index) => <Friend user={user} key={index}/> )
                    : 'ss'}
            </div>
        </div>
    )
}
export default Home;