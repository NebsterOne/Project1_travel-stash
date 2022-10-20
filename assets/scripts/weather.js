
//1.Declare the function 

function fetchData(city) {
    var apiKey = '549aae77a3dc08100f08e1988c47e726';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='
        + city + '&units=metric&appid='
        + apiKey)
        .then((response) => response.json())
        .then((data) => displayWeather(data));
    // console.log(data);

}

function displayWeather(myData) {
    //  console.log(myData);
    console.log("location:", myData.city.name);
    console.log("temperature:", myData.list[0].main.temp);
    console.log("description:", myData.list[0].weather[0].description);
    console.log("humidity:", myData.list[0].main.humidity);
    console.log("wind:", myData.list[0].wind.speed);

    document.querySelector('#dynamCity').innerText = myData.city.name;
    document.querySelector('#dynamTemp').innerText = myData.list[0].main.temp.toFixed(1);
    document.querySelector('#dynamDescription').innerText = myData.list[0].weather[0].description;
    document.querySelector('#dynamHumidity').innerText = myData.list[0].main.humidity;
    document.querySelector('#dynamWind').innerText = myData.list[0].wind.speed;
    document.querySelector('#weather').style.visibility = 'visible';
}

function updateWeather() {
 //  var city = document.querySelector('#cityInput').value;
   
    var city = JSON.parse(localStorage.getItem('userLocation'));
    console.log('hello', city);
    fetchData(city);
    
}

window.addEventListener('load', updateWeather);
document.querySelector('#cityInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        updateWeather();
    }
});



