import { BrowserModule } from '@angular/platform-browser'; /* 👶🏼 */
import { NgModule } from '@angular/core'; /* 👶🏼 */

import { AppRoutingModule } from './app-routing.module'; /* 👶🏼 */

/* Componente Principal */
import { AppComponent } from './app.component'; /* 👶🏼 */

/* Componentes añadidos */
import { ListComponent } from './components/students/list/list.component';
import { AddComponent } from './components/students/add/add.component';

/* importando rutas */
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

/* configuracion de HTTP */
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
