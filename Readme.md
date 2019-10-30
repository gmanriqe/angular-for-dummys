# Angular

- Angular es un framework de desarrollo para JavaScript creado por **Google**. La finalidad de Angular es facilitarnos el desarrollo de aplicaciones web SPA y además darnos herramientas para trabajar con los elementos de una web de una manera más sencilla y optima.

- Otro propósito que tiene Angular es la separación completa entre el Frontend y el Backend en una aplicación web. Nos permite a su vez poder trabajar de manera muy facil con servicios.

- Angular está pensado para actualizar datos en la pantalla dinámicamente, me refiero a que en la pantalla en la que estamos, los datos van cambiando automáticamente sin referescar el browser. Por ejemplo, cuando apretás un botón, al ingresar tu email en un formulario, o si estás en una aplicación de chat, si la otra persona te escribe un mensaje, tu pantalla se actualiza con nuevos datos. Pero ésto no se hace mágicamente, los datos viajan del controlador a la vista (la pantalla que estás viendo) y también se puede dar el caso los datos viajan del controlador a la vista. Y por último, se puede dar el caso de que ambas acciones puedan pasar al mismo tiempo. Estos tres casos se pueden ver gráficamente de la siguiente forma:

![3-casos-data-binding](https://gustavodohara.com/blogangular/wp-content/uploads/2018/03/3-casos-data-binding.png)

## ¿Que es es Data Binding?

- El two-ways biding [()] quiere decir: el mecanismo de actualizar la vista y el modelo al mismo tiempo
- (banana) : de la vista al modelo
- [box] : del modelo a la vista
- ⚠️ Atención: La directiva ngModel viene dentro del módulo FormsModule que hay que importar explícitamente

## Entorno de trabajo

1.NodeJS: https://nodejs.org/es/ (Version 10 o superior | que sea la estable)

- Instalación es por instalador
- Confirmar ➡️$npm -v
- Junto con Node se te instala otro programita, Npm, que te facilita la vida para instalar, desinstalar y actualizar los módulos de Node. En general, cuando trabajas con Angular se usan muchos módulos de Node, y Npm te ayuda un montón para no volverte loco bajando y actualizando estos módulos.

2.Google Chrome: https://www.google.es/chrome/browser/desktop/

3.TypeScript: http://www.typescriptlang.org/

- Instalar como npm: $npm install -g typescript (Version 2 o superior | Para windows correr el comando como Administrador, haciendo click derecho, y abrir consola como administrador)
- Confirmar ➡️$tsc --version

4.Angular CLI

- Instalar como npm ➡️ $npm install -g @angular/cli (Ultima 6.0 o superior)
- Confirmar ➡️$ng --help (comandos de ayuda)
- Angular-cli es un módulo de Node,  y ¿para qué sirve? para crearte aplicaciones angular de forma muy rápida. Es como si quisieras hacer una casa pero sin tener idea de albañilería, te ponés a hablar con el arquitecto, le vas diciendo, hacéme 2 habitaciones de 6mts x 5mts, con un baño y 2 puertas. Con Angular-cli pasa algo similar, le indicás (mediante lineas de comando) como querés hacer tu aplicación.

## Plugin Visual Studio Code

Plugins recomendados para los siguientes editores:

- Angular 2 TypeScript Emmet
- Angular 5 Snippets – TypeScript, Html, Angular Material
- Angular Language Service
- Angular v5 Snippets
- Angular2-inline
- Bootstrap 4 & Font Awesome snippets
- HTML CSS Support
- JavaScript (ES6) code snippets
- JSHint
- Material Icon Theme
- Prettier – Code Formatter
- Terminal
- TSLint
- TypeScript Hero
- TypeScript Importer

## Creación de proyecto con Angular Cli

1.$ng new nombre-proyecto (Creacion del proyecto)

- Crear las rutas? yes
- Que extension de CSS utilizaras? scss

2.$cd nombre-proyecto

3.$ng serve -o (Comando para ejecutar el proyecto)

## Creación de un **Componente**

-$ng g c components/nombreComponent --nospec
-(components es el nombre de la carpeta donde tendrá nuestros componentes)
-(--nospec es para no crear el archivo con extesión .spec)

## Creación de **Servicios**

- ng generate service services/nombreServicio --spec false
- (services es el nombre de la carpeta donde tendrá nuestros servicio)
- (--spect false es para no crear el archivo con extesión .spec)

## Creación de un servicio en particular

1.Crear tu servicio dentro de la carpeta services/nombreDeTuServicio.service.ts. Dentro de ella crearas un método que haga la llamada a traves del método GET
2.Ahora en el archivo nombrecomponent.component.ts deberas hacer la llamada de eso método en el componente donde quieras que se pinte la info.
3.Tendrás visible la info por un console.log 😁

## Mejores comandos para Angular CLI

- https://malcoded.com/posts/angular-fundamentals-cli/

## Métodos HTTP

- GET (Obtienes registros)
- POST (Crear registros)
- PUT (Vas actualizar todos los campos de un recursos)
- PATCH (Actualizas solo los campos cambiados)

## Conceptos Claves en Angular

**¿Que es una Interpolación en Angular?**

- La interpolación es la forma de mostrar datos del Componente al DOM (esa representación que hace el browser del HTML con forma de objetos). Su notación es en forma de doble brackets {{}} y lo que está dentro de esos brackets es lo que se quiere mostrar en pantalla «procesado».

**Property Binding**

- Al igual que la Interpolación, Property Binding se usa para pasar datos del Controler al DOM, y los datos van en una única dirección

**¿Cuándo usamos Property Binding y cuando Interpolación?**

- Básicamente, cuando el valor que vas a setear es un string, no hay diferencia entre usar uno y otro, así que podes usar el que más te guste. Te recomiendo usar una forma y mantenerla en todo tu proyecto para facilitar la lectura del mismo.

**Event Binding**

- Ésta es la forma de enviar «algo» del elemento al componente. La sintaxis es (evento)=»template statement». Cualquier acción que haga el usuario (ingresar texto, apretar un botón, scrollear con la ruedita del mouse) es una acción que se puede capturar. Cualquiera de esas acciones puede disparar una acción desde el elemento DOM hacia el Controlador.En cambio, cuando lo que seteás no es un string, entonces sí o sí tenés que usar Property Binding
- ➡️ <button (click)="onSubmitRegister()">Guardar</button>
- El target event o evento a capturar (click) en el ejemplo, es cualquier cosa que queremos capturar del usuario (clicks, tecleo de teclas, movimientos del mouse, etc)

**$event y el manejo de eventos**

- Cuando se declara un Event Binding, Angular le asigna al Evento a capturar un handler (o un manejador). Este manejador tiene como objetivo ejecutar la «template statement» cuando el evento ocurra. Además, lo que hace el handler es recibir un objeto llamado $event (este objeto es creado por Angular) y lo deja disponible para la Template statement por si necesita algún dato del evento
- Por ejemplo, en el Tag HTML «input» que captura datos del teclado del usuario, si uno quisiera capturar qué tecleó el usuario, se podría acceder de la siguiente forma: $event.target.value. El $event cambiará dependiendo del evento que se capture

**¿Y cómo creamos nuestro propio Event Binding?**

- Muy fácil, usando la clase EventEmitter proporcionada por Angular. Esta clase tiene un método llamado emit que envía un mensaje de un controlador a otro. Pero es más fácil verlo con un ejemplo, tenemos un componente dentro de otro y queremos que el componente interno le envié un mensaje al componente externo: Y lo que queremos hacer es que el Componente Interno le envié un mensaje al Componente Externo. Para el ejemplo, enviaremos ese mensaje ni bien se crea el componente (en el método Oninit() )
- Hay dos «etapas», una es la registración del handler del evento, y la otra es el envío del mensaje del Componente Interno hacia el Externo (app)
- Y la etapa de envío del mensaje, en este ejemplo, se hace en el método ngInit() para que se ejecute justo después de crearse. El ejemplo es muy simple, y el receptor del mensaje, el Componente «app», solo lo imprimirá en pantalla, usando la variable $event que crea el handler del evento. En este caso la variable $event tiene el string que envía el componente «interno»: «HOLA»
- Y la etapa de envío del mensaje, en este ejemplo, se hace en el método ngInit() para que se ejecute justo después de crearse. El ejemplo es muy simple, y el receptor del mensaje, el Componente «app», solo lo imprimirá en pantalla, usando la variable $event que crea el handler del evento. En este caso la variable $event tiene el string que envía el componente «interno»: «HOLA»

**Y ahora si, Banana In a Box!**

- Es la forma de two-way bidning o su forma común «banana in a box«, es la combinación de Property binding con Event binding, o sea, mezclamos [] con () y tenemos [()].
- **¿Para qué se usa el two-way bindings?** ➡️ para enviar datos del DOM al Componente y del Componente al DOM, por eso se llama two-way binding 😁
- Si el usuario teclea algo, el Controlador será notificado y podrá efectuar una acción con eso. Y por otro lado, si el Controlador modifica la variable nombre (por ejemplo borrando los datos) el DOM se actualizará automáticamente. ¡Y nosotros no vamos a hacer nada!
- ⚠️Ojo, para que funcione la directiva NgModule hay que importar el módulo FormsModule.

**Las tuberías |**

- Si queremos que la presentación del dato sea distinta a su valor real, podemos usar funciones de transformación especiales. Se llaman tuberías o pipes y se indican mediante el carácter |.
- El framework nos provee de casos básicos como uppercase, lowercase, date, number.... También dispones de un mecanismo para crear tus propios pipes.

**Los atributos evaluados []**
- En Html disponemos de atributos para asignar valores a propiedades de
los elementos. Esos atributos reciben los valores como constantes. Pero,
si se encierran entre corchetes se convierten en un evaluador de
expresiones y puede recibir una variable o cualquier otra expresión

- Como por ejemplo usando una clase css cuyo valor cambia en tiempo de ejecución. O para deshabilitar un elemento dinámicamente

**Repetitivas *ngFor**

- Una situación que nos encontramos una y otra vez es la de las repeticiones. Listas de datos, tablas o grupos de opciones son ejemplos claros. Hay una directiva en Angular para esa situación, la *ngFor="let iterador of array". La directiva *ngFor forma parte del grupo de directivas estructurales, porque modifica la estructura del DOM, en este caso insertando múltiples nodos hijos a un elemento dado
- <option *ngFor="let wkSt of workStatuses" [value]="wkSt.id">

**Condicionales *ngIf****
- La directiva estructural más utilizada es la *ngIf, la cual consigue que
un elemento se incluya o se elimine en el DOM en función de los datos del modelo
- <section *ngIf="contact.workStatus=='3'">
- <section *ngIf="contact.workStatus=='3'; else education">

**Identificadores con hashtag**