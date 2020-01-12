import React from "react";
import sss from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
          <div className={sss.dialogs}>
                <div className={sss.dialogsItems}>
                      <div className={sss.dialog + ' ' +sss.active}>
                          <NavLink to="/dialogs/1"> Dimych </NavLink>
                      </div>
                       <div className={sss.dialog}>
                           <NavLink to="/dialogs/2">Andrei</NavLink>
                        </div>
                        <div className={sss.dialog}>
                            <NavLink to="/dialogs/3">Sveta</NavLink>
                        </div>
                         <div className={sss.dialog}>
                             <NavLink to="/dialogs/3">Sasha</NavLink>
                         </div>

                                <div className={sss.messages}>
                                     <div className={sss.message}>Hi</div>
                                     <div className={sss.message}>How is you</div>
                                     <div className={sss.message}>Yo</div>
                                </div>
                 </div>
                </div>

    )
}


//
export default Dialogs;