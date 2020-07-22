/* Question 2: Make a webpage that will ask the name of the user. Then will display a welcome message on the webpage.Also the webpage should also have a clock. 
Using the toggle method of classList add a dark mode feature to the website.  */



var name = prompt(`Please Enter Your Name :`, `Shubham`);
title.innerText = `Welcome ${name} in LetsUpgrade community  `;



var jstime = document.getElementById('time');

function clock() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    jstime.innerText = 'Time is :  ' + time;
}
setInterval(clock, 1000);
var dark = document.getElementById('dark');

dark.onclick = function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
