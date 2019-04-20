import { Injectable } from '@angular/core';
import { environment } from "@env/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class NavbarService {
	private apiUrl: string = environment.apiUrl;
	
  	constructor(
	  	private http: HttpClient,

	  	) { }

	getNotifications(): Observable<string[]> {
		const headers = new HttpHeaders({"x-access-token": localStorage.getItem('sn_app_token')});
		console.log(localStorage.getItem('sn_app_token'));
		return this.http.get<string[]>(`${this.apiUrl}/public/users/notification`, { headers });
	}
}


