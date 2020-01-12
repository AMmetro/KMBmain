import React from "react";
import sss from './MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {
  return (
      <div className={sss.MyPosts}>

                   <div className={sss.item}> new post </div>
                   <textarea> </textarea>
                   <button> Add post</button>
              <Post message='post1' likesCount="0" />
              <Post message='post2' likesCount="23"/>
              <Post message='post3' likesCount="3"/>
              <Post message='post4' likesCount="5"/>
         </div>
  )
}

export default MyPosts;


