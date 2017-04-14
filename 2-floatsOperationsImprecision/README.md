var stockOptionsCost = 10.70, paid = 20.80;

function calculateChange() {

    return paid - stockOptionsCost;
}

function calculateAmountOfStockOptions () {
    return paid / stockOptionsCost;
}

var amountStockOptions = calculateAmountOfStockOptions();
var yourChange = calculateChange();

Hasil dari perhitungan fungsi calculateAmountOfStockOptions adalah 1.94392523364486

Hasil dari perhitungan fungsi calculateChange adalah 10.100000000000001

Mengapa ada angka 1 di hasil dari fungsi calculateChange?
JavaScript tidak seharusnya digunakan untuk yang terkait dengan float.

Solusinya adalah menggunakan toFixed()
