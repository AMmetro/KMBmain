import {userAPI} from "../api/api";
import {toggleFollowInProgres, unfollowSucsess} from "./users-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState =
    {
        posts: [
            {id: 1, posts: 'how are you', likesCount: 12},
            {id: 2, posts: 'It\`s what you do', likesCount: 11},
            {id: 3, posts: 'bla bla bla', likesCount: 25}
        ],
        newPostText: 'it-kamasutra.com',
        profile: null
    };

const profileReducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                posts: state.newPostText,
                likesCount: 0
            };
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText,
            }
        }

        case SET_USER_PROFILE: {

            return {...state, profile:action.profile}
        }

        default:
            return state;
    }
};


export const addPostActionCreater = ()=>{return  {type: "ADD-POST" }};

export const SetUserProfileActionCreater = (profile)=>{return  {type: "SET-USER-PROFILE", profile }};

export const updateNewPostTextActionCreator = (text)=> {return {type: "UPDATE-NEW-POST-TEXT", newText: text} };

export const geUsertProfile = (userId) => {

    return (dispatch) => {
        userAPI.getProfile (userId)
            .then(response => {
                dispatch(SetUserProfileActionCreater(response.data))
                         })    }}

 export default profileReducer;
