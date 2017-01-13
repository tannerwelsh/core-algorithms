import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', () => {
  it('returns true for the word "radar"', () => {
    expect(isPalindrome('radar')).to.eq(true)
  })

  it('ignores punctuation, spacing, and case sensitivity', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.eq(true)
  })

  it('returns false if word is not a palindrome', () => {
    expect(isPalindrome('bananas')).to.eq(false)
  })
})
