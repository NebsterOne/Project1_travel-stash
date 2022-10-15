
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')


button.addEventListener('click',function() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&appid=549aae77a3dc08100f08e1988c47e726&units=metric')
        .then(response => response.json())
        .then(data => {
            var name = data['name'];
            var temp = data['main']['temp'];
            var desc = data['weather'][0]['description'];

            name.innerHTML = nameValue
            temp.innerHTML = tempValue
            desc.innerHTML = descValue
        })
.catch(err => alert('Wrong city name'))
})


// api.openweathermap.org/data/2.5/forecast?q=adelaide&units=metric&appid=549aae77a3dc08100f08e1988c47e726