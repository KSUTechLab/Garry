import axios from 'axios';
import { useEffect } from 'react';

const KakaoCallback = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_CALLBACK_URL;
    const SECRET_KEY = process.env.REACT_APP_KAKAO_SECRET_KEY;

    useEffect(() => {
        kakao_access();
	}, [])

    const kakao_access = () => {
        axios.get(`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`)
        .then((res) => {
            getToken();
        })
        .catch((err) => {
            console.log("인가코드 Error : " + err);
        })
    }

    const getToken = async () => {
        const code = window.location.href.split('=')[1].split('&')[0];
        // const state = window.location.href.split('=')[2].split('&')[0];

        axios.post(`https://kauth.kakao.com/oauth/token?garnt_type=authorization_code&clident_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}&client_secret=${SECRET_KEY}`)
        .then((res) => {
            console.log(res);
            const token = res.data.access_token
            localStorage.setItem('kakao_access_token', token);
        })
        .catch((err) => {
            console.log("토큰 Error : " + err);
        })
        window.location.replace('/')
    }
}

export default KakaoCallback;