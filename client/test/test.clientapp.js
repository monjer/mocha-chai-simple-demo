
describe('client-app' , function(){
  var assert = chai.assert;
  describe('app' , function() {
    var app = window.app;
    it("should has a app var in window" , function(){
      assert.isObject(app)
    })

    describe('sayHello' , function(){
      it("should return a string type" , function(){
        var res = app.sayHello()
        assert.typeOf(res , "string")
      })
    })

    describe('postUser' , function(){
      it('should post user info success' , function(done){
        app.postUser({}, function(err){
          if(err){
            done(err)
          }else{
            done()
          }
        })
      })
    })
  })

});
