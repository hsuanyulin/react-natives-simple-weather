function fetchWeather(city) {
  console.log(city);

  let url = 'http://api.openweathermap.org/data/2.5/forecast?q='+
  city +'&cnt=16&APPID=da572a794140d38d8d4e080ad638188a'

  return fetch(url).then((response) => response.json())
}

function cube(x) {
  return x * x * x;
}

export { cube, fetchWeather };
