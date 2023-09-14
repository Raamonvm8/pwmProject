import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage  {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  photoUrl: string = '';

  constructor() {}


  register() {
    // Aquí puedes agregar la lógica de registro, como enviar los datos al servidor o almacenarlos localmente.
    // Por ahora, simplemente imprimiremos los valores en la consola.
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Photo URL:', this.photoUrl);
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Convierte el archivo a una URL de objeto
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}
