import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../../../interfaces/User';
import { GlobalAuthService } from '../../../../services/global-auth.service';
import { UserService } from '../../../../common/services/user.service';

@Component({
  selector: 'app-profile-tabs-container',
  templateUrl: './profile-tabs-container.component.html',
  styleUrls: ['./profile-tabs-container.component.css']
})
export class ProfileTabsContainerComponent implements OnInit {
	activeTab: Observable<string>;
    user: User;
    authUserId;
    id;
  constructor(
      private globalAuth: GlobalAuthService,
      private userService: UserService,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  	this.activeTab = this.route.queryParams.pipe(
  		map((params) => params.tab)
  		);

      this.id = this.route.snapshot.params.id;
      this.authUserId = this.globalAuth.userId;

  	}


  }


