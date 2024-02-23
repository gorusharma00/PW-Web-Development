const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25,24]

ages.sort((x,y) => x- y)

const minAge = ages[0];
const maxAge = ages[ages.length -1 ]

let medianAge;
if(ages.length % 2 === 0){
    medianAge = (ages[ages.length/2-1] + ages[ages.length/2])/2;
}else{
    medianAge = ages[(ages.length - 1)/2];
}

const averageAge = ages.reduce((acc, currVal) => acc + currVal, 0)/ ages.length;

const range = maxAge - minAge;

const compareMinAvg = Math.abs(minAge - averageAge);
const compareMaxAvg = Math.abs(maxAge - averageAge);

console.log(`Min age is: ${minAge}`)
console.log(`Max age is: ${maxAge}`)
console.log(`Median of  ages is: ${medianAge}`)
console.log(`Average age is: ${averageAge}`)
console.log(`Range of ages is: ${range}`)
console.log(`Absolute difference between Min Age and Average Age: ${compareMinAvg}`)
console.log(`Absolute difference between Max Age and Average Age: ${compareMaxAvg}`)
