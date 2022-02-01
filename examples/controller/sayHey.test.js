import Sinon from 'sinon'
import { expect } from 'chai'
import sayHey from './sayHey.js'

const user = {
    addUser: function(name){
      this.name = name;
    }
  }

describe('#controller/sayHey.js', function(){
    it('should return index page', function(){
        const req = {}
        const res = {
            send: Sinon.spy(),
        }

        sayHey(req, res)
        
        expect(res.send.calledOnce).to.be.true
        expect(res.send.firstCall.args[0]).to.equal("Hey")
    })
})

describe("addUser", function() {
    it("should add a user", function() {
        Sinon.spy(user, "addUser"); // adds a spy to the addUser method of user class
        user.addUser('John Doe');
  
        expect(user.addUser.calledOnce).to.be.true;
    });
});