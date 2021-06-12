/**
 * Чеининг функций
 *
 */
const payment = valueTransmitted => {
    let stor = valueTransmitted;
    const fun = {
        add(value){
            stor += value;
            console.log(this);
            return this;
        },
        sub(value){
            stor -= value;
            return this;
        },
        mult(value){
            stor *= value;
            return this;
        },
        result(){
            return stor;
        }
    };
    return fun;
}
console.log(payment(5).add(4).sub(4).result());