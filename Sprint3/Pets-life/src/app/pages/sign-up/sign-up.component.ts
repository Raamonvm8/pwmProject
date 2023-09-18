import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/File/file.model';
import { AppUser } from 'src/app/models/User/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  user: AppUser = {apellidos:"", correo: "", password:"", id:"", isAdmin: false, nombre: "",  foto: ""};
  selectedFiles?: FileList;
  pass = "";
  currentFileUpload?: FileUpload;


  constructor(private auth: AuthService, private firestore: FirestoreService , private userService: UserService, private router: Router){
  }
  async signUp(){
    console.log('datos', this.user)
    
    await this.createUser2(this.user, this.pass, undefined);

    this.router.navigate(['login'])
    
  }
  async createUser2(user2: AppUser, userPassword: string, fileUpload: FileUpload | undefined) {
    const userCredentials = await this.auth.createUser(user2.correo, userPassword)
    if (userCredentials.user?.uid) {
      user2.id = userCredentials.user.uid;
    } else {
      console.error('UID de usuario no disponible.');
    }
    console.log("user actualizado con datos de auth: ",user2)
    await this.firestore.createDocWithId(`users`, {
      email: user2.correo,
      id: user2.id,
      is_admin: user2.isAdmin,
      photo_url: "",
      username: user2.nombre,
      lastname: user2.apellidos,
    }, user2.id)

    this.auth.logOut();
  }

}

