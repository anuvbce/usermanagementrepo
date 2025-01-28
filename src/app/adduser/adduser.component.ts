import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {

constructor(private userService: UserserviceService,
  private router: Router
){

}
  newUserForm: User = {
    id: 0,
    firstName: "Anu",
    lastName: "Radha",
    email: "anu@gmail.com",
    department: "sales"

  }

  saveUser(){
    this.userService.newUser(this.newUserForm).subscribe(data =>{
      alert("User details havebeen added")
      this.router.navigate([''])

    })
    
    console.log("New User is:", this.newUserForm)
    }
    

  
}
