/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tabs from 'react-native-tabs';

const styles = require('./styles.js');

const SwipePager = require('./components/swipePager.js');
const StatusBar = require('./components/searchBar.js');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      weather: 'default weather',
    };
    this.handleWeather = this.handleWeather.bind(this);
  }

  componentDidMount() {
    //new StatusBar().getWeather();
    this.setState({isLoading: false});
  }

  handleWeather = (weather) => {
    console.log(weather);
    this.setState({weather: weather});
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
        <View style={styles.motherView}>
        <StatusBar onChange={this.handleWeather}/>
        <SwipePager currentWeather={this.state.weather}/>
        </View>
    );


  }
}
