import { UserApi } from '../../api/api';

const SET_PHOTO = 'SET_PHOTO';
const SET_META_DATA = 'SET_META_DATA';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SET_INITIAL_PHOTO  = 'SET_INITIAL_PHOTO ';

let InitialState = {
	PhotoData: [],
	_meta: {
		pageCount: 0,
		TotalUserCount: 0,
		currentPage: 1,
	},

	isFetching: false,
};

let PhotoPageReducer = (state = InitialState, action) => {
	switch (action.type) {

		case SET_PHOTO:
			return {
				...state,
				PhotoData: state.PhotoData.concat(action.photo)
			};
			case SET_INITIAL_PHOTO :
			return {
				...state,
				PhotoData: []
			};

		case SET_META_DATA:
			return {
				...state,
				_meta: action.metaData,
			};
		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};

		default:
			return state;
	}
};

export const SetPhoto = photo => ({ type: SET_PHOTO, photo });
export const SetInitialPhotoData = () => ({ type: SET_INITIAL_PHOTO });
export const SetMetaData = metaData => ({ type: SET_META_DATA, metaData });
export const SetIsFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching });

export const getPhotoThunkCreator = CurrentPage => async dispatch => {
	dispatch(SetIsFetching(true));
	let response = await UserApi.getPhoto(CurrentPage);

	if (response.status === 200) {
		dispatch(SetPhoto(response.data.result));
		dispatch(SetMetaData(response.data._meta));
		dispatch(SetIsFetching(false));
	}
};


export default PhotoPageReducer;
