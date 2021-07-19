/*
자바 스크립트 객체 1 -object
자바스크립트 객체는 function 타입과 object 타입이 있다.
2. 보통 function 타입 객체는 "함수"라고 부른다.
3. 따라서 자바스크립트 객체라 부르는것은 object 타입의 객체를 가르킨다.
*/
//생성 방법 1
//생성자 함수를 사용하는 방법 
//Number() ,Boolean(), String(), Object(), Array()...내장 객체 (생설다 함수)
//그리고 사용자 정의 생성자 함수
var o1 =new Object();
o1.name ="둘리";
o1.age =10;
o1.another= new Object();
o1.another.name="마이콜"
o1.another.age=30; 
console.log(o1);

//생성 방법 2 
//{} listeral 사용하는 방법
o2 ={};
o2.name ="둘리";
o2.age =10;
o2.another= new Object();
o2.another.name="마이콜"
o2.another.age=30; 
console.log(o2);
//생성 방법 3 ==JavaScript Object Notation
o3= {
name: "둘리",
age :10,
another:{
    name :"마이콜",
    age :30

}
};
console.log(o3);

/* XMLHttpRequest 호스트 객체 (브라우저)사용해서 통신(AJAX)*/


var reponse='{ name: "둘리",age :10, email:"dooly@gmail.com"}'
  var useVo =  eval ("("+ reponse+")");
  console.log(useVo.name+":"+useVo.email);