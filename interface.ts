interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClub?: string[]
}

const messi: Player = {
    name: 'L messi',
    club: 'La Liga',
    salary: 1222222,
    wife: 'yes'
}

const ronaldo: Player = {
    name: 'Ronaldo',
    club: 'Brazil',
    salary: 200000,
}


interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number,
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const steve: Developer = {
    language: 'Typescript',
    codeEditor: 'vs Code',
    typingSpeed: 30,
    name: 'Steve jobs',
    age: 30,
    salary: 20000,
    designation: 'CEO',
}