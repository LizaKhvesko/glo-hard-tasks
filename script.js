let number = 266219;
number = number.toString().split('');
let result = 1;
for (let i=0; i<number.length; i++) {
    let element = +number[i];
    result*=element;
}

let resultPow3 = result**3;
let firstTwoSymbols = resultPow3.toString().slice(0,2);
console.log(firstTwoSymbols);