// By Conditional Statement
var marks = prompt("Enter Your marks obtained between 1 to 100");
console.log('This is By Conditional Statement ->');
if( marks <=100 && marks >= 60){
    console.log(`Marks are ${marks} and grade is A`);
}
else if(marks < 60 && marks >= 50) {
    console.log(`Marks are ${marks} and grade is B`);
}
else if(marks < 50 && marks >= 40) {
    console.log(`Marks are ${marks} and grade is C`);
}
else if(marks < 40 && marks >= 33) {
    console.log(`Marks are ${marks} and grade is D`);
}
else {
        console.log(`Marks are ${marks} and grade is E`);
    }


    console.log('This is By Ternary Operator ->');
 //By ternary operator

 marks <=100 && marks >= 60 ? console.log(`Marks are ${marks} and grade is A`) : marks < 60 && marks >= 50 ?  console.log(`Marks are ${marks} and grade is B`) : marks < 50 && marks >= 40 ?  console.log(`Marks are ${marks} and grade is C`) : marks < 40 && marks >= 33 ? console.log(`Marks are ${marks} and grade is D`) : console.log(`Marks are ${marks} and grade is E`);