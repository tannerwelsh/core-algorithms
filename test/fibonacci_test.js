import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', () => {
  it('returns the fibonacci sequence to the nth position', () => {
    const sequenceToZero = []
    const sequenceToFive = [0, 1, 1, 2, 3]
    const sequenceToTen = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

    expect(fibonacci(0)).to.eql(sequenceToZero)
    expect(fibonacci(5)).to.eql(sequenceToFive)
    expect(fibonacci(10)).to.eql(sequenceToTen)
  })

  it('requires a positive integer input', () => {
    expect(fibonacci(-13)).to.eq(null)
  })
})
