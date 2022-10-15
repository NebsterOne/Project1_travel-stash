//query selectors
var prePopEl = document.querySelector('#pre-pop');

// consts and hoisted vars
var basicItems = ['water', 'poncho', 'boots', 'snacks', 'maps'];

//When I open stash page i am presented with a a list of default items to take on my trip
function PopulteBasic() {
    for (var i = 0; i < basicItems.length; i++) {
        var buttonBasic = document.createElement('button');
        buttonBasic.innerHTML = basicItems[i];
        prePopEl.appendChild(buttonBasic);
    };
};

PopulteBasic();