/***********************************************
 * В данном разделе рассматриваются объекты.
 ***********************************************/

/**
 * В js все есть объект свойства и методы объекта
 * например console.log("Привет мир"), можно вызвать через this.console.log("Привет мир")
 * Если мы захотим скопировать объект в js то нужно помнить что
 * Объекты в js не копируются а ссылаются по ссылки.
 */

/**
 * Создаем объект и его перебираем. Выводим ключи и значения.
 */

// let user = {
//     name: "Pety",
//     age: 25,
//     isBoss: true
// };
// for (let key in user) {
//     // ключи
//     console.log(key);  // name, age, isBoss
//     // значения ключей
//     console.log(user[key]); // Pety, 25, true
// }

/**
 * Создаем объект с вложенным объектом.
 */

// let b = {
//     name: {
//         a: 15,
//         b: 25
//     }
// }
// console.log(b);

/**
 * Копирование объекта и ссылка на объект.
 */

// const car = {
//     name_car: 'bmw',
//     color: 'red',
//     num: '3274'
// }
//
// let b = car;               // Делает ссылку на объект.
// let value01 = {...car};    // Делает копию объекта.
//
// console.log(b);            //{name_car: "bmw", color: "red", num: "3274"}
// console.log(value01);      //{name_car: "bmw", color: "red", num: "3274"}
// console.log("------------------");
// car.name_car = "jhhh";     // Изменяем основной объект.
//
// console.log(b);            //{name_car: "jhhh", color: "red", num: "3274"}
// console.log(value01);      //{name_car: "bmw", color: "red", num: "3274"}


/**
 * Оператор instanceof позволяет проверить, к какому классу принадлежит объект, с учётом наследования.
 */

class Rabbit {}
let rabbit = new Rabbit();

// это объект класса Rabbit?
alert( rabbit instanceof Rabbit ); // true

