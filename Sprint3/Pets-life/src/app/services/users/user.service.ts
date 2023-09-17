import { Injectable } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import { AppUser } from 'src/app/models/User/user/user.model';
import { FileUpload } from 'src/app/models/File/file.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collectionDoc = "users"

  constructor(private authService: AuthService) {
  }
  
  /*async createUser(user: AppUser, userPassword: string, fileUpload: FileUpload | undefined) {
    
  }

  storeUserImage(file: File, userId: string) {
  
  }*/

  logUser(userEmail: string, userPassword: string) {
    return this.authService.loginUser(userEmail, userPassword);
  }
}
