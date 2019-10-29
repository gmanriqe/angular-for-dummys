# Angular

## Entorno de trabajo

1.NodeJS: https://nodejs.org/es/ (Version 10 o superior | que sea la estable)

- Instalación es por instalador
- Confirmar ➡️$npm -v

2.Google Chrome: https://www.google.es/chrome/browser/desktop/

3.TypeScript: http://www.typescriptlang.org/

- Instalar como npm: $npm install -g typescript (Version 2 o superior | Para windows correr el comando como Administrador, haciendo click derecho, y abrir consola como administrador)
- Confirmar ➡️$tsc --version

4.Angular CLI

- Instalar como npm ➡️ $npm install -g @angular/cli (Ultima 6.0 o superior)
- Confirmar ➡️$ng --help (comandos de ayuda)

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
Muy fácil, usando la clase EventEmitter proporcionada por Angular. Esta clase tiene un método llamado emit que envía un mensaje de un controlador a otro. Pero es más fácil verlo con un ejemplo, tenemos un componente dentro de otro y queremos que el componente interno le envié un mensaje al componente externo: