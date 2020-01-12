import React from "react";
import sss from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return  (<nav className={sss.nav}>
                <div className={sss.item}>
                    <NavLink to="/Profile"> Profile </NavLink>
                </div>

                <div className={sss.item}>
                    <NavLink to="/Dialogs"> Dialogs </NavLink>
                </div>

                 <div className={sss.item}>
                        <NavLink to="/News">News</NavLink>
                 </div>

                <div className={sss.item}>
                        <NavLink to="/Musik">Musik</NavLink>
                </div>

                 <div className={sss.item}>
                     <NavLink to="/Setting">Setting</NavLink>
                 </div>
              </nav>
             )
                    }

export default Navbar;