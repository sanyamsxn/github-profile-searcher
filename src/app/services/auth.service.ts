import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authS : AngularFireAuth) { }

  SignUp(email:string,password:string) {
    return this.authS.createUserWithEmailAndPassword(email,password)        // this returns an observable we can add subscribe to it
  }
  SignIn(email:string,password:string) {
    return this.authS.signInWithEmailAndPassword(email,password)
  }

  getUser(){
    return this.authS.authState
  }

  signOut(){
    return this.authS.signOut()
  }
}


//firebase work is done