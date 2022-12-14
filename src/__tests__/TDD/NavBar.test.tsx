import { render, screen } from '@testing-library/react'; 
import NavMenu from '../../components/NavBar/NavMenu';
import {  NavBarLinksProps } from '../../components/NavBar/MenuLinks';
import { MemoryRouter } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa' 

describe('NavBar tests', () => {

    test('render about link', () => {
        //arrange
        const expectedText = /About/i;

        //act
        render(<MemoryRouter><NavMenu /></MemoryRouter>);

        //assert
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    })

    test('render home link', () => {
        //arrange
        const expectedText = /Home/i;

        //act
        render(<MemoryRouter><NavMenu /></MemoryRouter>);

        //assert
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    })

    test('render counter link', () => {
        //arrange
        const expectedText = /Counter/i;

        //act
        render(<MemoryRouter><NavMenu /></MemoryRouter>);

        //assert
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    })

    test('menu links contains correct values', () => {
        //arrange
        const MenuLinks : NavBarLinksProps[] = [
            { title: 'Home', path: '/',icon: <FaIcons.FaHome /> },
            { title: 'About', path: '/About', icon: <FaIcons.FaBook /> },
            { title: 'Counter', path: '/Counter',icon: <FaIcons.FaTasks /> },
            { title: 'Snapshot', path: '/snapshot',icon: <FaIcons.FaCamera /> },
            { title: 'Style', path: '/styletest',icon: <FaIcons.FaPen /> }
        ]
        //act

        //assert
        expect(MenuLinks).toEqual(MenuLinks);
    })
})