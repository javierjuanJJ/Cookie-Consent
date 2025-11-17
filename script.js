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





function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
}

document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-consent');
  const acceptBtn = document.getElementById('accept-cookies');

  if (!getCookie('cookie-consent')) {
    banner.classList.remove('hidden');
  }

  acceptBtn.addEventListener('click', function () {
    setCookie('cookie-consent', 'accepted', 365);
    banner.classList.add('hidden');
  });
});
