/* 자바스크립트 객체 3 
*/
var o={
    name : "둘리",
    age: 10,
    isFemale: false

};
var f =function(){
    console.log("hello world");
}
f();

 var i1 =10;
 var i2 =new Number(10);

console.log(" =====객체의 확장============");

o.another={
 name : "마이콜",
 age:30
};
console.log(o);




f.another={
    name : "마이콜",
    age:30,
    info :function(){
        console.log(this .name+":"+this.age);

    }
   };

   console.log(f.another);
   f.another.info();


console.log(" =====기본 타입은 확장 x============");


i2.another={};
console.another(i2);


i1.another={};
console.log(i1.another);