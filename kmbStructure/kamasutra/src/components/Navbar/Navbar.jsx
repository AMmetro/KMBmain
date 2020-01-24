import React from "react";
import sss from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (

        <nav className={sss.nav}>
            <div className={sss.item}>

                {/*     <a href="/profile"> Profile </a>*/}

                <NavLink to="/Profile" activeClassName={sss.activeLink}> Profile </NavLink>
            </div>

            <div className={sss.item}>
                <NavLink to="/Dialogs" activeClassName={sss.activeLink}> Dialogs </NavLink>
            </div>

            <div className={sss.item}>
                <NavLink to="/News" activeClassName={sss.activeLink}>News</NavLink>
            </div>

            <div className={sss.item}>
                <NavLink to="/Musik" activeClassName={sss.activeLink}>Musik</NavLink>
            </div>

            <div className={sss.item}>
                <NavLink to="/Setting" activeClassName={sss.activeLink}>Setting</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;