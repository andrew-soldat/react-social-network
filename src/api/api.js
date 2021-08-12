import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'b9ea6f1b-a7b5-4f02-8e2e-2598be60f73f',
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
	}
};

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, { email, password, rememberMe });
	},
	logout() {
		return instance.delete(`auth/login`,);
	}
}

