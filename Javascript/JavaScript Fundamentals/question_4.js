function extractParts(pattern, str){
    const regex = new RegExp(pattern, 'g');
    const match = regex.exec(str) //returns an array with results of search

    if(match){
        console.log("Match Found");
        for(let i=1; i<match.length; i++){
            console.log(`Group ${i}: ${match[i]}`)
        }
    }else{
        console.log('No match found')
    }
}


const pattern = '(\\d{1,2})[\\/\\-\\.](\\d{1,2})[\\/\\-\\.](\\d{4})'
const str1 = "Today is 23-2-2024"
const str2 = "you were born on 7-07-2001"
const str3 = "I know you are going on 3/2/2054"

extractParts(pattern, str1)
extractParts(pattern, str2)
extractParts(pattern, str3)
