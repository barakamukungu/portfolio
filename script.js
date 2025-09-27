// Example JS for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
  });
});

// Hamburger toggle for mobile nav
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Modal logic
const modal = document.getElementById("contact-modal");
const btn = document.getElementById("get-started-btn");
const closeBtn = document.querySelector(".close");

btn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");
const btnText = submitBtn.querySelector(".btn-text");
const spinner = submitBtn.querySelector(".spinner");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // ✅ Check if reCAPTCHA is solved
  if (grecaptcha.getResponse().length === 0) {
    status.textContent = "⚠️ Please confirm you’re not a robot.";
    status.style.color = "#ffa726";
    return;
  }

  // Show spinner + disable button
  btnText.textContent = "Sending...";
  spinner.style.display = "inline-block";
  submitBtn.disabled = true;

  const data = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = "✅ Thanks! Your message has been sent.";
      status.style.color = "#00e676";
      form.reset();
    } else {
      status.textContent = "❌ Oops! Something went wrong. Please try again.";
      status.style.color = "#ff5252";
    }
  } catch (error) {
    status.textContent = "⚠️ Network error. Please try later.";
    status.style.color = "#ffa726";
  }

  // Reset button state
  btnText.textContent = "Send";
  spinner.style.display = "none";
  submitBtn.disabled = false;
});