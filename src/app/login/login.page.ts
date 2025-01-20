import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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
    private toastController: ToastController,
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  login() {
  if (this.email === 'herrerabeto501gmail.com' && this.password === 'beto1234') {
    // Autenticación exitosa, navega a la pantalla de inicio
    this.navController.navigateRoot('/inicio');
  } else {
    // Autenticación fallida, muestra un mensaje de error
    alert('Credenciales incorrectas');
    
  }   
}

  async presentToast(position: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas!',
      duration: 1500,
      color: 'danger',
      position: position
    });
    await toast.present();
  }

}