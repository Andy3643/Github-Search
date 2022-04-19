import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/interfaces/user-model';
import { HttpService } from 'src/app/services/github-info.service';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  user!:UserModel;
  searchText!:string;
  DetailContainer = true;
  Error = false;
 @Input()users!:string[]
  constructor(private userservice:HttpService) { }
 @ViewChild('form')
  searchForm!: NgForm;
   ngOnInit(): void {
  }
  searchGithubUser () {
    this.searchText = this.searchForm.value.search;
    this.userservice.getUserDataApi(this.searchText).then(
      (response) => {
        this.user = this.userservice.getUserDetails;
        this.DetailContainer = true;
      },
      (error) => {
        console.log(error);
        this.Error = true;
      }
    );
  }


}
