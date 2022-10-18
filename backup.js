
function populateLocation() { 
    var location = JSON.parse(localStorage.getItem('userLocation'));
    var locationcreateEl = document.createElement('p');
    locationcreateEl.innerHTML = location;
    userLocationEl.appendChild(locationcreateEl);

 };

function getDashData() {
     userLocation = JSON.parse(localStorage.getItem('userLocation'));
     console.log(userLocation);
     console.log(typeof userLocation);
}