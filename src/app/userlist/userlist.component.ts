import {AfterViewInit, Component, viewChild, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { User } from '../models/user';

import { UserserviceService } from '../userservice.service';
/* const TABLE_DATA: User[] = [
 {
    "id": 1,
    "firstName": "Leanne Graham",
    "lastName": "Bret",
    "email": "Sincere@april.biz",
    "department":"Admin"
  },
  {
    "id": 2,
    "firstName": "Ervin Howell",
    "lastName": "Antonette",
    "email": "Shanna@melissa.tv",
    "department":"Sales"
  },
  {
    "id": 3,
    "firstName": "Clementine Bauch",
    "lastName": "Samantha",
    "email": "Nathan@yesenia.net",
    "department":"Admin"
  },
  {
    "id": 1,
    "firstName": "Leanne Graham",
    "lastName": "Bret",
    "email": "Sincere@april.biz",
    "department":"Admin"
  },
  {
    "id": 2,
    "firstName": "Ervin Howell",
    "lastName": "Antonette",
    "email": "Shanna@melissa.tv",
    "department":"Sales"
  },
  {
    "id": 3,
    "firstName": "Clementine Bauch",
    "lastName": "Samantha",
    "email": "Nathan@yesenia.net",
    "department":"Admin"
  },
  {
    "id": 1,
    "firstName": "Leanne Graham",
    "lastName": "Bret",
    "email": "Sincere@april.biz",
    "department":"Admin"
  },
  {
    "id": 2,
    "firstName": "Ervin Howell",
    "lastName": "Antonette",
    "email": "Shanna@melissa.tv",
    "department":"Sales"
  },
  {
    "id": 3,
    "firstName": "Clementine Bauch",
    "lastName": "Samantha",
    "email": "Nathan@yesenia.net",
    "department":"Admin"
  },
  {
    "id": 1,
    "firstName": "Leanne Graham",
    "lastName": "Bret",
    "email": "Sincere@april.biz",
    "department":"Admin"
  },
  {
    "id": 2,
    "firstName": "Ervin Howell",
    "lastName": "Antonette",
    "email": "Shanna@melissa.tv",
    "department":"Sales"
  },
  {
    "id": 3,
    "firstName": "Clementine Bauch",
    "lastName": "Samantha",
    "email": "Nathan@yesenia.net",
    "department":"Admin"
  }
]*/



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  user: User[] = []
  constructor(private userService: UserserviceService,
    
  ){

    this.userService.getUser().subscribe( (data: User[]) =>{
      this.user  = data
      this.dataSource = new MatTableDataSource(this.user);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  dataSource = new MatTableDataSource(this.user);

  //dataSource = new MatTableDataSource(TABLE_DATA);

  displayedColumns: string[] = ['id', 'firstName','lastName', 'email', 'department', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
   
  }

}