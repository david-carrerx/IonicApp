import { Component, OnInit } from '@angular/core';
import { User } from '../modules/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {} as User;

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  async register (user:User){
    if(this.formValidation()){
      let loader = await this.loadingController.create({
        message: "Loading"
      })

      await loader.present();

      try {
        await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(data =>{
          console.log(data);

          this.navCtrl.navigateRoot("home")
        })
        
      } catch (e:any) {
        e.message = "Failed";
        let errorMessage = e.message || e.getLocalizedMessage();

        this.showToast(errorMessage);
      }

      await loader.dismiss();
    }
  }

  formValidation(){
    if(!this.user.email){
      this.showToast("Insert an email");
      return false;
    }
    if(!this.user.password){
      this.showToast("Insert a password");
      return false;
    }

    return false;
  }

  showToast(message: string){
    this.toastController.create({
      message: message,
      duration: 4000
    }).then(toastData => toastData.present());
  }

}
