import React, {Component} from 'react';
import {
	AsyncStorage,
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

export class Main extends Component {
	constructor(props) {
    super(props);

    this.state = {
      user: {},
      admin: false
    };

    AsyncStorage.getItem('@water2340:user', function(e, user) {
      let _parsed = JSON.parse(user);
      console.log(_parsed);
      updateUser(_parsed);
    });

    const updateUser = user => {
      this.setState({user: user});
      if(this.state.user.role == 3){
        this.setState({admin: true});
      }
      console.log(this.state)
    }
  }

  render() {
		const _navigateToWelcome = () => {
			AsyncStorage.removeItem('@water2340:user');
			this.props.shouldSkipToApp = false;
			this.props.navigator.resetTo({
				index: 0
			});
		}

		const _navigateToProfile = () => {
			this.props.navigator.push({
				index: 4
			});
		}

		const _navigateToMap = () => {
			this.props.navigator.push({
				index: 7
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

    const _navigateToAdmin = () => {
      this.props.navigator.push({
        index: 10
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
        <ScrollView>
  				<Button
  					style={{backgroundColor: 'rgba(66, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 20}}
  					onPress={() => _navigateToProfile()}
  					textStyle={{fontSize: 18}}>
  					Profile
  				</Button>
  				<Button
  					style={{backgroundColor: 'rgba(66, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 20}}
  					onPress={() => _navigateToNewReport()}
  					textStyle={{fontSize: 18}}>
  					New Report
  				</Button>
  				<Button
  					style={{backgroundColor: 'rgba(66, 190, 110, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 20}}
  					onPress={() => _navigateToAllReports()}
  					textStyle={{fontSize: 18}}>
  					Show All Reports
  				</Button>
  				<Button
  					style={{backgroundColor: 'rgba(66, 190, 110, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 20}}
  					onPress={() => _navigateToMap()}
  					textStyle={{fontSize: 18}}>
  					View Map
  				</Button>
          <View>
            {this.state.admin && 
            <Button
              style={{backgroundColor: 'rgba(232, 88, 74, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 20}}
              onPress={() => _navigateToAdmin()}
              textStyle={{fontSize: 18}}>
              Admin Panel
            </Button> 
          }
          </View>
  				<Button
  					style={{backgroundColor: 'rgba(232, 88, 74, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 20}}
  					onPress={() => _navigateToWelcome()}
  					textStyle={{fontSize: 18}}>
  					Logout
  				</Button>
        </ScrollView>
			</View>
		)
	}
}
module.exports = Main;