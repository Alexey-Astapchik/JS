let calc = {
    sum: function() {
        console.log(this.a + this.b);
    },
    substraction: function (){
        console.log(this.a - this.b);
    },
    getNumbers: function() {
        this.a = Number(getFirstValue);
        this.b = Number(getSecondValue);
    }
}
let getFirstValue = prompt('Type a');
let getSecondValue = prompt('Type b');


calc.getNumbers();
calc.sum();
calc.substraction();