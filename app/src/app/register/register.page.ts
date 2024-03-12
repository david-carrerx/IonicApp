import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/models';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { InteractionService } from '../services/interaction.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  data: User = {
    uid: '',
    name: '',
    email: '',
    password: '',
    phone: 0,
    role: '',
    specialty: '',
    license: '',
    description: ''
  }
  

  //name: string | undefined;
  //email: string | undefined;
  //password: string | undefined; 
  //phone: string | undefined;
  //role: string | undefined;

  constructor(private http: HttpClient, private router: Router, private auth: AuthService, private firestore: FirestoreService, private interaction: InteractionService) {}

  async registerFireBase() {
    console.log('data ->', this.data);
    this.interaction.presentLoading('Registering');
    
    try {
      const res = await this.auth.register(this.data);
      if (res && res.user && res.user.uid) {
        this.interaction.closeLoading();
        console.log('User registered');
        const userId = res.user.uid;
        this.data.uid = userId;
        const path = 'Users';
        await this.firestore.createDoc(this.data, path, userId);
        this.interaction.presentToast('User registered correctly');
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error:', error);
      this.interaction.presentToast('User repeated');
      this.interaction.closeLoading();
    }
  }
  
  //register() {
    //const userData = {
      //name: this.name,
      //email: this.email,
      //password: this.password,
      //phone: this.phone,
      //role: this.role
    //};

    //this.http.post('http://localhost/api/post.php', userData)
      //.subscribe((response) => {
        //console.log('Registro exitoso', response);
        //this.router.navigate(['/login']);
      //}, (error) => {
        //console.error('Error al registrar', error);
      //});
  //}

  login() {
    this.router.navigate(['/login']);
  }
}
