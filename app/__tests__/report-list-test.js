jest.disableAutomock();

import {
	Text,
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

	test('ElementLocationText', () => {
		const instance  = Renderer.create(
			<Text
			style={{}}>
			Location
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ElementTypeText', () => {
		const instance  = Renderer.create(
			<Text
			style={{}}>
			Type
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ElementConditionText', () => {
		const instance  = Renderer.create(
			<Text
			style={{}}>
			Condition
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ElementReportedText', () => {
		const instance  = Renderer.create(
			<Text
			style={{}}>
			Reported
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ElementSubmittedByText', () => {
		const instance  = Renderer.create(
			<Text
			style={{}}>
			SubmittedBy
			</Text>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

})