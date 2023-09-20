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
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUser: AppUser | undefined;

  constructor(private auth: AngularFireAuth, private firestore: FirestoreService) {
    this.auth.onAuthStateChanged((user) => {
      
      if (user) {
          this.currentUser = {
            id: user.uid,
            correo: user.email || '',
            password: '',
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
  async createUser(email: string, contra: string) {
    return this.auth.createUserWithEmailAndPassword(email, contra)
  }

  /*private async setUser(id: string, email: string) {
    this.firestore.getDocByIdSnapshot(`users/${id}`).then(docData => {
      if (docData!=undefined){
        this.currentUser = {
          id: id,
          nombre: docData!['nombre'],
          apellidos:docData!['apellidos'],
          correo: email,
          isAdmin: docData!['is_admin'],
          foto: docData!['foto']
        };
        this.userLogged.next(true)
        console.log(this.userLogged)
      }else{
        this.userLogged.next(false)
      }
    })
  }*/

  async loginUser(userEmail:string, userPassword:string) {
    return await this.auth.signInWithEmailAndPassword(userEmail, userPassword);
  }

  logOut() {
    return this.auth.signOut();
   
  }
  
}
