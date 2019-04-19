import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
	private apiUrl: string = environment.apiUrl;

  constructor(
  	private http: HttpClient,
  	) { }

  getHomePage(): Observable<object> {
  	return this.http.get(`${this.apiUrl}/public/home`);
  }

  getActiveChallenges(): Observable<object[]> {
  	let params = new HttpParams();
  	params = params.append('isActive', '0');
  	params = params.append('isClosed', '1');
  	params = params.append('limit', '8');
  	const httpOptions = {
  		params
  	};
  	return this.http.get<object[]>(`${this.apiUrl}/public/challenges/list`, httpOptions);
  }
}
