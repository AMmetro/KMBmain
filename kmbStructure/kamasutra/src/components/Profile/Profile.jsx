import React from "react";
import sss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";







const Profile = (props) => {



  return (




         <div className={sss.Profile}>

             <ProfileInfo />

             <MyPosts post={props.profilePage.post} />






         </div>

  )

}

export default Profile;

