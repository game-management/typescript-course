"use strict";
/* ### Simple TypeScript Interface ### */
let john = {
    firstName: 'John',
    lastName: 'Anderson',
    full_name() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(`Employee name is: ${john.full_name()}`);
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["NOT_FOUND"] = 0] = "NOT_FOUND";
    RequestStatus[RequestStatus["INTERNAL_SERVER_ERROR"] = 1] = "INTERNAL_SERVER_ERROR";
    RequestStatus[RequestStatus["STRUCT_NOT_COMPATIBLE"] = 2] = "STRUCT_NOT_COMPATIBLE";
    RequestStatus[RequestStatus["JSON_BODYPARSER_ERROR"] = 3] = "JSON_BODYPARSER_ERROR";
})(RequestStatus || (RequestStatus = {}));
let customHeader = {
    vars: ["application/json", "application/x-www-form-urlencoded"],
    status: RequestStatus.JSON_BODYPARSER_ERROR,
    get_status() {
        return RequestStatus[this.status];
    },
    set_status(newStatus) {
        this.status = newStatus;
    },
    add_variable(variable) {
        this.vars.push(variable);
    }
};
let customBody = {
    message: `Simple request message body`,
    get_message() {
        return this.message;
    }
};
let payload = {
    header: customHeader,
    body: customBody
};
console.log(`Payload created with status "${payload.header.get_status()}" and message "${payload.body.get_message()}"`);
payload.header.set_status(RequestStatus.STRUCT_NOT_COMPATIBLE);
payload.header.add_variable("X-FORWARDED-FOR: non-exec");
console.log(`Payload created with status "${payload.header.get_status()}" and message "${payload.body.get_message()}"`);
let headerVarArray = payload.header.vars;
for (let i = 0; i < headerVarArray.length; i++) {
    console.log(`Header var: ${headerVarArray[i]}`);
}
let myIceCream = {
    flavor: 'vanilla',
    scoops: 5
};
console.log(`My IceCream: ${myIceCream.flavor} --> ${myIceCream.scoops}`);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return `${dessert.scoops} is too many scoops`;
    }
    else {
        return `You order will be ready soon!`;
    }
}
console.log(tooManyScoops(myIceCream));
