
// экспорт константы
const HOUSE_NUMBER = 201;

// экспорт массива
let car = ["Audi.", "BMW", "Honda", "Hyundai", "Mazda"];

// экспорт класса
class human {
    constructor(name) {
        this.name = name;
    }
}
// экспорт переменной
let a = 2;

//Производим экспорт и сразу переименовываем переменную.
export { HOUSE_NUMBER as H1, car as H2, human as H3, a as H4 }; // список экспортируемых переменных