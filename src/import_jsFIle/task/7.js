/**
 * Таже задача как и в примере 6. Но решена при помощи цикла for.
 * У объекта object1 есть "adress": Объект сhild1 и сhild2 имеют свои адреса
 * пишем функцию add_node, которая будет добавлять к объекту object1, объекты сhild...n по их адресам.
 */

/**
 * Так выглядит дерево для наглядности.
 */
// let state = {
//     line: [
//         {ico: 'имя1', name: 'переговоры', type: 'Пустая папка', adres_predka: "0", adres_svoi: "0-1"},
//         {ico: 'имя2', name: 'переговоры', type: 'Пустая папка', adres_predka: "0", adres_svoi: "0-2"},
//         {ico: 'имя3', name: 'переговоры', type: 'Пустая папка', adres_predka: "0", adres_svoi: "0-3"},
//         {ico: 'имя4', name: 'переговоры', type: 'Пустая папка', adres_predka: "0-2", adres_svoi: "0-2-1"},
//         {ico: 'имя5', name: 'переговоры', type: 'Пустая папка', adres_predka: "0-2", adres_svoi: "0-2-2"},
//         {ico: 'имя6', name: 'переговоры', type: 'Пустая папка', adres_predka: "0-2", adres_svoi: "0-2-3"},
//         {ico: 'имя7', name: 'переговоры', type: 'Пустая папка', adres_predka: "0-2", adres_svoi: "0-2-4"},
//         {ico: 'имя8', name: 'переговоры', type: 'Пустая папка', adres_predka: "0-2-3", adres_svoi: "0-2-3-1"},
//         {ico: 'имя9', name: 'переговоры', type: 'Пустая папка', adres_predka: "0-2-3", adres_svoi: "0-2-3-2"},
//         {ico: 'имя10', name: 'переговоры', type: 'Пустая папка', adres_predka: "0-3", adres_svoi: "0-3-1"},
//         {ico: 'имя11', name: 'переговоры', type: 'Пустая папка', adres_predka: "0-3", adres_svoi: "0-3-1"},
//         {ico: 'имя12', name: 'переговоры', type: 'Пустая папка', adres_predka: "0", adres_svoi: "0-4"},
//         {ico: 'имя11', name: 'переговоры', type: 'Пустая папка', adres_predka: "0-2-1", adres_svoi: "0-2-1-1"},
//         {ico: 'имя12', name: 'переговоры', type: 'Пустая папка', adres_predka: "0-2-1", adres_svoi: "0-2-1-2"}
//     ]
//
// }
/**
 * Первый объект хранит первоначальную структуру.
 */

let object1 = {
    "knot": [{
        "ico": "Папка",
        "name": "Архив",
        "type": "Папка",
        "adress": "0-1",
        "сhild": [{
            "ico": "Папка",
            "name": "Всякое",
            "type": "Папка",
            "adress": "0-1-1",
            "сhild": []
        },
            {
                "ico": "Папка",
                "name": "Всякое",
                "type": "Папка",
                "adress": "0-1-2",
                "сhild": []
            }]
    },
        {
            "ico": "Папка",
            "name": "Всякое",
            "type": "Папка",
            "adress": "0-2",
            "сhild": []
        }
    ]
};

/**
 * Объект который будем помещать в object1 по вложенности "adress": "0-1-2-1"
 */
let сhild2 = {
    "ico": "rar",
    "name": "Архив3",
    "type": "Фаил",
    "adress": "0-1-2-1",
    "сhild": []
}
/**
 * Объект который будем помещать в object1 по вложенности "adress":  "0-1-1-1"
 */
let сhild1 = {
    "ico": "rar",
    "name": "Архив3",
    "type": "Фаил",
    "adress": "0-1-1-1",
    "сhild": []
}


function add_node(mostly_tree, сhild) {

    //разбиваем адрес "0-1-1-1" в массив [0][1][1][1]
    let calculation = сhild.adress.split('-');

    //убираем последнее значение из массива [0][1][1]
    calculation.pop();

    //собираем из массива [0][1][1] новый адрес "0-1-1"
    let parent_adress = calculation.join('-');

    //перебираем массив рекурсивно
    for (let i = 0; i < mostly_tree.length; i++){

        //нашли нужный адресс в дереве вставляем сhild
        if (mostly_tree[i].adress == parent_adress) {
            mostly_tree[i].сhild.push(сhild);
            return;
        }
        //если есть сhild и вних что то есть продолжаем перебор
        if (mostly_tree[i].сhild && mostly_tree[i].сhild.length) {
            add_node(mostly_tree[i].сhild, сhild)
        }
    }


}

add_node(object1.knot, сhild1)
add_node(object1.knot, сhild2)

console.log(object1);
