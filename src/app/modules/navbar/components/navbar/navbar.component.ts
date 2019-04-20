import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarService } from "../../services/navbar.service";
import { MessageService } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isHidden = true;
  	notifications: string[] = [];

  constructor(
  	private activatedRoute: ActivatedRoute,
    private navbarService: NavbarService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.router.events.pipe(
    	filter((event) => event instanceof ActivationEnd)
    	)
    		.subscribe((event) => {
      		this.activatedRoute.firstChild.data.subscribe((value) => {
      			this.isHidden = !!value.withoutHeader;
    		 		});
      	});

    this.navbarService.getNotifications().subscribe((data: string[]) => {

        if(data) {
          this.notifications = data;
        }
      }, (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Notifications load error',
          detail: err.error.message,
        });
      });
	}
}
