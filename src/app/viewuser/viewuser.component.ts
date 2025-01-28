import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent {

  usrDetails!: User
  userId: Number

  constructor(private userService: UserserviceService,
    private router: ActivatedRoute
  ){

    this.userId = parseInt(this.router.snapshot.paramMap.get("id") || '')

    this.userService.getUserById(this.userId).subscribe((data: User) =>{
      this.usrDetails = data
    })
  }

}
