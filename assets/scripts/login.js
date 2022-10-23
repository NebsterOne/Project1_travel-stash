var userName = document.querySelector('#u-login');
var userPass = document.querySelector('#u-pass');
var userSub = document.querySelector('#user-sub');
var userReturn = document.querySelector('#pass-return')
//user name and password
const uName = "user"
const uPass = "password"



function notQAuth(event) {
    event.preventDefault();
    let userNameVal = document.querySelector('#u-login').value.trim();
    let userPassVal = document.querySelector('#u-pass').value.trim();



    if (userNameVal === uName && userPassVal === uPass) {
        window.location.href = "./dashboard.html"
    } else {
        var returnEl = document.createElement('p');
        returnEl.innerHTML = "Incorrect username or password"
        userReturn.appendChild(returnEl);

    }
};

userSub.addEventListener('click', notQAuth)
console.log('test')

