import React from 'react';
import sss from './Post.module.css';


const Post = (props) => {

    return (

        <div className={sss.item}>

            <div>
                <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"/>{props.message}
            </div>

            <span>like</span>{props.likesCount}
        </div>

    )
}


export default Post;







