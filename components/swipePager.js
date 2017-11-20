'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import Swiper from 'react-native-swiper';
import PagerCurrent from './pagers/pagerCurrent.js'
import PagerFuture from './pagers/pagerFuture.js'

const styles = require('../styles.js');

const { StyleSheet, Text, View} = ReactNative;

class swipePager extends Component {
  constructor(props){
    console.log('swiperPager is created');
    super(props);
    console.log(this.props.currentWeather.Current);
  }
  render() {
    console.log('Render is called');
    var currentData = '';
    var futureData = '';
    var futureData3hr = '';
    //typeof something === "undefined"

    if(typeof this.props.currentWeather.current != "undefined"){
      console.log('the current weahter array index 0 is here');
      console.log(this.props.currentWeather);
      console.log(this.props.currentWeather.future);
      currentData = this.props.currentWeather.current[0];
      futureData = this.props.currentWeather.future;
      futureData3hr = this.props.currentWeather.future3hr;
    }
    return(
      <Swiper
      style={styles.wrapper}
      dot={<View style={styles.swiperDot}/>}
      activeDot={<View style={styles.swiperDotActive}/>}
      paginationStyle={{
          bottom: 70
      }}
      loop={false}
      >
        <PagerCurrent
        data={currentData}/>

        <PagerFuture
        data={futureData}/>

        <PagerFuture
        data={futureData3hr}/>
        
      </Swiper>
    );
  }
}

module.exports = swipePager;
