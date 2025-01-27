import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private navController: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  login() {
    if (this.email === 'herrerabeto501@gmail.com' && this.password === 'beto1234') {
      this.navController.navigateRoot('/inicio');
    } else {
      this.presentToast('top');
    }
  }

  async presentToast(position: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas!',
      duration: 1500,
      color: 'danger',
      position: position,
    });
    await toast.present();
  }
}
