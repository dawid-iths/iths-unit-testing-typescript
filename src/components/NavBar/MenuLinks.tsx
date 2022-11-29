import * as FaIcons from 'react-icons/fa' 

export interface NavBarLinksProps {
    path: string;
    title: string;
    icon: any;
}

export const MenuLinks : NavBarLinksProps[] = [
    { title: 'Home',path: '/',icon: <FaIcons.FaHome /> },
    { title: 'About', path: '/About', icon: <FaIcons.FaBook /> },
    { title: 'Counter',path: '/Counters',icon: <FaIcons.FaTasks /> }
]