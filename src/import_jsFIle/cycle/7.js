/**
 * Бывают ситуации когда из за переданных значений ,цикл for и while не могут запуститься не разу
 * но запустить хотя бы один раз цикл нужно.Для этого есть цикл do while.
 */
let result;
do {
     result = prompt("Ведите число, если число 0 программа выйдет из цикла");
    let i = 0;
    while(i < result){
        console.log(++i);
    }
}while( result != 0 );