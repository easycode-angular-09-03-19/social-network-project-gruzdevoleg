import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { GlobalAuthService } from '../../../../services/global-auth.service';
import { User } from '../../../../interfaces/User';
import { FollowerUser } from '../../../../interfaces/FollowerUser';

@Component({
  selector: 'app-followeruser-preview',
  templateUrl: './followeruser-preview.component.html',
  styleUrls: ['./followeruser-preview.component.css']
})
export class FolloweruserPreviewComponent implements OnInit {
  @Input() followerUser: FollowerUser;
  @Output('addDelFollowUser') addDelFollowUser = new EventEmitter();
  buttonInnerText;
  constructor(
      private userService: UserService,
      private globalAuth: GlobalAuthService
  ) { }

  ngOnInit() {
    this.setButtonInnerText();
  }

  onClickHandler(e: Event): void {
   if (this.followerUser._id) {

     this.userService.addDeleteNewFollowingUser(this.followerUser._id).subscribe((res) => {
       if (res) {

         this.setButtonInnerText();
         //this.addDelFollowUser.emit();
       }
     });
   }
  }

  setButtonInnerText() {
    this.userService.getUserById(this.globalAuth.userId).subscribe((user: User) => {

      if ( user.followings.some((myfollowingUserId) => {
        return myfollowingUserId === this.followerUser._id;
       }) ) {
        this.buttonInnerText = 'following';
      } else {
        this.buttonInnerText = 'follow';
      }
    });
  }






}
