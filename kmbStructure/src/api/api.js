import * as axios from "axios";



    const instance=axios.create ({
            withCredentials: true,
            baseURL: `https://social-network.samuraijs.com/api`,
            headers: {"API-KEY":"dfa3df07-6fe1-42ec-85cb-0092d073f5e2"}
            });


export const userAPI = {

    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data;
            });
    },

     follow (userId) {
        return instance.post(`/1.0/follow/${userId}`)
    },

      unfollow (userId) {
        return instance.delete(`/1.0/follow/${userId}`)
    },

     getProfile (userId) {
        return instance.get(`/1.0/profile/` + userId)
    },

    authMe () {
        return instance.get(`/1.0/auth/me`)
    },




};