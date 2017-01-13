export default function isPalindrome(phrase) {
  // ignore punctuation, spacing, and case sensitivity
  phrase = phrase.replace(/\W/g, '').toLowerCase()

  // true if first and last letter are the same
  // AND the remaining letters are also a palindrome
  if (phrase.length <= 1) {
    return true
  }

  const first = phrase[0]
  const last = phrase[phrase.length - 1]

  if (first === last) {
    return isPalindrome(phrase.slice(1, phrase.length - 1))
  }

  return false
}
