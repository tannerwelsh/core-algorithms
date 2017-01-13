import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', () => {
  it('returns correct factorial of 5', () => {
    expect(factorial(5)).to.eq(120)
  })

  it('returns correct factorial of 1', () => {
    expect(factorial(1)).to.eq(1)
  })

  it('returns null for negative numbers', () => {
    expect(factorial(-10)).to.eq(null)
  })

  it('returns correct factorial of 20', () => {
    expect(factorial(20)).to.eq(2432902008176640000)
  })
})
