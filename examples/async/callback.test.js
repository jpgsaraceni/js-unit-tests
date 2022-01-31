import md5CallbackFunc from "./callback.js";
import { expect } from "chai";
import errors from "./errors.js";

describe('#md5CallbackFunc()', () => {
    context('with string argument', () => {
        it('should compute MD5 hash', (done) => { // done (convention name) is used to test functions with callbacks
            md5CallbackFunc('Something to hash', (err, hash) => { // tested function callback
                if (err) {
                    return done(err) // go to next test. This means test failed
                };

                expect(hash)
                    .to.be.a('string')
                    .that.matches(/^[a-f0-9]{32}$/);
                
                done(); // go to next test
            })
        })
    })

    context('with non-string argument', () => {
        it('should throw an error', (done) => {
            md5CallbackFunc(12345, (err, hash) => {
                if (err) {
                    expect(() => { throw err }) // telling the test you expect an error to be thrown
                        .to.throw(errors.hashFail)
                    
                    return done();
                }

                done();
            })
        })
    })
})