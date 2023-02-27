import React from 'react';
import style from "./Header.module.css";
import {
    Navbar,
    NavItem,
} from 'reactstrap';
import {NavLink as RouterLink} from "react-router-dom";

function Header(props) {
    const {navItems} = props;
    
    const items = navItems.map((item) => {
        if (item.img === "") {
            return(
                <NavItem key={item.url} className={`col align-self-center text-center`}>
                    <RouterLink className={`${style.navText} ${(isActive) => isActive ? "active" : undefined}`} to={item.url}>
                        {item.text}
                    </RouterLink>
                </NavItem>
            )
        } else {
            return(
                <NavItem key={item.url} className={`col align-self-center text-center ${style.navContent}`}>
                    <RouterLink to={item.url}>
                        <img src={item.img} alt={"logo"} className={style.navImg}/>
                    </RouterLink>
                </NavItem>
            );
        }
    });

    return (
        <div>
            <Navbar expand='md' container='xl'>
                <div className={`row ${style.navBox}`}>
                    {items}
                </div>
            </Navbar>
        </div>
    );
}

export default Header;
