import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { AppComponent } from './app.component';
import { MathjaxModule } from 'mathjax-lib';
//
import { MathjaxModule as MathjaxLiveModule } from 'mathjax-angular';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    environment.production
      ? MathjaxLiveModule.forRoot()
      : MathjaxModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
