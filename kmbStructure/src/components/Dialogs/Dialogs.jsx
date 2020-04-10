import React from "react";
import sss from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItems from "./DialogItems/DialogItems";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {

    let state=props.dialogsPage;

    let dialogElement = state.dialogs.map (element =>  <DialogItems id={element.id} key={element.id} name={element.name}/> );
    let messagesElements = state.messages.map (elem => <Message message={elem.message} id={elem.id} key={elem.id} /> );
    let newMessageBody=state.newMessageBody;

    let newPostElement=React.createRef();


    let onSendMessageClick = ()=> {
        props.sendMessage();
    };

    let onNewMessageChange = (e)=> {
        let body=e.currentTarget.value;
        props.updateNewMessageBody(body);
     };


     // if (props.auth==false) return <Redirect to={"/Login"}   />

    return (

        <div className={sss.dialogs}>

            <div className={sss.dialogsItems}>

                <div><textarea ref={newPostElement}
                               value={newMessageBody}
                               placeholder="put yours message"
                               onChange={onNewMessageChange}></textarea></div>

                <button onClick={onSendMessageClick}>Add Message</button>
                {dialogElement}
            </div>

            <div className={sss.messages}>
                 {messagesElements}
            </div>



        </div>


    )
}

export default Dialogs;