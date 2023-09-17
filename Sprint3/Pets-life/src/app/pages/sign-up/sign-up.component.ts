import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/File/file.model';
import { AppUser } from 'src/app/models/User/user/user.model';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  user: AppUser = {id:"",nombre: "", apellidos:"", correo: "", isAdmin: false, foto: ""};
  selectedFiles?: FileList;
  pass = "";
  currentFileUpload?: FileUpload;


  constructor(private auth: AngularFireAuth, private userService: UserService, private router: Router){
  }
  /*onFileSelected(event: any) {
    this.user.foto = event.target.files[0];
  }

  async signUp(){
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0)
      this.selectedFiles = undefined
      
      console.log("hay un fichero")
      await this.userService.createUser(this.user, this.pass, this.currentFileUpload)
    }else{
      console.log("NO hay un fichero")
      await this.userService.createUser(this.user, this.pass, undefined)
    }

    this.router.navigate(['login'])
  
  }*/

}

