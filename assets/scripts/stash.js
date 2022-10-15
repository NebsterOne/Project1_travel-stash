//query selectors
var prePopEl = document.querySelector('#pre-pop');
var customListEl = document.querySelector('#custom-list');

// consts and hoisted vars
var basicItems = ['water', 'poncho', 'boots', 'snacks', 'maps'];
var customItems = [];

//When I open stash page i am presented with a a list of default items to take on my trip
function populteBasic() {
    basicItems.forEach(i => {
        var buttonBasic = document.createElement('button');
        buttonBasic.setAttribute('id', i);
        buttonBasic.innerHTML = i;
        buttonBasic.addEventListener('click', function() {
            var listCustom = document.createElement('p');
            listCustom.innerHTML = i;
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
