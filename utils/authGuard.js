document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('index.html')) {
      const currentUser = localStorage.getItem('currentUser');
      if (!currentUser) {
        window.location.href = 'login.html';
      }
  
      const logoutButton = document.querySelector('.logout-button');
      if (logoutButton) {
        logoutButton.addEventListener('click', function() {
          localStorage.removeItem('currentUser');
          window.location.href = 'login.html';
        });
      }
    }
  });
  