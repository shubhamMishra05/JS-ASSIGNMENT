/* Question 2: Write a program that will display the multiplication table of a number on the webpage in a proper format. Take the input from the user. */


var num = +prompt('Enter a number');
heading.innerText = `Table of ${num} is :`;
// write(`Table of  ${num} is :`);
// const list = document.querySelector('#list');
// console.log(list);
for(i = 1; i <= 10; i++)
{
    list.innerHTML += `<li> ${num} * ${i} =   ${num*i} </li> `
}