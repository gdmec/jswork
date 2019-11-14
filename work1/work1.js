let sum = 0
for(let i=0;i<10;++i){
    sum += i
    if(i=3) break;
}
console.log(i)

let a,b,c
[a,b,c] = [1,2,3]

let a,b,c
a,b,c = 1,2,3

let a,b,c
a=1,b=2,c=3

let a,b,c
a,b,c = [1,2,3]


let citys =[['广州市','佛山市','中山市'],
            ['哈尔滨市','齐齐哈尔市','牡丹江市'],
            ['南宁市','柳州市','桂林市']];

获取“牡丹江市”的表达式是
citys[2,3]
citys[1][2]
citys[2][3]
citys[1,2]

arr = new Array(1,2,,,5)
arr = [1,2,undefined,undefined,5]
arr = [1,2,,,5]
arr = 1,2,,,5


let arr = [1,2,,,5]
for(val of arr){
    console.log(val)
}

let arr = [1,2,,,5]
for(val in arr){
    console.log(val)
}

let arr =[1,2,3,4,5]
arr['刷三观']='什么鬼'
for(val of arr){
    console.log(val)
}

arr = [1,2,,,5]
for(let i=0;i<arr.length;++i){
    console.log(arr[i])
}

{
    console.log(1)
    console.log(2)
    console.log(5)
}

{
    console.log(0)
    console.log(1)
    console.log(undefined)
    console.log(undefined)
    console.log(4)
}


function cal(num1,num2,fn){
    return fn(num1,num2)
}

let result = cal(10,20,function(x,y){
    return x + y
})


let arr =[[1,2,3],[4,5,6],[7,8,9]]
let rra = arr


function fn(){
    let times = 0
    let c = function(){
        return ++times
    }
    return c
}
let count=fn()
let sum = 0
for (let i=0;i<5;i++){
    sum += count()
}
alert(sum)


function Person(){
    obj = this
    return {}
}
var obj,p = new Person()
console.log( obj ==p )
console.log(p)
console.log(obj)

function People(){
    objp = this
    return 123
}
var objp,po=new People()
console.log(objp == po )
console.log(objp)
console.log(po)

let obj= {
    name:'york',
    tel:'13760795885',
    hello:function(){
        console.log("你好，我是"+this.name)
        //在此处如何调用函数makeFriend()？
    },
    makeFriend:function(){
        console.log("能加我微信吗？"+this.tel)
    }
}
obj.hello()

