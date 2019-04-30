import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { GlobalAuthService } from '../../services/global-auth.service';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserStoreService {
	private apiUrl: string = environment.apiUrl;
	private currentUser = {};
	private userWatcherSource: BehaviorSubject<any> = new BehaviorSubject(this.info);
	public userWatcher = this.userWatcherSource.asObservable();

	constructor(
		private http: HttpClient,
		private globalAuth: GlobalAuthService,
	) { }
	
	public get info() {
	  		return this.currentUser;
	  	}

	public set info(user) {
		this.currentUser = {...user};
		this.userWatcherSource.next({ ...user });
	}

  	initCurrentUser() {
  		const id = this.globalAuth.userId;
  		this.http.get(`${this.apiUrl}/public/users/get-info/${id}`)
    		.subscribe((user: User) => {
  	  			if (user._id) {
  				this.info = user;
  			}
  		});
  	}
}
