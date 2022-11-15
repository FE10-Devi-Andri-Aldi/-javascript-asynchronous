/* 
In this game, you only have 5 turn, each turn have a random second 
to pass it and have a random steps to moving forward, minimum step you have to do is 30 steps, 
if your steps is less than minimum steps, then you’re lose this game, 
and if your steps is more or equal than minimum steps, you passed that game.
All you have to do is create that program to handle that game that only has 5 turns.

=>
Dalam permainan ini, Anda hanya memiliki 5 putaran, 
- setiap putaran memiliki detik acak untuk melewatinya dan memiliki langkah acak untuk maju, 
- langkah minimum yang harus Anda lakukan adalah 30 langkah, 
- jika langkah Anda kurang dari langkah minimum, maka Anda ' Anda kalah dalam permainan ini, dan 
- jika langkah Anda lebih atau sama dengan langkah minimum, Anda lulus permainan itu.
Yang harus Anda lakukan adalah membuat program itu untuk menangani game yang hanya memiliki 5 putaran itu.

*/



const shallPassed = 30;
let steps = 0;
 
function generateRandomSteps() {
 // don't touch it
 return Math.ceil(Math.random() * 10);
}

function generateRandomSeconds() {
    // don't touch it
    // in milliseconds
return Math.ceil(Math.random() * 10) * 1000;
}
    
function snakesAndLaddersGame(stepNow, seconds, callback) {
    let totalSteps = 0
    let step = randomSteps()
    totalSteps = totalSteps + step

    console.log('Game start')
}

   
   



