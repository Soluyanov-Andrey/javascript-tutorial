/**
 * Используя цикл while. Напишите программу которая  переменную a,возводит в степень z.
 */

let a = 2;
let z = 5;
let stepen = a;

while(z>1)
{
    z--;
    //stepen = stepen * a;
    stepen *= a;
    console.log(stepen);
}
