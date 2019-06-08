import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <NavLink to="/" exact>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/courses" >
                My Creation
            </NavLink>
            {" | "}
            <NavLink to="/about" >
                About
            </NavLink>
        </nav>
    );
};

export default Header;
