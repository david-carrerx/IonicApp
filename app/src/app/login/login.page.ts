import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string | undefined;
  password: string | undefined;
  name: string | undefined;

  constructor(private http: HttpClient, private router: Router, private auth: AuthService, private interaction: InteractionService) {
    
  }

  ngOnInit() {
  }

  credentials = {
    email: '',
    password: '',
    name: ''
  }

  async loginFireBase(){
    await this.interaction.presentLoading('Loading...');
    console.log('credentials: -> ', this.credentials);
    console.log('credenssstials: -> ', this.auth.stateUser());

    const res = await this.auth.login(this.credentials.email, this.credentials.password).catch(error =>{
      console.log('error');
      this.interaction.closeLoading();
      this.interaction.presentToast('User or password incorrect');
    })
    if (res){
      console.log(res);
      this.interaction.presentToast('Authentication successful');
      this.router.navigate(['/home']);
      this.interaction.closeLoading();

    }
  }

  login() {
    const email = this.email;
    const password = this.password;
  
    this.http.get<any>(`http://localhost/api/get.php?email=${email}&password=${password}`).subscribe(
      (response) => {
        const USERDATA = response[0];
        const PASSWORD_FROM_SERVER = USERDATA.password;
        
        if (PASSWORD_FROM_SERVER === password) { // Comparar con la contraseña ingresada por el usuario
          // Credenciales válidas, redirigir al usuario al "home"
          this.router.navigate(['/home']);
        } else {
          // Credenciales inválidas, mostrar un mensaje de error o tomar otra acción apropiada
          console.error("Credenciales inválidas");
        }
      },
      (error) => {
        // Manejar errores
        console.error(error);
      }
    );
  }  

  register(){
    this.router.navigate(['/register']);
  }
}
