var button = document.querySelector('.button')
 var inputValue = document.querySelector('.inputValue')
 var city = document.querySelector('.city')
 var desc = document.querySelector('.desc')
 var temp = document.querySelector('.temp')


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=549aae77a3dc08100f08e1988c47e726&units=metric')
    .then(response => response.json())
    .then(data => {
        var cityValue = data['cityName'];
   //     var tempValue = data['main']['temp'];
    //    var descValue = data['weather'][0]['description'];

    //    city.innerHTML = cityValue
   //     temp.innerHTML = tempValue
   //     descValue.innerHTML = descValue
    })
    

})
