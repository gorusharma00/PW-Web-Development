const student = {
    firstname: "Deadpool",
    age : 24,
    isEnrolled : true,
    major: "Computer Science"
}

Object.preventExtensions(student) // static method to prevents new properties from bein ever added to object

extensibleStatus = Object.isExtensible(student) //static method determines whether it can have new properties to added to it

const teacher = {
    firstname: 'Miss Rose',
    subject: 'Math'
}

Object.seal(teacher) /* sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable.*/

const sealedStatus = Object.isSealed(teacher);

console.log(`Extensible status of student: ${extensibleStatus}`)
console.log(`Sealed status of teacher: ${sealedStatus}`)