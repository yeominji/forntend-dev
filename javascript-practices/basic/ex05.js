/*
구문 (Startment)
1. 자바스크립드의 실행 단위
2. 구성 요소 
 값, 연산자 :표현식 
 주석     : 구문을 구성해도  실행되지 않는다.
 예약어   : if else for ,...
3. 구문의 예
if if ~else , if ~else if ~else
wuile , do-while ,for
Swith
for ~in 
with(deprecated)
변수 정의 (함수 정의)
 4. 공백  : 토큰 구분 ,무시 
5. 세미콜론 : 원칙적으로 구문 분리하는 역할
6. 개행 (line breaker)
*/
// ;는
//표현삭 var  s= "hello world"를
// 표현식 구문(Eapression Statment)를 만들어
// 표현식을 실행 하게 끔 한다.
var s ="hello world"; console.log(s)
// 개행은 ; 으로 대체 된다
var s ="hello world";
console.log(s)


// 2. 상황에 따라서 토큰을 분리하는  역할도 하고
//; 역할도 한다
a
=
2
+
2
console.log(a)