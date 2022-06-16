let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// this is my function that sums two numbers
const fromDollarToYen = (mount) => {
    // find valor of USD/JPY
    const ONEEUR = 1 / oneEuroIs.USD
    const JPY = ONEEUR * oneEuroIs.JPY

    return mount*(1/oneEuroIs.USD)*(127.9/1)
}

// this is my function that sums two numbers
const fromEuroToDollar = (mount) => {
    return mount * oneEuroIs.USD;
}

// this is my function that sums two numbers
const fromYanToPound = (mount) => {

    const ONEJPY = 1 / oneEuroIs.JPY
    const GBP = ONEJPY * oneEuroIs.GBP

    return mount * GBP;
}

console.log(fromYanToPound(1))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };