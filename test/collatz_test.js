import { expect } from 'chai'
import collatzConjecture from '../src/collatz'

describe('collatzConjecture()', () => {
  it('returns 1 when input is 1', () => {
    expect(collatzConjecture(1)).to.eql([1])
  })

  it('returns the correct Collatz sequence for a positive integer', () => {
    const seq = [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]

    expect(collatzConjecture(7)).to.eql(seq)
  })
})
