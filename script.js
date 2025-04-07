// script.js

// Typing effect
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

window.onload = () => {
  typeEffect();
  setupNavigation();
  setupDarkModeToggle();
};

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
  const section = document.getElementById(id);
  section.style.display = "none";
}

function stayLoggedOut() {
  alert("Continuing without login");
}

function handleCredentialResponse(response) {
  console.log("Google login success:", response);
}

function closeModal() {
  document.getElementById("login-modal").classList.add("hidden");
}

function setupDarkModeToggle() {
  const toggleButton = document.getElementById("toggle-dark");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Update contact info dynamically
const contactInfo = document.getElementById("contact-info");
if (contactInfo) {
  contactInfo.innerHTML = `
    <div class="social-icons aesthetic-icons">
      <a href="mailto:saravanancuer@gmail.com" target="_blank" class="icon-link">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" title="Email">
      </a>
      <a href="https://instagram.com/saravanan_official" target="_blank" class="icon-link">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg" alt="Instagram" title="Instagram">
      </a>
      <a href="#" title="LinkedIn" class="icon-link">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn">
      </a>
      <a href="tel:6381568894" title="Call" class="icon-link">
        <img src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="Phone">
      </a>
    </div>
    <p>
      📧 Mail: <a href="mailto:saravanancuer@gmail.com">saravanancuer@gmail.com</a><br>
      📸 Instagram: <a href="https://instagram.com/saravanan_official" target="_blank">@saravanan_official</a><br>
      🔗 LinkedIn: SARAVANAN B<br>
      📞 Contact: <a href="tel:6381568894">6381568894</a>
    </p>
  `;
}

// Responsive mobile menu toggle (optional enhancement)
const navToggle = document.getElementById("nav-toggle");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
  });
}
