import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  deleteUser
} from "@angular/fire/auth";


import { async } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }
  async loginUser(correo:string, password:string) {
    return await signInWithEmailAndPassword(this.auth, correo, password);
  }
}


