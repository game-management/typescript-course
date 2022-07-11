# Tipos en Typescript

## Tabla de Contenidos

- [Inferencia de tipo en Typescript](#ejercicio-inferencia-de-tipo-en-typescript)
- [Tipos y Subtipos](#tipos-y-subtipos-en-typescript)
  - [Tipo `any`](#cualquier-tipo)
  - [Tipos Primitivos](#tipos-primitivos)
  - [Tipos de Objeto y Parametros de Tipo](#tipos-de-objeto-y-parámetros-de-tipo)
- [Tipos Primitivos en TypeScript](#tipos-primitivos-en-typescript)
  - [Tipo Booleano](#tipo-booleano)
  - [Tipos Numericos y BigInteger](#tipos-numricos-y-biginteger)
  - [Tipo Cadena](#tipo-de-cadena)
  - [Tipos `void`, `null`, `undefined`](#los-tipos-void-null-y-undefined)
- [Tipo Enumeracion](#el-tipo-de-enumeración)
  - [Crear Enumeracion](#creación-de-una-enumeración)
- [Tipos `any` y `unknown`](#tipos-any-y-unknown-en-typescript)
  - [Tipo `any`](#any-tipo)
  - [Tipo `unknown`](#tipo-unknown)
  - [Asercion de tipos](#aserción-de-tipos)
  - [Restriccion de tipos](#restricciones-de-tipos)
- [Tipos de unión e intersección](#tipos-de-unin-e-interseccin-en-typescript)
  - [Tipos de unión](#tipos-de-unión)
  - [Tipos de intersección](#tipos-de-intersección)
- [Tipos literales](#tipos-literales)
  - [Definición de tipos literales](#definición-de-tipos-literales)

## Ejercicio: Inferencia de tipo en TypeScript

Puede asociar tipos con variables mediante anotaciones de tipo explícitas o la inferencia de tipos implícita.

Aunque se recomienda, las anotaciones de tipo explícitas son opcionales en TypeScript. Para ello, use la sintaxis `variableName: type`. Esta instrucción `let myVariable: number` declara la variable como un tipo de número sin inicializarla. Como alternativa, también puede inicializar la variable mediante `let myVariable: number = 10`.

Para implicar el tipo de variable mediante la inferencia de tipos, basta con usar el mismo formato que se usa en JavaScript. Por ejemplo, `let myVariable = 10` infiere que la variable es de tipo `number` porque se inicializa con el valor `10`.

Vamos a abrir el área de juegos para ver cómo funciona esto.

1. Escriba las declaraciones de variable siguientes:

    ``` typescript
    let x: number;   //* Explicitly declares x as a number type
    let y = 1;       //* Implicitly declares y as a number type
    let z;           //* Declares z without initializing it
    ```

2. TypeScript ahora trata la variable x como un tipo number. TypeScript también infiere el tipo de y para que sea un tipo numérico porque es el tipo del valor que se usa para inicializarlo. Pero, ¿qué ocurre si intenta asignar un tipo de valor diferente? ¿Y qué ocurre con la variable z?

3. Abra la pestaña Errores en el Área de juegos para que pueda supervisar los errores.

4. Escriba `x = 1`. Esto debería funcionar según lo esperado, sin errores.

5. Escriba `x = "one"`. Tal como se esperaba, esto genera el error **El tipo "string" no se puede asignar al tipo "number"** porque la comprobación de tipos estáticos no permite que un elemento string se asigne a la variable.

6. Escriba `y = "one"`. Verá que se genera el mismo error. Esto se debe a que TypeScript ha inferido que "y" es de tipo `number`.

7. Escriba el nombre de la variable `y` seguido de un punto y observará que hay algo más. Aunque no se ha especificado de forma explícita un tipo para la variable `y`, IntelliSense proporciona métodos que solo se aplican a un tipo `number`.

8. Escriba `z = 1` y `z = "one"`. TypeScript ha aceptado ambos valores, pero ¿por qué? Esto funciona de la misma manera que en JavaScript porque la variable `z` ahora puede aceptar cualquier valor que se le haya asignado. (TypeScript ha inferido que `z` es de tipo `any` porque no ha asignado un tipo o lo ha inicializado cuando se ha declarado. Aprenderá más sobre el tipo `any` más adelante).

Aunque puede inferir de forma implícita los tipos mediante la inferencia de tipos en TypeScript, ¿debería? Mediante la inferencia de tipos, se obtienen algunas de las ventajas de la comprobación de tipos estáticos y de IntelliSense, y permite migrar gradualmente a declaraciones de tipos explícitas en los proyectos. Sin embargo, las declaraciones de tipos explícitas también proporcionan una manera de documentar mejor la intención del código y proporcionar una ruta de acceso más deliberada.

## Tipos y subtipos en TypeScript

Antes de profundizar en el uso de tipos para la declaración de variables, echemos un vistazo a los tipos y subtipos en TypeScript.

### Cualquier tipo

Todos los tipos en TypeScript son subtipos de un único tipo principal denominado tipo `any`. `any` es un tipo que puede representar cualquier valor de JavaScript sin restricciones. Todos los demás tipos se clasifican como tipos primitivos, tipos de objeto o parámetros de tipo. Estos tipos presentan diversas restricciones estáticas en sus valores.

![Type hierarchy](images/m02-types.png)

### Tipos primitivos

Los tipos primitivos son los tipos `boolean`, `number`, `string`, `void`, `null` y `undefined`, junto con enumeración definida por el usuario o tipos `enum`. El tipo `void` existe únicamente para indicar la ausencia de un valor, como en una función sin ningún valor devuelto. Los tipos `null` y `undefined` son subtipos de todos los demás tipos. No es posible hacer referencia explícita a los tipos `null` y `undefined`. Solo se puede hacer referencia a los valores de esos tipos mediante los literales `null` y `undefined`.

### Tipos de objeto y parámetros de tipo

Los tipos de objeto son todos los tipos de clase, de interfaz, de matriz y literales (todo lo que no sea un tipo primitivo).

Los tipos de clase e interfaz se introducen mediante las declaraciones de clase e interfaz, y se hace referencia a ellos con el nombre que se les ha asignado en sus declaraciones. Los tipos de clase e interfaz pueden ser tipos genéricos que tienen uno o más parámetros de tipo. Obtendrá más información sobre estos tipos de objeto en módulos posteriores.

## Tipos primitivos en TypeScript

### Tipo booleano

El tipo de datos más básico es el valor `true` o `false`, conocido como booleano.

Por ejemplo:

```typescript

let flag: boolean;
let yes = true;
let no = false;
````

### Tipos numéricos y BigInteger

Al igual que en JavaScript, todos los números en TypeScript son valores de número de punto flotante o BigIntegers. Estos números de punto flotante obtienen el tipo `number`, mientras que los valores BigIntegers obtiene el tipo `bigint`. Además de los literales hexadecimales y decimales, TypeScript también admite los literales binarios y octales introducidos en ECMAScript 2015.

Por ejemplo:

```typescript
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;
```

### Tipo de cadena

La palabra clave `string` representa secuencias de caracteres almacenados como unidades de código Unicode UTF-16. Al igual que JavaScript, TypeScript también usa comillas dobles (`"`) o comillas simples (`'`) para rodear los datos de cadena.

He aquí algunos ejemplos:

```typescript
let s: string;
let empty = "";
let abc = 'abc';
```

En TypeScript, también puede usar cadenas de plantilla, que pueden abarcar varias líneas y tener expresiones insertadas. Estas cadenas están rodeadas por el carácter de comilla simple/tilde grave (\`) y las expresiones insertadas tienen el formato `${ expr }`.

Por ejemplo:

```typescript
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);
````

Este ejemplo produce el resultado siguiente:

```script
My name is Mateo.
    I am new to TypeScript.
```

### Los tipos void, null y undefined

JavaScript y TypeScript tienen dos valores primitivos que se usan para indicar un valor ausente o con inicialización anulada: `null` y `undefined`. Estos tipos son más útiles en el contexto de las funciones, por lo que se tratarán con más detalle en un módulo posterior.

## El tipo de enumeración

Una incorporación útil al conjunto estándar de tipos de datos de JavaScript es el tipo de enumeración, o `enum`.

Las enumeraciones ofrecen una manera sencilla de trabajar con conjuntos de constantes relacionadas. Un elemento `enum` es un nombre simbólico para un conjunto de valores. Las enumeraciones se tratan como tipos de datos y se pueden usar a fin de crear conjuntos de constantes para su uso con variables y propiedades.

Siempre que un procedimiento acepte un conjunto limitado de variables, considere la posibilidad de usar una enumeración. Las enumeraciones hacen que el código sea más claro y legible, especialmente cuando se usan nombres significativos.

El uso de enumeraciones:

- Permite reducir los errores que provoca la transposición o la escritura incorrecta de números.
- Facilita el cambio de valores en el futuro.
- Facilita la lectura del código, lo que significa que es menos probable que se produzcan errores en él.
- Garantiza la compatibilidad con versiones posteriores. Con las enumeraciones, es menos probable que se produzca un error en el código si en el futuro alguien cambia los valores correspondientes a los nombres de miembro.

### Creación de una enumeración

Las enumeraciones permiten especificar una lista de opciones disponibles. Son muy útiles cuando se tiene un conjunto de valores que puede tomar un tipo de variable determinado. Supongamos que tiene un campo en una base de datos externa denominada **ContractStatus**, que contiene los números 1, 2 o 3, que representan los siguientes estados de contacto: **Permanent**, **Temp** y **Apprentice**. Crearemos una enumeración con estos valores y exploraremos la compatibilidad de TypeScript.

1. Abra el área de juegos y quite cualquier código existente.

2. Cree un elemento `enum` para representar nuestro escenario; para ello, escriba lo siguiente:

    ```typescript
    enum ContractStatus {
        Permanent,
        Temp,
        Apprentice
    }
    ```

3. Ahora, declare una variable para un nuevo empleado denominada `employeeStatus` del tipo `ContractStatus` y asígnele el nombre `"Temp"`. Muestre el resultado en la consola.

    ```typescript
    let employeeStatus: ContractStatus = ContractStatus.Temp;
    console.log(employeeStatus);
    ```

4. Seleccione **Run** (Ejecutar). Anote el valor que se muestra en la ventana **Log** (Registro). ¿Qué valor se devuelve?

5. De forma predeterminada, los valores `enum` comienzan con un valor de 0, por lo que `Permanent` es 0, `Temp` es 1 y `Apprentice` es 2. Si quiere que los valores empiecen con un valor diferente, en este caso 1, especifíquelo en la declaración `enum`. Realice las ediciones siguientes para que `enum` empiece los valores en 1.

    ```typescript
    enum ContractStatus {
        Permanent = 1,
        Temp,
        Apprentice
    }
    ```

6. Vuelva a ejecutar el código seleccionando **Run** (Ejecutar). Observe que el valor mostrado es ahora 2.

7. Para mostrar el nombre asociado a la enumeración, podemos usar el indexador proporcionado. Agregue lo siguiente en la parte inferior del código:

    ```typescript
    console.log(ContractStatus[employeeStatus]);
    ```

8. Ejecute el código. Observe que se muestra el valor **Temp**, que es el nombre de la enumeración para **Temp** o 2.

## Tipos `any` y `unknown` en TypeScript

Hay ocasiones en las que necesitará trabajar con valores que son desconocidos en el momento de desarrollar el código o que son de un rango posible reducido de tipos de valor. En estos casos, puede usar los tipos any y unknown, así como usar la aserción de tipos y las restricciones de tipos para mantener el control sobre lo que el código puede hacer con los valores que se pasan.

### `any` tipo

`any` es un tipo que puede representar cualquier valor de JavaScript sin restricciones. Esto puede ser útil si se espera un valor de una biblioteca de terceros o entradas de usuario en las que el valor es dinámico, ya que el tipo any permitirá volver a asignar distintos tipos de valores. Y, tal como se ha mencionado anteriormente, el uso del tipo any permite migrar gradualmente el código de JavaScript para usar tipos estáticos en TypeScript.

El ejemplo siguiente declara una variable de tipo any y le asigna valores:

```typescript
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK
```

Cuando se compila este ejemplo, no se produce un error porque el tipo `any` abarca valores de todos los tipos posibles. El tipo `any` opta por no recibir la comprobación de tipos y no le obliga a realizar ninguna comprobación antes de llamar, construir o acceder a las propiedades de estos valores.

El uso del tipo any en este ejemplo permite llamar a lo siguiente:

- Una propiedad que no existe para el tipo.
- `randomValue` como una función.
- Método que solo se aplica a un tipo string.

Dado que `randomValue` está registrado como `any`, todos los ejemplos siguientes son TypeScript válidos y no generarán un error en tiempo de compilación. Sin embargo, pueden producirse errores en tiempo de ejecución en función del tipo de datos real de la variable. Dado el ejemplo anterior, donde `randomValue` se establece en un valor booleano, las líneas de código siguientes generarán problemas en tiempo de ejecución:

```typescript
console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error
```

> Importante
>
> Recuerde que toda la comodidad de any se produce a costa de perder seguridad de tipos. La seguridad de tipos es uno de los principales motivos para usar TypeScript. Debe evitar el uso de any cuando no sea necesario.

### Tipo `unknown``

Aunque es flexible, el tipo `any` puede producir errores inesperados. Para solucionar esto, TypeScript ha presentado el tipo `unknown`.

El tipo `unknown` es similar al tipo `any` en que cualquier valor se puede asignar al tipo `unknown`. Sin embargo, no se puede acceder a las propiedades de un tipo `unknown`; tampoco se pueden llamar ni construir.

En este ejemplo se cambia el tipo `any` del ejemplo anterior a `unknown`. Ahora generará errores de comprobación de tipos y evitará que compile el código hasta que tome las medidas adecuadas para resolverlos.

```typescript
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name);  // Error: Object is of type unknown
randomValue();                  // Error: Object is of type unknown
randomValue.toUpperCase();      // Error: Object is of type unknown
```

> Nota
>
>La diferencia principal entre `any` y `unknown` es que no puede interactuar con una variable de tipo `unknown`; si lo hace, se genera un error del compilador. `any` omite las comprobaciones en tiempo de compilación y el objeto se evalúa en tiempo de ejecución. Si el método o la propiedad existen, se comportará según lo esperado.

### Aserción de tipos

Si necesita tratar una variable como un tipo de datos diferente, puede usar una aserción de tipos. Una aserción de tipos indica a TypeScript que ha realizado cualquier comprobación especial que necesite antes de llamar a la instrucción. Indica al compilador "confíe en mí, sé lo que estoy haciendo". Una aserción de tipo es como una conversión de tipos en otros lenguajes, pero no realiza ninguna comprobación especial ni reestructuración de los datos. No tiene ningún impacto en el tiempo de ejecución y lo utiliza exclusivamente el compilador.

Las aserciones de tipos tienen dos formatos. Una es la sintaxis de as:

`(randomValue as string).toUpperCase();`

La otra versión es la sintaxis de "corchetes angulares":

`(<string>randomValue).toUpperCase();`

> Nota
>
> `as` es la sintaxis preferida. Algunas aplicaciones de TypeScript, como JSX, pueden confundirse al usar `< >` para las conversiones de tipos.

En el ejemplo siguiente se realiza la comprobación necesaria para determinar que randomValue es un elemento string antes de usar la aserción de tipos a fin de llamar al método toUpperCase.

```typescript
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}
```

TypeScript ahora da por supuesto que ha realizado la comprobación necesaria. La aserción de tipos indica que `randomValue` se debe tratar como un elemento `string` y, después, se puede aplicar el método `toUpperCase`.

### Restricciones de tipos

En el ejemplo anterior se muestra el uso de `typeof` en el bloque `if` para examinar el tipo de una expresión en tiempo de ejecución. A esto se le llama restricción de tipos.

Puede que esté familiarizado con el uso de `typeof` y `instanceof` en JavaScript para probar estas condiciones. TypeScript entiende estas condiciones y cambiará la inferencia de tipos en consecuencia cuando se use en un bloque `if`.

Puede usar las condiciones siguientes para descubrir el tipo de una variable:

| Tipo        | Predicate                          |
|-------------|------------------------------------|
| `string`    | `typeof s === "string"`            |
| `number`    | `typeof n === "number"`            |
| `boolean`   | `typeof b === "boolean"`           |
| `undefined` | `typeof undefined === "undefined"` |
| `function`  | `typeof f === "function"`          |
| `array`     | `Array.isArray(a)`                 |

## Tipos de unión e intersección en TypeScript

TypeScript proporciona opciones más avanzadas para declarar tipos. Los tipos de unión e intersección permiten controlar situaciones en las que un tipo se compone de dos o más tipos posibles, mientras que los tipos literales permiten restringir los valores asignados a un tipo a una lista reducida de opciones.

### Tipos de unión

Un tipo de unión describe un valor que puede ser uno de entre varios tipos. Esto puede ser útil cuando no tenga controlado un valor (por ejemplo, los valores de una biblioteca, una API o una entrada de usuario).

El tipo `any` también puede aceptar tipos diferentes, así que ¿por qué querría usar un tipo de unión? Los tipos de unión restringen la asignación de valores a los tipos especificados, mientras que el tipo any no tiene restricciones. Otro motivo es la compatibilidad con IntelliSense.

Un tipo de unión usa la barra vertical o pleca (`|`) para separar cada tipo. En el ejemplo siguiente, multiType puede ser un valor number o boolean:

```typescript
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid
```

Con las restricciones de tipos, puede trabajar fácilmente con una variable de un tipo de unión. En este ejemplo, la función _add_ acepta dos valores que pueden ser `number` o `string`. Si ambos valores son tipos numéricos, los agrega. Si ambos son tipos de cadena, los concatena. De lo contrario, genera un error.

```typescript
function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error
```

### Tipos de intersección

Los tipos de intersección están estrechamente relacionados con los tipos de unión, pero se usan de manera muy diferente. Un tipo de intersección combina dos o más tipos para crear uno que tiene todas las propiedades de los tipos existentes. Esto permite agregar tipos existentes de forma conjunta para obtener un tipo único que tenga todas las características que necesita.

Un tipo de intersección usa el símbolo de y comercial (`&`) para separar cada tipo.

Los tipos de intersección se usan con mayor frecuencia con las interfaces. En el ejemplo siguiente se definen dos interfaces, `Employee` y `Manager`, y luego se crea un tipo de intersección llamado `ManagementEmployee` que combina las propiedades en ambas interfaces.

```typescript
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
```

Puede obtener más información sobre las interfaces en el módulo Implementación de interfaces en TypeScript.

## Tipos literales

Un literal es un subtipo más concreto de un tipo colectivo. Esto significa que `"Hello World"` es un elemento `string`, pero un elemento `string` no es `"Hello World"` dentro del sistema de tipos.

Hay tres conjuntos de tipos literales disponibles en TypeScript: `string`, `number` y `boolean`. Mediante el uso de tipos literales, puede especificar un valor exacto que debe tener una cadena, un número o un valor booleano (por ejemplo, "yes", "no" o "maybe").

### ¿Qué es la restricción literal?

Cuando se declara una variable mediante `var` o `let` en TypeScript, se indica al compilador que existe la posibilidad de que esta variable cambie su contenido. Al declarar una variable con `let` se escribe la variable (por ejemplo, como un elemento `string`), lo que permite un número infinito de valores posibles.

Por el contrario, al usar const para declarar una variable, informará a TypeScript de que este objeto nunca cambiará. Al declarar con tipos const, la escribe en el valor (por ejemplo, `"Hola mundo"`).

El proceso de pasar de un número infinito de casos posibles a uno finito más pequeño se denomina restricción.

### Definición de tipos literales

Los tipos literales se escriben como objetos, matrices, funciones o literales de tipo constructor, y se usan para crear tipos a partir de otros.

La mejor manera de mostrar el uso de los tipos literales es con un ejemplo. Esta definición de tipo crea un tipo literal denominado `testResult`, que puede contener uno de estos tres valores `string`:

```typescript
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid
```

Al establecer el valor de la variable `myResult`, `"incomplete"` y `"pass"` son entradas válidas, a diferencia de `"failure"`, que no lo es porque no es uno de los elementos de la definición de tipo `testResult`.

TypeScript también tiene tipos literales numéricos, que actúan igual que los literales de cadena anteriores. Por ejemplo:

```typescript
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
diceRoll = 7;    //* Invalid
```

También puede usar valores `boolean` al definir tipos literales o cualquier combinación de tipos.

## Matrices y Tuplas

```typescript
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
```
