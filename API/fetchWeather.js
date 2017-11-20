import { getMonthName, getDate, getHour } from './timeHelper.js';

/*

import { getMonthName, getDate, getHour } from '../API/timeHelper.js';
*/
function getWeatherIconNum(int) {
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

function fetchWeather(city, cb) {
  var weatherCurrent = [];
  var weatherData = [];
  var weatherData3Hour = [];
  console.log(city);

  let url = 'http://api.openweathermap.org/data/2.5/forecast?q='+
  city +'&cnt=16&APPID=da572a794140d38d8d4e080ad638188a'

  fetch(url).then((response) => response.json()).then((responseJson) => {
    console.log(responseJson);
    for( var i = 0 ; i < responseJson.list.length ; i ++){
        let weatherList = responseJson.list[i];

        var temp = {
          date: getDate(weatherList.dt_txt)+' '+
          getMonthName(weatherList.dt_txt)+'\n'+
          getHour(weatherList.dt_txt)+':00',
          temp_min_max: Number(weatherList.main.temp_min-273).toFixed(0)+'°C',
          description: weatherList.weather[0].description,
          icon: getWeatherIconNum(parseInt(weatherList.weather[0].icon)),
          iconURL: 'http://openweathermap.org/img/w/' + weatherList.weather[0].icon + '.png',
        };

        if(i==0) {
          weatherCurrent.push(temp);
        } else {

          temp = {
            time: getDate(weatherList.dt_txt)+' '+
            getMonthName(weatherList.dt_txt)+'\n'+
            getHour(weatherList.dt_txt)+':00',
            title: Number(weatherList.main.temp_min-273).toFixed(0)+'°C',
            description: weatherList.weather[0].description,
            icon: getWeatherIconNum(parseInt(weatherList.weather[0].icon)),
            iconURL: 'http://openweathermap.org/img/w/' + weatherList.weather[0].icon + '.png',
          };

          weatherData3Hour.push(temp);
          if( i%3 == 0 ) {
            weatherData.push(temp);
          }
        }
    }
      console.log("This is Weather data");
      console.log(weatherData);

      console.log("This is Weather data 3hr");
      console.log(weatherData3Hour);

      var msg = {
        current: weatherCurrent,
        future: weatherData,
        future3hr: weatherData3Hour,
      };
      console.log('before return');
      console.log(msg);
      cb(msg);
  })
  .catch((error) => {
    console.error(error);
    var msg = {
      current:null,
      future: null,
      future3hr: null,
    };
    cb(msg);
  });
}

function cube(x) {
  return x * x * x;
}

export { cube, fetchWeather };
