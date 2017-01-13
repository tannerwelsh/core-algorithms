export default function makeChange({price, amountGiven}) {
  const change = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }

  let difference = amountGiven - price
  const coins = [[25, 'quarters'], [10, 'dimes'], [5, 'nickels'], [1, 'pennies']]

  for (let i = 0; i < coins.length; i++) {
    let coinValue = coins[i][0]
    let coinName = coins[i][1]

    const numCoins = Math.floor(difference / coinValue)
    difference = difference % coinValue
    change[coinName] = numCoins
  }

  return change
}
