### Conditional Statements
 - Condtional Statements in programming are used to make decisions based on certain condtions.
 - They allow the execution of different blocks of code depending whether a specified condition evalutes to true or false.

 - Conditional statements help control the flow of a program.

 #### If Statements
 ```
 if (condition) {
    // Code block to be executed if the condition is true
} 

Example:

const num = 10;

if (num > 0) {
    console.log("The number is positive.");
}
 ```

 #### If-Else Statements
 ```
 if (condition) {
    // Code block to be executed if the condition is true
} else {
    // Code block to be executed if the condition is false
}

Example:

const num = 10;

if (num > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is non-positive.");
}

 ```

#### Switch Statements
```
switch (expression){
    case 1:
       //code to execute;
       break;

    case 2:
       //code to execute;
       break;

    case 3:
       //code to execute;
       break;

    default:
        //default code;
}

Example:

const day = "Wednesday"
switch (day){
    case "Monday":
        console.log("It's Monday");
        break;

    case "Tuesday":
        console.log("It's Tuesday");
        break;

    case "wdnesday":
        console.log("It's Wednesday");
        break;

    case "Thursday":
        console.log("It's Thursday");
        break;

    default:
        console.log("It's Friday")
}
```