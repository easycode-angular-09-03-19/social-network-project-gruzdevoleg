import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { FollowingUser } from '../../../../interfaces/FollowingUser';

@Component({
  selector: 'app-followinguser-preview',
  templateUrl: './followinguser-preview.component.html',
  styleUrls: ['./followinguser-preview.component.css']
})
export class FollowinguserPreviewComponent implements OnInit {
  @Input() user: FollowingUser;
  @Output('delFollowUser') delFollowUser = new EventEmitter();
  constructor(
      private userService: UserService,
  ) { }

  ngOnInit() {
  }

  onClickHandler(e: Event): void {
    if (this.user._id) {
      this.userService.deleteFollowingUser(this.user._id).subscribe((res) => {
        if (res) {
          this.delFollowUser.emit();
        }
      });
    }
  }

}
