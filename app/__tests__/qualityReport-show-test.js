import {
	Text
} from 'react-native';
import React from 'react';
import QualityReportShow from '../qualityReport/show';
import Button from 'apsl-react-native-button';
import ModalPicker from 'react-native-modal-picker'
import Renderer from 'react-test-renderer';

describe('QualityReportShow', () => {

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

	test('TitleText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Water Condition
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('YearPicker', () => {
		const instance  = Renderer.create(
			<ModalPicker 
			style={{}}
			Year
			/>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('UnknownConditionText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Unknown Condition
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('LoadingText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Loading...
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('TwitterShareText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Share on Twitter
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('FacebookShareText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Share on Facebook
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ConditionText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Condition:
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ReportedDateText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			Reported:
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('VirusPPMText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			VirusPPM:
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ContaminantPPMText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			ContaminantPPM:
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

});
