import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) {}

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
        this.router.navigate(['/login']);
      }, (error) => {
        console.error('Error al registrar', error);
      });
  }

  login() {
    this.router.navigate(['/login']);
  }
}
