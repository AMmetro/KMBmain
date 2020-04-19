import React from "react";
import sss from './MyPosts.module.css';
import Post from './Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {Textarea} from "../../Common/FormsControl/FormControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea}
            validate={[required, maxLength10 ]}/>
        </div>
        <div>
            <button onClick={props.onClick}> Add post</button>
        </div>
    </form>)
};

let ReduxAddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props) => {

    let PostsElements = props.posts.map(postElem => <Post posts={postElem.posts}
                                                          likesCount={postElem.likesCount}
                                                          id={postElem.id}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={sss.MyPosts}>
            <div className={sss.postsBlock}>
                <h3> My posts </h3>
            </div>
            <ReduxAddNewPostForm onSubmit={onAddPost}/>
            {PostsElements}
        </div>
    )
}


export default MyPosts;


