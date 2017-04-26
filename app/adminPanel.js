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

import styles from './styles';
import Button from 'apsl-react-native-button';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import moment from 'moment';

export class AdminPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			users: {},
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
						<Text style={styles.header_text}>Users</Text>
					</View>
				</View>
				<View style={[styles.listBody, styles.greyBackground]}>
					<ScrollView ref="scrollView">
						<View style={{padding: 10}}>
						{
							this.state.loaded && 
							<ListView
								initialListSize={1}
								dataSource={this.state.users}
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
		this.getUsers();
	}

	componentDidMount() {
		this.getUsers();
	}

	_renderRow(user: string, sectionID: number, rowID: number) {
		return (
			<TouchableHighlight underlayColor={"#E8E8E8"} style={styles.reportElement} onPress={this._onPressRow.bind(this.rowData, this, user)}>
				<View style={[styles.card, styles.noCardMargin]}>
					<Text>Title: {user.title}</Text>
					<Text>Username: {user.username}</Text>
					{user.locked == 0 &&
					<Text>Banned: False</Text>
					}
					{user.locked == 1 &&
					<Text>Banned: True</Text>
					}
					{user.role == 0 &&
						<Text>Role: User </Text>
					}
					{user.role == 1 &&
						<Text>Role: Worker </Text>
					}
					{user.role == 2 &&
						<Text>Role: Manager </Text>
					}
					{user.role == 3 &&
						<Text>Role: Admin </Text>
					}
				</View>
			</TouchableHighlight>
		);
	}

	_onPressRow(_this, row, obj) {
		console.log('Ban User');
		console.log(row);
		_this.props.navigator.push({
				index: 11,
				data: row
			});
	}

	updateListUI(users) {
		var ds = this.state.dataSource.cloneWithRows(users);
		this.setState({
			'users': ds,
			'loaded': true
		});
	}

	getUsers() {
		let users = [];
		fetch('https://water.joetorraca.com/api/user',
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
					users = res.users;
					this.updateListUI(users);
				} else {
					if (res.messages.length > 0) {
						console.log('An error occurred with loading users!');
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

module.exports = AdminPanel;
