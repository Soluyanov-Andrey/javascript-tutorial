/**
 * Каррирование
 */

// ДО
function add(x) {
    return function(y) {
        return x + y;
    };
}

// ПОСЛЕ (ES2015)
const add2 = x => y => x + y;