'use strict';
import React, {Component} from 'react';
import {
  ReactNative,
  ListView,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


export default class helpers  {

  constructor(text) {
    console.log('constructur of helpers is called.');
    this.weatherData = [];
    this.weatherData3Hour = [];
  }

  componentDidMount() {
    console.log('componentDidMount is called.');
    this.getWeather(this.state.text);
  }

  print(txt){
     console.log(txt);
  }

  getMonthName(time){
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date(time);
    return monthNames[d.getMonth()];
  }
  getDate(time){
    var d = new Date(time);
    return d.getDate();
  }

  getHour(time){
    var d = new Date(time);
    return d.getHours();
  }

  getWeather(text,callback) {
    console.log('getWeather is called.');

    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+ text +'&cnt=16&APPID=da572a794140d38d8d4e080ad638188a')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      for(var i = 0 ; i < responseJson.list.length ; i++){
        this.weatherData3Hour.push(
          {
            date: this.getDate(responseJson.list[i].dt_txt)+' '+
            this.getMonthName(responseJson.list[i].dt_txt)+'\n'+
            this.getHour(responseJson.list[i].dt_txt)+':00',
            temp_min_max: Number(responseJson.list[i].main.temp_min-273).toFixed(0)+'°C',
            description: responseJson.list[i].weather[0].description,
            icon: responseJson.list[i].weather[0].icon,
            iconURL: 'http://openweathermap.org/img/w/' + responseJson.list[i].weather[0].icon + '.png',
          }
        );
        if(i%3 == 0){
          console.log(this.getMonthName(responseJson.list[i].dt_txt));
          this.weatherData.push(
            {
              time: this.getDate(responseJson.list[i].dt_txt)+' '+
              this.getMonthName(responseJson.list[i].dt_txt)+'\n'+
              this.getHour(responseJson.list[i].dt_txt)+':00',
              title: Number(responseJson.list[i].main.temp_min-273).toFixed(0)+'°C',
              description: responseJson.list[i].weather[0].description,
              imageUrl: 'http://openweathermap.org/img/w/' + responseJson.list[i].weather[0].icon + '.png',
            }
          );
        }
      }
      console.log("This is array Weather");
      console.log(this.weatherData);
      console.log(this.state.isLoading);
    })
    .catch((error) => {
      console.error(error)}
    );

    if (typeof callback === "function") {
      // Call it, since we have confirmed it is callable​
      callback(this.weatherData, this.weatherData3Hour);
    }
  }

}
