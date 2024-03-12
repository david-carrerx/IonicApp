import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }

  login(email: string, password: string){
    return this.authfirebase.signInWithEmailAndPassword(email, password);
  }

  logout(){
    this.authfirebase.signOut();
  }

  register(data: User){
    return this.authfirebase.createUserWithEmailAndPassword(data.email, data.password);
  }
}
