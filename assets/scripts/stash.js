//query selectors
var prePopEl = document.querySelector('#pre-pop');
var customListEl = document.querySelector('#custom-list');
var customIdEl = document.querySelector('#custom-id');

// consts and hoisted vars
var basicItems = ['water', 'poncho', 'boots', 'snacks', 'maps'];

var customItems = [];
var customStatus = [];
var userTrip = {
    items: customItems,
    itemsChecked: customStatus
};

//When I open stash page i am presented with a a list of default items to take on my trip
function populteBasic() {
    if (customItems = null) {
        basicItems.forEach(i => { // creates buttons from basic items array
            var buttonBasic = document.createElement('button');
            buttonBasic.setAttribute('id', i); //set ID for for each created button to value of button
            buttonBasic.innerHTML = i;

            buttonBasic.addEventListener('click', function () { //event listener for each created button
                var buttRemove = document.getElementById(i);
                buttRemove.parentNode.removeChild(buttRemove); //removes button after clicking

                var listCustom = document.createElement('p');
                listCustom.innerHTML = i;
                customItems.push(i);
                customListEl.appendChild(listCustom);

                localStorage.setItem('customItems', JSON.stringify(customItems));
                // //FOR CHECKBOX'S
                // var listCustom = document.createElement('input');
                // listCustom.type = 'checkbox';
                // listCustom.name = 'name';
                // listCustom.value = 'value';
                // listCustom.className = 'customBox'
                // listCustom.id = i;

                // var label = document.createElement('label');
                // label.htmlFor = i;
                // label.appendChild(document.createTextNode(i))

                // customIdEl.appendChild(listCustom);
                // customListEl.appendChild(label);
                // customItems.push(i); //adds clicked item to custom items array
                // console.log(userTrip);
            });

            prePopEl.appendChild(buttonBasic);
        });
    } else {
        populteCustom();
    }
};

//When I click an item from the the prepopulted list it is added to users custom list and removed from basic items
function populteCustom() {
    var customItems = JSON.parse(localStorage.getItem('customItems'));
    if (customItems != null) {
        for (var i = 0; i < customItems.length; i++) {
            var listCreate = document.createElement('p');
            listCreate.innerHTML = customItems[i];
            customListEl.appendChild(listCreate);
        }
    } else {
        return;
    }
};


populteBasic();
//populteCustom();



// let boxes = document.getElementsByClassName('box').length;

// function save() {	
//   for(let i = 1; i <= boxes; i++){
// 	  var checkbox = document.getElementById(String(i));
//     localStorage.setItem("checkbox" + String(i), checkbox.checked);	
//   }
// }

// //for loading
// for(let i = 1; i <= boxes; i++){
//   if(localStorage.length > 0){
//     var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
//     document.getElementById(String(i)).checked = checked;
//   }
// }
// window.addEventListener('change', save);