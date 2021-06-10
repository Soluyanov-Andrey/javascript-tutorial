/**
 * Рекурсия
 */

// let state = {
//     "knot": [{
//         "ico": "Папка",
//         "name": "главное меню",
//         "type": "Папка",
//         "adress": "0-1",
//         "presence_сhild": true,
//
//         "сhild": [{
//             "ico": "Папка",
//             "name": "База знаний",
//             "type": "Папка",
//             "adress": "0-1-1",
//             "presence_сhild":true,
//
//             "сhild": [{
//                 "ico": "Папка",
//                 "name": "Компоненты",
//                 "type": "Папка",
//                 "adress": "0-1-2",
//                 "presence_сhild":false,
//
//                 "сhild": []
//             },
//                 {
//                     "ico": "Папка",
//                     "name": "Плагины",
//                     "type": "Папка",
//                     "adress": "0-1-22",
//                     "presence_сhild":false,
//                     "сhild": []
//                 },
//                 {
//                     "ico": "Папка",
//                     "name": "Модули",
//                     "type": "Папка",
//                     "adress": "0-1-23",
//                     "presence_сhild":false,
//                     "сhild": []
//                 }]
//         },
//             {
//                 "ico": "Папка",
//                 "name": "Отзывы",
//                 "type": "Папка",
//                 "adress": "0-1-25",
//                 "presence_сhild":false,
//                 "сhild": []
//             },
//             {
//                 "ico": "Папка",
//                 "name": "Контакты",
//                 "type": "Папка",
//                 "adress": "0-1-24",
//                 "presence_сhild":false,
//                 "сhild": []
//             }]
//     },
//         {
//             "ico": "Папка",
//             "name": "главное меню2",
//             "type": "Папка",
//             "adress": "0-2",
//             "presence_сhild":false,
//             "сhild": []
//         }
//     ]
//
// }

let tree ={
    id: 'id-1',
    name: 'Name',
    nodes: [
        {
            id: 'id-2',
            name: 'Name1',
            nodes: [
                {
                    id: 'id-3',
                    name: 'Name3',
                    nodes: []
                }
            ]

        },{  id: 'id-4',
            name: 'Name',
            nodes: [
                {

                }
            ]}
    ],
}

const adress =["id-2", "id-3"]
const bruteForce = (tree, adress) =>{
    const isAdress = adress.includes(tree.id);
    return {
        ...tree,
        isAdress,
        nodes: tree.nodes.map(childNode => bruteForce(childNode,adress)),
    }
};

const result = bruteForce(tree, adress);

