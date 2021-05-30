/**
 * Get,Set,Object.keys в объекте.
 */
const obj ={
    isFlag: true,
    left(){
        console.log(`${this.isFlag} left`);
    },
    right(){
        console.log(`${this.isFlag} right`);
    }
};

obj.left();

//Так можно вывести в виде массива все совйства объекта obj.
console.log(Object.keys(obj));

const obj1 ={
    a: 45,
    b: "d"
}
obj1.l=50;
console.log(obj1);