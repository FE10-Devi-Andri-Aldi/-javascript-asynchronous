/* 
You want to get some snacks like boba and seblak, and in your pocket, 
you only have Rp. 20.000, there’s price list of snacks:

Boba: Rp. 5.000, estimated time to get boba: 5 second
Seblak: Rp. 8.000, estimated time to get seblak: 9 second

You asked to create programs to solve this problem using callback function

=>

Mau jajan seperti boba dan seblak, di kantong cuma punya uang Rp. 20.000, 
ada daftar harga snack :

- Boba: Rp. 5.000, perkiraan waktu untuk mendapatkan boba: 5 detik
- Seblak : Rp. 8.000, perkiraan waktu untuk mendapatkan seblak: 9 detik

Anda diminta membuat program untuk mengatasi masalah ini menggunakan fungsi callback

*/


function jajanBoba(uang, callback) {

    // -------- Bagian Boba -----------
    // diket :
    let sisaUang = uang; // penampung baru

    // Boba: Rp. 5.000, estimated time to get boba: 5 second
    // pernyataan 1
    setTimeout(() => {
        let hargaBoba = 5000;
        sisaUang = uang - hargaBoba;
        if (sisaUang <= 0) {
            console.log('Maaf uang kamu belum cukup untuk membeli Boba');
            console.log('Sisa uang kamu sebesar' + uang);
            console('\n') // newline
        }
        // pernyataan 2
        else {
            console.log('kamu jajan boba dengan harga Rp.' + hargaBoba);
            console.log('sisa uang kamu adalah Rp.' + sisaUang);
            console.log('\n') // newline
        }

    }, 5000); // Boba: Rp. 5.000, estimated time to get boba: 5 second

        
    setTimeout(() => {
        callback(sisaUang);
    }, 9000) // Seblak: Rp. 8.000, estimated time to get seblak: 9 second
}


//---------------------------- Bagian Seblak-------------------------------//

function jajanSeblak(uang) {
    // penampung baru
    let hargaSeblak = 8000;
    let sisaUang = uang - hargaSeblak;
    

    // Seblak : Rp. 8.000, perkiraan waktu untuk mendapatkan seblak: 9 detik
    if(sisaUang < 0){ // pernyataan 2
        console.log('Maaf uang kamu belum cukup untuk membeli boba dan seblak')
        console.log('Sisa uang kamu adalah Rp.' + uang)
    }
    else {         // pernyataan 2
        console.log('Kamu jajan seblak dengan harga Rp.'+ hargaSeblak);
        console.log('Sisa uang kamu adalah Rp.'+ sisaUang);
    }
}

// jajanBoba(20000, jajanSeblak)
jajanBoba(50000, jajanSeblak)



/*
output

 kamu jajan boba dengan harga Rp. 5000
 sisa uang kamu Rp. 15000

 kamu jajan seblak dengan harga Rp. 8000
 sisa uang kamu sebesar Rp. 7000

 if you doesn’t have enough money
 Maaf uang kamu belum cukup untuk membeli <nama barang>
 Sisa uang kamu sebesar <sisa uang>

*/ 


