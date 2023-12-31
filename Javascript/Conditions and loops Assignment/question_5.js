const num1 = 1;
const num2 = 25;
let result1 = '';
let result2 = '';

//ascending order
let i =num1;
while(i<=num2){
    result1 += i;
    if(i<num2){
        result1 += ", "
    }
    i++;
}

console.log("Ascending Order:", result1)

//descending order
let j = num2;
while(j>= num1){
    result2 += j;
    if(j>num1){
        result2 += ", "
    }
    j--;
}

console.log("Descending Order:", result2)