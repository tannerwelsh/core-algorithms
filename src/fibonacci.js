export default function fibonacci(position) {
  if (position < 0) {
    return null
  } else if (position === 0) {
    return []
  } else if (position === 1) {
    return [0]
  }

  const fibNums = [0, 1]

  for (var i = 2; i < position; i++) {
    const prevPrevNum = fibNums[i - 2]
    const prevNum = fibNums[i - 1]

    fibNums.push(prevPrevNum + prevNum)
  }

  return fibNums
}
