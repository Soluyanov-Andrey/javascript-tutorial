/**
 * Рекурсия.Проходим дерево и дабавляем в него новое свойство isAdress
 */

let state = {
        "ico": "Папка",
        "name": "главное меню",
        "type": "Папка",
        "adress": "0-1",
        "presence_сhild": true,

        "сhild": [{
            "ico": "Папка",
            "name": "База знаний",
            "type": "Папка",
            "adress": "0-1-1",
            "presence_сhild":true,

            "сhild": [{
                "ico": "Папка",
                "name": "Компоненты",
                "type": "Папка",
                "adress": "0-1-2",
                "presence_сhild":false,

                "сhild": []
            },
                {
                    "ico": "Папка",
                    "name": "Плагины",
                    "type": "Папка",
                    "adress": "0-1-22",
                    "presence_сhild":false,
                    "сhild": []
                },
                {
                    "ico": "Папка",
                    "name": "Модули",
                    "type": "Папка",
                    "adress": "0-1-23",
                    "presence_сhild":false,
                    "сhild": []
                }]
        },
            {
                "ico": "Папка",
                "name": "Отзывы",
                "type": "Папка",
                "adress": "0-1-25",
                "presence_сhild":false,
                "сhild": []
            },
            {
                "ico": "Папка",
                "name": "Контакты",
                "type": "Папка",
                "adress": "0-1-24",
                "presence_сhild":false,
                "сhild": []
            }],
    }




const adress =["0-1", "0-1-23"]

const bruteForce = (tree, adress) =>{
    const isAdress = adress.includes(tree.adress);

    return {
        ...tree,
        isAdress,
         сhild: tree.сhild.map(childNode => bruteForce(childNode,adress))
    }
};

const result = bruteForce(state, adress);
console.log(result);
