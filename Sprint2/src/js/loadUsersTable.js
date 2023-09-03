document.addEventListener('DOMContentLoaded', function() {
    // Verify if user is admin and user exist
    var currentUserEmail;
    try {
        const currentUserJson = localStorage.getItem('user_data');
        const currentUser = JSON.parse(currentUserJson);
        console.log(currentUser.admin)
        if (!currentUser.admin) {
            console.error('Error user is not admin:');
            window.location.href = '../html/permissionDenied.html';
        }
    currentUserEmail = currentUser.email;
    } catch (error) {
        console.error('Error to obtain the  User:', error);
        window.location.href = '../html/error.html';
    }

    fetch('../assets/json/users.json') 
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#table-administration tbody');
            const mobileTableBody = document.querySelector('#table-administration-mobile tbody');
            const users = data.users;

            // Filter the user logged
            const filteredUsers = users.filter(user => user.email !== currentUserEmail);

            filteredUsers.forEach(user => {
                const row = tableBody.insertRow();
                const mobileRow = mobileTableBody.insertRow();
                
                // Adding content and styles to the table phone and table pc
                const photoCell = row.insertCell(0);
                photoCell.innerHTML = `<img src="${user.photo}" alt="User Photo" width="50" style="border-radius: 50%; display: block; margin: 0 auto;">`;
                const mobileEmailCell = mobileRow.insertCell(0);
                mobileEmailCell.style.textAlign = 'center'; 
                const mobileOperationsCell = mobileRow.insertCell(1);
                mobileOperationsCell.style.textAlign = 'center';

                mobileEmailCell.textContent = user.email;
                
                mobileOperationsCell.innerHTML = `
                    <button class="operation-button" aria-label="edit" style="background-color: transparent; border: none;" 
                        data-email="${user.email}">
                        <i class="fas fa-edit operation-icon" style="color: #005eff;"></i>
                    </button>
                    <span class="mx-1"></span>
                    <button class="operation-button delete-button" aria-label="delete" data-toggle="modal" data-target="#confirmDeleteModal" data-username="${user.name}" style="background-color: transparent; border: none;">
                        <i class="fas fa-trash operation-icon" style="color: #cc2305;"></i>
                    </button>
                `;

                const nameCell = row.insertCell(1);
                nameCell.textContent = user.name;
                nameCell.style.textAlign = 'center'; 

                const surnameCell = row.insertCell(2);
                surnameCell.textContent = user.surname;
                surnameCell.style.textAlign = 'center';

                const emailCell = row.insertCell(3);
                emailCell.textContent = user.email;
                emailCell.style.textAlign = 'center';

                const operationsCell = row.insertCell(4);
                operationsCell.innerHTML = `
                    <button class="operation-button" aria-label="edit" style="background-color: transparent; border: none;" 
                        data-email="${user.email}">
                        <i class="fas fa-edit operation-icon" style="color: #005eff;"></i>
                    </button>
                    <span class="mx-1"></span>
                    <button class="operation-button delete-button" aria-label="delete" data-toggle="modal" data-target="#confirmDeleteModal" data-username="${user.name}" style="background-color: transparent; border: none;">
                        <i class="fas fa-trash operation-icon" style="color: #cc2305;"></i>
                    </button>
                `;
                operationsCell.style.textAlign = 'center';
            });

            // Event delete button
            const deleteButtons = document.querySelectorAll('.delete-button');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const username = button.getAttribute('data-username');
                    const deleteUserNameElement = document.getElementById('deleteUserName');
                    deleteUserNameElement.textContent = username;
                    // Open modal to verify the user to delete
                    const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
                    modal.show();
                });
            });
            
            const editButtons = document.querySelectorAll('.operation-button[aria-label="edit"]');
            editButtons.forEach(button => {
                button.addEventListener('click', function(event) {
                    const userEmail = event.currentTarget.getAttribute('data-email');
                    const selectedUser = users.find(user => user.email === userEmail);
                    if (selectedUser) {
                        localStorage.setItem('user_selected_by_admin', JSON.stringify(selectedUser));
                        window.location.href = '../html/editProfile.html';
                    } else {
                        console.error('User not found');
                    }
                });
            });
            const confirmDeleteButton = document.getElementById('confirmDeleteButton');
            confirmDeleteButton.addEventListener('click', function() {
                const deleteUserNameElement = document.getElementById('deleteUserName');
                const usernameToDelete = deleteUserNameElement.textContent;
                const rows = document.querySelectorAll('#table-administration tbody tr');
                let rowToDelete = null;
                var emailDelete = null;

                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells[1].textContent === usernameToDelete) {
                        rowToDelete = row;
                        emailDelete = cells[3].textContent;
                    }
                });
                if (rowToDelete) {
                    rowToDelete.remove();
                    const backdrops = document.querySelectorAll('.modal-backdrop');
                    const rowsMobile = document.querySelectorAll('#table-administration-mobile tbody tr');
                    let rowToDeleteMobile = null;
                    
                    rowsMobile.forEach(row => {
                        const cells = row.querySelectorAll('td');
                        console.log(emailDelete)
                        if (cells[0].textContent === emailDelete) {
                            rowToDeleteMobile = row;
                        }
                    });

                    if (rowToDeleteMobile) {
                        rowToDeleteMobile.remove();
                    }

                    backdrops.forEach(backdrop => {
                        backdrop.remove();
                    });
                    // Hidden the modal
                    const modal = document.getElementById('confirmDeleteModal');
                    modal.classList.remove('show');
                }
            });

            const closeButton = document.querySelector('.modal-header .close');
            const cancelButton = document.querySelector('.modal-footer button[data-dismiss="modal"]');

            const closeModal = function() {
                const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
                modal.hide();
            };

            closeButton.addEventListener('click', closeModal);
            cancelButton.addEventListener('click', closeModal);

            const searchInput = document.getElementById('search-input');
            // To Search the user by email
            searchInput.addEventListener('input', function() {
                const searchText = searchInput.value.toLowerCase(); 

                const rows = document.querySelectorAll('#table-administration tbody tr');
                // Modify front table
                rows.forEach(row => {
                    const nameCell = row.querySelector('td:nth-child(2)'); 
                    const emailCell = row.querySelector('td:nth-child(4)');
                    if (nameCell && emailCell) {
                        const name = nameCell.textContent.toLowerCase(); 
                        const email = emailCell.textContent.toLowerCase(); 
                        if (name.includes(searchText) || email.includes(searchText)) {
                            row.style.display = ''; 
                        } else {
                            row.style.display = 'none';
                        }
                    }
                });
            });
        })
        .catch(error => {
            // Exception  JSON
            console.error('Error loading JSON:', error);
            window.location.href = '../html/error.html';
        });
});
