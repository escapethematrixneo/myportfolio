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
  typingText.textContent = phrase.substring(0, currentChar);
  if (!isDeleting && currentChar < phrase.length) {
    currentChar++;
  } else if (isDeleting && currentChar > 0) {
    currentChar--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 120);
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
    section.style.display = "none";
  });
  const selectedSection = document.getElementById(id);
  selectedSection.style.display = "block";
  selectedSection.scrollIntoView({ behavior: 'smooth' });
}

function hideSection(id) {
  document.getElementById(id).style.display = "none";
}

function stayLoggedOut() {
  alert("Continuing without login");
}

function setupDarkModeToggle() {
  const toggleButton = document.getElementById("toggle-dark");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

window.onload = () => {
  typeEffect();
  setupNavigation();
  setupDarkModeToggle();

  // Set dynamic contact info
  const contactInfo = document.getElementById("contact-info");
  if (contactInfo) {
    contactInfo.innerHTML = `
      <p>
        📧 Mail: <a href="mailto:saravanancuer@gmail.com">saravanancuer@gmail.com</a><br>
        📸 Instagram: <a href="https://instagram.com/saravanan_official" target="_blank">@saravanan_official</a><br>
        🔗 LinkedIn: SARAVANAN B<br>
        📞 Contact: <a href="tel:6381568894">6381568894</a>
      </p>
    `;
  }
};
