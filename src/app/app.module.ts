import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { NotificationsListComponent } from './common/components/notifications-list/notifications-list.component';

@NgModule({
  //здесь регистрируем компоненты, которые будут в данном модуле
  declarations: [
    AppComponent,
    NavbarComponent,
    NotificationsListComponent,
    
       
  ],

  //здесь регистрируем модули (внешние) и внутренний роутинг модуль
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ToastModule,
    OverlayPanelModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
