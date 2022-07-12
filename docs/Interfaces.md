## Interfaces en Typescript

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