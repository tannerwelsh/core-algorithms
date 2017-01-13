export default function factorial(num) {
  if (num <= 0) {
    return null
  } else if (num === 1) {
    return 1
  }

  return num * factorial(num - 1)
}
