import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
 	NavbarComponent,
	NotificationsListComponent,
    ],

  imports: [
    CommonModule,
    MatToolbarModule,
    OverlayPanelModule,
    RouterModule
  ],

  exports: [
  	NavbarComponent,
  ]

})
export class NavbarModule { }
