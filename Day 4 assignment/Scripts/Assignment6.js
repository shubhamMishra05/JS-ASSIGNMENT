var count = 0;
while(true)
{
    var num = prompt("Enter a number ");
    if(num > 100 || num == null || num =="")
    {
        count++;
         console.log(`Your ${count} Entered Number is => ${num}` );
         break;
    }
    else
    {    
        count++;
        console.log(`Your ${count} Enterd Number is  => ${num} `)
        alert(`You Entered a Invalid Number Please Enter Again`)  
        continue;
    }
}