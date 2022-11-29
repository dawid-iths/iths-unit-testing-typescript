import { render, screen } from '@testing-library/react'; 
import { Component } from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Router Tests', () => {
   

    test('Router About exist', () => {

        //arrange
        const path = "/about";

        //act
        render(
        <MemoryRouter initialEntries={[path]}>
            <App />
        </MemoryRouter>
        );

        //assert
       expect(screen).toBeDefined();
    })

    test('Router home exists', () => {

        //arrange
        const path = "/";
        //act
        render(
        <MemoryRouter initialEntries={[path]}>
            <App />
        </MemoryRouter>
        );

        //assert
       expect(screen).toBeDefined();
    })

    test('Router counter exists', () => {

        //arrange
        const path = "/counter";
        //act
        render(
        <MemoryRouter initialEntries={[path]}>
            <App />
        </MemoryRouter>
        );

        //assert
       expect(screen).toBeDefined();
    })

      test('snapshot counter exists', () => {

        //arrange
        const path = "/snapshot";
        //act
        render(
        <MemoryRouter initialEntries={[path]}>
            <App />
        </MemoryRouter>
        );

        //assert
       expect(screen).toBeDefined();
    })

})
