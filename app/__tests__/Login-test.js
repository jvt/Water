import {
    TextInput
} from 'react-native';
import Button from 'apsl-react-native-button';
import React from 'react';
import Login from '../login';
import Renderer from 'react-test-renderer';
import BusyIndicator from 'react-native-busy-indicator';

describe('Login', () => {
    test('renders correctly', ()  => {
        const login = Renderer.create(
            <Login />
        ).toJSON();
        expect(login).toMatchSnapshot();
    });

    test('UsernameField', ()  => {
        const instance = Renderer.create(
            <TextInput
            Style={{}}
            />
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });

    test('PasswordField', () => {
        const instance = Renderer.create(
            <TextInput
            Style={{}}
            />
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });

    test('LoginButton', () => {
        const instance = Renderer.create(
            <Button
            Style={{}}>
            Login
            </Button>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });

    test('ReturnButton', () => {
        const instance = Renderer.create(
            <Button
            Style={{}}>
            Return
            </Button>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });

    test('BusyIndicator', () =>  {
        const instance = Renderer.create(
            <BusyIndicator />
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});
