//cat Meow => console.log("A cat meows")
// dog barks => console.log("A dog barks")
// ---------

// function animalSound(animal,sound){
//     console.log(`A ${animal} ${sound}`)
// }

// animalSound('cat','Meows');
// animalSound('dog','barks');


// make a function which displays data from fetch
// once I have the data, I want to call a showWeather function
// which will display the result on html

//fetch function
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
    var city = document.querySelector('#cityInput').value;
    fetchData(city);
}
document.querySelector('#searchButton').addEventListener('click', updateWeather);
document.querySelector('#cityInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        updateWeather();
    }
});



//fetchData('adelaide');

//document.querySelector('#searchButton').addEventListener('click', (e) => {
//    fetchData(document.querySelector('#cityInput').value)
//});


//var city = document.querySelector('#cityInput').value
//fetchData(city)



// let forecastDiv = document.getElementById("weather")
//document.querySelector('.city').innerText = "Weather in " + city;
//document.querySelector('CNT')

// for (i = 0; i < 40; i += 8) {
//     console.log(data);
//     let div = document.createElement("div")
//     div.style.margin = "30px "
//     div.style.backgroundColor = "grey";
//     let temperature_paragraph = document.createElement("p")
//     temperature_paragraph.innerHTML = data.list[i].main.temp
//     let wind_paragraph = document.createElement("p")
//     wind_paragraph.innerHTML = data.list[i].wind.speed
//     div.append(temperature_paragraph,  wind_paragraph)
//     parentDiv.append(div)
// }}}










/*

displayWeather: function(data) {
const { name } = data
const { icon, description } = data.weather[0];
const {temp, humidity} = data.main;
const { speed } = data.wind
console.log(name, icon, description, temp, humidity, speed)

}
};
*/