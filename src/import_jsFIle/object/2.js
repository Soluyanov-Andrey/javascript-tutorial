/**
 * Создаем наследование с помощью
 * 1 Object.setPrototypeOf
 * 2 Object.create
 * 3 new
 */

/**
 * Просто создаем два объекта и вызываем их свойства.
 */
// const truck ={
//     name: 'Камаз',
//     color: 'Красный',
//     info: function() {
//         console.log(this.name,'цвет',this.color);
//     }
// };
//
// const passenger={
//     name: 'Audi',
//     color: 'Зеленый',
//     info: function() {
//         console.log(this.name,'цвет',this.color);
//     }
// };
//
// truck.info();
// passenger.info();


/**
 * Создаем объект car. И наследуем от него truck, passenger. Через Object.setPrototypeOf
 */
// const car ={
//     info: function() {
//         console.log(this.name,'цвет',this.color);
//     }
// }
//
// const truck = {
//     name: 'Камаз',
//     color: 'Красный'
// };
//
// Object.setPrototypeOf(truck, car) //написанно в MDN что так лучше не использовать
//
// const passenger = {
//     name: 'Audi',
//     color: 'Зеленый'
// };
// Object.setPrototypeOf(passenger, car)
// truck.info();
// passenger.info();

/**
 * Так можно создать объект на основе car, через Object.create
 */

// const car ={
//     info: function() {
//         console.log(this.name,'цвет',this.color);
//     }
// }
//
// const truck = Object.create(car);
// truck.name = 'Камаз';
// truck.color = 'Красный';
//
// truck.info();

/**
 * Вынесли процесс создания автомобиля в отдельную функцию.
 */
// const car ={
//     info: function() {
//         console.log(this.name,'цвет',this.color);
//     }
// }
// // Вынесли процесс создания автомобиля в отдельную функцию.
// function createCar(name, color){
//     const res = Object.create(car);
//     res.name = name;
//     res.color = color;
//     return res;
// }
// const truck = createCar('Камаз', 'Красный');
// const passenger = createCar('Audi', 'Зеленый');
// truck.info();
// passenger.info();


/**
 * Создаем объект с помощью new
 */

// Если у нас есть функция конструктор которая создает объект,
// то ее принято называть с большой буквы.
function Car(name,color){
    this.name = name;
    this.color = color;
}
Car.prototype.info= function() {
    console.log(this.name,'цвет',this.color);
}
const truck = new Car('Камаз', 'Красный');
const passenger = new Car('Audi', 'Зеленый');
truck.info();
passenger.info();






