import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  { path: '', component:UserlistComponent},
  { path: 'add', component:AdduserComponent},
  { path: 'view/:id', component:ViewuserComponent},
  { path: 'edit/:id', component:EdituserComponent},
  { path: 'delete/:id', component:DeleteuserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
