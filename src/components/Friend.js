import React from 'react'
import firebase from '../utils/firebase'
function Friend({user}) {

    return (
        <div className="card friend mb-2 hover" data-id={user.id}>
            <center>
                {user.name}
            </center>
        </div>
    )   
}
export default Friend