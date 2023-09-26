import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/Pet/pet.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { StorageService } from 'src/app/services/storage/storage.service';


@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit{
  constructor(private auth: AuthService, private firestore: FirestoreService, private storageService: StorageService) {}
  //userPets: Pet = {name:"", weight: "", photo:"", type:"", breed: "", userId: ""};
  userPets: Pet[] = [];
  imageUrl: string = '';


  ngOnInit() {
    const imagePath ='https://firebasestorage.googleapis.com/v0/b/myapp3-c3cca.appspot.com/o/foto_perfil.png?alt=media&token=eccf11e9-2ef4-42a6-9214-b4be0bd703d3'
    this.imageUrl = imagePath;

    this.auth.isLoggedIn.subscribe(async (loggedIn) => {
      if (loggedIn) {
        const currentUser = this.auth.currentUser;
        if (currentUser) {
          const pet = await this.firestore.getDocsByFieldUserId(currentUser.id,"pets");
          this.userPets = pet.map((petDoc: any) => {
            return {
              name: petDoc.name || "",
              weight: petDoc.weight || "",
              photo: petDoc.photo || "",
              type: petDoc.type || "",
              breed: petDoc.breed || "",
              petId: petDoc.petId || "",
              userId: currentUser.id || ""
            };
          });
          if (this.userPets.length > 0 && this.userPets[0].photo) {
            this.storageService.getUserImageUrl(this.userPets[0].userId, 'pets').subscribe((url) => {
              this.imageUrl = url;
            });
          }
          console.log("datos", pet)
        }
      } 
    });
  }
}
