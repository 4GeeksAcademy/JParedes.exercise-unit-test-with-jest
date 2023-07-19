const { sum } = require('./app.js')
// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('One euro should be 1.206 dollars', () => {
    //importo la función desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // esperamos que la suma de esos 2 números sea 23
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test('One dollar should be 106.58 yens',() => {
    const{ fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(1.2)).toBe(127.9)
})

test('One yen should be 0.006 pound', ()=> {
const{ fromYenToPound} = require('./app.js')
expect(fromYenToPound(200)).toBeCloseTo(1.25)
})
