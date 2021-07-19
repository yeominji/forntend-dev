//URL 다루기

var url ="http://www.mysite.com/user?name=둘리&no=10";

//1.escape :URL 를 전부 encoding(x),deprecated

var  url2 =escape(url);
console.log(url2);

//2. encoding URI :paramenter만 encoding(o)
var url3 =encodeURI(url);
console.log(url3);

//3. encodeURIComponent :  값만 엔코딩 해야하는 경우 
var url4 =encodeURIComponent(url);// 안좋은 예
console.log(url4);

var toQueryString=function(o){
    var qs =[];
for (prop in o){
    qs.push(prop +"="+ encodeURIComponent(o[prop]));
}
  return qs.join("&");
}
var url ="http://maysite.com/user";
 var param={
     no:10,
     name:'여민지',
     email:'lucky9834@naver.com'
 }



var url5 =url+"?"+toQueryString(param);

console.log(url5)