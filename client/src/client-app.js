var app = {
  sayHello: function(){
    return "Hello world"
  },

  postUser: function(user , fun){
    setTimeout(function(){
      if(!user){
        fun(new Error('should pass user'))  
      }else{
        fun()
      }

    },1000)
  }
}
