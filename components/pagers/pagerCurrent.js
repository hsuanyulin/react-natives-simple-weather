'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
const styles = require('../../styles.js');

const { Text, View } = ReactNative;

const weatherIcons = ["",
"ios-sunny-outline",
"ios-partly-sunny-outline",
"ios-cloudy-outline",
"ios-cloudy-outline",
"ios-rainy-outline",
"ios-rainy-outline",
"ios-thunderstorm-outline",
"ios-snow-outline",
"ios-alert-outline",
];

class pagerCurrent extends Component {



  constructor(props){
    console.log('pagerCurrent is created');
    super(props);
  }
  render() {
    console.log(' Current Pager Render is called');
    const temp = this.props.data.temp_min_max;
    const date = this.props.data.date;
    const icon = this.props.data.icon;
    return(

        <View style={styles.slide1}>
          <Icon name={weatherIcons[icon]} size={200} color="#FFFFFF"/>
          <Text style={styles.temp}>{temp}</Text>
          <Text style={styles.date}>{date}</Text>

        </View>
    );
  }
}

module.exports = pagerCurrent;
