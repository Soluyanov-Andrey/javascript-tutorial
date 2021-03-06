/**
 * Операторы сравнения.
 */

console.log(1 < 5); // Вернет значение true
console.log(1 > 5); // Вернет значение false

console.log("------------1---------------");
console.log(1 >= 5); // Вернет значение false
console.log(1 <= 5); // Вернет значение true

console.log("------------2---------------");
//С начало интерпретатор прообразует строковую "5" в число а потом сравнит
console.log(5 == "5"); // Вернет значение true

//Сравнивается все, и значения и его тип. Если одно значение число а другое строка то эти значения разные.
console.log(5 === "5"); // Вернет значение false

console.log("------------3---------------");
console.log(5 != 5); // Вернет значение false
console.log(1 !== 5); // Вернет значение true