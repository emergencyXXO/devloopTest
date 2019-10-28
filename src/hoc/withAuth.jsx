import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { isAuthAC, setDataFromStore } from '../reducer/AuthReducer';

export const withAuthRedirect = (Component) =>{
	let mapStateToPropsRedirect = (state) =>{
		return{
			isAuth: state.AuthPage.isAuth
		}
	}

	class RedirectComponent extends React.PureComponent{
	    componentWillMount() {

	        if(!(JSON.parse(localStorage.getItem('User')) === null)){
				let authData = JSON.parse(localStorage.getItem('User'));
				this.props.setDataFromStore(authData);
            }

		}
		render(){
			if (!this.props.isAuth) return <Redirect to={"/login"} />;
			return <Component {...this.props}/>
		}
	}
	let withAutRedircetComponent = connect(mapStateToPropsRedirect,{isAuthAC, setDataFromStore})(RedirectComponent);
	return withAutRedircetComponent;
}