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
// Another enum type
var RequestStatusStrings;
(function (RequestStatusStrings) {
    RequestStatusStrings[RequestStatusStrings["Not_Found"] = 0] = "Not_Found";
    RequestStatusStrings[RequestStatusStrings["Gateway_Timeout"] = 1] = "Gateway_Timeout";
    RequestStatusStrings[RequestStatusStrings["Server_Unreachable"] = 2] = "Server_Unreachable";
    RequestStatusStrings[RequestStatusStrings["Content_Type_Missmatch"] = 3] = "Content_Type_Missmatch";
})(RequestStatusStrings || (RequestStatusStrings = {}));
let requestStatusString = RequestStatusStrings.Content_Type_Missmatch;
console.log(`Request Status String: ${RequestStatusStrings[requestStatusString]}`);
// Union Types
let someVariable;
someVariable = 14;
someVariable = "I'm a string variable";
function add(value1, value2) {
    if (typeof value1 === "number" && typeof value2 === "number") {
        return value1 + value2;
    }
    else if (typeof value1 === "string" && typeof value2 === "string") {
        return value1.concat(value2);
    }
    throw new Error("Invalid Parameters: both parameters must be strings or numbers");
}
console.log(`For numbers: ${add(5, 6)}`);
console.log(`For strings: ${add('Hello', 'World!')}`);
console.log(`For Error: ${add('9', 9)}`);
