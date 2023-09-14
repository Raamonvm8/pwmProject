import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-empty-fields-popover',
  template: `
    <ion-item (click)="closePopover()" lines="none" class="custom-item" color="danger">
      <ion-icon name="alert-circle" slot="start"></ion-icon>
      <ion-label>Please complete all fields</ion-label>
    </ion-item>
  `,
  styleUrls: ['./empty-fields-popover.component.scss'],
})

export class EmptyFieldsPopoverComponent {
  constructor(private popoverController: PopoverController) {}

  closePopover() {
    this.popoverController.dismiss();
  }
}
