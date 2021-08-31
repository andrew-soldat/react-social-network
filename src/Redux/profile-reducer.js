import { usersAPI, profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { nanoid } from 'nanoid';

const ADD_POST = 'ADD-POST',
   DELETE_POST = 'DELETE-POST',
   SET_USER_PROFILE = 'SET_USER_PROFILE',
   SET_STATUS = 'SET_STATUS',
   SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
   postsData: [
      { post: 'It is my first post', id: 1 },
      { post: 'Hi', id: '2' },
      { post: 'Yo', id: '30' },
      { post: 'Good!', id: '4' },
      { post: 'No', id: '5' },
   ],
	profile: null,
	status: "-----"
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            post: action.newPostText,
            id: nanoid(),
         };

         return {
            ...state,
            postsData: [...state.postsData, newPost],
         };

      case DELETE_POST:
         return {
            ...state,
            postsData: [
               ...state.postsData.filter((p) => p.id !== action.postId),
            ],
         };

      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile,
         };

      case SET_STATUS:
         return {
            ...state,
            status: action.status,
         };

      case SAVE_PHOTO_SUCCESS:
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos}
         };

      default:
         return state;
   }
};

export const addPostActionCreator = (newPostText) => ({ type: 'ADD-POST', newPostText });
export const deletePostActionCreator = (postId) => ({ type: 'DELETE-POST', postId });
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile });
export const setStatus = (status) => ({ type: 'SET_STATUS', status });
export const savePhotoSuccess = (photos) => ({ type: 'SAVE_PHOTO_SUCCESS', photos });

export const getUserProfileThunk = (userId) => async (dispatch) => {
	const response = await usersAPI.getProfile(userId);

   dispatch(setUserProfile(response.data));
}

export const getStatusThunk = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId);

	dispatch(setStatus(response.data));
}

export const updateStatusThunk = (status) => async (dispatch) => {
	try {
		const response = await profileAPI.updateStatus(status);
	
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	} catch (error) {
		console.log(error.message);
	}
}

export const savePhoto = (file) => async (dispatch) => {
	const response = await profileAPI.savePhoto(file);

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
}

export const saveProfile = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.userId;
	const response = await profileAPI.saveProfile(profile);
	if (response.data.resultCode === 0) {
		dispatch(getUserProfileThunk(userId));
	} else {
		let message =
			response.data.messages.length > 0
				? response.data.messages[0]
				: 'Some error';
		dispatch(stopSubmit('edit-profile', { _error: message }));
		// let contactValue =  message.substring(30, message.length - 1);
		// dispatch(stopSubmit('edit-profile', {"contacts": { "facebook": message }}));
		return Promise.reject(message)
	}
}

export default profileReducer;
