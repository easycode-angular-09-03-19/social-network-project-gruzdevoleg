import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})

export class NotificationsListComponent implements OnInit {
	@Input() notifications_list;

	constructor() { }

	ngOnInit() {
	}

}
