jest.disableAutomock();

import 'react-native';
import React from 'react';
import Main from '../main'
import Renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = Renderer.create(
    <Main />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
