/**
 * Class это некий чертеж по которому создаются объекты.
 */

// function Car(name,color){
//     this.name = name;
//     this.color = color;
// }
// Car.prototype.info= function() {
//     console.log(this.name,'цвет',this.color);
// }
// const truck = new Car('Камаз', 'Красный');
// const passenger = new Car('Audi', 'Зеленый');
// truck.info();
// passenger.info();

/**
 * Перепишем function prototype на class
 */
// class Car{
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }
//     info(){
//         console.log(this.name,'цвет',this.color);
//     }
// }
//
// class Truck extends Car{
//
// }
// const kamaz = new Truck('Камаз', 'Красный');
//
//
// kamaz.info();

/**
 * Добавляем в дочерний класс Truck, собственный конструктор и свойства с методами.
 */
class Car{
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    info(){
        console.log(this.name,'цвет',this.color);
    }
}

class Truck extends Car{
    constructor(name, color, namb){
        super(name, color); //Передаем значения в Car
        super.info(); //Так можно вызвать метод info из Car
        this.nam = namb;
        this.info(); //Так вызываем собственный метод info
 }
    info(){
        console.log(this.name,'цвет',this.color, this.nam);
    }

}
const kamaz = new Truck('Камаз', 'Красный',447758);


kamaz.info();
console.log(kamaz.namber);
