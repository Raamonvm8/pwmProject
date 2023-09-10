import { Component } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faPaw=faPaw;
  isLoggedIn: boolean = true;
  isAdmin: boolean = true;

}
