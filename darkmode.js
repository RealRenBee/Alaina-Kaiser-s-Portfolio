const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

const storedDarkMode = getCookie('darkMode');

const darkModeOnImage = 'vecteezy_moon-icon-png_17059174_799.png';
const darkModeOffImage = 'vecteezy_sun-icon-clip-art_22189241_355.png';

/* 
Attributions

<a href="https://www.vecteezy.com/png/17059174-moon-icon-png">Moon icon png PNGs by Vecteezy</a>
<a href="https://www.vecteezy.com/png/22189241-sun-icon-clip-art">Sun icon clip art PNGs by Vecteezy</a>

*/


if (storedDarkMode === 'true') {
  body.classList.add('dark-mode');
  darkModeToggle.src = darkModeOnImage;
}

darkModeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    setCookie('darkMode', 'false', 365);
    darkModeToggle.src = darkModeOffImage;
  } else {
    body.classList.add('dark-mode');
    setCookie('darkMode', 'true', 365);
    darkModeToggle.src = darkModeOnImage;
  }
});

darkModeToggle.style.cursor = 'pointer'; // Set cursor to pointer

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return "";
}
