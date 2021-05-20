/**
 * Экспорт отдельно от объявления
 * Можно производить экспорт не каждой переменной или класса отдельно,
 * а производить экспорт в конце файла.
 */

const HOUSE_NUMBER = 201;

let car = ["Audi.", "BMW", "Honda", "Hyundai", "Mazda"];

class human {
    constructor(name) {
        this.name = name;
    }
}

let a = 2;

export { HOUSE_NUMBER, car, human, a }; // список экспортируемых переменных