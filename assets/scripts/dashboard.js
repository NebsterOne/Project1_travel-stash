var newTripEL = document.querySelector('#new-trip');
var createNewBtn = document.querySelector('#new-btn');
var tripSubmit = document.querySelector('#user-sub');
var wrapperEl = document.querySelector('#wrapper');


//shows/hides the add new trip textarea
function tripShowHide() {
    if (newTripEL.style.display === 'none') {
        newTripEL.style.display = 'block';
    } else {
        newTripEL.style.display = 'none';
    }
};

//create new trip. saves location to LS and redirects to stash page
function createNewTrip() {
    var userLocation = document.querySelector('#u-location').value;
    localStorage.setItem('userLocation', JSON.stringify(userLocation));

    if (userLocation != null) {
        newTripEL.style.display = 'none';
        window.location.href = "./stash.html";

    }
    newTripEL.style.display = 'none';

};
//populates trips from LS. had some display issues so had to revert to an older version that wasnt using classList
function populteTrips() {
    var trips = JSON.parse(localStorage.getItem('locationArray'));
    if (trips === null) {
        return;
    }

    for (var i = 0; i < trips.length; i++) {
        // need to remove the anchors and rearrasnge the appends

        var createDiv_col = document.createElement('div');
        // createDiv_col.classList.add('col', 's12', 'm6', 'l3')
        // createDiv_col.setAttribute('id', trips[i]);
        createDiv_col.setAttribute('class', 'col s12 m6 l3');

        var createDiv_card = document.createElement('div');
        //createDiv_card.classList.add('card', 'cyan', 'darken-2', 'hoverable', 'z-depth-5');
        //createDiv_card.setAttribute('id', trips[i]);
        createDiv_card.setAttribute('class', 'card cyan darken-2 hoverable z-depth-5');
        //display error
        var createDiv_cardContent = document.createElement('div');
        //createDiv_col.classList.add('card-content', 'white-text', 'card-bg');
        //createDiv_cardContent.setAttribute('id', trips[i]);
        createDiv_cardContent.setAttribute('class', 'card-content white-text card-bg');
        //display error
        var createSpan = document.createElement('span');
        // createDiv_col.classList.add('card-title');
        // createSpan.setAttribute('id', trips[i]);
        //createSpan.innerHTML = trips[i];
        createSpan.setAttribute('class', 'card-title');

        var createAnchor = document.createElement('a');
        createAnchor.classList.add('white-text', 'scale-transition');
        createAnchor.setAttribute('id', trips[i]);
        createAnchor.innerHTML = trips[i];

        var documentFragment = document.createDocumentFragment();

        documentFragment.appendChild(createDiv_col);
        createDiv_col.appendChild(createDiv_card);
        createDiv_card.appendChild(createDiv_cardContent);
        createDiv_cardContent.appendChild(createSpan);
        createSpan.appendChild(createAnchor);
        wrapperEl.appendChild(documentFragment);

        createDiv_col.addEventListener('click', function (evt) {

            var clickedItem = (evt.target.id);

            localStorage.setItem('userLocation', JSON.stringify(clickedItem));
            window.location.href = './stash.html';
        })
    }
}

function init() {
    var trips = JSON.parse(localStorage.getItem('locationArray'));

    if (trips != null) {
        document.getElementById('introText').style.display = 'none';
    } 
}

createNewBtn.addEventListener('click', tripShowHide);
tripSubmit.addEventListener('click', createNewTrip);


init();
populteTrips();