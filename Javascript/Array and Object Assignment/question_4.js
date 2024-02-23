const prompt = require('prompt-sync')({sigint: true});

const students = [
    { id: 1, 
    firstName: "John", 
    lastName: "Doe", 
    age: 20, 
    grade: "A" },

    { id: 2, 
    firstName: "Jane", 
    lastName: "Smith", 
    age: 22, 
    grade: "B"},

    { id: 3, 
    firstName: "Bob", 
    lastName: "Johnson", 
    age: 19, 
    grade: "A" },

    {
        id: 4,
        firstName: "Wade",
        lastName: "Wilson",
        age: 24,
        grade: "D"
    },
];

let program = true;

function start(){
    console.log(" 1.Add Student\n 2.Update Student Information \n 3.Delete Student \n 4.Display all students \n 5.Find students \n 6.Average Age")
    const query = prompt("Please enter number of your query from above: ")
    call(query)
}


while(program){
    const user = Number(prompt("Enter 1 to start the program and 2 to close the program: "))
    if(user == 1){
        start();
    }else{
        program = false;
    }

}



function call(query){
    switch(query){
        case "1":
            addStudent(students);
            break;
        case "2":
            updateStudentInf(students);
            break;
        case "3":
            deleteInf(students);
            break;
        case "4":
            display(students);
            break;
        case "5":
            findStudent(students);
            break;
        case "6":
            averageAge(students);
            break;
    }
}


function addStudent(students){
    let firstname = prompt("Enter first name of student you want to add: ")
    let lastname = prompt("Enter last name of student you want to add: ")
    let age = Number(prompt("Enter age: "));

    students.push({
        id: students.length +1,
        firstName: firstname,
        lastName: lastname,
        age : age,
        grade : "Not graded Now"
    })

    console.log("Student added successfully.")
}

function updateStudentInf(students){
    const id = Number(prompt("Please enter the id of student: "))
    const student = students.find(student => student.id == id)
    if(student){
        console.log("1.Name Update\n2.Age Update\n3.Grade Update")
        const inf = prompt("Please enter number of information you want to update: ")
        switch(inf){
            case "1":
                const newName = prompt("Enter the new name: ")
                student.firstName = newName;
                break;
            case "2":
                const newAge = Number(prompt("Enter the new age: "))
                student.age = newAge;
                break;
            case "3":
                const newGrade = prompt("Enter the new grade: ")
                student.grade = newGrade;
                break;
            }
        console.log("Information Updated Successfully.")  
    }
    else{
        console.log("Please enter the valid id.")
    }
}


function deleteInf(students){
    const id = Number(prompt("Please enter the id of student: "))
    const index = students.findIndex(student => student.id == id)
    if(index !== -1){
        students.splice(index,1);
        console.log("Student Information is deleted.")
    }else{
        console.log("Please enter the valid id.")
    }
}

function display(students){
    students.map((student) => {
        console.log(student);
    })
}

function findStudent(students){
    const grade = prompt("Please enter the grade: ")
    students.map((student) => {
        if(student.grade === grade){
            console.log(student);
        }
    })
}

function averageAge(students){
    let sum= students.reduce((avg, student) => avg+ student.age, 0)
    console.log(`Average of ages ${sum/students.length}`)
}