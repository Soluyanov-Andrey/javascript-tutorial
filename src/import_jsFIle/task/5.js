/**
 * Пример как можно построить кусок дерева dom, а потом к нему обратиться.
 */

let div = document.createElement('div');
div.id = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
document.body.append(div);

let elem = document.getElementById('alert');
console.log(elem.childNodes);

