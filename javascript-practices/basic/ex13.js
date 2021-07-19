//String
//  배열처럼 접근이 가능
var str1 ="Hello World"
for (var i =0; i< str.length; i++ ){
    console.log(str[i]);
}
//문자열 합치기
var str2 ="Hello";
var str3 ="World";
var str4 =str2+" "+str3;
console.log(str4);

//캐스팅
var str6="boolean:"+true;
console.log(str6);

//메서드
var str7 ="string1 string2 string3 "
console.log(str7.length);

var index =str7.indexOf("string4");
console.log(index); // 찾지 못하면 -1
 
var str8 =str7.substr(10); //10 ~end
console.log(str8);

var str9 =str7.substr(10,3); //10 ~end
console.log(str9);

var str10 =str7.substr(10,13/*last index -1*/); //10 ~end
console.log(str10);

var a =str7.substr("") ;
console.log(a);

var str11= 'abcdefg';
var a =str11.split(":") //10 ~end
console.log(str11);

