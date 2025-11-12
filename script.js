document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept-cookies');
  
    // Verifica si ya se ha dado el consentimiento
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      banner.classList.remove('hidden');
    }
  
    acceptBtn.addEventListener('click', function () {
      localStorage.setItem('cookie-consent', 'accepted');
      banner.classList.add('hidden');
    });
  });
  