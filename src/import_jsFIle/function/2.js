/**
 * Данный код работать не будет, так как функция объявляется внутри области видимости блока if.
 */


// let per = 24;
//
// // в зависимости от условия объявляем функцию
// if (per > 25) {
//
//   function welcome() {
//     alert("больше 25");
//   }
//
// } else {
//
//   function welcome() {
//     alert("Меньше 25");
//   }
//
// }
//
// // ...не работает
// welcome(); // Error: welcome is not defined

/**
 *  Функция объявленная как Function Expression сработает.
 */

let per = 29;

//Объявляем пустую переменную.
let fun;

// в зависимости от условия объявляем функцию
if (per > 25) {
    fun = function() {
        alert("больше 25");
    };
} else {
    fun = function() {
        alert("Меньше 25");
    };
}

// ...не работает
fun(); // Error: welcome is not defined

