import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { GlobalAuthService } from '../../../../services/global-auth.service';
import { FollowingsUsersList } from '../../../../interfaces/FollowingsUsersList';

@Component({
  selector: 'app-profile-followings',
  templateUrl: './profile-followings.component.html',
  styleUrls: ['./profile-followings.component.css']
})
export class ProfileFollowingsComponent implements OnInit {
  followings: FollowingsUsersList;
  constructor(
      private userService: UserService,
      private globalAuth: GlobalAuthService,
  ) { }

  ngOnInit() {
    this.getFollowings();
  }

  getFollowings() {
    this.userService.getFollowings(this.globalAuth.userId).subscribe((followings: FollowingsUsersList) => {
      if (followings) {
        this.followings = followings;
      }
    });
  }

}
