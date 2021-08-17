import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddRosterServiceComponent } from './add-roster-service/add-roster-service.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [AppComponent, AddRosterServiceComponent],
  imports: 
  [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
      RouterModule.forRoot([
        {path: 'AddService', component:AddRosterServiceComponent},
      ]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule {}
