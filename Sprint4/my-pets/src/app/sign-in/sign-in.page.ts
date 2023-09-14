import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { EmptyFieldsPopoverComponent } from '../empty-fields-popover/empty-fields-popover.component';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Importa clases necesarias

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  email: string = '';
  password: string = '';
  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]);

  constructor(private popoverController: PopoverController) {}

  async signIn() {
    if (this.emailFormControl.invalid || this.password.trim() === '') {
      const popover = await this.popoverController.create({
        component: EmptyFieldsPopoverComponent,
        translucent: true,
      });
      return await popover.present();
    }

    // Continuar con la lógica de inicio de sesión si los campos están completos
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
