/**
 *Чейнинг на примере прототипа.
 */
const Association = function(s) {
    this.value = s;
};

Association.prototype.line = function(a) {
    this.value += '\n' + a;
    return this;
};

Association.prototype.toString = function() {
    return this.value;
};

// Usage

const exit = new Association('1-string')
    .line('2-string')
    .line('3-string')
    .line('4-string');

console.log(`${exit}`);