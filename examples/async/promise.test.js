import md5Promise from './promise.js'
import { expect } from 'chai'
import errors from './errors.js'

describe('#async/promise.js', () => {
    context('with string argument', () => {
        it('should compute MD5 hash', () => { // promises don't need done()
            // when you call a promise in a test, mocha understands it is async
            // and doesn't expect a done() call.
            md5Promise('something to hash')
                .then(hash => {
                    expect(hash)
                        .to.be.a('string')
                        .that.matches(/^[a-f0-9]{32}$/);
                })
        })
    })

    context('with non-string argument', () => {
        it('should throw an error', () => {
            md5Promise(123)
                .catch(err => {
                    expect(() => { // still need to wrap a function arround throw
                        throw err
                    }).to.Throw(errors.hashFail)
                })
        })
    })
})