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

		const _navigateToNewReport = () => {
			this.props.navigator.push({
				index: 5
			});
		}

		const _navigateToAllReports = () => {
			this.props.navigator.push({
				index: 6
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
					style={{backgroundColor: 'rgba(66, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
					onPress={() => _navigateToNewReport()}
					textStyle={{fontSize: 18}}>
					New Report
				</Button>
				<Button
					style={{backgroundColor: 'rgba(66, 190, 110, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
					onPress={() => _navigateToAllReports()}
					textStyle={{fontSize: 18}}>
					Show All Reports
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
module.exports = Main;