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

import Button from 'apsl-react-native-button';

export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Username: '',
			Password: ''
		};
	}

	render() {

		const verifyLogin = () => {
			const username = 'user';
			const password = 'pass';

			if (username != this.state.Username || this.state.Password != password) {
				Alert.alert('Your login was incorrect');
			} else {
				this.props.navigator.push({
					index: 3
				});
			}
		}

		return (
			<View style={styles.fullscreen}>
				<View style={{alignItems: 'center'}}>
					<Image
						style={{width: 80, height: 175}}
						source={require('./images/droplet.png')}
					/>
				</View>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 100, marginLeft: 20, marginRight: 20}}
					onChangeText={(Username) => this.setState({Username})}
					placeholder='Username'
					autoCorrect={false}
					returnKeyType='next'
					autoCapitalize='none'
				/>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 20, marginLeft: 20, marginRight: 20}}
					onChangeText={(Password) => this.setState({Password})}
					onFocus= {() => this.setState({text : ''})}
					placeholder='Password'
					secureTextEntry={true}
					returnKeyType='go'
				/>
				<Button
					style={{backgroundColor: 'rgba(65, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
					onPress={() => verifyLogin()}
					textStyle={{fontSize: 18}}>
					Login
				</Button>
				<Button
					style={{borderWidth: 0}}
					onPress={() => this.props.navigator.pop()}
					textStyle={{fontSize: 18}}>
					Return
				</Button>
			</View>
		)
	}
}
