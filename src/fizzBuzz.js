export default function fizzBuzz() {
  // return an array of numbers from 1 to 100.

  // For multiples of three, use the string Fizz instead of the number and for multiples of five replace with Buzz.
  //
  // For numbers which are multiples of both three and five replace with FizzBuzz.

  const fizzBuzzArray = []

  for (var num = 1; num <= 100; num++) {
    if (num % 5 === 0 && num % 3 === 0) {
      fizzBuzzArray.push('FizzBuzz')
    } else if (num % 3 === 0) {
      fizzBuzzArray.push('Fizz')
    } else if (num % 5 === 0) {
      fizzBuzzArray.push('Buzz')
    } else {
      fizzBuzzArray.push(num)
    }
  }

  return fizzBuzzArray
}
