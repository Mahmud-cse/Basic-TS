interface Team {
    name: string,
    salary: number
}

function getSalary(player: { name: string, salary: number }): number {
    return player.salary;
}


function getSalary2(player: Team): number {
    return player.salary;
}

getSalary({ name: 'messi', salary: 12000 });

let besic = { name: 'neymar', salary: 13000 };
getSalary2(besic);



let myAdd = function (x: number, y: number): number {
    return x + y;
};

const value = myAdd(11, 22);


let sum = (x: number, y: number): number => {
    return x + y;
}

sum(10, 20);