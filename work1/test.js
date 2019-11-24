function Father(uname,age){
    this.uname = uname;
    this.age = age;
}
Father.prototype.money = function(){
    console.log(10000);
}

function Son(uname,age,score){
    Father.call(this,uname,age)
    this.score = score;
}
Son.prototype = new Father();
Son.prototype.constructor = Son;
Son.prototype.exam = function(){
    console.log('孩子要考试');
}
let son = new Son('刘琛',18,100)
console.log(Father.prototype);
console.log(son.__proto__.constructor);