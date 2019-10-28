import React from 'react';
import cls from './style.module.scss';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { loginwithFacebookThunkCreator, loginwithGoogleThunkCreator } from '../../reducer/AuthReducer';
import { Redirect } from 'react-router-dom';

const Login = props => {

	const responseFacebook = (response) => {
		props.loginwithFacebookThunkCreator(response);
	}

	const responseGoogleSucces = (response) => {

		props.loginwithGoogleThunkCreator(response);
	}
	const responseGoogleFail = (response) => {
		alert(response);
	}

	if (props.isAuth) {
		return <Redirect to="/" />;
	}

	return (


		<div className={cls.login__block}>
			<FacebookLogin
				appId="2679541375437548" //APP ID NOT CREATED YET
				fields="name,email,picture"
				callback={responseFacebook}

			/>

			<GoogleLogin
				clientId="348224920183-816oinrvdk17mtt1rm1np501gca70gvc.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
				buttonText="LOGIN WITH GOOGLE"
				onSuccess={responseGoogleSucces}
				onFailure={responseGoogleFail}
			/>

		</div>
	);
};

const mapStateToProps = state => ({
	isAuth:state.AuthPage.isAuth
});

export default connect(
	mapStateToProps,
	{loginwithGoogleThunkCreator,loginwithFacebookThunkCreator }
)(Login);
