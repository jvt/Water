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

describe('NewReportButton', () => {
    it('renders correctly', () => {
        const instance  = Renderer.create(
            <Button 
            style={{}}
            title="NewReport">
            New Report
            </Button>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});

describe('ShowAllReportsButton', () => {
    it('renders correctly', () => {
        const instance  = Renderer.create(
            <Button 
            style={{}}
            title="ShowAllReports">
            Show All Reports
            </Button>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});

describe('ViewMapButton', () => {
    it('renders correctly', () => {
        const instance  = Renderer.create(
            <Button 
            style={{}}
            title="ViewMap">
            View Map
            </Button>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});

describe('LogoutButton', () => {
    it('renders correctly', () => {
        const instance  = Renderer.create(
            <Button 
            style={{}}
            title="Logout">
            Logout
            </Button>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});
