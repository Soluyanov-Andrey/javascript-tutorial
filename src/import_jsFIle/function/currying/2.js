/**
 * Каррирование
 */
const minus = (base, n) => Math.cos(n) - Math.sin(base);

const createMin = base => n => minus(base, n);

{
    const fn1 = createMin(50);
    const fn2 = createMin(100);

    console.log('createMin fn1', fn1(5));
    console.log('createMin fn2', fn2(5));
}