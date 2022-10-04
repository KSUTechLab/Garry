import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NaverLogin = ({ /*setGetToken, setUserInfo*/ }) => {
	const navigate = useNavigate();
	const { naver } = window;

	const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
	const NAVER_CALLBACK_URL = process.env.REACT_APP_NAVER_CALLBACK_URL;

	const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,     
			isPopup: false,
			loginButton: { color: 'green', type: 3, height: 58 },
			callbackHandle: true,
		})
		naverLogin.init()  
      
    	// naverLogin.getLoginStatus(async function (status) {
		// 	if (status) {
        //        setUserInfo(naverLogin.user)
		// 	}
		// })     
	}

	    const userAccessToken = () => {
		    window.location.href.includes('access_token') && getToken()
		}

      	const getToken = () => {
			const token = window.location.href.split('=')[1].split('&')[0]
			console.log(token);

			localStorage.setItem('access_token', token)

			console.log(localStorage.getItem('com.naver.nid.oauth.state_token'));
			navigate('/');
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