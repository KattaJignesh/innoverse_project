/*var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}*/
/*let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
*/
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function moveSlide(step) {
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

// Auto Slide Change every 5 seconds
setInterval(() => moveSlide(1), 5000);

document.addEventListener("DOMContentLoaded", function () {
  function resizeImages() {
      const images = document.querySelectorAll(".card img");

      images.forEach(img => {
          if (window.innerWidth < 768) {
              img.style.height = "100px";  // Smaller height for mobile
          } else {
              img.style.height = "120px";  // Default height for larger screens
          }
      });
  }

  resizeImages();
  window.addEventListener("resize", resizeImages);
});

// Sample Data
const newsData = {
  ai: [
      { title: "AI Breakthrough in Healthcare", summary: "AI is revolutionizing diagnostics with unprecedented accuracy.", image: "https://rksdesign.com/wp-content/uploads/2024/05/The-Future-of-AI-in-Healthcare-Product-Design-Cover.png" },
      { title: "Autonomous Vehicles Update", summary: "Self-driving cars are closer than ever to becoming mainstream.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvwZjG7P7tAYfslt8A-Ke79coyCH84dTpNg&s" },
  ],
  biotech: [
      { title: "Gene Editing Cures Rare Disease", summary: "CRISPR technology makes significant advancements.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvy-WJiPbLwdQcUBTMq0l9BDDpKu8z-IBUA&s" },
      { title: "Biotech Startup Raises $50M", summary: "Funding rounds surge in the biotech sector.", image: "https://www.biotecnika.org/wp-content/uploads/2023/10/Navy-Yellow-Modern-Startup-Business-Book-Cover.jpg" },
  ],
  space: [
      { title: "Mars Colonization Plans", summary: "SpaceX outlines ambitious timeline for human settlement.", image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-11/19/full/1731999951-8889.jpg" },
      { title: "Satellite Internet Expansion", summary: "Global satellite internet networks are growing rapidly.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7JFutFNp-tD30dpwDFGC8W2cdYN16zum4Q&s" },
  ],
  fintech: [
      { title: "Blockchain Adoption Increases", summary: "Cryptocurrencies and decentralized finance are reshaping markets.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFRWK4ndIcBzIUm9Rx31RCVArNi8_aJfP3A&s" },
      { title: "Fintech App Gains Traction", summary: "A new app simplifies budgeting and saving for users.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqzUY2TSiH95wTU3tKSOAnFQqQk8eLTbkaA&s" },
  ],
};



// DOM Elements
const tabs = document.querySelectorAll(".tab");
const newsFeed = document.getElementById("news-feed");

// Load News Articles
function loadNews(category) {
  const articles = newsData[category];
  newsFeed.innerHTML = ""; // Clear existing articles

  articles.forEach(article => {
      const newsCard = `
          <div class="news-card">
              <img src="${article.image}" alt="${article.title}">
              <div class="news-card-content">
                  <h4>${article.title}</h4>
                  <p>${article.summary}</p>
              </div>
          </div>
      `;
      newsFeed.innerHTML += newsCard;
  });
}

// Tab Click Event
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active"); // Add active class to clicked tab

      // Load articles for selected category
      const category = tab.dataset.category;
      loadNews(category);
  });
});

// Initial Load
loadNews("ai"); // Load AI news by default


// JavaScript for Infographic Interactivity
document.getElementById("infographic-img").addEventListener("click", () => {
  alert("Explore detailed insights into funding trends and investment patterns!");
});

function returnToHomepage() {
  window.location.href = 'main.html'; // Redirect to the homepage. Adjust the URL if needed.
}

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const showRegisterLink = document.getElementById('showRegister');
  const showLoginLink = document.getElementById('showLogin');
  const loginBox = document.querySelector('.login-box');
  const registerBox = document.querySelector('.register-box');
  const passwordField = document.getElementById('regPassword');

  const length = document.getElementById('length');
  const uppercase = document.getElementById('uppercase');
  const lowercase = document.getElementById('lowercase');
  const number = document.getElementById('number');
  const special = document.getElementById('special');

  showRegisterLink.addEventListener('click', function(e) {
      e.preventDefault();
      loginBox.classList.add('hidden');
      registerBox.classList.remove('hidden');
  });

  showLoginLink.addEventListener('click', function(e) {
      e.preventDefault();
      registerBox.classList.add('hidden');
      loginBox.classList.remove('hidden');
  });

  passwordField.addEventListener('input', function() {
      const password = passwordField.value;
      length.className = password.length >= 8 ? 'valid' : 'invalid';
      uppercase.className = /[A-Z]/.test(password) ? 'valid' : 'invalid';
      lowercase.className = /[a-z]/.test(password) ? 'valid' : 'invalid';
      number.className = /\d/.test(password) ? 'valid' : 'invalid';
      special.className = /[@#$%^&+=!]/.test(password) ? 'valid' : 'invalid';
  });

  registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value.trim();

      if (document.querySelectorAll('.invalid').length > 0) {
          alert('Password does not meet the requirements.');
          return;
      }

      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      if (users.find(u => u.email === email)) {
          alert('Email already registered');
          return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      window.location.href = 'index.html';
  });
});

