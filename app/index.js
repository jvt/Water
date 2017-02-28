// app/index.js

import React, {Component} from 'react';
import {
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

export class Main extends Component {
	render() {
		const _navigateToWelcome = () => {
			AsyncStorage.removeItem('@water2340:userID');
			AsyncStorage.removeItem('@water2340:userToken');
			this.props.navigator.resetTo({
				index: 0
			});
		}

		const _navigateToProfile = () => {
			this.props.navigator.push({
				index: 4
			});
		}

		return (
			<View style={styles.fullscreen}>
				<View style={{alignItems: 'center'}}>
					<Image
						style={{width: 80, height: 175}}
						source={require('./images/droplet.png')}
					/>
				</View>
				<Text
					style={{fontSize: 20, textAlign: 'center', fontWeight: '200'}}>
					Clean Water
				</Text>
				<Button
					style={{backgroundColor: 'rgba(66, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
					onPress={() => _navigateToProfile()}
					textStyle={{fontSize: 18}}>
					Profile
				</Button>
				<Button
					style={{backgroundColor: 'rgba(232, 88, 74, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
					onPress={() => _navigateToWelcome()}
					textStyle={{fontSize: 18}}>
					Logout
				</Button>
			</View>
		)
	}
}

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