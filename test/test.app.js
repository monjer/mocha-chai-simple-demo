var assert = require('chai').assert
var app = require('../app.js')

describe("App", function() {


  describe('sayHello function', function() {
    var sayHello = app.sayHello;

    it('should return string type', function() {
      var result = sayHello();
      assert.typeOf(result, 'string')
    })

    it("should return hello world string", function() {
      var result = sayHello();
      assert.equal(result, 'Hello world')
    })
  });


  describe('saveUser function', function(done) {
    var saveUser = app.saveUser;

    it("should save without error", function() {
      saveUser({
        name: 'user'
      }, function() {
        if (err) {
          done(err)
        } else {
          done()
        }
      })
    });
  });

})
