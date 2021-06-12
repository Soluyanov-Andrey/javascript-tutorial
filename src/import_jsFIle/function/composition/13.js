/**
 * Композиция.
 */

const a = value => value + 5;
const b = value => value * 2;
const c = value => value / 2;
const d = value => value - 20;

const funCompose = (...functs) => value =>{
   return functs.reduce((storage, func) => func(storage),value);
};

const obFunct = funCompose(
    a,
    b,
    c
)
console.log(obFunct(50));