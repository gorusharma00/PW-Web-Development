const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function matchfn(){
    input.question("Enter your regex pattern: ", (regex) => {
        input.question("Enter your string: ", (user_string) => {
            let regexobj = new RegExp(regex)
            console.log(regexobj.test(user_string));
            input.close();
        })
    })
}

matchfn();