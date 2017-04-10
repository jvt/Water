jest.disableAutomock();

const React = require('React');
const ReactTestRenderer = require('react-test-renderer');
const Text = require('Text');
const TextInput = require('TextInput');
const Button = require('Button');

describe('UsernameField', () => {
    it('renders correctly', () => {
        const instance  = ReactTestRenderer.create(
            <TextInput style={{}}
            />
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});

describe('PasswordField', () => {
    it('renders correctly', () => {
        const instance  = ReactTestRenderer.create(
            <TextInput style={{}}
            />
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});

describe('LoginButton', () => {
    it('renders correctly', () => {
        const instance  = ReactTestRenderer.create(
            <Button 
            style={{}}
            title="Login">
            Login
            </Button>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});

describe('CancelButton', () => {
    it('renders correctly', () => {
        const instance  = ReactTestRenderer.create(
            <Button style={{}}
            title="Return">
            Return
            </Button>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});
