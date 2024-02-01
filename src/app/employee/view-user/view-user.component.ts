import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit {

  constructor(private us:UserService){}

  user:User[];
   @Output() editdata:EventEmitter<User>=new EventEmitter<User>();

  
  ngOnInit(): void {
    this.us.displayUser().subscribe((data:User[])=>
    {
      this.user=data;
      console.log(this.user);
      
    });
    }

    onEditUser(user:User)
{
    this.editdata.emit(user);
    
}

OnDelete(id:number)
{
this.us.deleteEmp(id).subscribe();
window.location.reload();
}
  }


