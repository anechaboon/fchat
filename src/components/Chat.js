import React, { useState } from "react";
import firebase from '../utils/firebase';
import '../css/chat.css'
function Chat() {

    return(
        <div className="App container">
        <h1> Chat </h1>
        <div className="row col-md-12">
            <div className="col-3">
                <div className="row center">Friends</div>
                <div className="frame col-md-12">

                </div>
            </div>
            <div className="col-6">
                <div className="row center">Friends</div>
                <div className="frame col-md-12">
                </div>
            </div>
        </div>
    </div>
    )
}

export default Chat;