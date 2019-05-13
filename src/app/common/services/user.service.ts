import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { GlobalAuthService } from '../../services/global-auth.service';
import { CurrentUserStoreService } from './current-user-store.service';
import { map } from 'rxjs/operators';
import { User } from '../../interfaces/User';
import { Images } from '../../interfaces/Images';
import { FollowingsUsersList } from '../../interfaces/FollowingsUsersList';
import { Favorites } from '../../interfaces/Favorites';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	private apiUrl: string = environment.apiUrl;

  constructor(
  	private http: HttpClient,
  	private globalAuth: GlobalAuthService,
  	private currentUser: CurrentUserStoreService,

  ) { }

  getUserById(id: string): Observable <User> {
  	return this.http.get<User>(`${this.apiUrl}/public/users/get-info/${id}`).pipe(
  		map((user: User) => {
  			if (user._id === this.globalAuth.userId) {
  				this.currentUser.info = user;
  			}
  			return user;
  		})
  	);
  }

  uploadCover(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('coverImg', file);
        const id = this.globalAuth.userId;
        return this.http.post(`${this.apiUrl}/public/users/upload-cover/${id}`, formData);
  }

   uploadPhotos(files: any[]): Observable<any> {
        const formData = new FormData();
        files.forEach((file) => formData.append('userPhotos', file));
        const id = this.globalAuth.userId;
        return this.http.post(`${this.apiUrl}/public/users/upload-photos/${id}`, formData);
   }

   getImages(id: string): Observable<Images> {
        return this.http.get<Images>(`${this.apiUrl}/public/users/my-images/${id}`);
   }

   getFavorites(id: string): Observable<Favorites> {
       return this.http.get<Favorites>(`${this.apiUrl}/public/users/my-favorites/${id}?part=1&limit=20`);
   }

   getFollowings(id: string): Observable<FollowingsUsersList> {
       return this.http.get<FollowingsUsersList>(`
       ${this.apiUrl}/public/users/my-followers-followings/${id}?part=1&limit=6&path=followers
       `);
   }

    getFollowers(id: string): Observable<FollowingsUsersList> {
        return this.http.get<FollowingsUsersList>(`
        ${this.apiUrl}/public/users/my-followers-followings/${id}?part=1&limit=6&path=followings
        `);
    }

    addDeleteNewFollowingUser(id: string): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/public/users/following/${id}`, {});
    }

    deleteFollowingUser(id: string): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/public/users/following/${id}`, {});
    }



}
