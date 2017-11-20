'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js');

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import functions from '../functions.js';
import { fetchWeather, cube } from '../API/fetchWeather.js';
import { getMonthName, getDate, getHour } from '../API/timeHelper.js';

import {helers} from '../helpers.js';
const { StyleSheet, TextInput, View} = ReactNative;

class searchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Berlin',
    }
    this.weatherCurrently = [];
    this.weatherData = [];
    this.weatherData3Hour = [];

    this.getWeather();
  }

  getWeather() {
  console.log(cube(3));
  fetchWeather(this.state.text).then((responseJson) => {
    console.log(responseJson);
    for( var i = 0 ; i < responseJson.list.length ; i ++){
        let weatherList = responseJson.list[i];

        var temp = {
          date: getDate(weatherList.dt_txt)+' '+
          getMonthName(weatherList.dt_txt)+'\n'+
          getHour(weatherList.dt_txt)+':00',
          temp_min_max: Number(weatherList.main.temp_min-273).toFixed(0)+'°C',
          description: weatherList.weather[0].description,
          icon: this.getWeatherIconNum(parseInt(weatherList.weather[0].icon)),
          iconURL: 'http://openweathermap.org/img/w/' + weatherList.weather[0].icon + '.png',
        };

        if(i==0) {
          this.weatherCurrently.push(temp);
        } else {

          temp = {
            time: getDate(weatherList.dt_txt)+' '+
            getMonthName(weatherList.dt_txt)+'\n'+
            getHour(weatherList.dt_txt)+':00',
            title: Number(weatherList.main.temp_min-273).toFixed(0)+'°C',
            description: weatherList.weather[0].description,
            icon: this.getWeatherIconNum(parseInt(weatherList.weather[0].icon)),
            iconURL: 'http://openweathermap.org/img/w/' + weatherList.weather[0].icon + '.png',
          };

          this.weatherData3Hour.push(temp);
          if( i%3 == 0 ) {
            this.weatherData.push(temp);
          }
        }
    }
      console.log("This is Weather data");
      console.log(this.weatherData);

      console.log("This is Weather data 3hr");
      console.log(this.weatherData3Hour);


      var msg = {
        current: this.weatherCurrently,
        future: this.weatherData,
        future3hr: this.weatherData3Hour,
      };
      console.log('before return');
      console.log(msg);

      this.props.onChange(msg);

  })
  .catch((error) => {
    console.error(error);
    var msg = {
      current:null,
      future: null,
      future3hr: null,
    };
    return (msg);
  });
}
  getWeatherIconNum(int){
    if(int>5){
      var temp = int -4;
      if(temp == 9){
        return 8;
      }
      if(temp == 46){
        return 9;
      }
      return temp;
    }
    return int;
  }


  onSubmitEdit = () => {
  this.weatherCurrently = [];
  this.weatherData = [];
  this.weatherData3Hour = [];
    console.log("onSubmitEdit is called");
    this.getWeather();

    //new functions().print('here you are');
    //new functions().getWeather(this.state.searchedCity);
  }

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
      <View style={styles.icon} >
      <Icon name='location-pin' size={15} color="#FFFFFF"/>
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
