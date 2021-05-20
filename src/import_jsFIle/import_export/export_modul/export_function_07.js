//Реэкспорт
export {car} from '../reexport/modul.js'; // реэкспортировать sayHi
// экспорт класса по умолчанию

export default class human {
    constructor(name) {
        this.name = name;
    }
}