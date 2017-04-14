var bird = 'Pidgeons';
( function () {
    if ( typeof bird === 'undefined' ){
        var bird = 'Rubber Duck';
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );

Output dari program di atas adalah Ernie loves his Rubber Duck.
Padahal seharusnya adalah Bert loves his Pidgeons karena sebelum fungsi tersebut
dijalankan variabel bird sudah ditentukan sebelum fungsi, kecuali variable bird
belum ditentukan/typeof bird is undefined.

Perhatikan contoh berikut:

Contoh 1:
x = 5; // Inisialisasi 5 ke x;
console.log(x);
var x; // Declare x

Contoh 2:
var x; // Declare x - Akan menghasilkan undefined.
console.log(x);
x = 7; // Inisialisasi 7 ke x

Di contoh pertama, meskipun kita mendeklarasikan var x di baris paling akhir dari program,
program tetap menghasilkan output yang diinginkan, yaitu mencetak angka 5.

Karena hoisting akan menarik deklarasi dari var x ke bagian atas dari program atau fungsi.
Ingat hoisting hanya akan menarik deklarasi (var x;), bukan inisialisasi (x = 7);

Contoh berikutnya lagi, biar tambah paham.

var x = 5 // Assign 5 ke var x yang sudah dideklarasikan.
console.log('x is ', x and 'y is ', y);
var y = 7;

Output dari program di atas adalah x is  5  and y is  undefined.

Mengapa?

Ingat var y = 7 itu terdiri dari 2 tahapan:

a. var y;
b. y = 7;

karena hoisting hanya menarik var y (deklarasi) bukan y = 7 (inisialisasi).

Kembali ke laptop, betulkan program burungnya si Bert.
