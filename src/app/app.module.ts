import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { APP_CONFIG } from './shared/injection-tokens';
import { config  } from './shared/config';
import { HttpErrorInterceptor } from './shared/http-error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: config},
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
