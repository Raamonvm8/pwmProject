document.addEventListener('DOMContentLoaded', function() {
    // Simula el usuario actualmente registrado (reemplaza con tus datos de usuario reales)
    const currentUserJson = localStorage.getItem('user_data');
    const currentUser = JSON.parse(currentUserJson);
    const currentUserEmail = currentUser.email;

    fetch('../assets/json/users.json') // Ajusta la ruta del archivo JSON
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#table-administration tbody');
            const mobileTableBody = document.querySelector('#table-administration-mobile tbody');
            const users = data.users;

            // Filtra al usuario actual
            const filteredUsers = users.filter(user => user.email !== currentUserEmail);

            // Itera sobre los datos filtrados y llena la tabla
            filteredUsers.forEach(user => {
                const row = tableBody.insertRow();
                const mobileRow = mobileTableBody.insertRow();
                

                const photoCell = row.insertCell(0);
                // Estilo para centrar la imagen horizontalmente
                photoCell.innerHTML = `<img src="${user.photo}" alt="User Photo" width="50" style="border-radius: 50%; display: block; margin: 0 auto;">`;

                const mobileEmailCell = mobileRow.insertCell(0);
                mobileEmailCell.style.textAlign = 'center'; // Centra el contenido
                const mobileOperationsCell = mobileRow.insertCell(1);
                mobileOperationsCell.style.textAlign = 'center'; // Centra el contenido

                mobileEmailCell.textContent = user.email;
                mobileOperationsCell.innerHTML = `
                    <button class="operation-button" aria-label="edit" style="background-color: transparent; border: none;">
                        <i class="fas fa-edit operation-icon" style="color: #005eff;"></i>
                    </button>
                    <span class="mx-1"></span>
                    <button class="operation-button delete-button" aria-label="delete" data-toggle="modal" data-target="#confirmDeleteModal" data-username="${user.name}" style="background-color: transparent; border: none;">
                        <i class="fas fa-trash operation-icon" style="color: #cc2305;"></i>
                    </button>
                `;

                const nameCell = row.insertCell(1);
                nameCell.textContent = user.name;
                nameCell.style.textAlign = 'center'; // Centra el contenido

                const surnameCell = row.insertCell(2);
                surnameCell.textContent = user.surname;
                surnameCell.style.textAlign = 'center'; // Centra el contenido

                const emailCell = row.insertCell(3);
                emailCell.textContent = user.email;
                emailCell.style.textAlign = 'center'; // Centra el contenido


                const operationsCell = row.insertCell(4);
                operationsCell.innerHTML = `
                    <button class="operation-button" aria-label="edit" style="background-color: transparent; border: none;">
                        <i class="fas fa-edit operation-icon" style="color: #005eff;"></i>
                    </button>
                    <span class="mx-1"></span>
                    <button class="operation-button delete-button" aria-label="delete" data-toggle="modal" data-target="#confirmDeleteModal" data-username="${user.name}" style="background-color: transparent; border: none;">
                        <i class="fas fa-trash operation-icon" style="color: #cc2305;"></i>
                    </button>
                `;
                operationsCell.style.textAlign = 'center'; // Centra el contenido
            });

            // Agrega un evento clic a los botones de eliminar después de llenar la tabla
            const deleteButtons = document.querySelectorAll('.delete-button');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const username = button.getAttribute('data-username');
                    const deleteUserNameElement = document.getElementById('deleteUserName');
                    deleteUserNameElement.textContent = username;
                    // Abre el modal manualmente
                    const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
                    modal.show();
                });
            });

            // Agrega un evento clic al botón de confirmar eliminación después de llenar la tabla
            const confirmDeleteButton = document.getElementById('confirmDeleteButton');
            confirmDeleteButton.addEventListener('click', function() {
                // Obtén el nombre de usuario que se va a eliminar
                const deleteUserNameElement = document.getElementById('deleteUserName');
                const usernameToDelete = deleteUserNameElement.textContent;

                // Encuentra la fila que contiene el nombre de usuario
                const rows = document.querySelectorAll('#table-administration tbody tr');
                let rowToDelete = null;
                var emailDelete = null;

                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells[1].textContent === usernameToDelete) { // Suponiendo que el nombre de usuario esté en la segunda celda
                        rowToDelete = row;
                        emailDelete = cells[3].textContent;
                    }
                });
                if (rowToDelete) {
                    // Elimina la fila de la tabla
                    rowToDelete.remove();
                    const backdrops = document.querySelectorAll('.modal-backdrop');
                    const rowsMobile = document.querySelectorAll('#table-administration-mobile tbody tr');
                    let rowToDeleteMobile = null;
                    
                    rowsMobile.forEach(row => {
                        const cells = row.querySelectorAll('td');
                        console.log(emailDelete)
                        if (cells[0].textContent === emailDelete) { // Suponiendo que el nombre de usuario esté en la primera celda en la tabla móvil
                            rowToDeleteMobile = row;
                        }
                    });

                    if (rowToDeleteMobile) {
                        // Elimina la fila de la tabla móvil
                        rowToDeleteMobile.remove();
                    }

                    backdrops.forEach(backdrop => {
                        backdrop.remove();
                    });

                    // También puedes eliminar la clase 'show' del modal
                    const modal = document.getElementById('confirmDeleteModal');
                    modal.classList.remove('show');
                }
            });

            // Agrega un evento clic para cerrar el modal cuando haces clic en la "X" o "Cancelar"
            const closeButton = document.querySelector('.modal-header .close');
            const cancelButton = document.querySelector('.modal-footer button[data-dismiss="modal"]');

            const closeModal = function() {
                const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
                modal.hide();
            };

            closeButton.addEventListener('click', closeModal);
            cancelButton.addEventListener('click', closeModal);

            // Obtiene el campo de entrada de búsqueda
            const searchInput = document.getElementById('search-input');

// ...

// Agrega un evento input para detectar cambios en el campo de entrada
searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase(); // Obtén el texto de búsqueda en minúsculas

    // Obtén todas las filas de la tabla
    const rows = document.querySelectorAll('#table-administration tbody tr');

    // Itera sobre las filas y muestra/oculta según el texto de búsqueda
    rows.forEach(row => {
        const nameCell = row.querySelector('td:nth-child(2)'); // La segunda celda contiene el nombre
        const emailCell = row.querySelector('td:nth-child(4)'); // La cuarta celda contiene el correo electrónico
        if (nameCell && emailCell) {
            const name = nameCell.textContent.toLowerCase(); // Obtén el nombre en minúsculas
            const email = emailCell.textContent.toLowerCase(); // Obtén el correo electrónico en minúsculas
            if (name.includes(searchText) || email.includes(searchText)) {
                row.style.display = ''; // Muestra la fila si coincide
            } else {
                row.style.display = 'none'; // Oculta la fila si no coincide
            }
        }
    });
});
// ...


        })

        .catch(error => {
            console.error('Error cargando o analizando el archivo JSON:', error);
            // Maneja el error según sea necesario
        });
});