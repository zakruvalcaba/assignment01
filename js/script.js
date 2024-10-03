// GLOBAL VARIABLES
let futureValue
let investment
let rate
let years

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount (Ex: xxxx.xx)'))
rate = parseFloat(prompt('Enter the interest rate (Ex: xx.x)'))
years = parseInt(prompt('Enter the number of years that you want to invest for.'))

// CALCULATE FUTURE VALUE
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`)
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}`)