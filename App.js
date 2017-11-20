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

export default class App extends Component<{}> {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      weather: 'default weather',
      city: '',
    };
  //  this.handleWeather = this.handleWeather.bind(this);
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
        <StatusBar onChange={this.handleWeather.bind(this)}/>
        <SwipePager currentWeather={this.state.weather}/>
        </View>
    );


  }
}
