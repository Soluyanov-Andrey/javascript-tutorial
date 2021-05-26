/**
 * Spread operator
 * преобразует массив [5,6,8]  в ряд чисел 5, 6 ,8
 *
 */
const arrays =[5,6,8];
const arrays1 =[1,2,7];

console.log(...arrays); // 5 6 8
console.log(arrays); // [5,6,8]

// Создаем используя spread, копию массива.
const arrayCopy = [...arrays];
console.log(arrayCopy); // [5,6,8]

// Создаем копию из двух массивов используя spread operator,
const arrayCopy1 = [...arrays, ...arrays1];
console.log(arrayCopy1); // [5,6,8,1,2,7]

/**
 * Создаем два объекта, и объедением их с помощью Object.assign в один объект,
 * свойства num из второго объекта перезапишутся.
 */
const car = {
    name_car: 'bmw',
    color: 'red',
    num: '3274'
}

const user = {
    name: 'Pyt',
    num: '01',
    password: '4jjuj'
}
const value = Object.assign({},car, user);
//Выполнить объединение с помощью rest оператора, вместо Object.assign
const value01 = {...car, ...user};

console.log(value);   //{name_car: "bmw", color: "red", num: "01", name: "Pyt", password: "4jjuj"}
console.log(value01); //{name_car: "bmw", color: "red", num: "01", name: "Pyt", password: "4jjuj"}

/**
 * Используя spread оператор, можно добавить не только объекты но и добавить новые свойства
 * и методы. В новый объект в примере добавляем id, и метод start.
 */
const id =5556;
//const value02 = {...car, ...user, id, start(){console.log("test")}};

const value02 = {
    ...car,
    ...user,
    id,
    start(){
        console.log("test")}
};
console.log(value02);
value02.start();


