import {userAPI} from "../api/api";
import {SetUserProfileActionCreater} from "./profile-reducer";


export const SET_USER_DATA = "SET-USER-DATA";

let initialState ={
       userId: null,
       email: null,
       login: null,
       isAuth: false,
       isFetching: false
      }

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth:true}

        default:
            return state;
    }
};



export const setAuthUserData = (userId, email, login)=> { return  {type: "SET-USER-DATA", data:{userId, email, login}  } };



export const getAuthUserData = () => {
    return (dispatch) => {
        userAPI.authMe ()
            .then(response => {
                          if (response.data.resultCode===0) {
                              let {id, email, login} = response.data.data;
                              dispatch(setAuthUserData(id, email, login));
                          }})}}


export default authReducer;