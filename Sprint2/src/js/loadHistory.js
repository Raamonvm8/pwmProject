document.addEventListener('DOMContentLoaded', function () {
    // Verify if user is logged
    var userId;
    try {
        const currentUserJson = localStorage.getItem('user_data');
        const currentUser = JSON.parse(currentUserJson);
        userId = currentUser.id;
    } catch (error) {
        console.error('Error to obtain the  User:', error);
        window.location.href = '../html/error.html';
    }

    // Load JSON Reservations
    fetch('../assets/json/reservations.json')
      .then(response => response.json())
      .then(data => {
        const userReservations = data.reservations.filter(reservation => reservation.idOwner === userId);
        console.log(userId)
        const currentDate = new Date();

        // Filter reservations in pending and history
        const pendingReservations = userReservations.filter(reservation => new Date(reservation.checkOut) >= currentDate);
        const pastReservations = userReservations.filter(reservation => new Date(reservation.checkOut) < currentDate);

        const leftSection = document.querySelector('.left-section .white-box');
        const rightSection = document.querySelector('.right-section .white-box');

        function fillReservationSection(section, reservations) {
          section.innerHTML = '';

          if (reservations.length === 0) {
            section.innerHTML = '<p>You have no reservations in this section.</p>';
            return;
          }

          reservations.forEach(reservation => {
            const reservationInfo = document.createElement('div');
            reservationInfo.classList.add('white-box');
            reservationInfo.classList.add('bg-white');
            reservationInfo.innerHTML = `
              <strong>${reservation.daycareName}</strong><br>
              <strong>Arrival:</strong> ${reservation.checkIn}<br>
              <strong>Departure:</strong> ${reservation.checkOut}<br>
              <strong>Additional Options:</strong><br>
              ${reservation.additions.map(addition => " - " + addition.description).join('<br>')}
              <br><strong>Price:</strong> ${reservation.totalPrice}
            `;

            section.appendChild(reservationInfo);
          });
        }
        fillReservationSection(leftSection, pendingReservations);
        fillReservationSection(rightSection, pastReservations); 
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
        window.location.href = '../html/error.html';        
      });
});
