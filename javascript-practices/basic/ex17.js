//function 객체 메서드 call
var email ="dooly@gmail.com"
globar.name1 ="둘리";
console.log(name1,globar.email);



var f =function () {
    console.log(this);
}

f1();
var f2=function(s){
    console.log(s+" "+ this.name);

}
f.call