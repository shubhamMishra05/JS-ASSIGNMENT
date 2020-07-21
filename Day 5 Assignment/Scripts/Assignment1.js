
   /* Write a program which does the following things : 
    
         Takes a posive number from the user.
         Makes an array of numbers till the number given by user.
         Use higher order function to filter the odd numbers.
         Generate the array of the cubes of the filtered numbers.   */



var inputArray = [];
var num = +prompt(`Please Enter a Positive Number `);
for (var i = 1; i <= num; i++) {
    inputArray.push(i);
}
console.log(inputArray);
let odd = inputArray.filter(el=>el%2);
console.log(`After Filtered Odd Elements array is   =>    ${odd}`);
let cube = odd.map(el=>el**3);
console.log(`Array of the Cubes of the filtered Numbers is  =>   ${cube} `);