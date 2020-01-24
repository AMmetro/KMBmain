import React from "react";
import sss from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {


    let PostsElements=props.post.map (postElem =>  <Post message={postElem.post} likesCount={postElem.likesCount} id={postElem.id} /> );

    let newPostElement=React.createRef();

    function addPost() {
        alert (newPostElement.current.value);
    }



  return (



      <div className={sss.MyPosts}>

                   <div className={sss.postsBlock}>
                       <h3>    My posts </h3>
                   </div>

                    <div>
                     <textarea ref={newPostElement}></textarea>
                    </div>

                   <button onClick={addPost}> Add post</button>

          {PostsElements}


         </div>
  )
}

export default MyPosts;


