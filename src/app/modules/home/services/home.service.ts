import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from 'rxjs';
import { Challenge } from "../../../interfaces/Challenge";
import { HomePageData } from "../../../interfaces/HomePageData";

@Injectable()
export class HomeService {
	private apiUrl: string = environment.apiUrl;

  constructor(
  	private http: HttpClient,
  	) { }

  getHomePage(): Observable<HomePageData> {
  	return this.http.get<HomePageData>(`${this.apiUrl}/public/home`);
  }

  getActiveChallenges(): Observable<Challenge[]> {
  	let params = new HttpParams();
  	params = params.append('isActive', '0');
  	params = params.append('isClosed', '1');
  	params = params.append('limit', '8');
  	const httpOptions = {
  		params
  	};
  	return this.http.get<Challenge[]>(`${this.apiUrl}/public/challenges/list`, httpOptions);
  }
}
