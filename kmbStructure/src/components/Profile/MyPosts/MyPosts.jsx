import React from "react";
import sss from './MyPosts.module.css';
import Post from './Post';



const MyPosts = (props) => {


    let PostsElements=props.posts.map (postElem =>  <Post posts={postElem.posts} likesCount={postElem.likesCount} id={postElem.id} /> );




    let newPostElement=React.createRef();


    let onAddPost = ()=> {
        props.addPost();

      

    };


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
         };


  return (

      <div className={sss.MyPosts}>
                   <div className={sss.postsBlock}>
                       <h3>    My posts </h3>
                   </div>
                    <div>
                     <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                    </div>
                   <button onClick={onAddPost}> Add post</button>

          {PostsElements}

         </div>
  )
}

export default MyPosts;


