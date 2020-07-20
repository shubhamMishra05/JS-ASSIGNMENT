var sales = prompt(`Enter the total sale `);

if(sales >= 0 && sales <= 5000)
{
    var totCommision = sales*0.02;
    console.log(`Total Commision earned by employee : ${totCommision}`); 
}
else if(sales > 5000 && sales <= 10000)
{
    var totCommision = (5000*0.02)+((sales - 5000)*0.05);
    console.log(`Total Commision earned by employee : ${totCommision}`); 
}

else if(sales > 10000 && sales <= 20000)
{
    var totCommision = (5000*0.02) + (5000*0.05) + ((sales - 10000)*0.07);
    console.log(`Total Commision earned by employee : ${totCommision}`); 
}
else
{
    var totCommision = (5000*0.02) + (5000*0.05) + (10000*0.07) +((sales - 20000)*0.1);
    console.log(`Total Commision earned by employee : ${totCommision}`);    
}