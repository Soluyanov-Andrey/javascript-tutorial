/**
 * Инструкция continue.Использование в цикле for .
 */
for (let i = 0; i < 10; i++) {
    // Проверяем чётное число или нет, если true то console.log(i) из за вызова continue, дальше не сработает.
    if (i % 2 == 0) continue;

    console.log(i); // 1, затем 3, 5, 7, 9
}