import React from "react";
import sss from './Header.module.css';
import image from './img/header1.jpg'



const Header = () => {




    return <div className={sss.header}>

           <div>


                     <img src={image} ClassName={sss.imgHeader}/>




                </div>
           </div>

                    }


export default Header;