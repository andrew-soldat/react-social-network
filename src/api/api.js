import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '537d18dc-fbc2-4c68-99cb-a3a679f47830',
   }
});

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => {
				return response.data;
			});
	},
	getFollow(userId) {
		return instance.post(`follow/${userId}`);
	},
	getUnfollow(userId) {
		return instance.delete(`follow/${userId}`);
	},
	getProfile(userId) {
		// console.warn("Obsolete method. Please profileApi object.");
		return profileAPI.getProfile(userId);
	}
}
export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`);
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`);
   },
   updateStatus(status) {
      return instance.put(`profile/status/`, { status: status });
   },
   savePhoto(photoFile) {
		const formData = new FormData();
      formData.append('image', photoFile);
		return instance.put(`profile/photo/`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data',
         }
      });
	},
   saveProfile(profile) {
		 return instance.put(`profile`, profile );
	}
};

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha });
	},
	logout() {
		return instance.delete(`auth/login`,);
	}
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`);
	}
}

