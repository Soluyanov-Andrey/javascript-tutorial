/**
 * Можно производить экспорт и сразу переименовывать то что экспортируем.
 */
const HOUSE_NUMBER = 201;

let car = ["Audi.", "BMW", "Honda", "Hyundai", "Mazda"];

class human {
    constructor(name) {
        this.name = name;
    }
}

let a = 2;
//Производим экспорт и сразу переименовываем переменную.
export { HOUSE_NUMBER as H1, car as H2, human as H3, a as H4 }; // список экспортируемых переменных