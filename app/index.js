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
import Welcome from './main';

export class Main extends Component {
	render() {
		const _navigateToWelcome = () => {
			this.props.navigator.resetTo({
				index: 0
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
			{title: 'Welcome Screen', index: 0},
			{title: 'Login Screen', index: 1},
			{title: 'Register Screen', index: 2},
			{title: 'Main Application', index: 3},
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
			}
		};

		return (
			<Navigator
				initialRoute={routes[0]}
				initialRouteStack={routes}
				renderScene={renderScene}
			/>
		)
	}
}