import { Routes } from '@angular/router';

import { ListComponent } from './components/students/list/list.component';
import { AddComponent } from './components/students/add/add.component';

export const ROUTES: Routes = [
  {  path: 'list-student', component: ListComponent },
  {  path: 'add-student', component: AddComponent}
];
