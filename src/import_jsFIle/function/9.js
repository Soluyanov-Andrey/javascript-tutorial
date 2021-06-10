/**
 *Чейнинг на примере прототипа.
 */
const association = function(s) {
    this.value = s;
};

association.prototype.line = function(a) {
    this.value += '\n' + a;
    return this;
};

association.prototype.toString = function() {
    return this.value;
};

// Usage

const exit = new association('1-string')
    .line('2-string')
    .line('3-string')
    .line('4-string');

console.log(`${exit}`);