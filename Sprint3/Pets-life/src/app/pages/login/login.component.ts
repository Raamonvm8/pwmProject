import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Email: string = '';
  Password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {
  }
  login() {
    //this.authService.login(this.Name, this.Password)
    this.authService.loginUser(this.Email,this.Password)
      .then(res => {
        console.log("login: ", res)
        this.router.navigate(["/init-page"])
      })
      .catch(error =>{
        console.log(error)
      })
  }

}
