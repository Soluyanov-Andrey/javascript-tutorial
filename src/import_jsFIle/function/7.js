/**
 * Если вызвать так как спрятано в комментарии то выдаст ошибку,функция
 * находящаяся внутри names.forEach, не может получить this.yourName(name);
 * если ее заменить на функцию стрелку то this получит тот который ожидается
 */

const yourNames ={
    yourName: function(name){
        console.log('Your name',name);
    },
    yourNameAll: function(names) {
        // names.forEach(function (name) {
        //     this.yourName(name);
        // });
        names.forEach((name) => {
            this.yourName(name);
        });
    }
};

yourNames.yourNameAll(['Andrey','Maks','Tven']);



//   let yourName = function(name){
//         console.log('Your name',name);
//     };
//   let yourNameAll = function(names) {
//         names.forEach((name)=>{
//             yourName(name);
//         });
//     }
//
// yourNameAll(['Andrey','Maks','Tven']);