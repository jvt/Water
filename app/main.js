import React, {Component} from 'react';
import {
	View,
	Image,
	StyleSheet
} from 'react-native';

import styles from './styles';
import Button from 'apsl-react-native-button';

export class Welcome extends Component {
	render() {
		const _navigateToLogin = () => {
			this.props.navigator.push({
				index: 1
			});
		}

		const _navigateToRegister = () => {
			this.props.navigator.push({
				index: 2
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
				<Button
					style={{backgroundColor: 'rgba(65, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
					onPress={() => _navigateToLogin()}
					textStyle={{fontSize: 18}}>
					Login
				</Button>
				<Button
					style={{backgroundColor: 'rgba(63, 209, 127, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0}}
					onPress={() => _navigateToRegister()}
					textStyle={{fontSize: 18}}>
					Create an account
				</Button>
			</View>
		)
	}
}

module.exports = Welcome;