import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeInnerComponent } from './components/home-inner/home-inner.component';
import { HomeService } from './services/home.service';
import { ChallengesListComponent } from '../../common/components/challenges-list/challenges-list.component';
import { ChallengeCardComponent } from '../../common/components/challenge-card/challenge-card.component';
import { EmptyListComponent } from '../../common/components/empty-list/empty-list.component';
import { LoaderModule } from '../loader/loader.module';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeInnerComponent,
    ChallengeCardComponent,
    ChallengesListComponent,
    EmptyListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoaderModule,

  ],
  providers: [HomeService]
})
export class HomeModule { }
