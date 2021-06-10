/**
 *Чейнинг на примере class.
 */
class Association {
    constructor(s) {
        this.value = s;
    }

    line(a) {
        this.value += '\n' + a;
        return this;
    }

    toString() {
        return this.value;
    }
}

// Usage

const txt = new Association('1-string')
    .line('2-string')
    .line('3-string')
    .line('4-string');

console.log(`${txt}`);