/***********************************************
 * Изучаемая тема. Значения, Типы, Операторы
 * Работа с цифрами
 ***********************************************/

/**
 * Тип число ,1,2,3,4,5
 * Арифметические операции. 1+5, 1-5, 1*6
 * expression(выражение) минимальный код который дает результат, в данном случаи 1+5.
 */

console.log(1 + 5);
console.log(45 - 2);

/**
 * Знак +,- это арифметический оператор сложения,вычитания а 1 и 5 это операнды.
 */

/**
 * Действия между операндами, называется операция, например умножения.
 */

console.log(1 * 25);
console.log(25 * 5);

/**
 * Не целые числа обозначаются через "." И называются числа с плавающей точкой ,вещественное число.
 */

console.log(25.5);

/**
 * Оператор целочисленного остатка от деления %.
 * Если делить в столбик то 7/2 получится 7/6 7-6=1 остаток 1 и будет взят.
 *
 * Используют для проверки, если возвращается 0, значит число чётное.
 */

console.log(7 % 2);

/**
 * +,-, / , % Бинарные операторы, так как у них два операнда слева число и с права.
 * Операторы могут быть унарные, операторы которые производят изменения над одним операндом.
 * Например - ,может быть бинарная операция, 5-2. А может быть унарная -7 . К операнду 7 применяется унарный оператор -
 */

/**
 * При выполнении операций учитываются приоритеты выполнений.
 * 3*2-4. Умножение выполняется первым оно приоритетной чем вычитание.
 */

console.log(3*2-4);

/**
 * То что внутри скобок вычисляется в первую очередь
 */

console.log(3*(2-4));

/**
 *  В import_jsFIle цифры есть объекты,у объектов есть методы, вызывая метод toFixed,
 *  мы говорим обрезать до 2 значений при делении 1/3=0.333333333333333
 *  После вызова toFixed, получим 0.33 в строковом виде "0.33", 2 передаваемая в toFixed называется аргумент
 **/

console.log((1/3).toFixed(2))

