var choice = +prompt(`Tell which operation you want to perform     Input
 1 for Addition, 2 for Subtraction, 3 for Multiplication, 4 for Division, 5 for Square, 6 for square root,  7 for Percentage,`)

switch (choice) {
    case 1:
        var num1 = +prompt(`Enter 1st Number `);
        var num2 = +prompt(`Enter 2nd Number `);
        var result = num1 + num2;
        alert(`Addition of ${num1} and ${num2} is ->   ${result}`);
        break;
    case 2:
        var num1 = +prompt(`Enter 1st Number `);
        var num2 = +prompt(`Enter 2nd Number `);
        var result = num1 - num2;
        alert(`Subtraction  of ${num1} and ${num2} is ->   ${result}`);
        break;
    case 3:
        var num1 = +prompt(`Enter 1st Number `);
        var num2 = +prompt(`Enter 2nd Number `);
        var result = num1 * num2;
        alert(`Multiplication of ${num1} and ${num2} is ->   ${result}`);
        break;
    case 4:
        var num1 = +prompt(`Enter 1st Number `);
        var num2 = +prompt(`Enter 2nd Number `);
        var result = num1 / num2;
        alert(`Division of ${num1} and ${num2} is ->   ${result}`);
        break;
    case 5:
        var num1 = +prompt(`Enter Number to Get the Square `);
        var result = Math.pow(num1,2)
        alert(`Square of ${num1}  is ->   ${result}`);
        break;
    case 6:
        var num1 = +prompt(`Enter Number to Get the Square Root `);
        var result = Math.sqrt(num1);
        alert(`Square Root of ${num1}  is ->   ${result}`);
        break;
    case 7:
        var marksObtained = +prompt(`Enter Marks you Obtained `);
        var totalMarks = +prompt(`Enter the Total Marks  `);
        var per = ((marksObtained *100)/totalMarks);
        alert(`You Got the -> ${per}%`);

}