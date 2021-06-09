/**
 * Как зделать так чтоб при обнавлении браузера менялась картинка 1 потом 2 потом первая
 */
let Reloaded  = function(loaded){
    //добавляем до предыдущего значения 1
    sessionStorage.setItem('load', Number(sessionStorage.getItem('load'))+1);
    //проверяем четное значение или не четное
    const even = n => !(n % 2);

    if(even(loaded)) {
        console.log("вывели картинку 1");
    }else{
        console.log("вывели картинку 2");
    }

}

window.onload = function() {
    //Берем значение sessionStorage
    let loaded = sessionStorage.getItem('load');

    //Если значения еще нет добавляем его
    if(loaded) {
        Reloaded(loaded);
    } else {
        //Задаем значение в sessionStorage 1
        sessionStorage.setItem('load', 1);
    }
}