import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined; 
  phone: string | undefined;
  role: string | undefined;

  constructor(private http: HttpClient) {}

  register() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      role: this.role
    };

    this.http.post('http://localhost/api/post.php', userData)
      .subscribe((response) => {
        console.log('Registro exitoso', response);
        // Aquí podrías manejar la respuesta del backend, como mostrar un mensaje de éxito al usuario
      }, (error) => {
        console.error('Error al registrar', error);
        // Aquí podrías manejar el error, como mostrar un mensaje de error al usuario
      });
  }
}
