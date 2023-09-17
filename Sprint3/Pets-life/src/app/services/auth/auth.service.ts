import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';


import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  User
} from "@angular/fire/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from '../firestore/firestore.service'; 
import { BehaviorSubject, Observable } from 'rxjs';
import { AppUser } from 'src/app/models/User/user/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUser: AppUser | undefined;

  constructor(private auth: AngularFireAuth) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = {
          id: user.uid,
          correo: user.email || '',
          apellidos: '', 
          isAdmin: false, 
          nombre: '', 
          foto: '', 
        };
        this.userLogged.next(true); 
      } else {
        this.currentUser = undefined;
        this.userLogged.next(false);
      }
    });
  }


  get isLoggedIn() {
    return this.userLogged.asObservable(); 
  }
  /*async createUser(email: string, contra: string) {
    return this.auth.createUserWithEmailAndPassword(email, contra)
  }*/

  async loginUser(userEmail:string, userPassword:string) {
    return await this.auth.signInWithEmailAndPassword(userEmail, userPassword);
  }

  logOut() {
    return this.auth.signOut();
   
  }
  
}
