import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent implements OnInit {

  editUserForm: FormGroup

  userData!: User

  constructor(private userService: UserserviceService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: Router
  ){

    this.editUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required,, Validators.maxLength(20) ]],
      lastName: ['', [Validators.required ]],
      email: ['', [Validators.required, Validators.email ]],
      department: ['', [Validators.required, Validators.maxLength(20) ]]

    })

  }


  ngOnInit(){
    const id = parseInt(this.router.snapshot.paramMap.get('id') || '')
    if (id !== 0){
      this.userService.getUserById(id).subscribe(data =>{
        this.userData = data;
        this.editUserForm.patchValue(this.userData)
      })
    }
  }

  onSubmit(){
    if (this.editUserForm.valid){
      const updateUserData: User = this.editUserForm.value;
      console.log(updateUserData)
      this.userService.editUser(updateUserData).subscribe(() =>{
      alert("User  details updated")
      
      })

    }
  }

}
