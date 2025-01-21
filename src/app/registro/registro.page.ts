import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  // onRegister() {
  //   if (!this.name || !this.email || !this.password || !this.confirmPassword) {
  //     console.log('Por favor, complete todos los campos.');
  //     return;
  //   }

  //   if (this.password !== this.confirmPassword) {
  //     console.log('Las contraseñas no coinciden.');
  //     return;
  //   }
  //   console.log('Registro exitoso:', { name: this.name, email: this.email });
  // }

  register(form: NgForm) {
    console.log(form.valid);
    if (form.valid) {
      this.navController.navigateRoot('/login');
    }
  }

}
