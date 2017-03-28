import React, {Component} from 'react';
import {
	View,
	AsyncStorage,
	Alert,
	Image,
	Navigator,
	Text,
	Picker,
	TextInput,
	ScrollView,
	StyleSheet
} from 'react-native';

import styles from '../styles';
import Button from 'apsl-react-native-button';
import BusyIndicator from 'react-native-busy-indicator';

import ModalPicker from 'react-native-modal-picker'

let MessageBarAlert = require('react-native-message-bar').MessageBar;
let MessageBarManager = require('react-native-message-bar').MessageBarManager;

const loaderHandler = require('react-native-busy-indicator/LoaderHandler');

export class QualityReportNew extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.data.id,
			user: props.data.user,
			Condition: ''
		};
	}

	componentDidMount() {
		MessageBarManager.registerMessageBar(this.refs.alert);
	}

	componentWillUnmount() {
		MessageBarManager.unregisterMessageBar();
	}

	render() {

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

		const submitQualityReport = () => {
			loaderHandler.showLoader("Loading");
			return fetch('https://water.joetorraca.com/api/reports/' + this.state.id + '/quality',
				{
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						condition: this.state.Condition
					})
				})
				.then((response) => response.json())
				.then((res) => {
					if (res && res.status === 'success') {
						console.info('New quality created');
						this.props.navigator.pop();
					} else {
						loaderHandler.hideLoader();
						if (res.messages.length > 0) {
							console.log('An error occurred with report!');
							console.log(res.messages);
							// Alert.alert(res.messages[0]);
							MessageBarManager.showAlert({
							  title: 'Error',
							  message: res.messages[0],
							  alertType: 'error',
							});
						} else {
							Alert.alert('An unexpected error occurred. Please try again.');
						}
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}

		return (
			<View style={styles.fullscreen}>
				<MessageBarAlert ref="alert"></MessageBarAlert>
		        <ScrollView keyboardDismissMode='on-drag'>
					<View style={{alignItems: 'center'}}>
						<Image
							style={{width: 80, height: 175}}
							source={require('../images/droplet.png')}
						/>
					</View>
					<Text
						style={{fontSize: 20, textAlign: 'center', fontWeight: '200'}}>
						New Water Report
					</Text>
					<ModalPicker
						data={conditions}
						style={{marginTop: 20, marginLeft: 20, marginRight: 20}}
						initValue="Water Condition"
						onChange={(Condition) => this.setState({Condition: Condition.label}) } />
					<Button
						style={{backgroundColor: 'rgba(65, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
						onPress={submitQualityReport}
						textStyle={{fontSize: 18}}>
						Submit
					</Button>
					<Button
						style={{borderWidth: 0}}
						onPress={this.props.navigator.pop}
						textStyle={{fontSize: 18}}>
						Cancel
					</Button>
		        </ScrollView>
				<BusyIndicator />
			</View>
		)
	}
}

module.exports = QualityReportNew;
