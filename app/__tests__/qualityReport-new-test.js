import {
	Image,
	Text,
	TextInput,
} from 'react-native';
import React from 'react';
import QualityReportNew from '../qualityReport/new';
import Button from 'apsl-react-native-button';
import Renderer from 'react-test-renderer';

describe('QualityReportNew', () => {

	test('DropletImage', () => {
		const instance  = Renderer.create(
			<Image 
			style={{}}
			Droplet
			/>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('TitleText', () => {
		const instance  = Renderer.create(
			<Text 
			style={{}}>
			New Water Report
			</Text>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('VirusPPMInput', () => {
		const instance  = Renderer.create(
			<TextInput
			style={{}}
			VirusPPM
			/>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('ContaminantPPMInput', () => {
		const instance  = Renderer.create(
			<TextInput
			style={{}}
			ContaminantPPM
			/>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('SubmitButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Submit
			</Button>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('CancelButton', () => {
		const instance  = Renderer.create(
			<Button 
			style={{}}>
			Cancel
			</Button>

		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

});
