// tipos en typescript

let x: number;
let y = 1;
let z;

x = 1;
// x = "one"; compilation error
// y = "one"; compilation error

z = 1;
z = "one";

//################################################################

enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(`Employee Status in number is: ${employeeStatus}`);
console.log(`Employee Status is: ${ContractStatus[employeeStatus]}`);

// Another enum type
enum RequestStatusStrings {
    Not_Found,
    Gateway_Timeout,
    Server_Unreachable,
    Content_Type_Missmatch
}

let requestStatusString: RequestStatusStrings = RequestStatusStrings.Content_Type_Missmatch;
console.log(`Request Status String: ${RequestStatusStrings[requestStatusString]}`);

// Union Types

let someVariable: number | string;

someVariable = 14;
someVariable = "I'm a string variable";

function add (value1: number | string, value2: number | string) {
    
    if(typeof value1 === "number" && typeof value2 === "number") {
        return value1 + value2;
    } else if(typeof value1 === "string" && typeof value2 === "string") {
        return value1.concat(value2);
    }

    throw new Error("Invalid Parameters: both parameters must be strings or numbers");    
}

console.log(`For numbers: ${add(5, 6)}`);
console.log(`For strings: ${add('Hello', 'World!')}`);
// console.log(`For Error: ${add('9', 9)}`); throws an error since this is commented out

// Matrices y Tuplas

// Primera forma de matrices
let matArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Segunda forma de matrices
let matArrayGeneric: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Tuplas

let person1: [string, number] = ["Monica", 9];
// let person2: [string, number] = ["John", 9, true]; Verá que se genera un error porque los elementos de la tupla array son fijos. 
// La tupla person1 es una matriz que contiene exactamente un valor string y otro numeric.

// let person3: [string, number] = [9, "Maria"]; Verá un error que indica que el orden de los valores debe coincidir con el orden de los tipos.
