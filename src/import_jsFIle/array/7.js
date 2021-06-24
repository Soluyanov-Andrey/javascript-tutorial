/**
 * Добавление /удаление элементов
 */

/**
 * Метод splice() изменяет содержимое массива,
 * удаляя существующие элементы и/или добавляя новые.
 */
//------------------------------------------------------------------------
//Удаляет 0 элементов по индексу 2 и вставляет "drum"

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = myFish.splice(2, 0, 'drum');

// myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed равен [], ничего не удалено

//------------------------------------------------------------------------
//Удаляет 1 элемент по индексу 3
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
let removed = myFish.splice(3, 1);

// removed равен ["mandarin"]
// myFish равен ["angel", "clown", "drum", "sturgeon"]

//------------------------------------------------------------------------
//Удаляет 1 элемент по индексу 2 и вставляет "trumpet"
let myFish = ['angel', 'clown', 'drum', 'sturgeon'];
let removed = myFish.splice(2, 1, 'trumpet');

// myFish равен ["angel", "clown", "trumpet", "sturgeon"]
// removed равен ["drum"]

//------------------------------------------------------------------------
//Удаляет 2 элемента начиная с индекса 0 и вставляет "parrot", "anemone" и "blue"
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// myFish равен ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed равен ["angel", "clown"]

//------------------------------------------------------------------------
//Удаляет 2 элемента начиная с индекса 2

let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
let removed = myFish.splice(myFish.length - 3, 2);

// myFish равен ["parrot", "anemone", "sturgeon"]
// removed равен ["blue", "trumpet"]



