function returnValue(x){
    let value = prompt(`Digite o ${x}o valor`);

    while (isNaN(value) || value == null || value == ""){
        value = prompt("Digite APENAS NÚMEROS");
    }
    return Number(value);
}

let msg = "";
const value1 = returnValue(1);
const value2 = returnValue(2);


const calc = {
    sum: value1 + value2,
    sub: value1 - value2,
    mult: value1 * value2,
    div: (value1 / value2).toFixed(2),
    remainder: value1 % value2,
    isEven: (((value1 + value2) % 2) == 0),
    isEqual: (value1 == value2)
};

msg += "\nA soma dos dois números é: " + calc.sum;
msg += "\nA subtraçado dos dois números é: " + calc.sub
msg += "\nA multiplicação dos dois números é: " + calc.mult;
msg += "\nA divisão de " + value1 + " por "+ value2 + " é: " + calc.div;
msg += "\nO resto da divisão de " + value1 + " por "+ value2 + " é: " + calc.remainder;
msg += "\n";

msg += calc.isEven  ? "\nA soma é par"          : "\nA soma é impar";
msg += calc.isEqual ? "\nOs números são iguais" : "\nOs números são diferentes";

alert(msg);
console.log(msg);
msg = msg.replace(/(?:\r\n|\r|\n)/g, '<br>');
document.write(msg);