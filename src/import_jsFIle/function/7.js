/**
 * Если вызвать так как спрятано в комментарии то выдаст ошибку,функция
 * находящаяся внутри names.forEach, не может получить this.yourName(name);
 * если ее заменить на функцию стрелку то this получит тот который ожидается
 */

// const yourNames ={
//     yourName: function(name){
//         console.log('Your name',name);
//     },
//     yourNameAll: function(names) {
//         // names.forEach(function (name) {
//         //     this.yourName(name);
//         // });
//         names.forEach((name) => {
//             this.yourName(name);
//         });
//     }
// };
//
// yourNames.yourNameAll(['Andrey','Maks','Tven']);

/**
 *
 * Пробуем просто из функции вызвать другую
 */

  let yourName = function(name){
        console.log('Your name',name);
    };
  let yourNameAll = function(names) {
      let b = 2;
        names.forEach(function (name){
            let a = 5;
            console.log(b);
            console.log(a);
            yourName(name);
            //yourName(name);
        });
    }

yourNameAll(['Andrey','Maks','Tven']);