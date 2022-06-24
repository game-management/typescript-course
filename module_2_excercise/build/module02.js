"use strict";
// tipos en typescript
let x;
let y = 1;
let z;
x = 1;
// x = "one"; compilation error
// y = "one"; compilation error
z = 1;
z = "one";
//################################################################
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(`Employee Status in number is: ${employeeStatus}`);
console.log(`Employee Status is: ${ContractStatus[employeeStatus]}`);
