import { Injectable } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import { AppUser } from 'src/app/models/User/user/user.model';
import { FileUpload } from 'src/app/models/File/file.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
//import { FirestoreService } from '../firestore/firestore.service';





@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collectionDoc = "users"

  constructor(private authService: AuthService) {
  }
  
  async createUser(user: AppUser, userPassword: string) {
    //return this.firestore.createDoc('firestorageUsers', user);
  }

  storeUserImage(file: File, userId: string) {
  
  }

  logUser(userEmail: string, userPassword: string) {
    return this.authService.loginUser(userEmail, userPassword);
  }
}
