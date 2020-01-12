import React from "react";
import sss from './MyNews.module.css';
import News from "./News";
import Post from "../Profile/MyPosts/Post";



const MyNews= ()=>{


    return <div className={sss.MyNews}>

        <div className={sss.item}> new news </div>
        <textarea> </textarea>
        <button>Add post</button>
        <News />
        <News />
    </div>


    // return  <div className={sss.MyNews}>
    //              <News />
    //
    //              </div>



}

export default MyNews;


