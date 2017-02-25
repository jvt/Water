import React, {Component} from 'react';
import {
	View,
	Alert,
	Image,
	Navigator,
	Text,
	TextInput,
	ScrollView,
	StyleSheet
} from 'react-native';

import styles from './styles';
import Button from 'apsl-react-native-button';

export class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Email: null,
			Role: null,
			HomeAddress: null,
			Title: null
		};
	}

	render() {

		const _navigateBack = () => {
			this.props.navigator.pop();	
		}

		const _saveChanges = () => {
			// this.props.navigator.pop();	
		}

		return (
			<View style={[styles.fullscreen, styles.greyBackground]}>
				<ScrollView>
					<View style={styles.paddedContainer}>
						<View style={styles.card} elevation={1}>
							<Text
								style={{fontSize: 20, textAlign: 'center', fontWeight: '200'}}>
								My Account
							</Text>
						</View>
						<View style={styles.card} elevation={1}>
							
						</View>
						<View style={styles.card} elevation={1}>
							<Button
								style={{backgroundColor: 'rgba(63, 209, 127, 1)', marginLeft: 10, marginRight: 10, borderWidth: 0, marginTop: 10}}
								onPress={() => _navigateBack()}
								textStyle={{fontSize: 18}}>
								Save
							</Button>
							<Button
								style={{backgroundColor: 'rgba(66, 163, 221, 1)', marginLeft: 10, marginRight: 10, borderWidth: 0, marginTop: 10}}
								onPress={() => _navigateBack()}
								textStyle={{fontSize: 18}}>
								Return
							</Button>
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
}
module.exports = Profile;