const num1 = 10;
const num2 = 25;
let result = '';

for (let i = num1 + 1; i <= num2; i++) {
   result += i;
   if (i < num2) {
       result += ', ';
   }
}

console.log(result);
