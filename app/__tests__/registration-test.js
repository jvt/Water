import {
    TextInput
} from 'react-native';
import Button from 'apsl-react-native-button';
import React from 'react';
import Registration from '../registration';
import Renderer from 'react-test-renderer';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import BusyIndicator from 'react-native-busy-indicator';

describe('Registration', () => {
    test('renders correctly', ()  => {
        const login = Renderer.create(
            <Registration />
        ).toJSON();
        expect(login).toMatchSnapshot();
    });

    test('UsernameField', ()  => {
        const instance = Renderer.create(
            <TextInput
            Style={{}}
            Username
            />
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });

    test('PasswordField', () => {
        const instance = Renderer.create(
            <TextInput
            Style={{}}
            Password
            />
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });

    test('RegisterButton', () => {
        const instance = Renderer.create(
            <Button
            Style={{}}>
            Register
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
