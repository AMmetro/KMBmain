import React from "react";
import sss from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItems from "./DialogItems/DialogItems";



const Dialogs = (props) => {

       let newPostElement=React.createRef();

       function addPost() {
           alert (newPostElement.current.value);
       }


        let dialogElement = props.dialogsPage.dialogs.map (element =>  <DialogItems id={element.id} name={element.name}/> );
        let messagesElements = props.dialogsPage.message.map (elem => <Message message={elem.message} id={elem.id}/> );



    return (


        <div className={sss.dialogs}>



            <div className={sss.dialogsItems}>

                <div><textarea ref={newPostElement}></textarea></div>
                <button onClick={addPost}>Add Message</button>

                {dialogElement}
            </div>

            <div className={sss.messages}>
                 {messagesElements}
            </div>



        </div>


    )
}

export default Dialogs;