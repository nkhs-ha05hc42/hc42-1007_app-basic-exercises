const testObject = {
    a: 10,
    b: null,
    c: undefined,
    d: 15,
}
console.log(testObject.a ?? testObject.d)
console.log(testObject.b ?? testObject.d)
console.log(testObject.c ?? testObject.d)