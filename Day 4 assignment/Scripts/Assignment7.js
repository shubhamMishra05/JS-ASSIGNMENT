

var num = prompt(`Enter a number to print prime numbers from 2 to your given number` );
var count;
for(let i = 2; i < num; ++i)
{
    count = 0;
    for (let j = 2; j <= i/2; ++j){
        if(i%j==0)
        {
            count = 1;
            break;
        }
    }
    if(count == 0)
    {
        console.log(`${i}`)
    }
}

