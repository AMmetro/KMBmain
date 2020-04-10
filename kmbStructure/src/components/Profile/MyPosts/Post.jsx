import React from 'react';
import sss from './Post.module.css';
import ProfileInfo from "../ProfileInfo/ProfileInfo";


const Post = (props) => {

    return (

        <div className={sss.item}>

            <div>

                {props.posts}

                {props.id}

            </div>

            <span>like</span> {props.likesCount}
        </div>

    )
}


export default Post;







