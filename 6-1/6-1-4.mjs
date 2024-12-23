const testObject = {
    a1: false,
    a2: true,
    a3: true,
    a4: false,
    b1: false,
    b2: true,
    b3:false,
    b4:true,
}
console.log(testObject.a1 && testObject.b1)
console.log(testObject.a1 || testObject.b1)
console.log(!testObject.a1)
console.log(!testObject.b1)
console.log(testObject.a2 && testObject.b2)
console.log(testObject.a2 || testObject.b2)
console.log(!testObject.a2)
console.log(!testObject.b2)
console.log(testObject.a3 && testObject.b3)
console.log(testObject.a3 || testObject.b3)
console.log(!testObject.a3)
console.log(!testObject.b3)
console.log(testObject.a4 && testObject.b4)
console.log(testObject.a4 || testObject.b4)
console.log(!testObject.a4)
console.log(!testObject.b4)