import Sinon from 'sinon'
import { expect } from 'chai'
import sayHeyLoggedIn from './sayHeyLoggedIn.js'

describe('#controller/sayHeyLoggedIn.js', function() {
    it('should send hey to logged in user', function() {
        const user = {
            isLoggedIn: function() {}
        }
        const isLoggedInStub = Sinon.stub(user, "isLoggedIn").returns(true)

        const req = { user: user }
        const res = { send: Sinon.spy() }

        sayHeyLoggedIn(req, res)

        expect(res.send.calledOnce).to.be.true;
        expect(res.send.firstCall.args[0]).to.equal("Hey")

        expect(isLoggedInStub.calledOnce).to.be.true
    })
}) 