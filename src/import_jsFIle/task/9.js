/**
 * Функция choose выбирает из переданного объекта, presence_сhild объектов которые равны true
 * и записывает и возвращает адреса собранные в объект.
 */
let state = {
    "knot": [{
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
            }]
    },
        {
            "ico": "Папка",
            "name": "главное меню2",
            "type": "Папка",
            "adress": "0-2",
            "presence_сhild":false,
            "сhild": []
        }
    ]

}


let a =[];

let choose = (mostly_tree,b = { }) => {

    // if(b == undefined){  var b = { } }

    // //перебираем массив рекурсивно
    for (let i = 0; i < mostly_tree.length; i++){
        //нашли нужный адресс в дереве записываем его в объект.
        if (mostly_tree[i].presence_сhild == true) {
            //console.log(mostly_tree[i].сhild[0].adress)
            b[mostly_tree[i].adress]= true;
            choose (mostly_tree[i].сhild,b)

        }


    }

    return b;
}
// let c = choose(state.knot,{"0-5": true})// Так функция найдет у кого presence_сhild == true, и добавит "0-5": true
let c = choose(state.knot)
console.log(c)