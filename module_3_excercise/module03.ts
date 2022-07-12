/* ### Simple TypeScript Interface ### */

interface Employee {
    firstName: string;
    lastName: string;
    full_name(): string;
}

let john: Employee = {
    firstName: 'John',
    lastName: 'Anderson',
    full_name(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(`Employee name is: ${john.full_name()}`)


enum RequestStatus {
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
    STRUCT_NOT_COMPATIBLE,
    JSON_BODYPARSER_ERROR
}

interface CustomHeader {
    vars: Array<string>;
    status: RequestStatus;
    get_status(): string;
    set_status(newStatus: RequestStatus): void;
    add_variable(variable: string): void;
}

interface CustomBody {
    message: string;
    get_message(): string;
}


interface CustomPayload{
    header: CustomHeader;
    body: CustomBody;
}

let customHeader: CustomHeader = {
    vars: ["application/json", "application/x-www-form-urlencoded"],
    status: RequestStatus.JSON_BODYPARSER_ERROR,
    get_status(): string {
        return RequestStatus[this.status];
    },
    set_status(newStatus: RequestStatus): void {
      this.status = newStatus;
    },
    add_variable(variable: string): void {
        this.vars.push(variable);
    }
}

let customBody: CustomBody = {
    message: `Simple request message body`,
    get_message(): string {
        return this.message;
    }
}

let payload: CustomPayload = {
    header: customHeader,
    body: customBody
}

console.log(`Payload created with status "${payload.header.get_status()}" and message "${payload.body.get_message()}"`);
payload.header.set_status(RequestStatus.STRUCT_NOT_COMPATIBLE);
payload.header.add_variable("X-FORWARDED-FOR: non-exec");
console.log(`Payload created with status "${payload.header.get_status()}" and message "${payload.body.get_message()}"`);

let headerVarArray: Array<string> = payload.header.vars;
for (let i=0; i < headerVarArray.length; i++) {
    console.log(`Header var: ${headerVarArray[i]}`);
}

/* ### Ejercicio de Ejemplo ### */

interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string; // optional variable since ? is present
}

let myIceCream: IceCream = {
    flavor: 'vanilla',
    scoops: 5
}

console.log(`My IceCream: ${myIceCream.flavor} --> ${myIceCream.scoops}`);

function tooManyScoops(dessert: IceCream): string {
    if (dessert.scoops >= 4) {
        return `${dessert.scoops} is too many scoops`;
    } else {
        return `You order will be ready soon!`;
    }
}

console.log(tooManyScoops(myIceCream));
