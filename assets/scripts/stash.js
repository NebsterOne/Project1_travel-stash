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
            buttRemove.parentNode.removeChild(buttRemove); //removes button after clicking

            var listCustom = document.createElement('input');
            listCustom.type = 'checkbox';
            listCustom.name = 'name';
            listCustom.value = 'value';
            listCustom.id = i;

            var label = document.createElement('label');
            label,htmlFor = i;
            label.appendChild(document.createTextNode(i))

            customListEl.appendChild(listCustom);
            customListEl.appendChild(label);
            customItems.push(i); //adds clicked item to custom items array
            console.log(customItems);

        });

        prePopEl.appendChild(buttonBasic);
    });
};

//When I click an item from the the prepopulted list it is added to users custom list and removed from basic items
function populteCustom() {
    console.log('populate custom');
};


populteBasic();


function geek() {
    var myDiv = document.getElementById("myDiv");
     
    // creating checkbox element
    var checkbox = document.createElement('input');
     
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
     
    // creating label for checkbox
    var label = document.createElement('label');
     
    // assigning attributes for
    // the created label tag
    label.htmlFor = "id";
     
    // appending the created text to
    // the created label tag
    label.appendChild(document.createTextNode('This is the label for checkbox.'));
     
    // appending the checkbox
    // and label to div
    myDiv.appendChild(checkbox);
    myDiv.appendChild(label);
}