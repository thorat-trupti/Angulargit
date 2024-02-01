import { Component, OnInit,Input ,OnChanges} from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit,OnChanges{

  constructor(private fb:FormBuilder, private us:UserService){} 

  Empform:FormGroup;

  @Input() userEdit:User;
  boolean1:boolean=false;

  ngOnInit(): void {
    this.Empform=this.fb.group(
      {
        id:[],
        Ename:[],
        Designation:[],
        Salary:[],
        Email:[]
      }
    )
  
  }

  ngOnChanges (){
    if(this.Empform!=null)
    {
      this.Empform.patchValue(
        {
          id:this.userEdit.id,
          Ename:this.userEdit.Ename,
          Designation:this.userEdit.Designation,
          Email:this.userEdit.Email,
          Salary:this.userEdit.Salary
        }
      );

      this.boolean1=true;
    }
  }

  




  onSubmit()
  {
    alert("Data Save");
    this.us.save(this.Empform.value).subscribe();
    console.log(this.Empform.value);
    window.location.reload();
    this.Empform.reset();
  }
  onUpdate()
  {
    let user=this.Empform.value;
    this.boolean1=false;
    this.us.UpdateUser(user).subscribe();
    console.log(user);
    window.location.reload();
  }

}
