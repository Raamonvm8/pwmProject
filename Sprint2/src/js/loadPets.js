    const petsData = {
        "pets": [
        {
            "id": "Pet1",
            "idOwner": "Ramón",
            "name": "Mister",
            "weight": "6",
            "photo": "../assets/images/mypets/foto_perro_Ramon.png",
            "typeOfPet": "Dog",
            "breed": "Yorkshire"
        },
        {
            "id": "pet2",
            "idOwner": "Marta",
            "name": "Coco",
            "weight": "10",
            "photo": "../assets/images/mypets/foto_perro_Marta.jpg",
            "typeOfPet": "Dog",
            "breed": "Siamese"
        },
        {
            "id": "pet3",
            "idOwner": "owner3",
            "name": "Nemo",
            "weight": "0.5",
            "photo": "nemo.jpg",
            "typeOfPet": "Fish",
            "breed": "Clownfish"
        }
        ]
    };

    document.addEventListener('DOMContentLoaded', function() {
        // Obtener el usuario actual del localStorage
        const userDataJSON = localStorage.getItem('user_data');
        if (userDataJSON) {
            const userData = JSON.parse(userDataJSON);
            
            // Verificar que userData tiene una propiedad 'name' antes de usarla
            if (userData && userData.name) {
                // Obtener el contenedor de mascotas
                const petsContainer = document.getElementById('pets-container');
    
                // Filtrar las mascotas del usuario actual
                const userPets = petsData.pets.filter(pet => pet.idOwner === userData.name);
    
                // Generar el HTML de las mascotas
                userPets.forEach(pet => {
                    const petDiv = document.createElement('div');
                    petDiv.innerHTML = `
                        <div class="col">
                            <div class="photos-pet">
                                <a href="editPet.html"><img src="${pet.photo}" alt="foto-animal" class="rounded-circle"></a>
                                <h2 class="animal-name">${pet.name}</h2>
                            </div>
                        </div>
                    `;
                    petsContainer.appendChild(petDiv);
                });
            }
        }
    });
    