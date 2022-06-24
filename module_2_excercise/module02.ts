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
