import 'react-native';
import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

/*it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});*/

it('renders without crashing', () => {
  shallow(<App />);
});