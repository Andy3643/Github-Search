import { Injectable } from '@angular/core';
import { Userinfo } from '../userinfo';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  private username: string;
  private clientId: 'Iv1.e706d4a58d05c638';
  private clientSecret: '63e5962d7b7135b86560f341d7d22422d532f9cb';
  Userinfo: any;

  constructor(private http: HttpClient) {
    this.username = 'andy3643';
  }
  getProfileInfo(): Observable<Userinfo[]> {
    return this.http
      .get<Userinfo[]>(
        'https://api.github.com/users/' +
          this.username +
          '?client_id=' +
          this.clientId +
          '&client_secret= ' +
          this.clientSecret
      )
      .pipe(map((res) => res));
  }
  getProfileRepos(): Observable<Repository[]> {
    return this.http
      .get<Repository[]>(
        'https://api.github.com/users/' +
          this.username +
          '/repos?client_id=' +
          this.clientId +
          '&client_secret= ' +
          this.clientSecret
      )
      .pipe(map((res) => res));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
