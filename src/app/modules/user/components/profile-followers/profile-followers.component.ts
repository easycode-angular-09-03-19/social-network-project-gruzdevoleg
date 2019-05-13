import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { GlobalAuthService } from '../../../../services/global-auth.service';
import { FollowingsUsersList } from '../../../../interfaces/FollowingsUsersList';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {
  followers: FollowingsUsersList;

  constructor(
      private userService: UserService,
      private globalAuth: GlobalAuthService,
  ) { }

  ngOnInit() {
    this.getFollowers();
  }

  getFollowers() {
    this.userService.getFollowers(this.globalAuth.userId).subscribe((followers: FollowingsUsersList) => {
      if (followers) {
        this.followers = followers;
      }
    });
  }

}
