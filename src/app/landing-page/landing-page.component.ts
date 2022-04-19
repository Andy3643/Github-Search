import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpService } from '../services/http.service';
import { UserModel } from '../interfaces/user-model';
import { Repositories } from '../interfaces/repositories';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class LandingPageComponent implements OnInit {

  UserModel!: UserModel;
  repository!: Repositories;
  repositories: Repositories[]=[]
  query: string="";
  constructor(private _http:HttpService) { }

  ngOnInit() {
    this.getAccount()
    this.getRepos()
  }
  getAccount(UserModel:string="andy3643"){
    this._http.request(UserModel,"users").subscribe((response)=> {
      this.UserModel = new UserModel(response.login, response.avatar_url, response.url,response.public_repos,response.followers, response.following)
    })
  }
  getRepos(){
    return this._http.request("andy3643","users","/repos").subscribe((response)=>{
      // console.log(response)
      response.forEach(repo => {
        // eliminating unncessary data
        // if("languages_url" in repo){
        //   this._http.request("repos",`/${repo.name}/languages`).subscribe((response)=>{
        //     item.languages_url=(response)
        //   })
        // }
        let item= new Repositories(repo.name, repo.description, repo.languages_url)
        this.repositories.push(item)
      });
      // console.log(this.repositories)
    })
  }
  search(){
    this.getAccount(this.query)
    this._http.search(this.query).subscribe((response)=>{
      // console.log(response)
      this.repositories=[];
      response.forEach(repo => {
        // eliminating unncessary data
        // if("languages_url" in repo){
        //   this._http.request("repos",`/${repo.name}/languages`).subscribe((response)=>{
        //     item.languages_url=(response)
        //   })
        // }
        let item= new Repositories(repo.name, repo.description, repo.languages_url)
        this.repositories.push(item)
      });
      // console.log(this.repositories)
    })
  }
}
