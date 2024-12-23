const values = ["A", "B", "A", "C", "A"]
const valueSet = new Set(values)
console.log(valueSet)
Array.from(valueSet.values())
for (const [key] of valueSet)
{
    console.log(key)
}   