//print numbers in console with FOR cycle(1 - 100).
for ( let x=1; x<=100; x++ )
{
    //console.log(x);

    //IF rest of(number / 5) = 0 & rest of(number / 3) = 0 print "FizzBuzz". 
    if (((x % 5) === 0) && ((x % 3) === 0))
    {
        //console.log("fizzbuzz");
        //put those results in HTML.
        let markup = " FizzBuzz ";
        let gameElement = document.querySelector(".game");
        let gamePiece = document.createElement("div");
        let gamePieceContent = document.createTextNode(markup);
        gamePiece.appendChild(gamePieceContent);
        //gameElement.append(markup);
    }
    //ELSE IF rest of(number / 5) = 0 print "Buzz".
    else if ((x % 5) === 0)
    {
        //console.log("buzz");
        //put those results in HTML.
        let markup = " Buzz ";
        let gameElement = document.querySelector(".game");
        gameElement.append(markup);
    }
    //ELSE IF rest of(number / 3) = 0 print "Fizz".
    else if ((x % 3) === 0) 
    {
        //console.log("fizz");
        //put those results in HTML.
        let markup = " Fizz ";
        let gameElement = document.querySelector(".game");
        gameElement.append(markup);
    }
    //ELSE print number.
    else
    {
        //console.log(x);
        //put those results in HTML.
        let markup = ` <div>${x}</div> `;
        let gameElement = document.querySelector(".game");
        gameElement.append(markup);
    }
};


//style those mf numbers.