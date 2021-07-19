// 변수 범위(Scope)
//1. 자바스크립트 어휘에서 범위를 알수 있는 정적 범위(L) 이다
// 2, EC6 이전에는 자바와 같은 Block Scope은 지원하지 않았다.
//EC6 이전에는 함수 범위(Function Scope) 만 자원 했었다.
//function 안에서는 변수 앞에 var 키워드룰 하면
// 만일 , var 키워드 없이 변수를 정의 하면 전역 범위를 
//EC6 에서는  새롭게 Block Scope 를 가지게 하는
// 1.let :변수
//2. const : 상수
 //두키워드를 지원한다.

 var i =10;
 var f =function(){
     var i =20;
     j=100;
     console.log(i);
     i=j-1;
 }
 {
     let x =10000000;
     const PI =3.14;
     x=100;
     // 상수 이기 떄문에 오류
     // PI=0;
 }
 //error
 //console.log(x);
 f();
 console.log(i);
 console.log(j);