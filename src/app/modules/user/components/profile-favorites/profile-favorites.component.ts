import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { GlobalAuthService } from '../../../../services/global-auth.service';
import { Favorites}  from '../../../../interfaces/Favorites';

@Component({
  selector: 'app-profile-favorites',
  templateUrl: './profile-favorites.component.html',
  styleUrls: ['./profile-favorites.component.css']
})
export class ProfileFavoritesComponent implements OnInit {
  favorites: Favorites;
  constructor(
      private userService: UserService,
      private globalAuth: GlobalAuthService,
  ) { }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.userService.getFavorites(this.globalAuth.userId).subscribe((favorites: Favorites) => {
      if (favorites) {
        console.log(favorites);
        this.favorites = favorites;
      }
    });
  }

}
