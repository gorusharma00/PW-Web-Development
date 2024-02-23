const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
input.question("Please enter your type of Package: ", (type) => {
        shipping(type);
        input.close();
    })

function shipping(packageType){
    switch (packageType){
        case 'express':
            console.log("Your package will be delievered in 1-2 days.");
            break;
        case 'overnight':
            console.log("Your package would be delievered tommorrow.")
            break;
        default:
            console.log("Your package will be delievered in 3-5 days.")
    }
}

