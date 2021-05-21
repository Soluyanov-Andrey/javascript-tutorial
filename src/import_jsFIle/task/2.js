/**
 * Используя цикл while.напишите программу которая  переменную a,возводит в степень z.
 */

let a = 2;
let z = 5;
let stepen = a;

while(z>1)
{
    z--;
    stepen = stepen * a;
    console.log(stepen);
}
