import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
 
                <NavMenu>
                
                    <NavLink to="/" >
                        About
                    </NavLink>
                    <NavLink to="/works_anim" activeStyle>
                        WorksAnim
                    </NavLink>
                    <NavLink to="/works_code" activeStyle>
                        WorksCode
                    </NavLink>
                    <NavLink to="/resume_code" activeStyle>
                        Resume Code
                    </NavLink>
                    
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                
            </Nav>
        </>
    );
};
 
export default Navbar;