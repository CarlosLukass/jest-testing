// import the function sum from the app.js file
const { fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./app.js');

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

test("One euro should be 1.2 dollars", function(){
    // Call fromEuroToDollar passing the EUR Amount and the EUR/USD price
     expect(fromEuroToDollar(1)).toBeCloseTo(1.2);
})

test("One Dollar should be 106.58 Yen", function(){
     expect(fromDollarToYen(1)).toBeCloseTo(106.58);
})

test("One Yen should be 0,0062 Pound", function(){
     expect(fromYanToPound(1)).toBeCloseTo(0.0062);
})
