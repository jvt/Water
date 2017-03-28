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
import SegmentedControlTab from 'react-native-segmented-control-tab';
import moment from 'moment';

export class ReportList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			reports: {},
			loaded: false,
			user: {}
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

		const _navigateToNewReport = () => {
			this.props.navigator.push({
				index: 5
			});
		}

		const _navigateBack = () => {
			this.props.navigator.pop();
		}

		return (
			<View style={styles.fullscreen}>
				<View style={styles.header}>
					<View style={styles.header_item}>
						<Button
							style={styles.leftHeader}
							onPress={_navigateBack}
							textStyle={{fontSize: 14}}>
							Back
						</Button>
						<Button
							style={styles.rightHeader}
							onPress={_navigateToNewReport}
							textStyle={{fontSize: 14}}>
							New
						</Button>
						<Text style={styles.header_text}>Reports</Text>
					</View>
				</View>
				<View style={[styles.listBody, styles.greyBackground]}>
					<ScrollView ref="scrollView">
						<View style={{padding: 10}}>
						{
							this.state.loaded && 
							<ListView
								initialListSize={1}
								dataSource={this.state.reports}
								renderRow={this._renderRow.bind(this)}
							/>
							 
						}
						</View>
					</ScrollView>
				</View>
			</View>
		)
	}

	componentWillUpdate() {
		this.getReports();
	}

	componentDidMount() {
		this.getReports();
	}

	_renderRow(report: string, sectionID: number, rowID: number) {
		return (
			<TouchableHighlight underlayColor={"#E8E8E8"} style={styles.reportElement} onPress={this._onPressRow.bind(this.rowData, this, report)}>
				<View style={[styles.card, styles.noCardMargin]}>
					<Text>Location: {report.latitude}, {report.longitude}</Text>
					<Text>Type: {report.type}</Text>
					<Text>Condition: {report.condition}</Text>
					<Text>Reported: {moment(new Date(report.created_at)).format('MMMM D, YYYY hh:mma')}</Text>
					<Text>Submitted By: {report.submitter}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	_onPressRow(_this, row, obj) {
		console.log('Will show row quality report');
		if (Number(_this.state.user.role) > 0) {
			_this.props.navigator.push({
				index: 8,
				data: row
			});
		} else {
			Alert.alert('You do not have permission to view that.');
		}
	}

	updateListUI(reports) {
		var ds = this.state.dataSource.cloneWithRows(reports);
		this.setState({
			'reports': ds,
			'loaded': true
		});
	}

	getReports() {
		let reports = [];
		fetch('https://water.joetorraca.com/api/reports',
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
					reports = res.reports;
					this.updateListUI(reports);
				} else {
					if (res.messages.length > 0) {
						console.log('An error occurred with loading reports!');
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

module.exports = ReportList;
