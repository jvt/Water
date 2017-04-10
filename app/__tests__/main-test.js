jest.disableAutomock();

const React = require('React');
const Renderer = require('react-test-renderer');
const Button = require('Button');

describe('ProfileButton', () => {
    it('renders correctly', () => {
        const instance  = Renderer.create(
            <Button 
            style={{}}
            title="Profile">
            Profile
            </Button>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});