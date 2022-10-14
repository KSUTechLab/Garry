import axios from 'axios';
import { useEffect } from 'react';

const NaverLogin = ({ /*setGetToken, setUserInfo*/ }) => {
	const { naver } = window;

	const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
	const NAVER_CALLBACK_URL = process.env.REACT_APP_NAVER_CALLBACK_URL;
	const NAVER_SECRET = process.env.REACT_APP_NAVER_CLIENT_SECRET;

	const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,     
			isPopup: false,
			loginButton: { color: 'green', type: 3, height: 58 },
			callbackHandle: true,
		})
		naverLogin.init();
      
    	// naverLogin.getLoginStatus(async function (status) {
		// 	if (status) {
        //        setUserInfo(naverLogin.user)
		// 	}
		// })     
	}

	    const userAccessToken = () => {
		    window.location.href.includes('access_token') && getToken()
		}

      	const getToken = async () => {
			// let params = new URL(document.location).searchParams;
			// let code = params.get("access_token");
			// let state = params.get("state");
			const state = window.location.href.split('=')[2].split('&')[0];
			const code = window.location.href.split('=')[1].split('&')[0];

			console.log("code : " + code);
			console.log("state : " + state);

			// 백엔드 서버 없이 프론트에서 실험하기 위해 네이버 인증 링크를 proxy 설정에 추가했다
			// 서버가 생기면 setupProxy.js에서 proxy 설정을 지우고 서버에서 API를 콜하자
			// axios.post(`/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_CALLBACK_URL}&state=${state}`)
			axios.post(`https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_SECRET}&code=${code}&state=${state}`)
			.then((res) => {
				axios.get(`https://nid.naver.com/oauth2.0/token`)
				.then((res) => {
					console.log('access token success ~~')
					console.log(res);
				})
				.catch((err) => {
					console.log("get error : ", err);
				})
				window.location.replace('/')
			})
			.catch((err) => {
				console.log("post error : ", err);
			})

			localStorage.setItem('access_token', state)

			// console.log(localStorage.getItem('access_token'));
			// console.log('================');
			// console.log(localStorage.getItem('com.naver.nid.oauth.state_token'));
		}

	useEffect(() => {
		initializeNaverLogin()
		userAccessToken()
	}, [])


	return (
		<>
			<div id="naverIdLogin" />
		</>
	);
}

export default NaverLogin;