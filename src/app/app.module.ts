import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './modules/navbar/navbar.module'
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MatProgressBarModule } from '@angular/material/progress-bar';




@NgModule({
  // здесь регистрируем компоненты, которые будут в данном модуле
  declarations: [
    AppComponent,
 ],

  // здесь регистрируем модули (внешние) и внутренний роутинг модуль
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    NavbarModule,
    MatProgressBarModule,
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
