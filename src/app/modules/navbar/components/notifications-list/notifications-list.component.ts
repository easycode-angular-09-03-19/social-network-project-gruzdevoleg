import { Component, OnInit } from '@angular/core';
import { Notification } from '../../../../interfaces/Notification';
import { NavbarService } from "../../services/navbar.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})

export class NotificationsListComponent implements OnInit {

	notifications_list: Notification[];
	
	constructor(
		private navbarService: NavbarService,
		private messageService: MessageService
		) { }

	ngOnInit() {
		this.navbarService.getNotifications().subscribe((data: Notification[]) => {
		   this.notifications_list = data;
        }, (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Notifications load error',
          detail: err.error.message,
        });
      });
	}
}
