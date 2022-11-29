import { render, screen } from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Router Tests', () => {
   
test('About Page header contains correct value', () => {

        //arrange
        const expectedText = /This is what it's all about/i;
        const path = "/about";
        
        //act
        render(
        <MemoryRouter initialEntries={[path]}>
            <App />
        </MemoryRouter>
        );

        //assert
       expect(screen.getByRole('heading', { name: expectedText })).toBeInTheDocument()
    })
})


