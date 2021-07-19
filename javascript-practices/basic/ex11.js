var color=['black','blue','red'];
var fruits=['apple','grape','orange'];

//Array 메소드 -concat
var a1 =fruits .concat(color);
console.log(a1);
//Array 메소드 -join
var str=fruits.join(":")
console.log(str);
//Array 메소드 -pop,push:stack 지원
var color =color.pop();
console.log(color);

console.log(colors);
//Array 메소드 -reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);
//Array 메소드 -shift
var number =[100000,10000,20000,30000];
var n=number.shift();
console.log(n,number);

//Array 메소드 -slice
var numbers2=number.slice(0,2);
console.log(numbers2,numbers);
//Array 메소드 -sort
console.log(numbers);
numbers.sort();
console.log(numbers);

//Array 메소드 -splice
//index 부터 count 개를 삭제 후 삭제 된 요소를 배열로 반환
console.log(fruits);
var fruits2 =fruits.splice(0/*index*/ ,2 /*count*/);

var a1=[0,1,2,3,4];
var a2 =a1.splice(1,3,10);
console.log(a2,a1);

var a1=[0,1,2,3,4];
var a2 =a1.splice(1,1,10);
