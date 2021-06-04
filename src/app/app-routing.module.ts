import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImportPageComponent} from './components/pages/import-page/import-page.component';
import {LoginationComponent} from './components/logination/logination/logination.component';

const routes: Routes = [
  {
    path: 'import',
    component: ImportPageComponent,
  },
  {
    path: 'login',
    component: LoginationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ImportPageComponent];
