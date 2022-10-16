
var weather = { 
apiKey: '549aae77a3dc08100f08e1988c47e726',
fetchWeather: function (city){
    fetch(
  //  'https://api.openweathermap.org/data/2.5/forecast?lat=-34.88691&lon=138.58901&units=metric&appid=549aae77a3dc08100f08e1988c47e726' 
    'https://api.openweathermap.org/data/2.5/forecast?q='
     + city + '&units=metric&appid='
     + this.apiKey 
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
},
displayWeather: function(data) {
const { name } = data
const { icon, description } = data.weather[0];
const {temp, humidity} = data.main;
const { speed } = data.wind
console.log(name, icon, description, temp, humidity, speed)
document.querySelector('.city').innerText = "Weather in " + name;
}
};