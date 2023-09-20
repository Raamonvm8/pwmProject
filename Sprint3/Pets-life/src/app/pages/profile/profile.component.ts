import { Component, OnInit } from '@angular/core';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppUser } from 'src/app/models/User/user/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  faDog=faDog;
  faCalendar=faCalendar;
  user: AppUser = {apellidos:"", correo: "", password:"", id:"", isAdmin: false, nombre: "",  foto: ""};
  isLogged=false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    // Obtener los datos del usuario desde el servicio de autenticación

    this.auth.isLoggedIn.subscribe((loggedIn) => {
      this.isLogged=loggedIn;
      if(this.isLogged){
        
        const currentUser= this.auth.currentUser;
        if (currentUser) {
          this.user.id = currentUser.id || '';
          this.user.correo = currentUser.correo || '';
          this.user.password = currentUser.password || '';
          this.user.apellidos = currentUser.apellidos || '';
          this.user.isAdmin = currentUser.isAdmin || false;
          this.user.nombre = currentUser.nombre || '';
          this.user.foto = currentUser.foto || '';
          
        }
      }
      

    });
  }

}
