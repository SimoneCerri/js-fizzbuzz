# !Quest!
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Come faccio a sapere se un numero è divisibile per un altro?

 BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

 BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

# ?Solution? 
- print numbers in console with FOR cycle (1-100).
- IF rest of(number / 5) = 0 & rest of(number / 3) = 0 print "FizzBuzz".
- ELSE IF rest of(number / 5) = 0 print "Buzz".
- ELSE IF rest of(number / 3) = 0 print "Fizz".
- ELSE print number.
- put those results in HTML.
- style those mf numbers.