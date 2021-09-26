import React, { useState,useEffect } from "react";
import firebase from '../utils/firebase';
import Axios from 'axios';

function User() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');


    const createUser = () => {
        Axios.post('http://localhost:3001/create', {
            name: name,
            email: email
        })
        // const userRef = firebase.database().ref('users')
        // const user = {
        //     name,
        //     email
        // }
        // userRef.push(user);
    }
    return(
        <div className="App container">
            <h1> User </h1>
            <div className="information">
                <div className="mb-3">
                    <label htmlfor="name" className="form-label">Name :</label>
                    <input type="text" className="form-control" placeholder="Enter Name" onChange={(event)=>{setName(event.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlfor="position" className="form-label">Email :</label>
                    <input type="text" className="form-control" placeholder="Enter Email" onChange={(event)=>{setEmail(event.target.value)}}></input>
                </div>
                <button className="btn btn-success" onClick={createUser}>Add User</button>

            </div>
        </div>
    )
}

export default User;