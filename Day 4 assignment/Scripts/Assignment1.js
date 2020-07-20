/*Question 1 : Create a for loop that itereates uo to 100 while outputting "fizz at multiples of 3 ,"buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5. */

var count1, count2, count3;
count1 = count2 = count3 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`for ${i} the Output is fizzbuzz`);
        count3++;
    }
    else {
        if (i % 3 == 0) {
            console.log(`for ${i} the Output is fiz`);
            count1++;
        }
        if (i % 5 == 0) {
            console.log(`for ${i} the Output is buzz`);
            count2++;
        }

    }
}
    console.log(`Number of Multiples of 3 between 1 to 100 is -> ${count1}`);
    console.log(`Number of Multiples of 5 between 1 to 100 is -> ${count2}`);
    console.log(`Number of Multiples of 3 and 5 between 1 to 100 is -> ${count3}`);