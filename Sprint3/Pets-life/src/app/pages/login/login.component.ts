import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/users/user.service";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Email: string = '';
  Password: string = '';

  constructor(private userService: UserService, private router: Router) {
  }
  async login() {
     this.userService.logUser(this.Email,this.Password)
    .then(res => {
        console.log("login: ", res)
        this.router.navigate(["/init-page"])
      })
      .catch(error =>{
        console.log(error)
      })
  }

}
