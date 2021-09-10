const fruits: string[] = ['mango', 'banana', 'apple'];

type Person = { name: string, age: number, salary: number }
const student: Person = {
    name: "redoy",
    age: 23,
    salary: 120000
}

const person: { name: string, age: number, salary: number } = {
    name: 'Unknown',
    age: 29,
    salary: 120000
}

const doMath = (num1: number, num2: number): void => {
    console.log(num1 + num2);
}