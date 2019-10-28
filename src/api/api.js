import * as axios from 'axios/index';

const tokken = {
	params: {
		'access-token': 'q4TogSNtq56u_RergrgFCy_SMlwY-yiCV8_I',
	},
	// headers: {
	// 	Authorization: 'Bearer q4TogSNtq56u_RergrgFCy_SMlwY-yiCV8_I',
	// },
};
const instance = axios.create({
	baseURL: 'https://gorest.co.in/public-api',
});

export const UserApi = {
	getPhoto(CurrentPage) {
		return instance.get(`/photos?page=${CurrentPage}`, tokken);
	},

};
