/**function 타입의 객체 (함수)
 * 
 * */;
// 함수를 생성하는 방법 1
function f1(a,b) {
    return a+b
    
}
console.log(typeof(f1),f1(10,20));
// 함수를 생성하는 방법 2: 리터럴
//var i=10;
var f2 =function(a,b){
    return a+b;
}
console.log(typeof(f2),f2(10,20));
// 함수를 생성하는 방법 3 :new 연산자와 함꼐 Function () 생성자
var f3 =new Function("a","b","return a+b");
console.log(typeof(f3),f3(10,20));
// 함수를 생성하는 방법 4 :익명()
var f4=function(){
    console.log("time out");
}
setTimeout(f4,1000);    

//즉시 실행 하는 함수
var sum=(function(a,b){
    return a+b;
})(10,20);
console.log(s);

// 가변 파라미터 함수
var sum =function(){
    var s=0;
    //argument 는 Array 가 아나다 유사배열
    console.log(arguments instanceof Array);
    //구현
    // for (var i=0; i<arguments.length; i++){
    //   s+=arguments[i];
    //}
    //arguments forEach(function (e))
    //s+=e;
    //});
    // 구현 2 (Array .prototype.forEach +caller 바꾸기)
    Array.prototype.forEach.call(arguments,function(e){
        s+=e;
    })

    return s;
} 


