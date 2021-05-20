// Если в этом месте вызвать sum_f проблем не будет а если вызвать sum_f1 выдаст ошибку

// Function Declaration
// Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).
function sum_f(a, b) {
    return a + b;
}
// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// Function Expression


let sum_f1= function(a, b) {
    return a + b;
};

console.log(sum_f(5,6));
console.log(sum_f1(5,7));