//query selectors
var prePopEl = document.querySelector('#pre-pop');
var customListEl = document.querySelector('#custom-list');
var packedListEl = document.querySelector('#packed-list');
var addMoreBtn = document.querySelector('#add-more');

// consts and hoisted vars
var basicItems = ['water', 'poncho', 'boots', 'snacks', 'maps'];

var customItems = []; //array of items inside #custom list
var customPacked = []; //array of items inside #packed list
var newItemArr = [];
var dashData
var dashDataArr = [];



// This is a horrible piece of code on Fist load to work around the local storage being empty, then had to manage the fact that the 2nd time it loaded it was a string, so the .includes would not run, need DRY moethod of doing this!
function dashboardDataInit() {
    //get item location from local storage - this is used to name all the other local storage keys
    dashData = JSON.parse(localStorage.getItem('userLocation')); //AG
    dashDataArr = JSON.parse(localStorage.getItem('locationArray')); //AG

    if (dashDataArr === null) {
        dashDataArr = dashData
        dashDataArr = dashDataArr.split(' ')
        localStorage.setItem('locationArray', JSON.stringify(dashDataArr));
        console.log(typeof dashDataArr);
    };

    dashDataArr = JSON.parse(localStorage.getItem('locationArray'));
    console.log(typeof dashDataArr);



    console.log(dashDataArr);

    if (!dashDataArr.includes(dashData)) {
        dashDataArr.push(dashData);
    }
    console.log(dashDataArr)

    localStorage.setItem('locationArray', JSON.stringify(dashDataArr));
}


//When I open stash page i am presented with a a list of default items to take on my trip
function populteBasic() {

    basicItems.forEach(i => { // creates buttons from basic items array
        var buttonBasic = document.createElement('button');
        buttonBasic.setAttribute('id', i); //set ID for for each created button to value of button
        buttonBasic.innerHTML = i;

        buttonBasic.addEventListener('click', function () { //event listener for each created button
            var buttRemove = document.getElementById(i);
            buttRemove.parentNode.removeChild(buttRemove); //removes button after clicking

            var listCustom = document.createElement('button');
            listCustom.innerHTML = i;
            listCustom.setAttribute('id', i);
            listCustom.addEventListener('click', packedList);
            customItems.push(i);
            customListEl.appendChild(listCustom);

            localStorage.setItem(dashData + 'customItems', JSON.stringify(customItems));
        });
        prePopEl.appendChild(buttonBasic);
    });
};
//-------------------------POPULATES UNPACKED ITEMS-----------------------------------------------------------
//When I click an item from the the prepopulted list it is added to users custom list and removed from basic items
function populteCustom() {
    var customItems = JSON.parse(localStorage.getItem(dashData + 'customItems'));
    for (var i = 0; i < customItems.length; i++) {
        var listCreate = document.createElement('button');
        listCreate.setAttribute('id', customItems[i]);
        listCreate.innerHTML = customItems[i];
        listCreate.addEventListener('click', packedList)
        customListEl.appendChild(listCreate);
    }

};
//-----------------------------------------------------------------------------------------------------
//-------------------------ADD CUSTOM ITEM--------------------------------------------------------------
function addMore() {
    customItems = JSON.parse(localStorage.getItem(dashData + 'customItems'));
    var newItem = document.querySelector('#add-more-cont').value;
    newItemArr = newItem;
    customItems.push(newItemArr);
    var listCreate = document.createElement('button');
    listCreate.innerHTML = newItem;
    listCreate.setAttribute('id', newItem);
    listCreate.addEventListener('click', packedList);
    customListEl.appendChild(listCreate);
    localStorage.setItem(dashData + 'customItems', JSON.stringify(customItems));


};
//--------------------------------------------------------------------------------------------------------
//-----------------------MOVE ITEMS FROM UNPACKED TO PACKED-------------------------------------------------
function packedList(evt) {
    customItems = JSON.parse(localStorage.getItem(dashData + 'customItems'));
    var clickedItem = (evt.target.id); //gets id of clicked button

    var clickedItemAdd = document.getElementById(clickedItem); //query selector for clicked button
    clickedItemAdd.parentNode.removeChild(clickedItemAdd); //removes button

    var moveToPacked = document.createElement('button');
    moveToPacked.innerHTML = clickedItem;


    moveToPacked.setAttribute('id', clickedItem);
    moveToPacked.addEventListener('click', unpackList);
    packedListEl.appendChild(moveToPacked);



    for (var i = 0; i < customItems.length; i++) {
        if (customItems[i] === clickedItem) {
            customItems.splice(i, 1);
        }
    };

    localStorage.setItem(dashData + 'customItems', JSON.stringify(customItems));

    // ERROR ERROR CREATING OBJECT NOT ARRAY
    customPacked.push(clickedItem);

    localStorage.setItem(dashData + 'customPacked', JSON.stringify(customPacked));

};
//-------------------------------------------------------------------------------------------------------
// ----------------------------------------- POPULATE PACKED --------------------------------------------
function populatePacked() {
    customPacked = JSON.parse(localStorage.getItem(dashData + 'customPacked'));
    //customPackedArr = Object.values(customPacked);

    if (customPacked != null) {
        for (var i = 0; i < customPacked.length; i++) {
            var packedCreate = document.createElement('button');
            packedCreate.setAttribute('id', packedCreate[i]);
            packedCreate.innerHTML = customPacked[i];
            packedCreate.addEventListener('click', unpackList)
            packedListEl.appendChild(packedCreate);
        }
    } else {
        return;
    }
};
// --------------------------------------------------------------------------------------------------------
//--------------------------- MOVE FROM PACKED BACK TO UNPACKED--------------------------------------------
function unpackList(evt) {
    packedList = JSON.parse(localStorage.getItem(dashData + 'custompacked'));
    var clickedPacked = (evt.target.id);

};
//---------------------------------------------------------------------------------------------------------
function init() {
    console.log('dashdata' + dashData);
    dashData = JSON.parse(localStorage.getItem('userLocation'));
    var customItems = JSON.parse(localStorage.getItem(dashData + 'customItems'));
    var customPacked = JSON.parse(localStorage.getItem(dashData + 'customPacked'));
    console.log('customItem' + customItems);
    if (customItems != null) {
        populteCustom();
        if (customPacked != null) {
            populatePacked();
            dashboardDataInit();
        }
    } else {
        populteBasic();
        dashboardDataInit();
    };
}

addMoreBtn.addEventListener('click', addMore);
init()

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


//------------------------------------
//------------------------------------


function saveNotes() {

    var savebtn = document.getElementById('savenotes')
    var notes = document.getElementById('input_text').valueOf.textContent;


    savebtn.addEventListener("click", () => {

        localStorage.setItem("Notes:", JSON.stringify(notes));

        console.log(notes);

    })
};