import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SERVER_URL = "studyhard.pe.kr";

export default function Register(){
    const [userData, setUserData] = useState({
        user_id : '',
        user_name : ''
    });

    axios.post(SERVER_URL + "/api/auth/register")
    return(
        <>
        </>
    );
}