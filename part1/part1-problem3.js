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

function snakesAndLaddersGame(stepNow, second, callback) {

    // penampung
    let pengganti = second() / 1000 // pengganti bilangan agar menjadi angka
    let nilai = 1; // untuk varibale jika sudah mencapai perualngan maka akan cetak callback

    console.log('Let the game begin \n') // awal game

    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            let langkahAwal = stepNow(); // variable penampung randomstep
            let tambahLangkah = langkahAwal + steps; // variable penambah langkah dari 7 menjadi 14 dst
            console.log('step ini membutuhkan', pengganti, ' detik untuk menyelesaikannya') // memanngil generateRandomSeconds
            console.log('step ini mendapatkan', langkahAwal, 'langkah') // memanggil generateRandomSteps
            console.log('sehingga langkahnya bertambah dari', steps, 'menjadi', tambahLangkah)
            console.log() // sama dengan \n
            steps = tambahLangkah // buat mengatur nilai step biar bertambah
            if (nilai == 5) {
                callback(steps) // ini adalah stepes line 50
            }
            nilai++
        }, second())
    }

}
// if passed the game
    const hasilAkhir = (hasil) => {

    // if you didn’t passed the game
    if (hasil >= shallPassed) {
        console.log('Congratulations, you have passed this game! And your total step is', hasil)
    } else {
        console.log('Goodbye! you didnt passed this game because your step only', hasil , 'because minimum step to pass this game is 30')
        console.log('Game Over')
    }
}

snakesAndLaddersGame(generateRandomSteps, generateRandomSeconds, hasilAkhir)