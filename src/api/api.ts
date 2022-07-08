import axios from 'axios';
import {PhotosType, ProfileType, UsersType} from "../types/types";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '537d18dc-fbc2-4c68-99cb-a3a679f47830',
   }
});

type UsersResponseType = {
	items: Array<UsersType>
	totalCount: number
	error: string | null
}

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => {
				return response.data;
			});
	},
	getFollow(userId: number) {
		return instance.post(`follow/${userId}`);
	},
	getUnfollow(userId: number) {
		return instance.delete(`follow/${userId}`);
	},
	getProfile(userId: number) {
		// console.warn("Obsolete method. Please profileApi object.");
		return profileAPI.getProfile(userId);
	}
}

type UpdateStatusResponseType = {
	resultCode: ResultCodesEnum
	messages: Array<string>
	data: ProfileType
}

type SavePhotoResponseType = {
	data: PhotosType
	resultCode: ResultCodesEnum
	messages: Array<string>
}

type SaveProfileResponseType = {
	data: ProfileType
	resultCode: ResultCodesEnum
	messages: Array<string>
}

export const profileAPI = {
   getProfile(userId: number) {
      return instance.get<ProfileType>(`profile/${userId}`)
		  .then((response) => {
			  return response.data
		  });
   },
   getStatus(userId: number) {
      return instance.get<string>(`profile/status/${userId}`)
		  .then((response) => {
			  return response.data
		  });
   },
   updateStatus(status: string) {
      return instance.put<UpdateStatusResponseType>(`profile/status/`, { status: status })
		  .then((response) => {
			  return response.data
		  });
   },
   savePhoto(photoFile: string) {
		const formData = new FormData();
      formData.append('image', photoFile);
		return instance.put<SavePhotoResponseType>(`profile/photo/`, formData, {
					 headers: {
						'Content-Type': 'multipart/form-data',
					 }
				  })
			.then((response) => {
				return response.data
			});
	},
   saveProfile(profile: ProfileType) {
		 return instance.put<SaveProfileResponseType>(`profile`, profile )
			 .then((response) => {
				 return response.data
			 });
	}
};

export enum ResultCodesEnum {
	Success = 0,
	Error = 1
}

export enum ResultCodeForCaptcha {
	CaptchaIsRequired = 10
}

type MeResponseType = {
	data: {
		id: number
		email: string
		login: string
	}
	resultCode: ResultCodesEnum
	messages: Array<string>
}

type LoginResponseType = {
	data: {
		userId: number
	}
	resultCode: ResultCodesEnum | ResultCodeForCaptcha
	messages: Array<string>
}

export const authAPI = {
	me() {
		return instance.get<MeResponseType>(`auth/me`)
			.then((response) => {
				return response.data
			});

	},
	login(emai: string, password: string, rememberMe: boolean = false,  captcha: null | string = null) {
		return instance.post<LoginResponseType>(`auth/login`, { emai, password, rememberMe, captcha })
			.then((response) => {
				return response.data
			});
	},
	logout() {
		return instance.delete(`auth/login`)
			.then((response) => {
				return response.data
			});

	}
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`)
			.then((response) => {
				return response.data
			});
	}
}

