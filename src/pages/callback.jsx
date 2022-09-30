import React from 'react';
import { Link } from 'react-router-dom'

export default function Callback(){
    return(
        <>
        <h1>Main</h1>
        <Link to ='/Test'>
            <p>비밀 글입니다</p>
        </Link>
        </>
    );
}