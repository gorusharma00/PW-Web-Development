function outerFn(num1, num2){
    let num3 = 54;
    return function inner(){
        let sum = num1+num2+num3
        return sum;
    }
}

let result = outerFn(10,20)
console.log(result());