import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService, LogLevel, LogLevelToken } from 'src/lib/logger/logger.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoggerService,
    {provide :LogLevelToken , useValue:LogLevel.Info} //Configure our Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
