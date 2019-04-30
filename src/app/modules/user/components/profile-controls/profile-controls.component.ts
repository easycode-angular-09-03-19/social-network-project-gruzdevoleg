import { Component, OnInit, Input } from '@angular/core';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';
import { User } from '../../../../interfaces/User'

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})


export class ProfileControlsComponent implements OnInit {
	@Input() user: User;
  
  constructor(
  	private currentUser: CurrentUserStoreService,
  	) { }

  ngOnInit() {
  	

  }

}
