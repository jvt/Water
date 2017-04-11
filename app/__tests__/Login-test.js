jest.disableAutomock();

import {
    TextInput
} from 'react-native';
import Button from 'apsl-react-native-button';
import React from 'react';
import Login from '../login';
import Renderer from 'react-test-renderer';

describe('Login', () => {
    test('renders correctly', ()  => {
        const login = Renderer.create(
            <Login />
        ).toJSON();
        expect(login).toMatchSnapshot();
    });
});

