import App from '../../App';
import renderer from 'react-test-renderer'
import Link from '../../components/Links/Link';

it('<link /> the class when hovered', () => {
  const component : any = renderer.create(
    <Link page="http://www.ithsdistans.se">iths distans</Link>,
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
