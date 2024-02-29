import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const email = this.email;
    const password = this.password;

    this.http.get<any>(`http://localhost/api/get.php?email=${email}&password=${password}`).subscribe(
      (response) => {

        const USERDATA = response[0];
        const EMAIL = USERDATA.email;
        const PASSWORD = USERDATA.password;
        console.log(USERDATA);

        // Manejar la respuesta del servidor
        console.log(response);
        if (PASSWORD == this.password) {
          // Credenciales válidas, redirigir al usuario al "home"
          this.router.navigate(['/home']);
        } else {
          // Credenciales inválidas, mostrar un mensaje de error o tomar otra acción apropiada
          console.error(response.message);
          console.log("messi");
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
