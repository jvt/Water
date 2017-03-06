// app/index.js

import React, {Component} from 'react';
import {
	AsyncStorage,
	View,
	Alert,
	Image,
	Navigator,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

import styles from './styles';
import Button from 'apsl-react-native-button';
import Login from './login';
import Registration from './registration';
import Welcome from './initial';
import Profile from './profile';
import Main from './main';

export default class water extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const routes = [
			{
				title: 'Welcome Screen',
				index: 0
			},
			{
				title: 'Login Screen',
				index: 1
			},
			{
				title: 'Register Screen',
				index: 2
			},
			{
				title: 'Main Application',
				index: 3
			},
			{
				title: 'Profile',
				index: 4
			},
			{
				title: 'Water Report',
				index: 5
			},
			{
				title: 'List Water Reports',
				index: 6
			},
		];

		const renderScene = (route, navigator) => {
			if (route.index === 0) {
				return <Welcome navigator={navigator}></Welcome>
			} else if (route.index === 1) {
				return <Login navigator={navigator}></Login>
			} else if (route.index === 2) {
				return <Registration navigator={navigator}></Registration>
			} else if (route.index === 3) {
				return <Main navigator={navigator}></Main>
			} else if (route.index === 4) {
				return <Profile navigator={navigator}></Profile>
			}
		};

		return (
			<Navigator
				initialRoute={routes[0]}
				initialRouteStack={routes}
				renderScene={renderScene}
				configureScene={(route) => {
					if (route.index === 1 || route.index === 2) {
						return Navigator.SceneConfigs.VerticalUpSwipeJump;
					}
					return Navigator.SceneConfigs.PushFromRight;
				}}
			/>
		)
	}
}