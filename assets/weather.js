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
//1.Declare the function 2.

function fetchData(city){
    var apiKey = '549aae77a3dc08100f08e1988c47e726';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='
    + city + '&units=metric&appid='
    + apiKey)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
    // console.log(data);

}

function displayWeather(myData){
    console.log(myData);
    console.log("CNT:",myData.cnt );

    console.log("List:",myData.list );
    console.log("1st List item:",myData.list[0] );
    console.log("date for first item:",myData.list[0].dt)
    var datepage = document.createElement('h3')
;
datepage.innerText =myData.list[0].dt;
appea

}



fetchData('adelaide');


// var weather = { 
// apiKey: '549aae77a3dc08100f08e1988c47e726',
// fetchWeather: function (city){
//     fetch(
//     'https://api.openweathermap.org/data/2.5/forecast?q='
//      + city + '&units=metric&appid='
//      + this.apiKey 
//     )
//     .then((response) => response.json())
//     .then((data) => this.displayWeather(data));
//     console.log(data);

// let forecastDiv = document.getElementById("weather")
//                 //forecastDiv.style.display = "flex"
//                 let parentDiv = document.createElement("div")
//                 parentDiv.style.display = "flex";

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
document.querySelector('.city').innerText = "Weather in " + name;
}
};
*/