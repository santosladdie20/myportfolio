// Contact form submit
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you for reaching out! I will get back to you soon.");
  this.reset();
});

// Mobile menu toggle
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}
function closeMenu() {
  document.getElementById("navMenu").classList.remove("show");
}
