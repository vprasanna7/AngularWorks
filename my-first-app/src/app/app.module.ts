import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import {TestComponent} from './test/test.component';
import { ServersComponent } from './servers/servers.component';
import { SucessComponent } from './sucess/sucess.component';
import {FailComponent} from './fail/fail.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TestComponent,
    ServersComponent,
    SucessComponent,
    FailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
