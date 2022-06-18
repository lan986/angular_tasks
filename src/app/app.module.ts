import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CounterComponent } from './counter/counter.component';
import { PipeTestPipe } from './pipe-test.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CounterComponent,
    PipeTestPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
