const typingText = document.getElementById("typing-text");
const phrases = [
  "Web Developer (Front End and Back End)",
  "UI/UX Designer",
  "Java | React | Python",
  "I build beautiful websites",
  "Make your dreams come true",
  "Thanks for visiting"
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function typeEffect() {
  const phrase = phrases[currentPhrase];
  if (isDeleting) {
    currentChar--;
  } else {
    currentChar++;
  }

  typingText.textContent = phrase.substring(0, currentChar);

  if (!isDeleting && currentChar === phrase.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

function setupDarkModeToggle() {
  const toggleButton = document.getElementById("toggle-dark");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

function setupNavigation() {
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);
      showSection(id);
    });
  });
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("show");
  });

  document.getElementById(id).classList.add("show");
}

function hideSection(id) {
  document.getElementById(id).classList.remove("show");
}

function stayLoggedOut() {
  alert("Continuing without login.");
}

window.onload = () => {
  typeEffect();
  setupDarkModeToggle();
  setupNavigation();
  document.getElementById("profile-card").classList.add("show");
};
function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  document.getElementById('user-name').textContent = data.name;
  document.getElementById('user-pic').src = data.picture;
  document.getElementById('user-info').style.display = 'flex';

  document.getElementById('login-button').style.display = 'none';
}
