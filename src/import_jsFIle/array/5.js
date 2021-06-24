/**
 * Добавление /удаление элементов
 */

/**
 * Метод shift() удаляет первый элемент из массива и возвращает его значение.
 * Этот метод изменяет длину массива.
 */

let myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

console.log('myFish до: ' + myFish);
//myFish до: ангел,клоун,мандарин,хирург

let shifted = myFish.shift();

console.log('myFish после: ' + myFish);
//myFish после: клоун,мандарин,хирург

console.log('Удалён этот элемент: ' + shifted);
//Удалён этот элемент: ангел