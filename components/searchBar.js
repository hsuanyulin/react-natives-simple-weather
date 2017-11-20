'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js');

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import functions from '../functions.js';
import { fetchWeather } from '../API/fetchWeather.js';
import { getMonthName, getDate, getHour } from '../API/timeHelper.js';

import {helers} from '../helpers.js';
const { StyleSheet, TextInput, View} = ReactNative;

class searchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Berlin',
    }
    this.getWeather(this.state.text);
  }

  getWeather(city) {
  fetchWeather(city, (result) => {
    this.props.onChange(result);
  });
  }
  onSubmitEdit = () => {
    console.log("onSubmitEdit is called");
    this.getWeather(this.state.text);
  }

  render() {

    return (
      <View style={styles.searchBar}>
      <View style={styles.icon} >
      <Icon name='location-pin' size={20} color="#FFFFFF"/>
      </View>

      <View style={styles.textInput} >
      <TextInput
      style={styles.itemLight}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
      onSubmitEditing={this.onSubmitEdit}
      />
      </View>

    </View>
    );
  }
}

module.exports = searchBar;
