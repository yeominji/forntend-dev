/* null vs undefined */

//va r mayVar1 =undefine;   명사적으로 undiefind 대입
var myVar1;                // 암시적으로 undiefind 대입
var myVar2 =null;
 
console.log(myVar1 + ":"  + myVar2);
console.log(typeof(myVar1)+":"+ typeof(myVar2));

console.log (myVar1==myVar2); //값 비교
console.log (myVar1===myVar2); // 타입 비교

console.log("=============================");
 // == : equality , 값의 등치성 , 형뱐환 o
 console.log(4=="4");
 console.log(true==1);
 console.log("abc"==new String("abc"));

 console.log(true+10);
 console.log('abc'+new String('abc'));
 console.log(1+"1");
 console.log("1"+1);
 console.log("=============================");
 //=== : identity 
 // 1.  타입의 동일성
 // 2. 값의 동일성 또는 객체의 동일성 
 // 3.  형변환  x
 console.log("2"===2);
 console.log(true ===1);
 console.log( 2===1);

 console.log (new Number(1 )=== new Number(3));

 console.log("=============================");
 //추천 
 // 엄격하게 형 변환을 해서 두 피연산자의 타입을 맞춰준다.

 var str ="5";
 console.log(parseInt (str)==5);