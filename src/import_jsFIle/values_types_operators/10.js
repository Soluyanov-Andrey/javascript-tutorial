/**
 *
 * В js существуют следующие типы данныех
 * Number     15, 3.14, 1e6, NaN
 * String     'Jon', "Don", `Hi`
 * Boolean    true, false
 * Undefined  undefined
 * Null       null
 * Symbol     Symbol(), Symbol('Some description')
 * Object
 *
 * Основных типов данных в js 7. Object, Function, Array, ReqEx это не отдельные типы данных
 * они относятся к типу Object.
 *
 * Object     {name: 'Name', age:17}
 * Function   function run(){...}
 * Array      [1,2,3,4,5]
 * ReqEx      /[a-z/
 */

/**
 * Назначить переменную в js можно двумя способами.
 *                 Literal notation                  With function constructor
 * Number          const a = 25 ;                    const a = new Number(25);
 * String          const n = 'Stef';                 const n = new String('Stef');
 * Boolean         const b = false;                  const n = new Boolean(false);
 * Symbol          -                                 const su =Symbol('text');
 * undefined       const u = undefined ;             -
 * null            const n = null ;                  -
 * Object          const j = {                       const j = new Object({
 *                     name: 'Stef',                 ame: 'Stef',
 *                     age:  17                      age:  17
 *                 }                                 }
 * Array           const items =[25,'Jox','false']   const items = new Array(25,'Jox','false');
 *
 * Function        function s(){                     const sum = new Function('a', 'b', 'return a + b')
 *                 return 2;
 *                 }
 *
 */

/**
 * Примитивы передаются по значению a = b;
 * let a = 5;
 * let b = a;
 * в b будет помещена копия
 *
 * Объекты передаются по ссылке
 *  let items = [25,'Jox','false']
 *  let b = items
 *  в b будет ссылка.
 */