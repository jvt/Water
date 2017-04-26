import {
	Text
} from 'react-native';
import React from 'react';
import AdminPanel from '../adminPanel';
import Button from 'apsl-react-native-button';
import Renderer from 'react-test-renderer';

describe('AdminPanel', () => {	
	test('BackButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Back
			</Button>

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

	test('UsernameText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Username:
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('BannedTrueText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Banned: True
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('BannedFalseText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Banned: False
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('RoleUserText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Role: User
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('RoleWorkerText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Role: Worker
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('RoleManagerText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Role: User
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

});
