import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}><HomeIcon color='action' />Home</SidebarLink>
                    <SidebarLink to="wallet" onClick={toggle}><AccountBalanceWalletIcon color='action' />Wallet</SidebarLink>
                    <SidebarLink to="store" onClick={toggle}><StorefrontIcon color='action' />Store</SidebarLink>
                    <SidebarLink to="tasks" onClick={toggle}><ListAltIcon color='action' />Tasks</SidebarLink>
                    <SidebarLink to="settings" onClick={toggle}><SettingsIcon color='action' />Settings</SidebarLink>
                    <SidebarLink to="signout" onClick={toggle}><ExitToAppIcon color='action' />Sign Out</SidebarLink>
                </SidebarMenu>
                
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

 {/* <SideBtnWrap>
                    <SidebarRoute to="/"></SidebarRoute>
                </SideBtnWrap> */}