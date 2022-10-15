//query selectors
var prePopEl = document.querySelector('#pre-pop');
var customListEl = document.querySelector('#custom-list');

// consts and hoisted vars
var basicItems = ['water', 'poncho', 'boots', 'snacks', 'maps'];
var customItems = [];

//When I open stash page i am presented with a a list of default items to take on my trip
function populteBasic() {
// creates buttons from basic items array
    basicItems.forEach(i => {
        var buttonBasic = document.createElement('button');
        buttonBasic.setAttribute('id', i); //set ID for for each created button to value of button
        buttonBasic.innerHTML = i;

        buttonBasic.addEventListener('click', function() { //event listener for each created button
            var buttRemove = document.getElementById(i);
            buttRemove.parentNode.removeChild(buttRemove);
            var listCustom = document.createElement('p');
            listCustom.innerHTML = i; //content for appened from forEach
            customItems.push(i); //adds clicked item to custom items array
            customListEl.appendChild(listCustom);
        });

        prePopEl.appendChild(buttonBasic);
    });
};

//When I click an item from the the prepopulted list it is added to users custom list and removed from basic items
function populteCustom() {
    console.log('populate custom');
};


populteBasic();
