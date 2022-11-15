/*

In this part, you have to create a program that will returning 
Promise between random color or error message with timeout 3 seconds
All you have to do is create random number using Math Random between 0 - 7, 
if the random number returning number more than 4, 
it will returning error message “Failed to get random color, please try again”, otherwise, 
it will returning color from listColors using random number as a index to get color from listColors.

Code

=>
Pada bagian ini, Anda harus membuat program yang akan mengembalikan 
Promise antara warna acak atau pesan error dengan batas waktu 3 detik
Yang harus Anda lakukan adalah membuat angka acak menggunakan Matematika Acak antara 0 - 7, 
jika angka acak mengembalikan angka lebih dari 4, itu akan mengembalikan pesan kesalahan "Gagal mendapatkan warna acak, 
silakan coba lagi", jika tidak, itu akan mengembalikan warna dari 
listColors menggunakan nomor acak sebagai indeks untuk mendapatkan warna dari listColors.

Kode
*/


const listColors = ["green", "yellow", "blue", "orange", "red"];
 
const getRandomColor = new Promise((resolve, reject) => {
    console.log("loading starts... \n");
    setTimeout (() => {
        console.log("generating random color... \n");
    }, 3000)

    let randomColor = Math.floor(Math.random() * 7);
        console.log(randomColor)
    
    if (randomColor <= 4){
        setTimeout(() => {
            console.log( 'Is color : '+ listColors[randomColor])
        }, 3000)
    } else {
        setTimeout (() => {
            console.log('failed to get random color, please try again \n')
        }, 3000)
    }
  });



// const getRandomColor = new Promise((resolve, reject) => {}