//POST increment, сначала присваивает x=1 а потом  прибавляет i++
let i = 1;
let x = i++; //x==1, i==2

console.log(x);
console.log(i);

//PRE increment, сначала прибавляет i1, а потом присваивает x1
let i1 = 1;
let x1 = ++i1; //x1==2, i1==2

console.log(x1);
console.log(i1);

console.log("---------1-----------");
let z = 0 ;
while(z < 5){
    console.log(z++);
}//0,1,2,3,4

console.log("---------2-----------");
let c = 0 ;
while(c < 5){
    console.log(++c);


}//1,2,3,4,5