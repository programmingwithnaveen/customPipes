import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { customUpperCase, customLowerCase,SummaryPipe} from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    customUpperCase,
    customLowerCase,
    SummaryPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
