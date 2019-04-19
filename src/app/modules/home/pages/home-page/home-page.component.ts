import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {zip} from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  homePageData;
  challenges;
  constructor(
    private homeService: HomeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    zip(
      this.homeService.getHomePage(),
      this.homeService.getActiveChallenges()
    )
      .subscribe(([homePageData, { challenges }]: any) => {
        this.homePageData = homePageData;
        this.challenges = challenges;
        console.log(homePageData);
        console.log(challenges);
      }, (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Challenges load error',
          detail: err.error.message,
        });
      });
  }

  
}
