import React from 'react';
import cls from './style.module.scss';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { logoutThunkCreator } from '../../reducer/AuthReducer';



function Header(props) {
	const googleLogout = () =>{

		props.logoutThunkCreator();
	}
	const fbLogout = () =>{

		props.logoutThunkCreator();
	}

    return (

        <header>
            <div className="container">
                <div className={`line ${cls.line}`}>
                    <div className="left">
                        <div className={cls.logo}
                             style={{backgroundImage: 'url(https://www.freeiconspng.com/uploads/flame-logo-png-30.png)'}}/>
                        <p className={cls.header}>DevloopTest</p>
                    </div>
                    <div className="right">
                        {props.isAuth ? <div className={cls.admin_block}>
                            <p className={cls.login}>
                                <img src={props.avatarUrl} />
                                <span>{props.firstName}</span>
                            </p>
								{props.loginType === 'GOOGLE' ?
									<GoogleLogout
										clientId="348224920183-816oinrvdk17mtt1rm1np501gca70gvc.apps.googleusercontent.com"
										buttonText="Logout"
										onLogoutSuccess={googleLogout}
									/>
										: props.loginType === 'FACEBOOK' ?
										<button onClick={fbLogout}>Logout</button>
										: null
								}


                        </div> : null}
                    </div>
                </div>
            </div>
        </header>
    )
}

let MapStateToProps = state => {
	return {
		firstName: state.AuthPage.loginData.firstName,
		avatarUrl:state.AuthPage.loginData.avatarUrl,
		isAuth: state.AuthPage.isAuth,
		loginType: state.AuthPage.loginType
	};
};

export default connect(
	MapStateToProps,
	{ logoutThunkCreator },
)(Header);