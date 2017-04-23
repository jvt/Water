jest.disableAutomock();

import {
	Text,
	ListView,
} from 'react-native';
import React from 'react';
import ReportList from '../report/list'
import Button from 'apsl-react-native-button';
import Renderer from 'react-test-renderer';

describe('ReportList', () => {
	test('BackButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Back
			</Button>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('NewButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			New
			</Button>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ListView', () => {
		const instance  = Renderer.create(
			<ListView 
			style={{}}>
			</ListView>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

})