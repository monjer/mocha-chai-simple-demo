function sayHello(){
  return "Hello world"
}

function saveUser(user , fun){
  setTimeout(function(){
    if(user){
      fun();
    }else{
      fun(new Error('should pass user info'))
    }
  },1000)
}
exports.sayHello = sayHello;
exports.saveUser = saveUser;
