// app/index.js

import React, {Component} from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class water extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Water App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
