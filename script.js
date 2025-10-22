// ===== script.js =====

// Theme toggle dan backsound dengan tombol play/pause bergambar

document.addEventListener('DOMContentLoaded', () => {
  // === Tombol Ganti Tema ===
  const themeButton = document.createElement('button');
  themeButton.classList.add('theme-toggle');
  themeButton.textContent = 'Ganti Tema';
  document.body.appendChild(themeButton);

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  // === Backsound ===
  const audio = document.createElement('audio');
  audio.src = '434414d67fa3.mp3'; // File backsound
  audio.loop = true;
  audio.volume = 0.4;
  audio.autoplay = true;
  document.body.appendChild(audio);

  // === Tombol Play/Pause ===
  const musicButton = document.createElement('img');
  musicButton.src = 'https://cdn-icons-png.flaticon.com/512/727/727240.png'; // Ikon musik
  musicButton.alt = 'Music';
  musicButton.classList.add('music-button');
  document.body.appendChild(musicButton);

  let isPlaying = true;

  musicButton.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      musicButton.src = 'https://cdn-icons-png.flaticon.com/512/64/64595.png'; // Ikon pause
    } else {
      audio.play();
      musicButton.src = 'https://cdn-icons-png.flaticon.com/512/727/727240.png'; // Ikon play
    }
    isPlaying = !isPlaying;
  });
});
