import React from "react";
import sss from './Login.module.css';
import HeaderLogo from '../Header/img/desk.jpg'
import {NavLink} from "react-router-dom";


const Header = (props) => {



    return <div className={sss.header}>


                    <div className={sss.divholder}>

                    </div>
                       {/*<img src={HeaderLogo} className={sss.imgHeaderLogo}/>*/}

                        <div className={sss.loginBlock}>

                            <h1> LOGIN </h1>

                        </div>
           </div>
                    }


export default Header;