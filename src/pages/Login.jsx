import axios from 'axios';
import { React, useEffect, useState } from 'react';
import NaverLogin from '../api/auth/naver/NaverLogin';

export default function LoginPage(){
    const [userData, setUserData] = useState({
        email : '',
        pw : ''
    });

    const dataHandler = (e) => {

    }

    const logIn = () => {
        let body = {
            user_id : userData.email,
            user_pw : userData.pw
        }

        axios.post('~~', body, { withCredentials: true })
        .then((res) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${res.data.access_token}`;
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <>
        <NaverLogin/>
        <div>
            <h2>로그인</h2>
            <input type = "e-mail" placeholder = "e-mail"/>
            <input type = "password" placeholder = "password"/>
            <button type = "submit" onClick = {logIn}>Submit</button>
        </div>
        </>
    );
}