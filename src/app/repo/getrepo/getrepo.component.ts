import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/github-info.service';

@Component({
  selector: 'app-getrepo',
  templateUrl: './getrepo.component.html',
  styleUrls: ['./getrepo.component.css']
})
export class GetrepoComponent implements OnInit {

  @ViewChild('form')
  searchRepoForm!: NgForm;
  repositories: any;
  searchText!: string;

  repositoryUserService: any;
  constructor(private reposervice:HttpService) { }
  ngOnInit(): void {
  }
  getRepos(){
    this.searchText =this.searchRepoForm.value.search;
    this.reposervice.getUserRepos(this.searchText).then(
      (response) =>{
        this.repositories=this.reposervice.getUserRepositories;
        //this.displayRepository=true
      },
      (error) =>{
        //this.displayErrorMessage=true;
        console.log(error);
      }
    );
  }


  

}
