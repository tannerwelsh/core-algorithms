import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', () => {
  it('returns an array with 100 elements', () => {
    expect(fizzBuzz().length).to.eq(100)
  })

  it('returns the correct array of numbers and fizz/buzz strings', () => {
    const expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

    expect(fizzBuzz().slice(0, 15)).to.eql(expected)
  })
})
