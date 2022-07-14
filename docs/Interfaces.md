## Interfaces en Typescript

### Tabla de Contenidos

- [Interfaces en Typescript](#Generalidades)
- [Extension de una Interfaz](#extensin-de-una-interfaz-en-typescript)

### Generalidades

Para declarar una interfaz, empiece con la palabra clave `interface`, seguida del nombre de la interfaz (el identificador). El nombre de la interfaz no puede ser uno de los nombres de tipos predefinidos en el sistema de tipos. Por convención, los nombres de interfaces están en PascalCase.

> Nota
>
> Las instrucciones de codificación de TypeScript sugieren que las interfaces no empiecen por la letra `I`.

Después, defina las propiedades (o los miembros) de la interfaz y su tipo. Las propiedades pueden ser obligatorias, opcionales o de solo lectura.

| Tipo de propiedad | Descripción                                                                                                                                                                                                  | Ejemplo                       |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| Obligatorio       | Todas las propiedades son necesarias, a menos que se especifique lo contrario.                                                                                                                               | `firstName: string;`          |
| Opcional          | Agregue un signo de interrogación (?) al final del nombre de la propiedad. Úselo para las propiedades que no son obligatorias. Esto impide que el sistema de tipos genere un error si se omite la propiedad. | `firstName?: string;`         |
| Solo lectura      | Agregue la palabra clave readonly delante del nombre de la propiedad. Úselo para las propiedades que solo deben modificarse cuando se crea un objeto por primera vez.                                        | `readonly firstName: string;` |

### Extensión de una interfaz en TypeScript

Las interfaces se pueden extender entre sí. Esto le permite copiar los miembros de una interfaz en otra, lo que ofrece más flexibilidad a la hora de separar las interfaces en componentes reutilizables.

Al extender una interfaz con una o varias interfaces, se aplican estas reglas:

- Debe implementar todas las propiedades obligatorias de todas las interfaces.
- Dos interfaces pueden tener la misma propiedad si esta tiene exactamente el mismo nombre y el mismo tipo.
- Si dos interfaces tienen una propiedad con el mismo nombre, pero tipos diferentes, debe declarar una nueva propiedad de modo que la propiedad resultante sea un subtipo de ambas interfaces.
Extensión de una interfaz
- Se pueden crear varios tipos de postres a partir de la interfaz `IceCream` (copas de helado, batidos, etc.), pero todos tienen propiedades diferentes, además de las que se declaran en `IceCream`. Vamos a extender la interfaz con una nueva denominada `Sundae` y a declarar sus propiedades.

#### Extensión de una interfaz

1. Continúe el proyecto en el sitio de prueba.
2. En la declaración de la interfaz `IceCream`, declare una nueva interfaz denominada `Sundae` que amplíe (`extends`) la interfaz `IceCream`. La interfaz `Sundae` incluye cuatro nuevas propiedades:
   - `sauce` del tipo de literal `'chocolate' | 'caramel' | 'strawberry'`
   - `nuts` del tipo `boolean` (opcional)
   - `whippedCream` del tipo `boolean` (opcional)
   - `instructions` del tipo `boolean` (opcional)
    
    ```typescript
    interface Sundae extends IceCream {
        sauce: 'chocolate' | 'caramel' | 'strawberry';
        nuts?: boolean;
        whippedCream?: boolean;
        instructions?: boolean;
     }
    ```
3. Debería observar un error en la nueva interfaz. TypeScript ha detectado que las interfaces `IceCream` y `Sundae` tienen una propiedad denominada `instructions`, pero su tipo es diferente. Para resolver este error, vamos a hacer que ambas propiedades instructions sean del mismo tipo (`string`).
4. Para probar la nueva interfaz, vamos a cambiar la variable `myIceCream` al tipo `Sundae`. Esto genera un error que indica lo siguiente: **Property 'sauce' is missing in type '{ flavor: string; scoops: number; }' but required in type 'Sundae'** (Falta la propiedad "sauce" en el tipo "{ flavor: string; scoops: number; }", pero es obligatoria en el tipo "sundae"). Ha agregado cuatro nuevas propiedades a la interfaz "Sundae", pero solo es obligatoria la propiedad "sauce".
    ```typescript
        let myIceCream: Sundae = {
            flavor: 'vanilla',
            scoops: 2
        }
    ```
5. Para corregir el error, agregue la propiedad obligatoria, además de las propiedades opcionales que quiera usar.
    ```typescript
     let myIceCream: Sundae = {
         flavor: 'vanilla',
         scoops: 2,
         sauce: 'caramel',
         nuts: true
     }
    ```
6. Ahora intente implementar la interfaz `Sundae` en la función `tooManyScoops`.
   No debería ver ningún error en la propia función, pero la llamada a la función en la línea siguiente lo genera.
   Esto se debe a que se esperan tres parámetros obligatorios. Para corregir el error, agregue la propiedad `sauce` a la llamada de función.
    ```typescript
        function tooManyScoops(dessert: Sundae) {
           if (dessert.scoops >= 4) {
               return dessert.scoops + ' is too many scoops!';
           } else {
               return 'Your order will be ready soon!';
           }
        }
        console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));
    ```

### Otras maneras de usar interfaces en TypeScript

Ahora que conoce los conceptos básicos para declarar e implementar interfaces, vamos a ver otras maneras de usarlas.

#### Creación de tipos indexables
Puede usar interfaces que describan los tipos de matriz en los que se puede indexar.
Los tipos indexables tienen una signatura de índice que describe el tipo que se puede usar para indexar en el objeto, junto con los tipos de valores devueltos correspondientes al indexar.
Por ejemplo, la interfaz `IceCreamArray` declara una signatura de índice como `number` y devuelve un tipo `string`. Esta signatura de índice indica que la interfaz `IceCreamArray` está indexada con un número y devolverá una cadena.

```typescript
interface IceCreamArray {
   [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);
```

También puede usar el tipo de matriz integrado o crear un alias de tipo para una matriz personalizada, pero si usa una interfaz puede definir su propio tipo de matriz para que cualquier persona que quiera trabajar con esa interfaz pueda aplicarla de forma coherente.

### Descripción de una API de JavaScript mediante una interfaz
Tanto los desarrolladores de JavaScript como los de TypeScript se enfrentan a grandes dificultades cuando trabajan con bibliotecas externas de JavaScript. Se puede usar una interfaz para describir las API de JavaScript existentes, y aclarar los parámetros de función y los tipos de valor devueltos. La interfaz le permitirá comprender claramente qué espera una API y qué devolverá.
La API `fetch` es una función nativa de JavaScript que puede usar para interactuar con servicios web. En este ejemplo se declara una interfaz denominada `Post` para los tipos de valores devueltos en un archivo JSON y, luego, se usa `fetch` con `async` y `await` para generar una respuesta fuertemente tipada.

```typescript
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
   userId: number;
   id: number;
   title: string;
   body: string;
}

async function fetchPosts(url: string) {
   let response = await fetch(url);
   let body = await response.json();
   return body as Post[];
}

async function showPost() {
   let posts = await fetchPosts(fetchURL);
   // Display the contents of the first item in the response
   let post = posts[0];
   console.log('Post #' + post.id);
   // If the userId is 1, then display a note that it's an administrator
   console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()));
   console.log('Title: ' + post.title);
   console.log('Body: ' + post.body);
}

showPost();
```
