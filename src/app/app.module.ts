import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { FactureComponent } from './facture/facture.component';
import { ParametreComponent } from './parametre/parametre.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FactureComponent,
    ParametreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
