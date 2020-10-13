const name = "haeun", age = 22;

const sayHi = (name:string, age?:number) : string => {
    return `hello ${name}, you are ${age}`;
};

console.log(sayHi(name, 22));

export {};