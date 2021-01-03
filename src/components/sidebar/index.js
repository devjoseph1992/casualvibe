import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './sidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='product'onClick={toggle}>
                        Products
                    </SidebarLink>
                    <SidebarLink to='shop'onClick={toggle}>
                        Shop
                    </SidebarLink>
                    <SidebarLink to='contact'onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/" onClick={toggle}>Order Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
