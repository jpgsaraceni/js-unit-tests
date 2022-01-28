import sum from './sum.js'
import { expect } from 'chai'
import errors from './errors.js'

describe('#sum()', () => {
    context('without arguments', () => {
        it('should return 0', () => {
            expect(sum()).to.equal(0)
        })
    })

    context('with number arguments', () => {
        it('should return sum of arguments', () => {
            expect(sum(1, 2, 3, 4, 5)).to.equal(15)
        })

        it('should return argument when only one argument is passed', () => {
            expect(sum(5)).to.equal(5)
        })
    })

    context('with non-number arguments', () => {
        it('should throw error', () => {
            expect(() => { // chai throw() method requires function to be wrapped in an anonymous function
                sum(1, 2, '3', [4], 5)
            }).to.throw(TypeError, errors.invalidInput)
        })
    })
})