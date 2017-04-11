jest.disableAutomock();

import 'react-native';
import React from 'react';
import Main from '../main'
import Button from 'apsl-react-native-button';
import Renderer from 'react-test-renderer';

describe('Main', () => {
	test('renders correctly', () => {
		const screen = Renderer.create(
		<Main />
		).toJSON();
		expect(screen).toMatchSnapshot();
	});
	
	test('ProfileButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Profile
			</Button>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('NewReportButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			New Report
			</Button>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ShowAllReportsButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Show All Reports
			</Button>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ViewMapButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			View Map
			</Button>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('LogoutButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Logout
			</Button>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

});
