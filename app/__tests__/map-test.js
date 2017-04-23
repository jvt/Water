import 'react-native';
import React from 'react';
import Map from '../map';
import Button from 'apsl-react-native-button';
import MapView from 'react-native-maps';
import Renderer from 'react-test-renderer';

describe('Map', () => {
	test('ReturnButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Return
			</Button>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});
})