import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RouterModule } from '@angular/router';
import { NotificationItemComponent } from './components/notification-item/notification-item.component'
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
 	NavbarComponent,
	NotificationsListComponent,
	NotificationItemComponent,
  ],

  imports: [
    CommonModule,
    MatToolbarModule,
    OverlayPanelModule,
    RouterModule,
    
  ],

  exports: [
  	NavbarComponent,
  ]

})
export class NavbarModule { }
