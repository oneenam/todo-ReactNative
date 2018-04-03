/**
 * Created by Muhammad Enamul Huq Sarkar on 4/3/18
 */
import React from 'react';
import Label from '../index';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Label />).toJSON();
    expect(tree).toMatchSnapshot();
});