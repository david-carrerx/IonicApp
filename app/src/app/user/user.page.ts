import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { InteractionService } from '../services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private auth: AuthService, private interaction: InteractionService, private router: Router) { }

  ngOnInit() {
  }

  async logout(){
    await this.interaction.presentLoading('Closing session...');
    this.auth.logout();
    this.router.navigate(['/login']);
    this.interaction.closeLoading();
  }

}
