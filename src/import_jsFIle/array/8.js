/**
 * Добавление /удаление элементов
 */

/**
 * Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого
 * с другими массивами и/или значениями, переданными в качестве аргументов.
 */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]