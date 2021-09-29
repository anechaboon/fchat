import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { useParams } from 'react-router-dom'

function Login(){
    //get param from  url
    const { id } = useParams()
    console.log('user_id',id)
    
    window.sessionStorage.setItem("userID", id);
    const user_id = window.sessionStorage.getItem("userID");

    console.log('user_id',user_id)
    return (
        <div className="form-group m-lg-5">
            <div className="col-3">
                {user_id}
            </div>
        </div>
    )
}
export default Login;