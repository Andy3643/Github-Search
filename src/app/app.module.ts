import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { GithubUsersComponent } from './components/github-users/github-users.component';
//import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { SearchuserComponent } from './searchuser/searchuser/searchuser.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { GetrepoComponent } from './repo/getrepo/getrepo.component';
@NgModule({
  declarations: [
    AppComponent,
    //GithubUsersComponent,
    
    SearchuserComponent,
    NavbarComponent,
    GetrepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
