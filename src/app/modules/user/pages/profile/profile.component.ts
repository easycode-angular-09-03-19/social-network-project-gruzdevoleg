import { Component, OnInit } from '@angular/core';
import { GlobalAuthService } from '../../../../services/global-auth.service';
import { UserService } from '../../../../common/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../interfaces/User';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  authUserId;
  id;

  constructor(
  	private globalAuth: GlobalAuthService,
  	private userService: UserService,
    private route: ActivatedRoute,
    private currentUserStoreService: CurrentUserStoreService
  ) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params.id;
    this.authUserId = this.globalAuth.userId;
    this.currentUserStoreService.userWatcher.subscribe((user: User) => {
    this.user = user;
    })
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.globalAuth.userId).subscribe((user: User) => {
      if (user._id) {
        this.user = user;

      }
    });
  }

  uploadCover(cover) {
    this.userService.uploadCover(cover).subscribe((res) => {
      if (!res.error) {
        this.getUser();
      }
    });
  }
}
