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
})