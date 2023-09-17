import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { User } from 'firebase/auth';
import { AppUser } from 'src/app/models/User/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/users/user.service';
import { User as FirebaseUser } from 'firebase/auth'; 
import { user } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { Router, NavigationEnd } from '@angular/router'; // Importa NavigationEnd

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  Rol = "";
  private userLogged: AppUser | undefined;
  admin: boolean = false;

  constructor(private auth: AuthService, private userService: UserService, private router: Router) {}

  ngOnInit() {
    // Suscribirse a eventos de cambio de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("Ruta cambió a: ", event.url);
        
    this.auth.isLoggedIn.subscribe((logged: boolean) => {
      this.isLogged = logged;
      console.log(logged)
      if (this.isLogged) {
        this.Rol = "usuarioLogeado";
        if(this.auth.currentUser?.isAdmin){
          this.admin=true;
        }
      } 
    });
      }
    });
  }

  logOut(){     
    this.isLogged=false;

    this.auth.logOut().then(() => {
      window.location.reload();
    }).catch((error) => {
      console.error("Error al cargar logOut", error);
    })
  }
  faPaw = faPaw;
}