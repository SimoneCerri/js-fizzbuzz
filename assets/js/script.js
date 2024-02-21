//print numbers in console with FOR cycle(1 - 100).
let gameElement = document.querySelector(".game");
for ( let x=1; x<=108; x++ )
{
    //console.log(x);

    //IF rest of(number / 5) = 0 & rest of(number / 3) = 0 print "FizzBuzz". 
    if (((x % 5) === 0) && ((x % 3) === 0))
    {
        //console.log("fizzbuzz");
        //put those results in HTML.
        let gamePiece = document.createElement("div");
        gamePiece.innerText = "SAVE";
        gameElement.appendChild(gamePiece);
        gamePiece.className = "style_5_3";
    }
    //ELSE IF rest of(number / 5) = 0 print "Buzz".
    else if ((x % 5) === 0)
    {
        //console.log("buzz");
        //put those results in HTML.
        let gamePiece = document.createElement("div");
        gamePiece.innerText = "RUN";
        gameElement.appendChild(gamePiece);
        gamePiece.className = "style_5";
        //elemento.innerHTML += `<div class="classe-che-mi-pare">${markup}</div>`

        /*let gamePieceContent = document.createTextNode(markup);
        gamePiece.appendChild(gamePieceContent);*/
        
    }
    //ELSE IF rest of(number / 3) = 0 print "Fizz".
    else if ((x % 3) === 0) 
    {
        //console.log("fizz");
        //put those results in HTML.
        let gamePiece = document.createElement("div");
        gamePiece.innerText = "PIECE";
        gameElement.appendChild(gamePiece);
        gamePiece.className = "style_3";
    }
    //ELSE print number.
    else
    {
        //console.log(x);
        //put those results in HTML.
        let gamePiece = document.createElement("div");
        gamePiece.innerText = `${x}`;
        gameElement.appendChild(gamePiece);
        gamePiece.className = "style_number";
    }
};


//style those mf numbers.