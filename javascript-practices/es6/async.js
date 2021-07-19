const req01 = function(url, callback) {  // req01: db.query, $.ajax 와 유사
    console.log('req01 [' + url + ']');
    setTimeout(function(){
        const resp = {
            data: "Hello World"
        }
        callback(resp);
    }, 3000);
}

const req02 = function(url) { // req02: db.query, $.ajax 함수를 Promise 객체를 리턴하는 프라미즈화(promify)된 함수 
    console.log('req02 [' + url + ']');
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const resp = {
                data: "Hello World"
            }
            resolve(resp);
            // error
            // reject('fails: req02');
        }, 3000);        
    });
}

const fetch = async function(url) { // ex) model.findAll, model.insert ...
    try {
        console.log('fetch [' + url + ']');
        const response = await req02(url);
        console.log(response);
        return response;
    } catch(err) {
        console.error(err);
    }
}

/*
req01("http://www.kickscar.com/api", function(response){
    console.log(response);
});
*/

/*
req02("http://www.kickscar.com/api")
.then(function(response){
    console.log(response);
})
.catch(function(err){
    console.error(err);
})
*/

fetch();

console.log('do something');