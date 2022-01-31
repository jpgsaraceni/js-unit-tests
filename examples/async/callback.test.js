import md5CallbackFunc from "./callback.js";
import { expect } from "chai";
import errors from "./errors.js";

describe('async/callback.js', function(){
    context('with string argument', function(){
        it('should compute MD5 hash', function(done){ // done (convention name) is used to test functions with callbacks
            md5CallbackFunc('Something to hash', function(err, hash){ // tested function callback
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

    context('with non-string argument', function(){
        it('should throw an error', function(done){
            md5CallbackFunc(12345, function(err, hash){
                if (err) {
                    expect(function(){ throw err }) // telling the test you expect an error to be thrown
                        .to.throw(errors.hashFail)
                    
                    return done();
                }

                done();
            })
        })
    })
})