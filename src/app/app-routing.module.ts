import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetrepoComponent } from './repo/getrepo/getrepo.component';
import { SearchuserComponent } from './searchuser/searchuser/searchuser.component';

const routes: Routes = [
  { path: 'searchuser', component: SearchuserComponent},
  { path: 'searchrepo', component: GetrepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
