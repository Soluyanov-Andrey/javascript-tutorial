/**
 * Typeof показывает
 */

console.log( "----------------1--------------" );
console.log( typeof true ); //Вернет boolean

console.log( "----------------2--------------" );
console.log( typeof "hhhh"); //Вернет string

console.log( "----------------3--------------" );
console.log( typeof 7); //Вернет number

/**
 *  Преобразование значений к нужному типу.
 */

/**
 *  Преобразуем в число.
 */
console.log( "----------------4--------------" );

let x = '3' * 1;
console.log(x); //3

let x1 = +'3';
console.log(x1); //3

//Официальная функция для преобразования в число.
let x2 = Number(true); //Преобразует в 1
console.log(x2); //3

/**
 *  Преобразуем к строке.
 */

console.log( "----------------5--------------" );
//Если один из операндов строка, то все приводится к строке.
let str = 5 + ""; // "5"
console.log(str); //3

let str1 = String(true); // "true"
console.log(str1); //"true"

/**
 *  Приводим к булеву типу.
 */

console.log( "----------------6--------------" );
let bul = !! 3; //true
console.log(bul);
console.log(Boolean(25)); //"true"

