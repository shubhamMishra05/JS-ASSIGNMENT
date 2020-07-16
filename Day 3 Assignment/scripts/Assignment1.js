var a = prompt("Enter a Number to check the Number is Odd or Even");
function numberIs(number) {
    if (number /2 == 0) {

        console.log(`The Entered Number is ${number} and Number is Odd `);
    } 
    else {
        console.log(`The Entered Number is ${number} and Number is Even `);
    }
    
}

numberIs(a);