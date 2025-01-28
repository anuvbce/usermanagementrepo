import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrl: './deleteuser.component.css'
})
export class DeleteuserComponent {

  userId!: Number;

  constructor(private router: ActivatedRoute, 
    private userService: UserserviceService,
  private route: Router){
    this.userId = parseInt(this.router.snapshot.paramMap.get("id") || '')
    this.userService.deleteUser(this.userId).subscribe(data =>
{
  alert("User Details are deleted")
  this.route.navigate([''])
}

    )

  }

}
