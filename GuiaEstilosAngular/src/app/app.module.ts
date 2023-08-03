import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { ScriptService } from './script.service';
import { ModulesModule } from './modules/modules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ModulesModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
