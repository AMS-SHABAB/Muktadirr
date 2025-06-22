// News Banner (Sample Data, rotating)
const newsItems = [
  { title: "🚀 New UI Tools Released!", date: "2025-06-21", location: "Berlin", time: "09:00" },
  { title: "📢 Glassmorphic Design Trends in 2025", date: "2025-06-20", location: "San Francisco", time: "20:00" },
  { title: "🎉 Early Bird Booking for Demo Now Open!", date: "2025-06-19", location: "Online", time: "14:30" },
  { title: "🔔 Newsletter Issue #3 Sent Out!", date: "2025-06-18", location: "London", time: "17:45" }
];
let currentNews = 0;
function updateNewsBanner() {
  const news = newsItems[currentNews];
  document.getElementById('newsContent').textContent =
    `[${news.date} • ${news.location} • ${news.time}] ${news.title}`;
  currentNews = (currentNews + 1) % newsItems.length;
}
updateNewsBanner();
setInterval(updateNewsBanner, 7000);

document.getElementById('newsCloseBtn').onclick = function() {
  document.getElementById('newsBanner').style.display = 'none';
};

// Hamburger Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
let mobileNavOpen = false;
hamburgerBtn.onclick = function() {
  mobileNavOpen = !mobileNavOpen;
  hamburgerBtn.classList.toggle('active', mobileNavOpen);
  mobileNav.classList.toggle('open', mobileNavOpen);
};
mobileNav.querySelectorAll('a').forEach(link => {
  link.onclick = () => {
    mobileNav.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    mobileNavOpen = false;
  };
});
document.addEventListener('click', function(e) {
  if (mobileNavOpen && !mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    mobileNav.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    mobileNavOpen = false;
  }
});

// Booking Form
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');
if (bookingForm) {
  bookingForm.onsubmit = function(e) {
    e.preventDefault();
    formSuccess.style.display = "block";
    setTimeout(() => formSuccess.style.display = "none", 4000);
    bookingForm.reset();
  }
}

// Cookie Popup
const cookiePopup = document.getElementById('cookiePopup');
if (!localStorage.getItem('cookieAccepted')) {
  cookiePopup.style.display = 'flex';
} else {
  cookiePopup.style.display = 'none';
}
document.getElementById('cookieAcceptBtn').onclick = function() {
  localStorage.setItem('cookieAccepted', 'yes');
  cookiePopup.classList.add('hide');
  setTimeout(() => { cookiePopup.style.display = 'none'; }, 400);
};

// Newsletter Popup (shows after 7 seconds, then once per session)
const newsletterPopup = document.getElementById('newsletterPopup');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterSuccess = document.getElementById('newsletterSuccess');
function showNewsletterPopup() {
  if (!sessionStorage.getItem('newsletterShown')) {
    newsletterPopup.style.display = 'flex';
    sessionStorage.setItem('newsletterShown', 'yes');
  }
}
setTimeout(showNewsletterPopup, 7000);

document.getElementById('newsletterCloseBtn').onclick = function() {
  newsletterPopup.classList.add('hide');
  setTimeout(() => { newsletterPopup.style.display = 'none'; }, 350);
};
newsletterForm.onsubmit = function(e) {
  e.preventDefault();
  newsletterSuccess.style.display = "block";
  setTimeout(() => {
    newsletterPopup.classList.add('hide');
    setTimeout(() => { newsletterPopup.style.display = 'none'; newsletterSuccess.style.display = "none"; }, 600);
  }, 2000);
  newsletterForm.reset();
};
