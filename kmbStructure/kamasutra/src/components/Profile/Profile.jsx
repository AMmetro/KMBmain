import React from "react";
import sss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
  return ( <div className={sss.Profile}>
             <div>
                <img src="http://mirpozitiva.ru/uploads/posts/2016-08/1472042492_01.jpg"/>
             </div>

              <MyPosts/>

         </div>

  )

}

export default Profile;

