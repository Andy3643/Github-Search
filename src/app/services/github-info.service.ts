import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiFeedback } from "../interfaces/api-feedback";
import { Repositories } from '../interfaces/repositories';
import { UserModel } from '../interfaces/user-model';
// import { ACCESS_KEY } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getUserDetails: any = UserModel;
  getUserRepositories: any = Repositories;
  constructor(private http:HttpClient) {
    this.getUserDetails = new UserModel('','','','',0,0,0,);
    this.getUserRepositories =new Repositories('','','',new Date());
   }
  //  user details
  getUserDataApi(gitUserName:string) {
    interface ApiUserResponse {
      login: string,
      avatar_url: string,
      html_url: string,
      name: string,
      bio: string,
      public_repos: number,
      followers: number,
      following: number,
      created_at: Date,
      location: string,
    }
    let userPromise = new Promise<void>((resolve, reject) =>
    this.http.get<ApiUserResponse>(environment.apiUrl +'/' +gitUserName  +'?access_token'+environment.apiKey)
        .toPromise().then(
          (response) => {
            this.getUserDetails = response;
            resolve();
            console.log('Search Data',response);
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        )
    );
    return userPromise;
  }
  getUserRepos(gitUserName:string) {
    interface ApiRepositoryResponse {
      login: string,
      avatar_url: string,
      html_url: string,
      name: string,
      bio: string,
      public_repos: number,
      followers: number,
      following: number,
      created_at: Date,
      location: string,
    }
    let repositoryPromise = new Promise<void>((resolve, reject) =>
    this.http.get<ApiRepositoryResponse>(environment.apiUrl +'/' +gitUserName +'/repos?sort=created&direction=asc?access_token=' +environment.apiKey)
        .toPromise().then(
          (response) => {
            this.getUserRepositories = response;
            resolve();
            console.log('Search repo',response);
          },
          (error) => {
            reject(error);
            console.log( 'errors',error);
          }
        )
    );
    return repositoryPromise;
  }
}

//   constructor(private _http:HttpClient) { }

//   request(UserModel:string, location:string,arg:string="") :Observable<any>{
//     return this._http.get<ApiFeedback>(`https://api.github.com/${location}/${UserModel}${arg}`, {
//     })
//   }
//   search(search:string="") :Observable<any>{
//     return this._http.get<ApiFeedback>(`https://api.github.com/users/${search}/repos`, )
//   }
// }
