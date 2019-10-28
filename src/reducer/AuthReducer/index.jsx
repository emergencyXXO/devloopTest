import { SetInitialPhotoData } from '../AppReducer';

const GOOGLE_ACCESS = 'GOOGLE_ACCESS';
const FACEBOOK_ACCESS = 'FACEBOOK_ACCESS';
const SET_AUTH = 'SET_AUTH';
const SET_DATA_FROM_STORE = 'SET_DATA_FROM_STORE';
const LOGIN_TYPE_GOOGLE = 'LOGIN_TYPE_GOOGLE';
const LOGIN_TYPE_FACEBOOK = 'LOGIN_TYPE_FACEBOOK';





let InitialState = {
	loginData: {
		firstName:'',
		lastName:'',
		avatarUrl:''
	},
	isAuth:false,
	loginType:false,
};

let AuthReducer = (state = InitialState, action) => {
	switch (action.type) {

		case SET_AUTH:
			return {
				...state,
				isAuth: action.turn,
			};
			case LOGIN_TYPE_GOOGLE:
			return {
				...state,
				loginType: 'GOOGLE',
			};
			case LOGIN_TYPE_FACEBOOK:
			return {
				...state,
				loginType: 'FACEBOOK',
			};

		case GOOGLE_ACCESS:
			return {
				...state,
				loginData:{
					firstName:action.userData.profileObj.givenName,
					lastName:action.userData.profileObj.familyName,
					avatarUrl:action.userData.profileObj.imageUrl
				}
			};
			case FACEBOOK_ACCESS:
			return {
				...state,
				loginData:{
					familyName:action.userDataFB.name.split(' ')[1],
					givenName:action.userDataFB.name.split(' ')[0],
					imageUrl:action.userDataFB.picture.data.url,
				}
			};
			case SET_DATA_FROM_STORE:
			return {
				...state,
				loginData:{
					firstName:action.authData.givenName,
					lastName:action.authData.familyName,
					avatarUrl:action.authData.imageUrl,
				},
				isAuth:true,
				loginType:action.authData.loginType
			};

		default:
			return state;
	}
};



export const googleAccess = userData => ({
	type: GOOGLE_ACCESS,
	userData,
});

export const facebookAccess = userDataFB => ({
	type: FACEBOOK_ACCESS,
	userDataFB,
});

export const loginWithGoogle = () => ({
	type: LOGIN_TYPE_GOOGLE,
});
export const loginWithFacebook = () => ({
	type: LOGIN_TYPE_FACEBOOK,
});

export const setDataFromStore = authData => ({
	type: SET_DATA_FROM_STORE,
	authData,
});

export const isAuthAC = turn => ({
	type: SET_AUTH,
	turn,
});


export const loginwithGoogleThunkCreator = (response) => async dispatch => {
	  dispatch(googleAccess(response));
	  dispatch(loginWithGoogle());
	  dispatch(SetInitialPhotoData());
	 await localStorage.setItem('User', JSON.stringify({
		 isAuth:true,
		 familyName:response.profileObj.familyName,
		 givenName:response.profileObj.givenName,
		 imageUrl:response.profileObj.imageUrl,
		 loginType:'GOOGLE'

	 }));
	dispatch(isAuthAC(true));

};

export const loginwithFacebookThunkCreator = (response) => async dispatch => {
	  dispatch(facebookAccess(response));
	  dispatch(loginWithFacebook());
	dispatch(SetInitialPhotoData());
	 await localStorage.setItem('User', JSON.stringify({
		 isAuth:true,
		 familyName:response.name.split(' ')[1],
		 givenName:response.name.split(' ')[0],
		 imageUrl:response.picture.data.url,
		 loginType:'FACEBOOK'

	 }));
	dispatch(isAuthAC(true));

};
export const logoutThunkCreator = () => async dispatch => {
	dispatch(isAuthAC(false));
	localStorage.clear();
};


export default AuthReducer;
