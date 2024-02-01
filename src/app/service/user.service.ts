import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  save(u:User)
  {
   return this.http.post("http://localhost:3000/Employee",u);
  }

  displayUser()
  {
    return this.http.get("http://localhost:3000/Employee");
  }

  UpdateUser(user:User)
  {
    return this.http.put("http://localhost:3000/Employee/" +user.id,user);
  }

  deleteEmp(id:number)
  {
    return this.http.delete("http://localhost:3000/Employee/" +id);
  }


  
}
