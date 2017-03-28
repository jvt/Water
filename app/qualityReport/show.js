import React, {Component} from 'react';
import {
	AsyncStorage,
	View,
	Alert,
	Image,
	Navigator,
	Text,
	ListView,
	TouchableHighlight,
	TextInput,
	ScrollView,
	StyleSheet
} from 'react-native';

import styles from '../styles';
import Button from 'apsl-react-native-button';
import BusyIndicator from 'react-native-busy-indicator';

let MessageBarAlert = require('react-native-message-bar').MessageBar;
let MessageBarManager = require('react-native-message-bar').MessageBarManager;

import moment from 'moment';

const loaderHandler = require('react-native-busy-indicator/LoaderHandler');

export class QualityReportShow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.data.id,
			userID: props.data.userID,
			latitude: props.data.latitude,
			longitude: props.data.longitude,
			type: props.data.type,
			condition: props.data.condition,
			user: '',
			loaded: false,
			conditions: {},
			hasConditions: false,
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
		};

		AsyncStorage.getItem('@water2340:user', function(e, user) {
			let _parsed = JSON.parse(user);
			updateUser(_parsed);
		});

		const updateUser = user => {
			this.setState({user: user})
		}

	}

	render() {
		const _navigateToNewQualityReport = () => {
			console.log(this.state);
			this.props.navigator.push({
				index: 9,
				data: {
					id: this.state.id,
					user: this.state.user
				}
			});
		}

		return (
			<View style={styles.fullscreen}>
				<View style={styles.header}>
					<View style={styles.header_item}>
						<Button
							style={styles.leftHeader2}
							onPress={this.props.navigator.pop}
							textStyle={{fontSize: 14}}>
							Back
						</Button>
						<Button
							style={styles.rightHeader2}
							onPress={_navigateToNewQualityReport}
							textStyle={{fontSize: 14}}>
							New
						</Button>
						<Text style={styles.header_text}>Water Condition</Text>
					</View>
				</View>
				<View style={[styles.listBody, styles.greyBackground]}>
					<ScrollView ref="scrollView">
						<View style={{padding: 10}}>
						{
							this.state.loaded &&
							this.state.hasConditions &&
							<ListView
								initialListSize={1}
								dataSource={this.state.conditions}
								renderRow={this._renderRow.bind(this)}
							/>
						}
						{
							this.state.loaded &&
							!this.state.hasConditions &&
							<TouchableHighlight underlayColor={"#E8E8E8"} style={styles.reportElement}>
								<View style={[styles.card, styles.noCardMargin]}>
									<Text style={{textAlign: 'center'}}>Unknown Condition</Text>
								</View>
							</TouchableHighlight>
						}
						{
							!this.state.loaded && 
							<Text
								style={{textAlign: 'center', marginTop: 20}}>
								Loading...
							</Text>
						}
						</View>
					</ScrollView>
				</View>
			</View>
		)
	}


	componentWillUpdate() {
		this.getReportCondition();
	}

	componentDidMount() {
		this.getReportCondition();
	}

	_renderRow(report: string, sectionID: number, rowID: number) {
		return (
			<TouchableHighlight underlayColor={"#E8E8E8"} style={styles.reportElement}>
				<View style={[styles.card, styles.noCardMargin]}>
					<Text>Condition: {report.condition}</Text>
					<Text>Reported: {moment(new Date(report.created_at)).format('MMMM D, YYYY hh:mma')}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	updateListUI(conditions) {
		var ds = this.state.dataSource.cloneWithRows(conditions);
		this.setState({
			'conditions': ds,
			'loaded': true,
			'hasConditions': conditions.length > 0
		});
	}

	getReportCondition() {
		let conditions = [];
		fetch('https://water.joetorraca.com/api/reports/'+ this.state.id +'/quality',
			{
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			})
			.then((response) => response.json())
			.then((res) => {
				if (res && res.status === 'success') {
					conditions = res.conditions;
					this.updateListUI(conditions);
				} else {
					if (res.messages.length > 0) {
						console.log('An error occurred with loading condition history!');
						console.log(res.messages);
						Alert.alert(res.messages[0]);
					} else {
						Alert.alert('An unexpected error occurred. Please try again.');
					}
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}
}

module.exports = QualityReportShow;
