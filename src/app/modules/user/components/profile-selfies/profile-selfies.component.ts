import { Component, OnInit } from '@angular/core';
import { GlobalAuthService } from '../../../../services/global-auth.service';
import { UserService } from '../../../../common/services/user.service';
import { Images } from '../../../../interfaces/Images';
@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
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
}
