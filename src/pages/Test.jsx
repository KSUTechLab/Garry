import { React, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'

export default function Test(){
    const tokenId = 'com.naver.nid.oauth.state_token';
    const [isLogin, setLogin] = useState(localStorage.hasOwnProperty(tokenId));
    useEffect(() => {
        console.log(localStorage.getItem(tokenId));
        console.log(localStorage.hasOwnProperty(tokenId));
        setLogin(localStorage.hasOwnProperty(tokenId));
    }, [])

    return(
        <>
        {isLogin ? <Success/> : <Navigate replace to = "/login"/>}
        </>
    );
}

function Success(){
    return(
        <>
        <h1>Welcome ~~</h1>
        <h1>Welcome ~~</h1>
        <h1>Welcome ~~</h1>
        <h1>Welcome ~~</h1>
        </>
    );
}