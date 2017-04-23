import {
	TextInput,
	Text,
	Image
} from 'react-native';
import React from 'react';
import Profile from '../profile'
import Button from 'apsl-react-native-button';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import BusyIndicator from 'react-native-busy-indicator';
import Renderer from 'react-test-renderer';

describe('Profile', () => {
	test('renders correctly', () => {
		const profile = Renderer.create(
			<Profile />
		).toJSON();
		expect(profile).toMatchSnapshot();
	})

	test('MyAccountText', ()  => {
		const instance = Renderer.create(
			<Text
			Style={{}}>
			My Account
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('UsernameText', ()  => {
		const instance = Renderer.create(
			<Text
			Style={{}}>
			Username:
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
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

	test('HomeAddressText', ()  => {
		const instance = Renderer.create(
			<Text
			Style={{}}>
			Home Address:
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('HomeAddressField', ()  => {
		const instance = Renderer.create(
			<TextInput
			Style={{}}
			HomeAddress
			/>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('RoleText', ()  => {
		const instance = Renderer.create(
			<Text
			Style={{}}>
			Role:
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('RoleTabs', ()  => {
		const instance = Renderer.create(
			<SegmentedControlTab
			values={['User', 'Worker', 'Manager', 'Admin']}
			selectedIndex={0}
			Style={{}}
			Role
			/>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('TitleText', ()  => {
		const instance = Renderer.create(
			<Text
			Style={{}}>
			Title:
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('TitleField', ()  => {
		const instance = Renderer.create(
			<TextInput
			Style={{}}
			Title
			/>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('SaveButton', () => {
		const instance = Renderer.create(
			<Button
			Style={{}}>
			Save
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


})