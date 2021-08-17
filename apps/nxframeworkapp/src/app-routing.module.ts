import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRosterServiceComponent } from './app/add-roster-service/add-roster-service.component';

const routes: Routes = [
  { path: 'AddService', component: AddRosterServiceComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
