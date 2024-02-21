//print numbers in console with FOR cycle(1 - 100).
for ( let x=1; x<=100; x++ )
{
    //console.log(x);

    //IF rest of(number / 5) = 0 & rest of(number / 3) = 0 print "FizzBuzz". 
    if (((x % 5) === 0) && ((x % 3) === 0))
    {
        console.log("fizzbuzz");
    }
    //ELSE IF rest of(number / 5) = 0 print "Buzz".
    else if ((x % 5) === 0)
    {
        console.log("buzz");
    }
    //ELSE IF rest of(number / 3) = 0 print "Fizz".
    else if ((x % 3) === 0) 
    {
        console.log("fizz");
    }
    //ELSE print number.
    else
    {
        console.log(x);
    }

//ELSE print number.

};






//put those results in HTML.

//style those mf numbers.