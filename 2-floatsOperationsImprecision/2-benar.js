var stockOptionsCost = 10.70, paid = 20.80;

function calculateChange() {

    return (paid - stockOptionsCost).toFixed(2);
}

function calculateAmountOfStockOptions () {
    return paid / stockOptionsCost;
}

var amountStockOptions = calculateAmountOfStockOptions();
var yourChange = calculateChange();

console.log('Amount Stock Options: ', amountStockOptions);
console.log('Your Change         : ', yourChange)
