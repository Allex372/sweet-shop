import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { LoginationComponent } from './components/logination/logination/logination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    routingComponents,
    LoginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
