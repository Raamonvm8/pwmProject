document.addEventListener('DOMContentLoaded', function() {
    const userDataJSON = localStorage.getItem('user_data');
    
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        
        const petIdToEdit = "pet2"; // Asegúrate de obtener este valor correctamente
        console.log(userData);
        
        const userPets = petsData.pets.filter(pet => pet.idOwner === userData.name);
        
        const petToEdit = userPets.find(pet => pet.id === petIdToEdit);
        
        const nameInput = document.getElementById('lname');
        const weightInput = document.getElementById('lweight');
        const typeInput = document.getElementById('ltypepet');
        const breedInput = document.getElementById('lbreed');
        
        if (petToEdit) {
            nameInput.value = petToEdit.name;
            weightInput.value = petToEdit.weight;
            typeInput.value = petToEdit.typeOfPet;
            breedInput.value = petToEdit.breed;
        } else {
            console.log('Pet not found for editing');
        }
    } else {
        console.log('User data not found');
    }
});
