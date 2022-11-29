import React, { useState } from 'react';
import { MenuLinks, NavBarLinksProps } from './MenuLinks';
import { MenuIconClose, MenuIconOpen, MenuItemLinks, MenuItems, Navbar, SidebarMenu } from './NavMenuStyle';
import * as FaIcons from 'react-icons/fa' 

const NavMenu: React.FC = () => {

  const [close, setClose] = useState(true)
  const showSidebar = () => setClose(!close)
    
  function CreateMenuItem(item: NavBarLinksProps, index: number) {
   return (
    <MenuItems key={index}>
      <MenuItemLinks  to={item.path}>
        {item.icon}
        <span style={{marginLeft: '16px'}}>{item.title}</span>
      </MenuItemLinks>
     </MenuItems>
   );
 }

  return (
    <>
    <Navbar>
      <MenuIconOpen to="#" onClick={showSidebar}>
        <FaIcons.FaBars />
      </MenuIconOpen> 
    </Navbar>
    <SidebarMenu close={close}>
      <MenuIconClose to="#" onClick={showSidebar}>
        <FaIcons.FaTimes />
      </MenuIconClose>
        {MenuLinks.map((item, index) => CreateMenuItem(item, index))}
    </SidebarMenu>
    </>
 );
};
export default NavMenu;