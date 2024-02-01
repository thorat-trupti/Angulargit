import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Crud';
  editUser:User;

  patchEditData(u:User)
  {
    this.editUser=u;
  }
}
