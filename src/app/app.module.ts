import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { APP_CONFIG } from './shared/injection-tokens';
import { config  } from './shared/config';
import { HttpErrorInterceptor } from './shared/http-error.interceptor';
import { HeaderComponent } from './header/header.component';
import { SortComponent } from './sort/sort.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SortPipe } from './shared/pipe/sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    SearchBarComponent,
    HeaderComponent,
    SortComponent,
    LandingComponent,
    PageNotFoundComponent,
    PaginationComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: config},
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
