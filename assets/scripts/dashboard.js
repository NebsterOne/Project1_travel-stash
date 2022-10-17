var newTripEL = document.querySelector('#new-trip');
var createNewBtn = document.querySelector('#new-btn');
var tripSubmit = document.querySelector('#user-sub');


function tripShowHide() {
console.log('newTrip function start');
if (newTripEL.style.display === 'none') {
    newTripEL.style.display = 'block';
} else {
    newTripEL.style.display = 'none';
}
};

function createNewTrip() {
    var userLocation = document.querySelector('#u-location').value;
    var userDate = document.querySelector('#u-date').value;

        localStorage.setItem('userLocation', JSON.stringify(userLocation));
        localStorage.setItem('userdate', JSON.stringify(userDate));
        console.log(userLocation);
        console.log(userDate);
        

};

createNewBtn.addEventListener('click', tripShowHide);
tripSubmit.addEventListener('click', createNewTrip);

$(document).ready(function(){
    $('.datepicker').datepicker();
  });