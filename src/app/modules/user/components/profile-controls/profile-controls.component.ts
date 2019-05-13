import { Component, OnInit, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';
import { User } from '../../../../interfaces/User'
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})


export class ProfileControlsComponent implements OnInit {
@Input() user: User;
  activeTab: Observable<string>;
  tabList = [
    {
      tab: 'selfies',
      text: 'SELFIES',
      prop: 'my_images',

    },
    {
      tab: 'favorites',
      text: 'FAVORITES',
      prop: 'favourites',

    },
    {
      tab: 'followers',
      text: 'FOLLOWERS',
      prop: 'followers',

    },
    {
      tab: 'followings',
      text: 'FOLLOWINGS',
      prop: 'followings',

    },
  ];
  constructor(
  	private route: ActivatedRoute,
    private router: Router,

  	) { }


  ngOnInit() {
    this.activeTab = this.route.queryParams.pipe(map((params) => params.tab));
  	this.route.queryParams.subscribe((params) => {
      const isValidTab = this.tabList.some((item) => item.tab === params.tab);
      if (!params.tab || !isValidTab) {
        this.router.navigate([], { 
          relativeTo: this.route,
          queryParams: { tab: 'selfies'}
        });
      }
    });
  }




}
