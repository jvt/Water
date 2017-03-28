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
import ReportList from './report/list';
import ReportNew from './report/new';
import QualityReportShow from './qualityReport/show';
import QualityReportNew from './qualityReport/new';
import Map from './map';

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
	{
		title: 'Map',
		index: 7
	},
	{
		title: 'Water Condition',
		index: 8
	},
	{
		title: 'New Water Condition',
		index: 9
	},
];

export default class water extends Component {
	constructor(props) {
		super(props);

		this.state = {
			initial: routes[0],
			isLoading: true,
			shouldSkipToApp: false
		};

		AsyncStorage.getItem('@water2340:user', function(e, user) {
			updateLoading(false);
			if (user) {
				let _parsed = JSON.parse(user);
				console.log(_parsed);
				console.log('User is already logged in');
				updateInitialRoute(routes[3]);
				updateShouldSkipToApp(true);
			}
			reRender();
		});

		const updateShouldSkipToApp = (value) => {
			this.setState({
				'shouldSkipToApp': value
			});
		}

		const updateInitialRoute = (value) => {
			this.setState({
				'initial': value
			});
		}

		const updateLoading = (value) => {
			this.setState({
				'isLoading': value
			});
		}

		const reRender = () => {
			console.log('re-rendering')
			this.forceUpdate();
		}
	}

	render() {

		const renderScene = (route, navigator) => {
			if (this.state.isLoading) {
				console.log('loading');
				return <View style={[styles.container, styles.fullscreen]}></View>
			}
			if (this.state.shouldSkipToApp && route.index === 0) {
				console.log('skipping to app');
				return <Main navigator={navigator} shouldSkipToApp={this.state.shouldSkipToApp}></Main>
			}
			if (route.index === 0) {
				return <Welcome navigator={navigator}></Welcome>
			} else if (route.index === 1) {
				return <Login navigator={navigator}></Login>
			} else if (route.index === 2) {
				return <Registration navigator={navigator}></Registration>
			} else if (route.index === 3) {
				return <Main navigator={navigator} shouldSkipToApp={this.state.shouldSkipToApp}></Main>
			} else if (route.index === 4) {
				return <Profile navigator={navigator}></Profile>
			} else if (route.index === 5) {
				return <ReportNew navigator={navigator}></ReportNew>
			} else if (route.index === 6) {
				return <ReportList navigator={navigator}></ReportList>
			} else if (route.index === 7) {
				return <Map navigator={navigator}></Map>
			} else if (route.index === 8) {
				return <QualityReportShow navigator={navigator} data={route.data}></QualityReportShow>
			} else if (route.index === 9) {
				return <QualityReportNew navigator={navigator} data={route.data}></QualityReportNew>
			}
		};

		const configureScene = (route) => {
			if (route.index === 1 || route.index === 2) {
				return Navigator.SceneConfigs.VerticalUpSwipeJump;
			}
			return Navigator.SceneConfigs.PushFromRight;
		}

		return (
			<Navigator
				initialRoute={this.state.initial}
				initialRouteStack={routes}
				renderScene={renderScene}
				configureScene={configureScene}
			/>
		)
	}
}