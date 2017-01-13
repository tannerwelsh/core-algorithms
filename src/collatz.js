export default function collatzConjecture(integer) {
  if (integer === 1) {
    return [1]
  }

  let nextInteger

  if (integer % 2 === 0) {
    nextInteger = integer / 2
  } else {
    nextInteger = (integer * 3) + 1
  }

  return [integer].concat(collatzConjecture(nextInteger))
}
