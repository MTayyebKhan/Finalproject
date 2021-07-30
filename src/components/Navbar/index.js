import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavMenu, NavBtn, NavBtnLink, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks } from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
         <Nav>
             <NavbarContainer>
                <NavLogo to='/'>Home</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="wallet">Wallet</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="store">Store</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="tasks">Tasks</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="settings">Settings</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="signout">Signout</NavBtnLink>
                </NavBtn>
             </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar

{/* <NavLink to="/">
                 <h1>Logo</h1>
             </NavLink>
             <Bars />
             <NavMenu>
                 <NavLink to="/home" activeStyle>
                     Home
                 </NavLink>
                 <NavLink to="/wallet" activeStyle>
                     Wallet
                 </NavLink>
                 <NavLink to="/store" activeStyle>
                     Store
                 </NavLink>
                 <NavLink to="/tasks" activeStyle>
                     Tasks
                 </NavLink>
                 <NavLink to="/settings" activeStyle>
                     Settings
                 </NavLink>
                 <NavLink to="/signout" activeStyle>
                     Sign Out
                 </NavLink>
             </NavMenu> */}