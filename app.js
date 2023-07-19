const sum=(a,b) =>{
    return a+b;
}

console.log(sum(7,3))


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    //convertimos el valor en dólares
    let valueInDollar = 1.2 * valueInEuro;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = (127.9/1.2) * valueInDollar ;
    return valueInYen;

}

const fromYenToPound = function(valueInYen){
    let valueInPound = (0.8/127.9) * valueInYen;
    return valueInPound
}

module.exports = {sum , fromEuroToDollar , fromDollarToYen , fromYenToPound}