import {
    Image,
    Text
} from 'react-native';
import React from 'react';
import Initial from '../initial';
import Button from 'apsl-react-native-button';
import Renderer from 'react-test-renderer';

describe('Initial', () => {
	test('renders correctly', () => {
		const screen = Renderer.create(
		<Initial />
		).toJSON();
		expect(screen).toMatchSnapshot();
	});

	test('WaterImage', () => {
		const instance = Renderer.create(
			<Image
			Style={{}}
			Droplet
			/>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	})

	test('TitleText', () => {
		const instance  = Renderer.create(
			<Text
			style={{}}>
			Clean Water
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('GroupText', () => {
		const instance  = Renderer.create(
			<Text
			style={{}}>
			sudo Give Us A's
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('LoginButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Login
			</Button>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('RegisterButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Register
			</Button>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

})