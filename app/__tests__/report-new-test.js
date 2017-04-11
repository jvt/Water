jest.disableAutomock();

import {
	TextInput
} from 'react-native';
import React from 'react';
import ReportNew from '../report/new'
import Button from 'apsl-react-native-button';
import Renderer from 'react-test-renderer';
import ModalPicker from 'react-native-modal-picker';
import BusyIndicator from 'react-native-busy-indicator';

describe('ReportNew', () => {
	test('renders correctly', () => {
		const screen = Renderer.create(
		<ReportNew />
		).toJSON();
		expect(screen).toMatchSnapshot();
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

    test('LatitudeField', () => {
        const instance = Renderer.create(
            <TextInput
            Style={{}}
            />
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });

    test('LongitudeField', () => {
        const instance = Renderer.create(
            <TextInput
            Style={{}}
            />
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });

	test('WaterTypePicker', () => {
		let i = 0;
		const waterSources = [
			{
				key: i++,
				label: 'Bottled'
			},
			{
				key: i++,
				label: 'Lake'
			},
			{
				key: i++,
				label: 'Well'
			},
			{
				key: i++,
				label: 'Stream'
			},
			{
				key: i++,
				label: 'Spring'
			}
		];
		const instance  = Renderer.create(
			<ModalPicker
				data={waterSources}
				style={{marginTop: 20, marginLeft: 20, marginRight: 20}}
				initValue="Water Type"/>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('WaterConditionPicker', () => {
		let j = 0;
		const conditions = [
			{
				key: j++,
				label: 'Waste'
			},
			{
				key: j++,
				label: 'Treatable-Clear'
			},
			{
				key: j++,
				label: 'Treatable-Muddy'
			},
			{
				key: j++,
				label: 'Potable'
			}
		];
		const instance  = Renderer.create(
			<ModalPicker
				data={conditions}
				style={{marginTop: 20, marginLeft: 20, marginRight: 20}}
				initValue="Water Condition"/>
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

	test('BusyIndicator', () => {
		const instance  = Renderer.create(
			<BusyIndicator />
		);

		expect(instance.toJSON()).toMatchSnapshot();
	});

});
