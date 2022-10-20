var newTripEL = document.querySelector('#new-trip');
var createNewBtn = document.querySelector('#new-btn');
var tripSubmit = document.querySelector('#user-sub');
var wrapperEl = document.querySelector('#wrapper');


function tripShowHide() {
    console.log('newTrip function start');
    if (newTripEL.style.display === 'none') {
        newTripEL.style.display = 'block';
    } else {
        newTripEL.style.display = 'none';
    }
};
// still needs some form validation
function createNewTrip() {
    var userLocation = document.querySelector('#u-location').value;


    localStorage.setItem('userLocation', JSON.stringify(userLocation));
    console.log(userLocation);

    if (userLocation != null) {
        newTripEL.style.display = 'none';
        window.location.href = "./stash.html"

    }
    newTripEL.style.display = 'none';

};

function populteTrips() {
    var trips = JSON.parse(localStorage.getItem('locationArray'));
    if (trips === null) {
        return;
    }
console.log(typeof trips);



    for (var i = 0; i < trips.length; i++) {
        // need to remove the anchors and rearrasnge the appends
        var createLink = document.createElement('a');
        createLink.setAttribute('id', trips[i]);
        var createDiv_col = document.createElement('div');
        createDiv_col.setAttribute('class', 'col s12 m6 l3 ');
        var createDiv_card = document.createElement('div');
        createDiv_card.setAttribute('class', 'card cyan darken-2 hoverable z-depth-5');
        var createDiv_cardContent = document.createElement('div');
        createDiv_cardContent.setAttribute('class', 'card-content white-text');
        var createSpan = document.createElement('span');


        createSpan.setAttribute('class', 'card-title');
        createSpan.innerHTML = trips[i];

        var documentFragment = document.createDocumentFragment();
        documentFragment.appendChild(createDiv_col);
        createDiv_col.appendChild(createDiv_card);
        createDiv_card.appendChild(createDiv_cardContent);
        createDiv_cardContent.appendChild(createSpan);
        createSpan.appendChild(createLink);
        wrapperEl.appendChild(documentFragment);

        createDiv_col.addEventListener('click', function (evt) {

            var clickedItem = (evt.target.id);

            console.log(clickedItem);
            localStorage.setItem('userLocation', JSON.stringify(clickedItem));
            window.location.href = './stash.html'
        })
    }
}

createNewBtn.addEventListener('click', tripShowHide);
tripSubmit.addEventListener('click', createNewTrip);



populteTrips();