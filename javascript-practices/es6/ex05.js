/**
 * Arrow Function
 */
const power =function(x){
    returnx*x;

}
let number =[1,2,3,3,5];
number.forEach(function(number){
 process.stdout.write(`${number}:${power(number)}\t`);
});
//ex1
console.log("\n-----------");
number.forEach(function(number){
   let result = (function(x){
        return x*x;
    })(number);
});

//ex4 - 여러행 함수
console.log("\n-----------");
[5,3,15,1045,43,92].forEach(e=>{
    if(e%5){
        process.stdout.write(`${e}\t`);
    }
});
// ex5: this를 어휘적 바인딩(Lexical Binding)
console.log("\n----");
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '길동', '희동이'],
    printFriends: function(){
        this.friends.forEach(friend => console.log(`${this.name}의 친구 ${friend}`));
    }
}

dooly.printFriends();

