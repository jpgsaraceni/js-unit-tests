import md5Promise from './promise.js'
import { expect } from 'chai'
import errors from './errors.js'

describe('#async/promise.js', function(){
    context('with string argument', function(){
        it('should compute MD5 hash', function(){ // promises don't need done()
            // when you call a promise in a test, mocha understands it is async
            // and doesn't expect a done() call.
            md5Promise('something to hash')
                .then(function(hash){
                    expect(hash)
                        .to.be.a('string')
                        .that.matches(/^[a-f0-9]{32}$/);
                })
        })
    })

    // the following is a redundant test case for showing how to use
    // async/await instead of promise for assertion
    context('async/await test with string argument', function(){
        it('should compute md5 hash', async function(){
            const hash = await md5Promise('something to hash')
            expect(hash).to.be.a('string').that.matches(/^[a-f0-9]{32}$/);
        })
    })

    context('with non-string argument', function(){
        it('should throw an error', function(){
            md5Promise(123)
                .catch(function(err){
                    expect(function(){ throw err }) // still need to wrap a function arround throw
                        .to.Throw(errors.hashFail)
                })
        })
    })
})