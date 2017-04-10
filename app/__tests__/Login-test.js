jest.disableAutomock();

const React = require('React');
const ReactTestRenderer = require('react-test-renderer');
const Text = require('Text');
const TextInput = require('TextInput');

describe('UsernameField', () => {
    it('renders correctly', () => {
        const instance  = ReactTestRenderer.create(
            <TextInput style={{}}
            />
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});

