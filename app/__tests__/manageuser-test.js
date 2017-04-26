import {
	Text,
	TextInput
} from 'react-native';
import React from 'react';
import Button from 'apsl-react-native-button';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Renderer from 'react-test-renderer';

describe('ManageUser', () => {

	test('TitleText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			My Account
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('UsernameText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Username:
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('UsernameInput', () => {
		const instance  = Renderer.create(
			<TextInput
			style={{}}
			Username
			/>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('HomeAddressText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Home Address:
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('HomeAddressInput', () => {
		const instance  = Renderer.create(
			<TextInput
			style={{}}
			HomeAddress
			/>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('RoleText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Role:
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('UserTypePicker', () => {
		const instance  = Renderer.create(
			<SegmentedControlTab 
			style={{}}
			Role
			/>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('TitleText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Title:
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('TitleInput', () => {
		const instance  = Renderer.create(
			<TextInput
			style={{}}
			Title
			/>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('SaveButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Save
			</Button>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ReturnButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Return
			</Button>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

});
