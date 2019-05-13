import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { GlobalAuthService } from '../../../../services/global-auth.service';
import { UserService } from '../../../../common/services/user.service';
import { Images } from '../../../../interfaces/Images';
@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  @Input() isCurrentUser;
  @Output('upload') upload = new EventEmitter();
  images: object;
  constructor(
  	private userService: UserService,
  	private globalAuth: GlobalAuthService,
  ) { }

  ngOnInit() {
  	this.getUserImages();
  }

  getUserImages() {
    this.userService.getImages(this.globalAuth.userId).subscribe((images: Images) => {
      if (images) {
        this.images = images.images;

       }
    });
  }

  loadPhotos(input) {
    const photos = Array.from(input.files);
    this.userService.uploadPhotos(photos).subscribe((res) => {
      if (!res.error) {
        // повторно обратиться в userService, для запроса фото
        this.userService.getImages(this.globalAuth.userId).subscribe((images: Images) => {
          if (images) {

            this.images = images.images;
          }
        });
      }
    });
  }
}
