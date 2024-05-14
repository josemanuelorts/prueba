import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
})
export class ExitPage {
  constructor(private alertController: AlertController, private router: Router) { }

  async confirmExit() {
    const alert = await this.alertController.create({
      header: 'Exit',
      message: 'You have chosen to exit the app.',
      buttons: ['OK']
    });

    await alert.present();
  }

  cancelExit() {
    this.router.navigate(['/tabs/wiki']);
  }
}
