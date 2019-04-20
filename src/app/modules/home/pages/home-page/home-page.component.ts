import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {zip} from 'rxjs';
import { MessageService } from 'primeng/api';
import { Challenge } from "../../../../interfaces/Challenge";
import { HomePageData } from "../../../../interfaces/HomePageData";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  homePageData: HomePageData;
  challenges: Challenge[] = [];
  
  constructor(
    private homeService: HomeService,
    private messageService: MessageService
  ) { }
   
  ngOnInit() {
    zip(
      this.homeService.getHomePage(),
      this.homeService.getActiveChallenges()
    )
      .subscribe(([homePageData, { challenges }]: [HomePageData, Challenge[]]) => {
        this.homePageData = homePageData;
        this.challenges = challenges;
      }, (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Challenges load error',
          detail: err.error.message,
        });
      });
  }
}
