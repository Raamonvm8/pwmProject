document.addEventListener('DOMContentLoaded', function() {

    fetch('../assets/json/reservations.json') // Ajusta la ruta del archivo JSON de reservas
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#table-administration tbody');
            const mobileTableBody = document.querySelector('#table-administration-mobile tbody');
            const reservations = data.reservations;

            // Filtra las reservas que no pertenecen al usuario actual
            const filteredReservations = reservations;

            // Itera sobre las reservas y llena la tabla
            filteredReservations.forEach(reservation => {
                const row = tableBody.insertRow();
                const mobileRow = mobileTableBody.insertRow();

                const mobileIdCell = mobileRow.insertCell(0);
                mobileIdCell.style.textAlign = 'center'; // Centra el contenido
                mobileIdCell.style.display = 'none'; // Centra el contenido

                
                const mobileEmailCell = mobileRow.insertCell(1);
                mobileEmailCell.style.textAlign = 'center'; // Centra el contenido
                
                const mobilDayCareCell = mobileRow.insertCell(2);
                mobilDayCareCell.style.textAlign = 'center'; // Centra el contenido

                const mobileOperationsCell = mobileRow.insertCell(3);
                mobileOperationsCell.style.textAlign = 'center'; // Centra el contenido

                mobilDayCareCell.textContent = reservation.daycareName;
                mobileEmailCell.textContent = reservation.ownerName;
                mobileIdCell.textContent = reservation.id;

                mobileOperationsCell.innerHTML = `
                    <button class="operation-button" aria-label="edit" style="background-color: transparent; border: none;">
                        <i class="fas fa-edit operation-icon" style="color: #005eff;"></i>
                    </button>
                    <span class="mx-1"></span>
                    <button class="operation-button delete-button" aria-label="delete" data-toggle="modal" data-target="#confirmDeleteModal" data-username="${reservation.ownerName}" data-id="${reservation.id}" style="background-color: transparent; border: none;">
                        <i class="fas fa-trash operation-icon" style="color: #cc2305;"></i>
                    </button>
                `;

                const idReservationCell = row.insertCell(0);
                idReservationCell.textContent = reservation.id;
                idReservationCell.style.textAlign = 'center'; // Centra el contenido
                idReservationCell.style.display = 'none'; // Centra el contenido

                const userNameCell = row.insertCell(1);
                userNameCell.textContent = reservation.ownerName;
                userNameCell.style.textAlign = 'center'; // Centra el contenido

                const daycareNameCell = row.insertCell(2);
                daycareNameCell.textContent = reservation.daycareName;
                daycareNameCell.style.textAlign = 'center'; // Centra el contenido

                const checkInCell = row.insertCell(3);
                checkInCell.textContent = reservation.checkIn;
                checkInCell.style.textAlign = 'center'; // Centra el contenido

                const checkOutCell = row.insertCell(4);
                checkOutCell.textContent = reservation.checkOut;
                checkOutCell.style.textAlign = 'center'; // Centra el contenido

                const operationsCell = row.insertCell(5);
                operationsCell.innerHTML = `
                    <button class="operation-button" aria-label="edit" style="background-color: transparent; border: none;">
                        <i class="fas fa-edit operation-icon" style="color: #005eff;"></i>
                    </button>
                    <span class="mx-1"></span>
                    <button class="operation-button delete-button" aria-label="delete" data-toggle="modal" data-target="#confirmDeleteModal" data-username="${reservation.ownerName}" data-id="${reservation.id}" style="background-color: transparent; border: none;">
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

                    const idEvent = button.getAttribute('data-id');
                    const deleteiDNameElement = document.getElementById('deleteIdEvent');
                    deleteiDNameElement.textContent = idEvent; 
                    deleteiDNameElement.style.display ="none";
                    // Abre el modal manualmente
                    const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
                    modal.show();
                });
            });
            console.log("..--------------------------------")
            // Agrega un evento clic al botón de confirmar eliminación después de llenar la tabla
            const confirmDeleteButton = document.getElementById('confirmDeleteButton');
            confirmDeleteButton.addEventListener('click', function() {
                // Obtén el nombre de usuario que se va a eliminar
                const deletIdElement = document.getElementById('deleteIdEvent');
                const idToDelete = deletIdElement.textContent;

                 // Encuentra la fila que contiene el nombre de usuario
                 const rows = document.querySelectorAll('#table-administration tbody tr');
                 let rowToDelete = null;
                 var idDelete = null;
 
                 rows.forEach(row => {
                     const cells = row.querySelectorAll('td');
                     console.log("aaa")
                     console.log(cells[0].textContent)
                     if (cells[0].textContent === idToDelete) { // Suponiendo que el nombre de usuario esté en la segunda celda
                         rowToDelete = row;
                         idDelete = cells[0].textContent; // Suponiendo que el correo electrónico esté en la primera celda
                     }
                 });
 
                 if (rowToDelete) {
                     // Elimina la fila de la tabla
                     rowToDelete.remove();
 
                     // Elimina la reserva de tus datos de usuario (esto debería hacerse en tu lógica de datos)
                     // Aquí asumimos que tienes una función `eliminarReserva` que toma el correo electrónico como argumento
                     //eliminarReserva(emailDelete);
 
                     const backdrops = document.querySelectorAll('.modal-backdrop');
                     const rowsMobile = document.querySelectorAll('#table-administration-mobile tbody tr');
                     let rowToDeleteMobile = null;
 
                     rowsMobile.forEach(row => {
                         const cells = row.querySelectorAll('td');
                         if (cells[0].textContent === idDelete) { // Suponiendo que el correo electrónico esté en la primera celda en la tabla móvil
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
         })
         .catch(error => {
             console.error('Error cargando o analizando el archivo JSON:', error);
             // Maneja el error según sea necesario
         });
 });