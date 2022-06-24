# Tipos en Typescript

## Tabla de Contenidos

- [Inferencia de tipo en Typescript](#ejercicio-inferencia-de-tipo-en-typescript)
- [Tipos y Subtipos](#tipos-y-subtipos-en-typescript)
  - [Tipo `any`](#cualquier-tipo)
  - [Tipos Primitivos](#tipos-primitivos)
  - [Tipos de Objeto y Parametros de Tipo](#tipos-de-objeto-y-parámetros-de-tipo)
- [Tipos Primitivos en TypeScript](#tipos-primitivos-en-typescript)
  - [Tipo Booleano](#tipo-booleano)
  - [Tipos Numericos y BigInteger](#tipos-numéricos-y-biginteger)
  - [Tipo Cadena](#tipo-de-cadena)
  - [Tipos `void`, `null`, `undefined`](#los-tipos-void-null-y-undefined)
- [Tipo Enumeracion](#el-tipo-de-enumeración)
  - [Crear Enumeracion](#creación-de-una-enumeración)

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
