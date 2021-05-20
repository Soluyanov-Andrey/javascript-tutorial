/**
 *
 * Пример безконечного цикла.
 */
let sum = 0;
// Это значит что true всегда равно true и это истина, по сути бесконечный цикл.
while (true) {
    let value = +prompt("Введите число", "");
    console.log(value);
    if (!value) break;

    sum = value + sum;
    //Аналогично можно написать так
    // sum += value;
}
alert("Сумма: " + sum);