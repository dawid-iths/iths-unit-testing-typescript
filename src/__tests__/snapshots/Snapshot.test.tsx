import App from '../../App';
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom';

test('SnapShot test', () => {

    //arrange
    const path = "/snapshot";

    //act
  const tree = renderer
    .create( 
        <MemoryRouter initialEntries={[path]}>
            <App />
        </MemoryRouter>)
    .toJSON();

    //assert
    expect(tree).toMatchSnapshot();
});

