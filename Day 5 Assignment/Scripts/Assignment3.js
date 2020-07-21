/*  Using promises/async await/fetch get the random todos from the json placeholder api and log all the completed todos to the console  */

console.log('Fetch API');

async function fetchAPI(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}

fetchAPI();