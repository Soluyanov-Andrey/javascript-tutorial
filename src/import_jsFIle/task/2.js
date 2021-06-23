/**
 * Используя цикл while. Напишите программу которая  переменную a,возводит в степень z.
 */

let a = 2;
let z = 5;
let stage = a;

while(z>1)
{
    z--;
    //stepen = stepen * a;
    stage *= a;
    console.log(stage);
}
