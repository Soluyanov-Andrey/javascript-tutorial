// setTimeout(() => console.log("d"), 3000);
// setTimeout(function(){console.log("d4")}, 1000);


let promise = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, при вызове new Promise
    function a(b){return b+5};
    // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
    // setTimeout(() => resolve("done"), 1000);
    setTimeout(function(){
        resolve(a(10))}, 1000);
});

promise.then(
    function(result) { console.log(result) },
    function(error) { /* обработает ошибку */ }
);



// function sayHiBye(firstName, lastName) {
//
//   let b=15;
//
//     s = function getFullName() {
//         return b;
//     }
//     return getFullName();
// }
//
// console.log(sayHiBye("Вася", "Пупкин"));











