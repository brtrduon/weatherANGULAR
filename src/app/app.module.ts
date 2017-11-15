import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskService } from './task.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule { }
