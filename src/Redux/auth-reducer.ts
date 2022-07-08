import {authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from '../api/api';
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'; //samurai-network/auth/
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

type initialStateType = {
	userId: number | null
	email: string | null
	login: string | null
	isAuth: boolean
	captchaUrl: string | null
}

let initialState: initialStateType = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
	captchaUrl: null
};

const authReducer = (state = initialState, action: any): initialStateType => {
   switch (action.type) {
      case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
         return { ...state, ...action.payload };

      default:
         return state;
   }
};

type SetAuthUserDataActionPayloadType = {
	userId: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}

type SetAuthUserDataActionType = {
	type: typeof SET_USER_DATA,
	payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
   type: SET_USER_DATA,
   payload: { userId, email, login, isAuth },
});

type GetCaptchaUrlSuccessActionType = {
	type: typeof GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl: string },
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
   type: GET_CAPTCHA_URL_SUCCESS,
   payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
	let meData = await authAPI.me();
	if (meData.resultCode === ResultCodesEnum.Success) {
		let { id, login, email } = meData.data;
		dispatch(setAuthUserData(id, email, login, true ));
	}
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null ) => async (dispatch: any) => {
	const loginData = await authAPI.login(email, password, rememberMe, captcha);

	if (loginData.resultCode === ResultCodesEnum.Success) {
		dispatch(getAuthUserData());
	} else {
		if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
			dispatch(getCaptchaUrl());
		}
		let message =
			loginData.messages.length > 0
				? loginData.messages[0]
				: 'Some error';
		dispatch(stopSubmit('login', { _error: message }));
	}
}

export const getCaptchaUrl = () => async (dispatch: any) => {
	const captchaUrlData = await securityAPI.getCaptchaUrl();
	dispatch(getCaptchaUrlSuccess(captchaUrlData.url));
}

export const logout = () => async (dispatch: any) => {
	const logoutData = await authAPI.logout();

	if (logoutData.resultCode === ResultCodesEnum.Success) {
		dispatch(setAuthUserData(null, null, null, false));
	}
}

export default authReducer;
