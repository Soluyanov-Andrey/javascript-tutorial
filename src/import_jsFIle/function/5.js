function inc(a) {
    return ++a;
}

console.log('inc:------------');

// В свойстве name хранится имя функции
console.log(inc.name);

//Покажет сколько аргументов у функции inc
console.log(inc.length);

//Покажет тело функции
console.log(inc.toString());

//----------------------------------------------------

const subtraction = function(a, b) {
    return a - b;
};

console.log('subtraction:------------');
console.log(subtraction.name);
console.log(subtraction.length);
console.log(subtraction.toString());

//----------------------------------------------------

const min = (a, b) => (a < b ? a : b);

console.log('min:------------');
console.log(min.name);
console.log(min.length);
console.log(min.toString());

//----------------------------------------------------

//Объявляется анонимная функция ,и mame у нее не будет
console.log('Anonymous function: ' + function(x) { return x; }.name);

//Объявляется лямбда функция и name у нее тоже не будет
console.log('Anonymous lambda: ' + ((x) => x).name);