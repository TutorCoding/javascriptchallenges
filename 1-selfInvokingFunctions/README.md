Saya ingin menginisialisasi variable 'testValue' menjadi 3

    var testValue;
    function test() {
      testValue = 3;
      }();

Jika kode di atas dieksekusi maka outputnya adalah sebagai berikut:

SyntaxError: Unexpected token )

Berapa nilai dari testValue?
undefined

Mengapa?
karena function di atas tidak berhasil melakukan eksekusi sendiri.
